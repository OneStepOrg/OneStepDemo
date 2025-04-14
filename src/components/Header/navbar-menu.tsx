import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../ui/navigation-menu"

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
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}