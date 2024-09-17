import { Header } from "@/components/header";
import { LeadForm } from "@/components/lead";
import About from "@/components/landing/about";
import Hero from "@/components/landing/hero";
import Image from "next/image";
import CTA from "@/components/landing/cta";
import TestimonialSlider from "@/components/landing/testimonial";
import { testimonialsData } from "@/data/testimonial";
import FAQ from "@/components/landing/faq";
import Courses from "@/components/landing/courses";
import Footer from "@/components/footer";
import { faqData } from "@/data/faq";
import { coursesData } from "@/data/course";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start space-y-8">
        <Hero />
        <About />
        <Courses data={coursesData} />
        <CTA />
        <TestimonialSlider data={testimonialsData} />
        <FAQ data={faqData} />
      </main>
      <Footer />
    </>
  );
}
