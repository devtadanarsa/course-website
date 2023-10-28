import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/react";
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input} from "@nextui-org/react";
import { navLinks } from "@/data/constants";
import React from "react";
import { useState } from "react";

export default function NavbarComponent(props){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const {onOpen} = useDisclosure();
    const [activePage, setActivePage] = useState(props.page);

    return(
        <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" className="font-poppins pt-6 border-b-2 xl:px-16">
            <NavbarContent>
                <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="xl:hidden"
                />
                <NavbarBrand>
                <p className="font-bold text-inherit">Tutorify</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="end" className="font-semibold hidden xl:flex gap-4">
                {navLinks.map((data) => {
                    return(
                        <NavbarItem key={data.id} className="px-5 hover:scale-110 transition-transform">
                            <Link 
                                href={data.path} 
                                className={`${(data.title === props.page) ? "text-[#FF922F] border-b-2 border-[#FF922F]" : "text-black"}`}>{data.title}</Link>
                        </NavbarItem>
                    )
                })}
                {/* <Button className="bg-[#407F55] text-white font-semibold mx-10 px-8">Login</Button> */}
                <SignInComponent />
                {/* <Button className="bg-[#FB9C46] text-white font-semibold px-6 hover:scale-110">Sign Up</Button> */}
                <SignUpComponent />
            </NavbarContent>
            <NavbarMenu>
                {navLinks.map((data) => (
                    <NavbarMenuItem key={data.id}>
                        <Link className="mt-4 flex justify-center" href={data.path}>
                            {data.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )

}