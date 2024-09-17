"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { toast } from 'react-toastify';

// Define the form validation schema using Zod
const FormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  fatherName: z.string().min(2, { message: "Father name must be at least 2 characters." }),
  age: z.string().min(1, { message: "Age is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z.string().regex(/^\+\d{1,4}\d{7,10}$/, {
    message: "Invalid phone number. Ensure it includes country code and has correct length.",
  }),
  whatsappNumber: z.string().regex(/^\+\d{1,4}\d{7,10}$/, {
    message: "Invalid WhatsApp number. Ensure it includes country code.",
  }),
  courses: z.string().min(1, { message: "Please select a course." }),
})

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Use the useForm hook to manage form state and validation
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      fatherName: "",
      age: "",
      email: "",
      phoneNumber: "",
      whatsappNumber: "",
      courses: "",
    },
  })

  // Function to handle form submission
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setIsSubmitting(true)
      console.log("testing.......")
      // Send form data to the API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      
      // Display a success message if the email is sent successfully
      if (response.status === 200) {
        // const result = await response.json();
        toast.success("Thank you for your interest. We will reach out to you shortly.");
      } 
    } catch (error) {
      toast.error("Error sending email");
    }
    
    setIsSubmitting(false)
    // Reset the form after submission
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
        <div className="grid grid-cols-2 gap-4 ">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm font-medium">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} disabled={isSubmitting} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Father Name */}
          <FormField
            control={form.control}
            name="fatherName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm font-medium">Father Name</FormLabel>
                <FormControl>
                  <Input placeholder="Father's Name" {...field}  disabled={isSubmitting} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Age */}
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm font-medium">Age</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Your Age" {...field} disabled={isSubmitting} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm font-medium">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your Email" {...field} disabled={isSubmitting} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Phone Number with Country Code */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm font-medium">Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+1 555-555-5555" {...field} disabled={isSubmitting} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* WhatsApp Number */}
          <FormField
            control={form.control}
            name="whatsappNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm font-medium">WhatsApp Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+1 555-555-5555" {...field} disabled={isSubmitting} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Courses Dropdown */}
        <FormField
          control={form.control}
          name="courses"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs md:text-sm font-medium">Select a Course</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} disabled={isSubmitting}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tafsee">Tafsee</SelectItem>
                    <SelectItem value="Hadith">Hadith</SelectItem>
                    <SelectItem value="Aqidah">Aqidah</SelectItem>
                    <SelectItem value="Seerah">Seerah</SelectItem>
                    <SelectItem value="Tajweed">Tajweed</SelectItem>
                    <SelectItem value="Fiqh">Fiqh</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button size="lg" className="w-full" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  )
}
