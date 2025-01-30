import { CourseList } from "@/components/course-list";

const courses = [
  {
    id: 1,
    name: "Introduction to AI",
    desc: "Learn the fundamentals of artificial intelligence and machine learning",
  },
  {
    id: 2,
    name: "Web Development",
    desc: "Master modern web development with React and Next.js",
  },
  {
    id: 3,
    name: "Data Structures",
    desc: "Understanding fundamental data structures and algorithms",
  },
];

export default function Page() {
  return (
    <div className="h-[calc(100vh-3.5rem)] bg-background p-8 overflow-hidden">
      <div className="mx-auto max-w-6xl h-full overflow-auto">
        <div className="mb-12">
          <h1 className="mt-24 text-5xl font-bold">Obot AI</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            An AI powered learning tool optimized for online learners
          </p>
        </div>
        <hr className="mb-12" />
        <CourseList courses={courses} />
      </div>
    </div>
  );
}
