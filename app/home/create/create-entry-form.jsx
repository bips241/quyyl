"use client";

import { useForm, Controller } from "react-hook-form";
import { useRouter, usePathname } from "next/navigation";
import useMount from "@/hooks/useMount";
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { addData } from "./actions";


function CreatePage() {
  const pathname = usePathname();
  const isCreatePage = pathname === "/home/create";
  const router = useRouter();
  const mount = useMount();

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  const {
    studentName,
    joinDate,
    lastActive,
    cohort,
    status,
    courses,
    classStandard,
  } = data;

  console.log(data);

  try {
    const response = await addData({
      studentName,
      joinDate,
      lastActive,
      cohort,
      status,
      courses,
      classStandard,
    });

    if (response.success) {
      console.log("Data successfully added:", response.data);
      alert("Student data has been successfully added!");
    } else {
      console.error("Error:", response.error);
      alert("Failed to add student data. Check console for details.");
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    alert("An unexpected error occurred. Please try again.");
  }
};


  if (!mount) return <div>.</div>;

  return (
    <div>
      <Dialog open={isCreatePage} onOpenChange={(open) => !open && router.back()}>
        <DialogContent>
          <DialogHeader className="top-3">
            <DialogTitle className="flex justify-center">Create New Entry</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Student Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Student Name</label>
              <Input
                placeholder="Enter Student Name"
                {...register("studentName", { required: "Student name is required" })}
                className={errors.studentName ? "border-red-500" : ""}
              />
              {errors.studentName && <p className="text-red-500 text-sm">{errors.studentName.message}</p>}
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <Select
                onValueChange={(value) => setValue("status", value)}
                defaultValue=""
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

            {/* Course Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Course Name</label>
              <div className="space-y-2">
                {["CBSE SCIENCE", "CBSE MATH", "CBSE ENGLISH", "CBSE GEOGRAPHY"].map((course) => (
                  <div key={course} className="flex items-center">
                    <Checkbox
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
                ))}
              </div>
              {errors.courses && <p className="text-red-500 text-sm">Select at least one course</p>}
            </div>

            {/* Class Standard */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Class Standard</label>
              <Select
                onValueChange={(value) => setValue("classStandard", value)}
                defaultValue=""
              >
                <SelectTrigger className={`w-full ${errors.classStandard ? "border-red-500" : ""}`}>
                  {watch("classStandard") || "Select Class Standard"}
                </SelectTrigger>
                <SelectContent>
                  {["CBSE 10", "CBSE 09", "CBSE 08", "CBSE 07", "CBSE 06", "CBSE 05"].map((standard) => (
                    <SelectItem key={standard} value={standard}>
                      {standard}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.classStandard && <p className="text-red-500 text-sm">Class standard is required</p>}
            </div>

            {/* Join Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Join Date</label>
              <Input
                type="date"
                {...register("joinDate", { required: "Join date is required" })}
                className={errors.joinDate ? "border-red-500" : ""}
              />
              {errors.joinDate && <p className="text-red-500 text-sm">{errors.joinDate.message}</p>}
            </div>

            {/* Last Active */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Active</label>
              <Input
                type="date"
                {...register("lastActive")}
                className={errors.lastActive ? "border-red-500" : ""}
              />
            </div>

            {/* Academic Year (Cohort) */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Academic Year</label>
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
              {errors.cohort && <p className="text-red-500 text-sm">{errors.cohort.message}</p>}
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

export default CreatePage;
