"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormSchema } from "@/lib/validation/formSchema";
import { motion } from "framer-motion";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { Loader } from "lucide-react";
import { sendEmail } from "@/utils/actions";
import toast from "react-hot-toast";
import Link from "next/link";
import { slideInY } from "../utils/animations";

const Contact = () => {
  // Define  form.
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      senderEmail: "",
      message: "",
      agreeToTerms: false,
    },
  });

  // 2. Define submit handler.
  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const result = await sendEmail(data);

      if (result.success) {
        toast.success("Email sent, thank you!");
        form.reset();
      } else {
        toast.error(`Error: ${result.error || "Failed to send email"}`);
      }
    } catch (error: any) {
      toast.error("An unexpected error occurred.");
      console.log(error);
    }
  };

  return (
    <motion.div
      className="bg mx-auto mb-12 max-w-2xl rounded-lg border-2 border-base-200 p-8 shadow-lg"
      id="contact"
      variants={slideInY}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    id="name"
                    placeholder="What's your name?"
                    className="bg-base-100"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="senderEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="senderEmail">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    id="senderEmail"
                    placeholder="I will reply back to this email"
                    className="bg-base-100 focus:ring focus:ring-blue-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormControl>
                  <Textarea
                    id="message"
                    placeholder="How can I help you?"
                    className="h-36 bg-base-100"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="agreeToTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    id="agreeToTerms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel htmlFor="agreeToTerms">
                    I agree to the{" "}
                    <Link href="/privacy" className="underline">
                      Privacy Policy
                    </Link>
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <div className="grid">
            <button
              id="submit"
              type="submit"
              className="btn btn-primary"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  Submitting...
                  <Loader className="animate-spin" />
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </Form>
    </motion.div>
  );
};

export default Contact;
