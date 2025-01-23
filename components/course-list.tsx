import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface Course {
  id: number;
  name: string;
  desc: string;
}

interface CourseListProps {
  courses: Course[];
}

export function CourseList({ courses }: CourseListProps) {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">My Courses</h2>
        <Button asChild>
          <Link href="/course/new">Create new course</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses ? (
          courses.map((course) => (
            <Link key={course.id} href={`/course/${course.id}`}>
              <Card className="transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">{course.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {course.desc}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
