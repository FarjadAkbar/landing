import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "../ui/card";
import { ICourse } from "@/types/course";
import Image from "next/image";

export default function Courses({ data }: { data: ICourse[] }) {
  return (
    <section className="container mx-auto" id="courses">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Courses</h2>
        {/* <p className="text-muted-foreground">
          check out what our clients have to say about our products and services.
        </p> */}
      </div>
        <div className="mt-6 flex flex-wrap justify-center items-center">
          {data.map((course, idx) => (
            <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0" key={idx}>
              <Card className="shadow-lg rounded-md overflow-hidden m-4">
                {/* Image at the top, full width */}
                <Image
                  src={course.image}
                  alt={course.title}
                  width={0}
                  height={0}
                  className="w-full h-44 object-cover"
                  sizes="(100vw, 100vh)"
                />
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-xs text-muted-foreground mb-4">
                    {course.description}
                  </CardDescription>

                  <ul className="space-y-2 text-xs sm:text-sm">
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
            </div>
          ))}
        </div>
    </section>
  );
}
