'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useIsMobile } from "@/hooks/use-mobile";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import { NavigationMenuDemo } from "./navbar-menu";

const Header = () => {
    const isMobile = useIsMobile();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = Cookies.get("jwtToken");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        Cookies.remove("jwtToken");
        setIsLoggedIn(false);
        window.location.href = "/login";
    };

    return (
        <header className="top-0 position-fixed">
            <nav className="py-3 px-[10%] flex flex-row items-center justify-between">
                <Link href="/">
                    <Button variant="outline" className="p-0 border-none shadow-none outline-none hover:bg-transparent">
                        <Image src="/next.svg" alt="next logo" width={100} height={100} />
                    </Button>
                </Link>
                {!isMobile ? (
                    <>
                        <NavigationMenuDemo />
                        {isLoggedIn ? (
                            <div className="flex items-center gap-4">
                                <Link href="/dashboard">
                                    <Button variant="outline" className="p-0 border-none shadow-none outline-none hover:bg-gray-300 bg-black px-4 text-white transition">Dashboard</Button>
                                </Link>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="focus:outline-none">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem><Link href="/dashboard">Profile</Link></DropdownMenuItem>
                                        <DropdownMenuItem><Link href="/billing">Billing</Link></DropdownMenuItem>
                                        <DropdownMenuItem><Link href="/team">Team</Link></DropdownMenuItem>
                                        <DropdownMenuItem><Link href="/subscription">Subscription</Link></DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Button variant="outline" className="p-0 border-none shadow-none outline-none hover:bg-transparent" onClick={handleLogout}>Logout</Button>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        ) : (
                            <Link href="/login">
                                <Button variant="outline" className="p-0 border-none shadow-none outline-none hover:bg-gray-300 bg-black px-4 text-white transition">Login/Register</Button>
                            </Link>
                        )}
                    </>
                ) : (
                    <div className="flex items-center justify-center gap-5">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="focus:outline-none px-3">
                                <RxHamburgerMenu className="text-2xl" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem><Link href="/">Home</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/courses">Courses</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/internships">Internships</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/jobs">Jobs</Link></DropdownMenuItem>
                                {isLoggedIn ? (
                                    <>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuItem><Link href="/dashboard">Dashboard</Link></DropdownMenuItem>
                                        <DropdownMenuItem><Link href="/dashboard">Profile</Link></DropdownMenuItem>
                                        <DropdownMenuItem><Link href="/billing">Billing</Link></DropdownMenuItem>
                                        <DropdownMenuItem><Link href="/team">Team</Link></DropdownMenuItem>
                                        <DropdownMenuItem><Link href="/subscription">Subscription</Link></DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Button variant="outline" className="p-0 border-none shadow-none outline-none hover:bg-transparent" onClick={handleLogout}>Logout</Button>
                                        </DropdownMenuItem>
                                    </>
                                ) : (
                                    <DropdownMenuItem>
                                        <Link href="/login">
                                            <Button variant="outline" className="w-full bg-black text-white hover:bg-gray-800 transition">
                                                Login/Register
                                            </Button>
                                        </Link>
                                    </DropdownMenuItem>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
