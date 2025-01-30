import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";

interface CreateCourseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  courseName: string;
  courseDesc: string;
}

export function CreateCourseDialog({
  open,
  onOpenChange,
}: CreateCourseDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(`${data.courseName}: ${data.courseDesc}`);
    // Here you would typically send the data to your backend
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6" />
            <DialogTitle>Create Course</DialogTitle>
          </div>
          <DialogDescription>
            Create a course to start learning with the assistant of Obot
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 flex flex-col gap-4"
        >
          <div className="space-y-2">
            <Label htmlFor="courseName">Course Name</Label>
            <Input
              id="courseName"
              placeholder="Please enter the name of the course"
              {...register("courseName", {
                required: "The name of the course is required.",
              })}
            />
            {errors.courseName && (
              <p className="text-xs font-semibold text-red-500">
                {errors.courseName.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="courseDesc">Course Description</Label>
            <Textarea
              id="courseDesc"
              className="min-h-32"
              placeholder="Please enter the description of the course"
              {...register("courseDesc", {
                required: "The description of the course is required.",
              })}
            />
            {errors.courseDesc && (
              <p className="text-xs font-semibold text-red-500">
                {errors.courseDesc.message}
              </p>
            )}
          </div>
          <Button className="mt-4" type="submit">
            Create
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
