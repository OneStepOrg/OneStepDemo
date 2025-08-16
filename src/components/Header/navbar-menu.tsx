import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
<<<<<<< HEAD
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu"
import { Building2, MapPin, Layers, Clock, Star, School } from "lucide-react"
=======
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu"
>>>>>>> 8214569c007e741e6c0bfd43e3f726bac84bce0d

export function NavigationMenuDemo(){
  return(
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Internships</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <li>
                  <Link
<<<<<<< HEAD
                    className="flex flex-col items-center justify-center h-full w-full select-none gap-2 rounded-md p-6 no-underline outline-none focus:shadow-md transition hover:bg-accent/30 hover:scale-[1.03]"
                    href="/internships/categories"
                  >
                    <Layers className="text-primary" size={32} />
                    <div className="text-center">
                      <div className="mb-1 text-md font-medium">
                        Browse Categories
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Discover internships across various fields like technology, marketing, finance, and more.
                      </p>
                    </div>
                  </Link>
              </li>
              <li>
                <Link
                  className="flex flex-col items-center justify-center h-full w-full select-none gap-2 rounded-md p-6 no-underline outline-none focus:shadow-md transition hover:bg-accent/30 hover:scale-[1.03]"
                  href="/internships/availability"
                >
                  <Clock className="text-primary" size={32} />
                  <div className="text-center">
                    <div className="mb-1 text-md font-medium">
                      Browse Availability
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Filter internships by remote, in-person, part-time, and more.
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="flex flex-col items-center justify-center h-full w-full select-none gap-2 rounded-md p-6 no-underline outline-none focus:shadow-md transition hover:bg-accent/30 hover:scale-[1.03]"
                  href="/internships/companies"
                >
                  <Building2 className="text-primary" size={32} />
                  <div className="text-center">
                    <div className="mb-1 text-md font-medium">
                      Browse Companies
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Explore internships from top companies and startups.
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="flex flex-col items-center justify-center h-full w-full select-none gap-2 rounded-md p-6 no-underline outline-none focus:shadow-md transition hover:bg-accent/30 hover:scale-[1.03]"
                  href="/internships/locations"
                >
                  <MapPin className="text-primary" size={32} />
                  <div className="text-center">
                    <div className="mb-1 text-md font-medium">
                      Browse Locations
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Find internships in your city or remote opportunities.
                    </p>
                  </div>
                </Link>
=======
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-md font-medium">
                      Browse Categories
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground" style={{ color: 'gray' }}>
                    Discover internships across various fields like technology, marketing, finance, and more.
                    </p>
                  </Link>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-md font-medium">
                      Browse Availability
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground" style={{ color: 'gray' }}>
                    Discover top companies offering internships tailored to your interests and career goals, with options for summer, part-time, and remote roles.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-md font-medium">
                      Browse Companies
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground" style={{ color: 'gray' }}>
                    Explore internship opportunities in your preferred cities or regions, including flexible remote positions to suit your lifestyle.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-md font-medium">
                      Browse Locations
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground" style={{ color: 'gray' }}>
                    Find internships that match your schedule, including summer, part-time, and remote opportunities.
                    </p>
                  </Link>
                </NavigationMenuLink>
>>>>>>> 8214569c007e741e6c0bfd43e3f726bac84bce0d
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Jobs</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <li>
                  <Link
<<<<<<< HEAD
                    className="flex flex-col items-center justify-center h-full w-full select-none gap-2 rounded-md p-6 no-underline outline-none focus:shadow-md transition hover:bg-accent/30 hover:scale-[1.03]"
                    href="/jobs/categories"
                  >
                    <Layers className="text-primary" size={32} />
                    <div className="text-center">
                      <div className="mb-1 text-md font-medium">
                        Browse Categories
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Explore job opportunities across diverse industries.
                      </p>
                    </div>
                  </Link>
              </li>
              <li>
                <Link
                  className="flex flex-col items-center justify-center h-full w-full select-none gap-2 rounded-md p-6 no-underline outline-none focus:shadow-md transition hover:bg-accent/30 hover:scale-[1.03]"
                  href="/jobs/availability"
                >
                  <Clock className="text-primary" size={32} />
                  <div className="text-center">
                    <div className="mb-1 text-md font-medium">
                      Browse Availability
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Filter jobs by remote, in-person, full-time, and more.
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="flex flex-col items-center justify-center h-full w-full select-none gap-2 rounded-md p-6 no-underline outline-none focus:shadow-md transition hover:bg-accent/30 hover:scale-[1.03]"
                  href="/jobs/companies"
                >
                  <Building2 className="text-primary" size={32} />
                  <div className="text-center">
                    <div className="mb-1 text-md font-medium">
                      Browse Companies
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Discover jobs from leading employers and startups.
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="flex flex-col items-center justify-center h-full w-full select-none gap-2 rounded-md p-6 no-underline outline-none focus:shadow-md transition hover:bg-accent/30 hover:scale-[1.03]"
                  href="/jobs/locations"
                >
                  <MapPin className="text-primary" size={32} />
                  <div className="text-center">
                    <div className="mb-1 text-md font-medium">
                      Browse Locations
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Search for jobs in your city or remote roles.
                    </p>
                  </div>
                </Link>
=======
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-md font-medium">
                      Browse Categories
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground" style={{ color: 'gray' }}>
                    Explore job opportunities across diverse industries such as tech, healthcare, finance, and more to find your perfect career path.                    </p>
                  </Link>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-md font-medium">
                      Browse Availability
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground" style={{ color: 'gray' }}>
                    Find jobs that fit your schedule, including full-time, part-time, freelance, and remote positions to suit your lifestyle.                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-md font-medium">
                      Browse Companies
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground" style={{ color: 'gray' }}>
                    Discover leading employers offering exciting job roles tailored to your skills and professional ambitions.                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-md font-medium">
                      Browse Locations
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground" style={{ color: 'gray' }}>
                    Search for job openings in your desired cities or regions, including flexible remote opportunities to work from anywhere.                    </p>
                  </Link>
                </NavigationMenuLink>
>>>>>>> 8214569c007e741e6c0bfd43e3f726bac84bce0d
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <li>
                  <Link
<<<<<<< HEAD
                    className="flex flex-col items-center justify-center h-full w-full select-none gap-2 rounded-md p-6 no-underline outline-none focus:shadow-md transition hover:bg-accent/30 hover:scale-[1.03]"
                    href="/courses/categories"
                  >
                    <Layers className="text-primary" size={32} />
                    <div className="text-center">
                      <div className="mb-1 text-md font-medium">
                        Browse Categories
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Dive into courses across various fields like coding, business, design, and more.
                      </p>
                    </div>
                  </Link>
              </li>
              <li>
                <Link
                  className="flex flex-col items-center justify-center h-full w-full select-none gap-2 rounded-md p-6 no-underline outline-none focus:shadow-md transition hover:bg-accent/30 hover:scale-[1.03]"
                  href="/courses/availability"
                >
                  <Clock className="text-primary" size={32} />
                  <div className="text-center">
                    <div className="mb-1 text-md font-medium">
                      Browse Availability
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Find courses that match your schedule: self-paced, part-time, live online.
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="flex flex-col items-center justify-center h-full w-full select-none gap-2 rounded-md p-6 no-underline outline-none focus:shadow-md transition hover:bg-accent/30 hover:scale-[1.03]"
                  href="/courses/providers"
                >
                  <School className="text-primary" size={32} />
                  <div className="text-center">
                    <div className="mb-1 text-md font-medium">
                      Browse Providers
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Explore top educational platforms and institutions.
                    </p>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="flex flex-col items-center justify-center h-full w-full select-none gap-2 rounded-md p-6 no-underline outline-none focus:shadow-md transition hover:bg-accent/30 hover:scale-[1.03]"
                  href="/courses/top-rated"
                >
                  <Star className="text-primary" size={32} />
                  <div className="text-center">
                    <div className="mb-1 text-md font-medium">
                      Browse Top-Rated
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Discover highly reviewed courses recommended by learners.
                    </p>
                  </div>
                </Link>
=======
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-md font-medium">
                      Browse Categories
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground" style={{ color: 'gray' }}>
                    Dive into courses across various fields like coding, business, design, and more to boost your skills and knowledge.                    </p>
                  </Link>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-md font-medium">
                      Browse Availability
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground" style={{ color: 'gray' }}>
                    Find courses that match your schedule, including self-paced, part-time, and live online classes for flexible learning.                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-md font-medium">
                      Browse Providers
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground" style={{ color: 'gray' }}>
                    Explore top educational platforms and institutions offering high-quality courses to advance your career.                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-md font-medium">
                      Browse Top-Rated
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground" style={{ color: 'gray' }}>
                    Discover highly reviewed courses recommended by learners, ensuring quality education to meet your goals.                    </p>
                  </Link>
                </NavigationMenuLink>
>>>>>>> 8214569c007e741e6c0bfd43e3f726bac84bce0d
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}