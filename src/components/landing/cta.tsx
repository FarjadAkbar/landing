import Link from "next/link";
import { Button } from "../ui/button";

export default function CTA() {
  return (
    <section className="w-full text-center">
      <div className="relative mx-auto max-w-7xl bg-primary px-4 py-12 shadow-sm">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Enroll today & enjoy 10% discount on your registeration!
            </h2>
            {/* <p className="text-base text-slate-400">
              Sign up today and enjoy an exclusive 10% discount on your first purchase!
            </p> */}
          </div>
          <div className="flex items-center justify-center gap-2">
            <Link href="#lead" passHref>
              <Button size={"lg"} variant={"secondary"} className="font-bold">Registeration Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
