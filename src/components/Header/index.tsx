"use client"

<<<<<<< HEAD
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
=======
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "../ui/dropdown-menu"
>>>>>>> 8214569c007e741e6c0bfd43e3f726bac84bce0d
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"  
import Link from "next/link"
<<<<<<< HEAD
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
=======
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
>>>>>>> 8214569c007e741e6c0bfd43e3f726bac84bce0d
import { Button } from "../ui/button"
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useIsMobile } from "@/hooks/use-mobile"
import Cookies from 'js-cookie';
import { useEffect, useState } from "react"
import { NavigationMenuDemo } from "./navbar-menu"
import { CollapsibleDemo } from "./navbar-hammenu"

const Header=()=>{
    const isMobile=useIsMobile()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = Cookies.get("jwtToken");
        setIsLoggedIn(!!token);
    }, []); 

<<<<<<< HEAD
    const handleLogin = () => {
        Cookies.set("jwtToken", "Hello");
        setIsLoggedIn(true); 
    };

    const handleLogout = () => {
        Cookies.remove("jwtToken");
        setIsLoggedIn(false); 
    };

=======
>>>>>>> 8214569c007e741e6c0bfd43e3f726bac84bce0d
    return(
        <header className="top-0 position-fixed">
        <nav className="py-3 px-[10%] flex flex-row items-center justify-between">
            <Link href="/">
            <Button variant="outline" className="p-0 border-none shadow-none outline-none hover:bg-transparent">
                <Image src="/next.svg" alt="next logo" width={100} height={100}/>
            </Button>
            </Link>
            {!isMobile?
            <>
<<<<<<< HEAD
            <NavigationMenuDemo/>
            {isLoggedIn?
            <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                    <DropdownMenuItem>
                        <Button variant="outline" className="p-0 border-none shadow-none outline-none hover:bg-transparent" onClick={handleLogout}>Logout</Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>:
            <Button variant="outline" className="p-0 border-none shadow-none outline-none hover:bg-gray-300 bg-black px-4 text-white transition" onClick={handleLogin}>Login/Register</Button>
            }
            </>:
            <div className="flex items-center justify-center gap-5">
            {isLoggedIn?
            <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none px-3">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png"/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                    <DropdownMenuItem>
                        <Button variant="outline" className="p-0 border-none shadow-none outline-none hover:bg-transparent" onClick={handleLogout}>Logout</Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>:null
            }
=======
                <NavigationMenuDemo/>
                <Button variant="outline" className="p-0 border-none shadow-none outline-none hover:bg-gray-300 bg-black px-4 text-white transition" >
                    <Link href="/login">Login/Register</Link>
                </Button>
            </>:
            <div className="flex items-center justify-center gap-5">
>>>>>>> 8214569c007e741e6c0bfd43e3f726bac84bce0d
            <Sheet>
                <SheetTrigger>
                    <RxHamburgerMenu className="text-2xl"/>
                </SheetTrigger>
                <SheetContent className="py-10">
                    <SheetHeader>
                    <SheetTitle className="px-4">Browse</SheetTitle>
                    <CollapsibleDemo/>
                    {!isLoggedIn?
<<<<<<< HEAD
                    <Button variant="outline" className="px-5 border-none shadow-none outline-none bg-black text-white hover:bg-gray-300 mx-3" onClick={handleLogin}>
=======
                    <Button variant="outline" className="px-5 border-none shadow-none outline-none bg-black text-white hover:bg-gray-300 mx-3">
>>>>>>> 8214569c007e741e6c0bfd43e3f726bac84bce0d
                        <Link href="/login">Login/Register</Link>
                    </Button>:null
                    }
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            </div>
            }
        </nav>
        </header>
    )
}

export default Header