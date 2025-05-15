"use client"

import Link from "next/link";
import { Separator } from "../ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import './index.css'

const Footer=()=>{
    const isMobile=useIsMobile()
    return(
        <footer className="bottom-0 position-fixed px-[10%] py-4" id="footer">
            <section>
                {!isMobile?
                <>
                {/* <Separator className="bg-white h-[2px] my-4"/> */}
                <section className="flex flex-row flex-wrap justify-between px-10">
                    <section className="m-4">
                        <h1>Quick Links</h1>
                        <Link href="/">
                            <p>Home</p>
                        </Link>
                        <Link href="/internships">
                            <p>Internships</p>
                        </Link>
                        <Link href="/courses">
                            <p>Courses</p>
                        </Link>
                        <Link href="/jobs">
                            <p>Jobs</p>
                        </Link>
                        <Link href="/roadmap">
                            <p>Roadmaps / Learning Tracks</p>
                        </Link>
                        <Link href="/guidance">
                            <p>Mentorship / Guidance</p>
                        </Link>
                    </section>
                    <Separator orientation="vertical"/>
                    <section className="m-4">
                        <h1>Explore Opportunities</h1>
                        <Link href="/internships-for-students">
                            <p>Internships for Students</p>
                        </Link>
                        <Link href="/remote-internships">
                            <p>Remote Internships</p>
                        </Link>
                        <Link href="/jobs-for-freshers">
                            <p>Jobs for Freshers</p>
                        </Link>
                        <Link href="/trending-roles">
                            <p>Trending Roles</p>
                        </Link>
                        <Link href="/internships-with-stipend">
                            <p>Internships with Stipend</p>
                        </Link>
                        <Link href="/work-from-home">
                            <p>Work From Home Jobs</p>
                        </Link>
                    </section>
                    <Separator orientation="vertical"/>
                    <section className="m-4">
                        <h1>Upskill with Purpose</h1>
                        <Link href="/full-stack-development-course">
                            <p>Learn Full Stack Development</p>
                        </Link>
                        <Link href="/data-analyst-course">
                            <p>Become a Data Analyst</p>
                        </Link>
                        <Link href="/digital-marketing-bootcamp">
                            <p>Digital Marketing Bootcamp</p>
                        </Link>
                        <Link href="/career-tracks">
                            <p>Structured Career Tracks</p>
                        </Link>
                        <Link href="/mock-interviews">
                            <p>Practice Interviews</p>
                        </Link>
                        <Link href="/certifications">
                            <p>Certification Portal</p>
                        </Link>
                    </section>
                    <Separator orientation="vertical"/>
                    <section className="m-4">
                        <h1>Career Tools & Help</h1>
                        <Link href="/resume-builder">
                            <p>Resume Builder</p>
                        </Link>
                        <Link href="/roadmap">
                            <p>Career Roadmaps</p>
                        </Link>
                        <Link href="/mock-interview">
                            <p>Mock Interviews</p>
                        </Link>
                        <Link href="/guidance">
                            <p>Mentorship Sessions</p>
                        </Link>
                        <Link href="/placement-guidance">
                            <p>Placement Guidance</p>
                        </Link>
                        <Link href="/faq">
                            <p>Community Q&A</p>
                        </Link>
                    </section>
                    <Separator orientation="vertical" className="bg-gray-500 h-[2px] my-4"/>
                    <section className="m-4">
                        <h1>For Companies</h1>
                        <Link href="/company/hire-interns">
                            <p>Hire Interns</p>
                        </Link>
                        <Link href="/company/hire-job-seekers">
                            <p>Hire Job Seekers</p>
                        </Link>
                        <Link href="/company/partner-with-us">
                            <p>Partner With Us</p>
                        </Link>
                        <Link href="/company/hire-ambassador">
                            <p>Campus Ambassador Hiring</p>
                        </Link>
                        <Link href="/company/company-reviews">
                            <p>Company Reviews</p>
                        </Link>
                    </section>
                </section>
                </>:
                null}
                <Separator className="bg-gray-400 h-[2px] my-4"/>
                <section className="flex flex-row flex-wrap justify-start gap-20 px-10">
                    <section>
                        <h1>Inside OneStep</h1>
                        <Link href="/insides/about">
                            <p>About Us</p>
                        </Link>
                        <Link href="/insides/our-story">
                            <p>Our Story</p>
                        </Link>
                        <Link href="/insides/careers">
                            <p>Careers @ OneStep</p>
                        </Link>
                        <Link href="/insides/blog">
                            <p>Blog & Resources</p>
                        </Link>
                        <Link href="/insides/media">
                            <p>Press / Media</p>
                        </Link>
                        <Link href="/insides/contact">
                            <p>Contact Us</p>
                        </Link>
                    </section>
                    <section>
                        <h1>Legal & Support</h1>
                        <Link href="/legal/privacy-policy">
                            <p>Privacy Policy</p>
                        </Link>
                        <Link href="/legal/terms">
                            <p>Terms of Use</p>
                        </Link>
                        <Link href="/legal/refund-policy">
                            <p>Refund Policy</p>
                        </Link>
                        <Link href="/legal/report">
                            <p>Report an Issue</p>
                        </Link>
                        <Link href="/legal/support">
                            <p>Support Chat / Email</p>
                        </Link>
                    </section>
                </section>
            </section>
            <Separator className="bg-gray-400 h-[2px] my-4"/>
            <section className="mb-4 md:mb-0 flex text-center justify-center md:text-left">
                <p>© {new Date().getFullYear()} OneStep. All rights reserved.</p>
            </section>
        </footer>
    )
}

export default Footer