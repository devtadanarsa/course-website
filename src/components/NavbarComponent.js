import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/react";
import SignInComponent from "./SignInComponent";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input} from "@nextui-org/react";
import { navLinks } from "@/data/constants";
import React from "react";

export default function NavbarComponent(props){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const {onOpen} = useDisclosure();

    const menuItems = [
        "Home",
        "Lessons",
        "Find Tutors",
        "About Us",
    ];

    return(
        <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" className="font-poppins pt-6 border-b-2 px-16" data-aos="fade-down" data-aos-duration="1000">
            <NavbarContent>
                <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
                />
                <NavbarBrand>
                <p className="font-bold text-inherit">Tutorify</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="end" className="font-semibold hidden sm:flex gap-4">
                {navLinks.map((data) => {
                    return(
                        <NavbarItem key={data.id} className="px-5">
                            <Link href={data.path} className={`${(data.title === props.page) ? "text-[#FF922F] border-b-2 border-[#FF922F]" : "text-black"}`}>{data.title}</Link>
                        </NavbarItem>
                    )
                })}
                {/* <Button className="bg-[#407F55] text-white font-semibold mx-10 px-8">Login</Button> */}
                <SignInComponent />
                <Button className="bg-[#FB9C46] text-white font-semibold px-6">Sign Up</Button>
            </NavbarContent>
            <NavbarMenu>
                {navLinks.map((data) => (
                <NavbarMenuItem key={`${data.title}-${data.id}`}>
                    <Link
                        color={data.id === 2 ? "primary" : data.id === menuItems.length - 1 ? "danger" : "foreground"}
                        className="w-full"
                        href="#"
                        size="lg"
                    >
                        {data.title}
                    </Link>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )

}