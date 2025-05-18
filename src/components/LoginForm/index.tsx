"use client";

import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z
  .object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character." }),
  })

export default function SignupForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  return (
    <section>
        <Form {...form}>
        <form className="w-full sm:w-1/2 md:w-2/3 space-y-6">
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                    <div className="relative">
                    <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <Input
                        id="email"
                        type="email"
                        className="pl-10"
                        placeholder="Enter email"
                        aria-describedby="email-error"
                        {...field}
                    />
                    </div>
                </FormControl>
                <FormMessage id="email-error" />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl>
                    <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <Input
                        id="password"
                        type="password"
                        className="pl-10"
                        placeholder="Enter password"
                        aria-describedby="password-error"
                        {...field}
                    />
                    </div>
                </FormControl>
                <FormMessage id="password-error" />
                </FormItem>
            )}
            />
            <Button type="submit">Login</Button>
        </form>
        </Form>
        <p>
            New to OneStep? <button>Register Now</button>
        </p>
    </section>
  );
}