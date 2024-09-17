import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { ICourse } from "@/types/course";

export default function Courses({ data }: { data: ICourse[] }) {
  return (
    <section className="container mx-auto" id="courses">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Courses</h2>
        {/* <p className="text-muted-foreground">
          check out what our clients have to say about our products and services.
        </p> */}
      </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((course, idx) => (
            <Card className="shadow-lg rounded-md overflow-hidden" key={idx}>
              {/* Image at the top, full width */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-44 object-cover"
              />
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold mb-2">{course.title}</CardTitle>
                <CardDescription className="text-xs text-muted-foreground mb-4">
                  {course.description}
                </CardDescription>

                <ul className="space-y-2 text-sm">
                  <li>📅 <b>Schedule: {course.schedule}</b></li>
                  <li>💰 <b>Tuition: {course.tuition}</b></li>
                </ul>
              </CardContent>

              <CardFooter>
                <Link href="#lead" passHref>
                  <Button>Register Now</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
    </section>
  );
}
