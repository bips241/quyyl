"use client";

import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EditForm } from "../../../components/edit-entry-form";
import DeleteConfirmationDialog from "@/components/Delete";
import { Delete } from "../actions";

export function DataTable({ columns, data }) {
  const [editingRow, setEditingRow] = useState(null); // Track the row being edited
  const [deletingRow, setDeletingRow] = useState(null); // Track the row being deleted

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Format date to show day and date only
  const formatDate = (date) =>
    new Date(date).toLocaleDateString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const handleDelete = (row) => {
    setDeletingRow(row.original); // Set the selected row data for deletion
  };

  const handleEdit = (row) => {
    setEditingRow(row.original); // Set the selected row data for editing
  };

  const handleCloseEdit = () => {
    setEditingRow(null); // Clear the editing row to exit edit mode
  };

  const handleCloseDelete = () => {
    setDeletingRow(null); // Clear the deleting row to exit delete mode
  };

  const handleConfirmDelete = async() => {
    Delete(deletingRow);
    
    setDeletingRow(null); // Clear the deleting row after deletion
  };

  return (
    <div className="rounded-md border">
      {editingRow ? ( // Render the EditForm when a row is being edited
        <EditForm
          isOpen={!!editingRow}
          onClose={handleCloseEdit}
          rowData={editingRow}
        />
      ) : (
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="group hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {cell.column.columnDef.id === "date"
                        ? formatDate(cell.getValue())
                        : flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                    </TableCell>
                  ))}
                  {/* Edit and Delete Buttons */}
                  <TableCell className="flex gap-2">
                    <button
                      onClick={() => handleEdit(row)}
                      className="p-1 text-blue-500 hover:text-blue-700"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(row)}
                      className="p-1 text-red-500 hover:text-red-700"
                    >
                      <Trash size={16} />
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
      {/* Render DeleteConfirmationDialog */}
      {deletingRow && (
        <DeleteConfirmationDialog
          isOpen={!!deletingRow}
          onClose={handleCloseDelete}
          onConfirm={handleConfirmDelete}
          customMessage={`Are you sure you want to delete the row with ID: ${deletingRow.id}?`}
        />
      )}
    </div>
  );
}
