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
export function DataTable({ columns, data }) {
  const [editingRow, setEditingRow] = useState(null); // Track the row being edited

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
  const handleDelete = (row) => {};

  const handleEdit = (row) => {
    setEditingRow(row.original); // Set the selected row data for editing
  };

  const handleClose = () => {
    setEditingRow(null); // Clear the editing row to exit edit mode
  };

  return (
    <div className="rounded-md border">
      {editingRow ? ( // Render the EditForm when a row is being edited
        <EditForm
          isOpen={!!editingRow}
          onClose={handleClose}
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
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="relative group hover:backdrop-blur-md"
                >
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
                  <TableCell className="absolute right-2 flex gap-2 opacity-0 group-hover:opacity-100 z-10">
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
                  {/* Apply blur effect */}
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
    </div>
  );
}
