import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from "@nextui-org/react";
import LogoutButton from "@/app/site/LogoutButton";
import { auth } from "@/app/auth";
import CreateEventForm from "../events/createform";
import ProfileSection from "./ProfileSection";
import Image from "next/image";

export const AcmeLogo = () => {
    return (
        <div className="flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg">
            <Link href="/">
                <Image
                    src="/logo/Eventtifi-logo.png"
                    className="w-36 h-16 object-contain drop-shadow-lg"
                    width={150}
                    height={100}
                    alt="Eventtifi Logo"
                />
            </Link>
        </div>
    );
};

export default async function SiteHeader() {

    const session = await auth();

    if (!session) {
        return (
            <Navbar shouldHideOnScroll>
                <NavbarBrand>
                    <AcmeLogo />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link} color="primary" href="/login" variant="flat">
                            Login
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="/register" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        );
    } else {
        const userToken = session.user.accessToken;
        return (
            <>
                <Navbar shouldHideOnScroll>
                    <NavbarBrand>
                        <AcmeLogo />
                    </NavbarBrand>
                    <NavbarContent className="hidden sm:flex gap-4" justify="center">
                        <NavbarItem>
                            <CreateEventForm authToken={userToken} />
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link aria-current="page" href="/event/list">
                                Event List
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="/event/update">
                                Event Update
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="/contact">
                                Contact
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarContent justify="end">
                        <NavbarItem className="hidden lg:flex">
                            <LogoutButton />
                        </NavbarItem>
                        <Link aria-current="page" href="/update-profile">
                            <ProfileSection userToken={userToken} />
                        </Link>
                    </NavbarContent>
                </Navbar>
            </>
        )
    }
}

