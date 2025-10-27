'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDashboardData, updateProfile } from "@/lib/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { FaEdit } from 'react-icons/fa';

interface UserData {
  full_name: string;
  email: string;
  phone_number: string;
  role: string;
}

interface CourseApplication {
  course: {
    course_name: string;
  };
}

interface InternshipApplication {
  internship: {
    internship_title: string;
  };
  application_status: string;
}

interface JobApplication {
  job: {
    job_title: string;
  };
  application_status: string;
}

interface DashboardData {
  userData: UserData;
  userCourseData: CourseApplication[];
  userInternshipData: InternshipApplication[];
  userJobData: JobApplication[];
}

const ProfileFormSchema = z.object({
  full_name: z.string().min(2, { message: "Full name must be at least 2 characters." }).optional(),
  phone_number: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." }).optional().or(z.literal("")),
});

import AuthGuard from "@/components/AuthGuard";

const DashboardPage: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm<z.infer<typeof ProfileFormSchema>>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: {
      full_name: "",
      phone_number: "",
    },
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await getDashboardData();
        setDashboardData(data);
        form.reset({
          full_name: data.userData.full_name,
          phone_number: data.userData.phone_number || "",
        });
      } catch (e) {
        console.error(e);
        setError("Failed to fetch dashboard data");
      }
    };

    fetchDashboardData();
  }, [form]);

  const onSubmit = async (data: z.infer<typeof ProfileFormSchema>) => {
    setIsLoading(true);
    setSubmitStatus(null);
    try {
      await updateProfile({ full_name: data.full_name, phone_number: data.phone_number });
      setSubmitStatus({ type: "success", message: "Profile updated successfully!" });
      const updatedData = await getDashboardData();
      setDashboardData(updatedData);
      setIsEditing(false); // Exit edit mode on successful update
    } catch (e) {
      console.error(e);
      setSubmitStatus({ type: "error", message: "Failed to update profile. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset form to current dashboard data if available
    if (dashboardData) {
      form.reset({
        full_name: dashboardData.userData.full_name,
        phone_number: dashboardData.userData.phone_number || "",
      });
    }
  };

  if (error) {
    return <div className="text-red-600 text-center py-8">Error: {error}</div>;
  }

  if (!dashboardData) {
    return <div className="text-gray-700 text-center py-8">Loading dashboard data...</div>;
  }

  const { userData, userCourseData, userInternshipData, userJobData } = dashboardData;

  return (
    <main className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome, {userData.full_name}!</h1>
      <p className="text-lg text-gray-600 mb-8">Here&apos;s a summary of your activities.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Profile Display/Edit Card */}
        <Card className="shadow-lg rounded-lg border-t-4 border-gray-700 bg-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl font-semibold text-gray-800">My Profile</CardTitle>
            {!isEditing && (
              <Button variant="ghost" onClick={() => setIsEditing(true)} className="text-gray-600 hover:text-gray-900">
                <FaEdit className="mr-2" /> Edit
              </Button>
            )}
          </CardHeader>
          <CardContent>
            {!isEditing ? (
              <div className="text-gray-700 space-y-2">
                <p><strong>Full Name:</strong> {userData.full_name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.phone_number || "N/A"}</p>
                <p><strong>Role:</strong> {userData.role}</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Full Name</FormLabel>
                        <FormControl>
                          <Input
                            className="border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                            placeholder="Your full name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-semibold">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            className="border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                            placeholder="Your phone number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={handleCancelEdit} className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg py-2 transition-colors">
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg py-2 transition-colors"
                      disabled={isLoading}
                    >
                      {isLoading ? "Updating..." : "Save Changes"}
                    </Button>
                  </div>
                </form>
              </Form>
            )}
            {submitStatus && (
              <div
                className={`mt-4 p-3 rounded-lg text-center ${submitStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
              >
                {submitStatus.message}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Removed separate Update Profile Card */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="shadow-lg rounded-lg border-t-4 border-gray-700 bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">My Courses</CardTitle>
          </CardHeader>
          <CardContent>
            {userCourseData.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {userCourseData.map((courseApp, index) => (
                  <li key={index}>{courseApp.course.course_name}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No courses enrolled yet.</p>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-lg border-t-4 border-gray-700 bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">My Internships</CardTitle>
          </CardHeader>
          <CardContent>
            {userInternshipData.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {userInternshipData.map((internshipApp, index) => (
                  <li key={index}>
                    {internshipApp.internship.internship_title} - <span className="font-medium">{internshipApp.application_status}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No internships applied for yet.</p>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-lg border-t-4 border-gray-700 bg-white">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">My Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            {userJobData.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {userJobData.map((jobApp, index) => (
                  <li key={index}>
                    {jobApp.job.job_title} - <span className="font-medium">{jobApp.application_status}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No jobs applied for yet.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

import DashboardLayout from "@/layouts/DashboardLayout";

const ProtectedDashboardPage = () => (
  <AuthGuard>
    <DashboardLayout>
      <DashboardPage />
    </DashboardLayout>
  </AuthGuard>
);

export default ProtectedDashboardPage;