"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ITestimonial } from "@/types/testimonial";

export default function TestimonialSlider({ data }: {data: ITestimonial[]}) {
  return (
    <>
      <section className="container mx-auto" id="testimonial">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Reviews</h2>
        <p className="text-muted-foreground">
          check out what our clients have to say about our products and services.
        </p>
      </div>
        <div className="mx-auto mt-12 lg:max-w-6xl px-3">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {data.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="flex space-y-2 flex-col px-4 py-5 sm:p-6 bg-gray-50 rounded">
                    <div className="flex items-center">
                      <FaStar size={14} className="me-1" color="#006766" />
                      <FaStar size={14} className="me-1" color="#006766" />
                      <FaStar size={14} className="me-1" color="#006766" />
                      <FaStar size={14} className="me-1" color="#006766" />
                      <FaStar size={14} className="me-1" color="#006766" />

                      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
                      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
                    </div>
                    <q className="flex-1 text-gray-600 dark:text-gray-300">
                      {testimonial.quote}
                    </q>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="inline">
                        <Image
                          height={20}
                          width={20}
                          alt={testimonial.name}
                          src={testimonial.imgSrc}
                          loading="lazy"
                        />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
