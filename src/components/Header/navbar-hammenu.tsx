"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible"

export function CollapsibleDemo() {
    const [isInternshipsOpen, setIsInternshipsOpen] = React.useState(false)
    const [isJobsOpen, setIsJobsOpen]=React.useState(false)
    const [isCoursesOpen, setIsCoursesOpen]=React.useState(false)

    return (
        <>
            <Collapsible
            open={isInternshipsOpen}
            onOpenChange={setIsInternshipsOpen}
            className="w-full space-y-2"
            >
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                Internships
                </h4>
                <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
                <div className="rounded-md px-4 py-2 text-sm">
                Browse Categories
                </div>
                <div className="rounded-md px-4 py-2 text-sm">
                Browse Companies
                </div>
                <div className="rounded-md px-4 py-2 text-sm">
                Browse Availability
                </div>
                <div className="rounded-md px-4 py-2 text-sm">
                Browse Locations
                </div>
            </CollapsibleContent>
            </Collapsible>
            <Collapsible
            open={isJobsOpen}
            onOpenChange={setIsJobsOpen}
            className="w-full space-y-2"
            >
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                Courses
                </h4>
                <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
                <div className="rounded-md px-4 py-2 text-sm">
                Browse Categories
                </div>
                <div className="rounded-md px-4 py-2 text-sm">
                Browse Availability
                </div>
                <div className="rounded-md px-4 py-2 text-sm">
                Browse Providers
                </div>
                <div className="rounded-md px-4 py-2 text-sm">
                Browse Top-Rated
                </div>
            </CollapsibleContent>
            </Collapsible>
            <Collapsible
            open={isCoursesOpen}
            onOpenChange={setIsCoursesOpen}
            className="w-full space-y-2"
            >
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                Jobs
                </h4>
                <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
                <div className="rounded-md px-4 py-2 text-sm">
                Browse Categories
                </div>
                <div className="rounded-md px-4 py-2 text-sm">
                Browse Availability
                </div>
                <div className="rounded-md px-4 py-2 text-sm">
                Browse Companies
                </div>
                <div className="rounded-md px-4 py-2 text-sm">
                Browse Locations
                </div>
            </CollapsibleContent>
            </Collapsible>
        </>
    )
}
