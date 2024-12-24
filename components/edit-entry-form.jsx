"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export function EditForm({ isOpen, onClose, rowData }) {
  console.log("Row Data:", rowData);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      studentName: "",
      status: "",
      courses: [],
      classStandard: "",
      joinDate: "",
      lastActive: "",
      cohort: "",
    },
  });

  // Pre-fill form values with row data when dialog opens
  useEffect(() => {
    if (rowData) {
      Object.entries(rowData).forEach(([key, value]) => {
        if (key === "joinDate" || key === "lastActive") {
          setValue(key, new Date(value).toISOString().split("T")[0]);
        } else if (key === "courses") {
          setValue(key, value.split(", "));
        } else if (key === "name") {
          setValue("studentName", value);
        } else {
          setValue(key, value);
        }
      });
    }
  }, [rowData, setValue]);

  const onSubmit = (data) => {
    console.log("Updated Data:", data); // Log the updated data
    onClose(); // Close the dialog
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent>
          <DialogHeader className="top-3">
            <DialogTitle className="flex justify-center">Edit Row</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Student Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Student Name
              </label>
              <Input
                placeholder="Enter Student Name"
                {...register("studentName", { required: "Student name is required" })}
                className={errors.studentName ? "border-red-500" : ""}
              />
              {errors.studentName && (
                <p className="text-red-500 text-sm">{errors.studentName.message}</p>
              )}
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <Select
                onValueChange={(value) => setValue("status", value)}
                defaultValue={rowData?.status || ""}
              >
                <SelectTrigger className={`w-full ${errors.status ? "border-red-500" : ""}`}>
                  {watch("status") || "Select Status"}
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Successful">Successful</SelectItem>
                </SelectContent>
              </Select>
              {errors.status && <p className="text-red-500 text-sm">Status is required</p>}
            </div>

            {/* Courses */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course Name
              </label>
              <div className="space-y-2">
                {["CBSE SCIENCE", "CBSE MATH", "CBSE ENGLISH", "CBSE GEOGRAPHY"].map(
                  (course) => (
                    <div key={course} className="flex items-center">
                      <Checkbox
                        checked={(watch("courses") || []).includes(course)}
                        onCheckedChange={(checked) =>
                          setValue(
                            "courses",
                            checked
                              ? [...(watch("courses") || []), course]
                              : (watch("courses") || []).filter((c) => c !== course)
                          )
                        }
                      />
                      <label className="ml-2 text-sm">{course}</label>
                    </div>
                  )
                )}
              </div>
              {errors.courses && <p className="text-red-500 text-sm">Select at least one course</p>}
            </div>

            {/* Class Standard */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Class Standard
              </label>
              <Select
                onValueChange={(value) => setValue("classStandard", value)}
                defaultValue={rowData?.classStandard }
              >
                <SelectTrigger className={`w-full ${errors.classStandard ? "border-red-500" : ""}`}>
                  {watch("classStandard") || rowData?.classStandard || "Select Class Standard"}
                </SelectTrigger>
                <SelectContent>
                  {["CBSE 10", "CBSE 09", "CBSE 08", "CBSE 07", "CBSE 06", "CBSE 05"].map(
                    (standard) => (
                      <SelectItem key={standard} value={standard}>
                        {standard}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
              {errors.classStandard && (
                <p className="text-red-500 text-sm">Class standard is required</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Join Date
              </label>
              <Input
                type="date"
                {...register("joinDate", { required: "Join date is required" })}
                className={errors.joinDate ? "border-red-500" : ""}
              />
              {errors.joinDate && (
                <p className="text-red-500 text-sm">{errors.joinDate.message}</p>
              )}
            </div>

            {/* Last Active */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Active
              </label>
              <Input
                type="date"
                {...register("lastActive")}
                className={errors.lastActive ? "border-red-500" : ""}
              />
            </div>

            {/* Academic Year */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Academic Year
              </label>
              <Input
                type="text"
                placeholder="e.g., 2023 - 2024"
                {...register("cohort", {
                  required: "Academic year is required",
                  pattern: {
                    value: /^\d{4}\s-\s\d{4}$/,
                    message: "Format must be YYYY - YYYY",
                  },
                })}
                className={errors.cohort ? "border-red-500" : ""}
              />
              {errors.cohort && (
                <p className="text-red-500 text-sm">{errors.cohort.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
