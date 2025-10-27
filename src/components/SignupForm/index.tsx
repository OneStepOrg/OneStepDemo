'use client';

import { MdEmail } from "react-icons/md";
import { FaLock, FaUser } from "react-icons/fa";
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
import { useState } from "react";
import { signup, login } from "@/lib/api";
import Cookies from "js-cookie";

const FormSchema = z
  .object({
    full_name: z.string().min(2, {
      message: "Full Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

interface SignupFormProps {
  toggleForm: () => void;
}

export default function SignupForm({ toggleForm }: SignupFormProps) {
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsLoading(true);
    setSubmitStatus(null);
    try {
      await signup({ email: data.email, password_hash: data.password, full_name: data.full_name, role: "STUDENT" });
      const response = await login({ email: data.email, password_hash: data.password });
      setSubmitStatus({ type: "success", message: "Signup successful! Redirecting to dashboard..." });
      Cookies.set("jwtToken", response.token);
      setTimeout(() => {
        window.location.href = "/dashboard";
        form.reset();
      }, 2000);
    } catch (e) {
      console.error(e);
      setSubmitStatus({ type: "error", message: "Signup failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full max-w-md bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-semibold">Full Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="full_name"
                      className="pl-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                      aria-describedby="full_name-error"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage id="full_name-error" className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-semibold">Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      className="pl-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter email"
                      aria-describedby="email-error"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage id="email-error" className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-semibold">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      className="pl-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter password"
                      aria-describedby="password-error"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage id="password-error" className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-semibold">Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      className="pl-10 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Confirm password"
                      aria-describedby="confirmPassword-error"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage id="confirmPassword-error" className="text-red-500" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2"
            disabled={isLoading}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>
      </Form>
      {submitStatus && (
        <div
          className={`mt-4 p-3 rounded-lg text-center ${
            submitStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      <p className="mt-4 text-center text-gray-600">
        Existing User?{" "}
        <button
          type="button"
          onClick={toggleForm}
          className="text-blue-600 hover:underline font-semibold"
        >
          Login
        </button>
      </p>
    </section>
  );
}
