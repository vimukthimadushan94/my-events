import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from "@nextui-org/react";
import LogoutButton from "@/app/site/LogoutButton";
import { auth } from "@/app/auth";
import CreateEventForm from "../events/createform";

export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};
export default async function SiteHeader() {

    const session = await auth();
    console.log(session);


    if (!session) {
        return (
            <Navbar shouldHideOnScroll>
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="font-bold text-inherit">ACME</p>
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
                        <p className="font-bold text-inherit">ACME</p>
                    </NavbarBrand>
                    <NavbarContent className="hidden sm:flex gap-4" justify="center">
                        <NavbarItem>
                            {/* <CreateEventForm authToken={userToken} /> */}
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
                        <Avatar
                            isBordered
                            className="transition-transform"
                            color="secondary"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </NavbarContent>
                </Navbar>
            </>
        )
    }
}

