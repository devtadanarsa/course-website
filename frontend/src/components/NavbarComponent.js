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
        <Navbar onMenuOpenChange={setIsMenuOpen} style={{margin: 0, padding: 0}} maxWidth="full" className="font-poppins pt-6 border-b-2 sm:px-8 lg:px-16">
            <NavbarContent>
                <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
                />
                <NavbarBrand>
                <p className="font-bold text-inherit hidden md:block">DaCourse</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="end" className="font-semibold hidden sm:flex sm:gap-2 lg:gap-4">
                {navLinks.map((data) => {
                    return(
                        <NavbarItem key={data.id} className="pr-2 lg:px-5 hover:scale-110 transition-transform">
                            <Link 
                                href={data.path} 
                                className={`${(data.title === props.page) ? "text-[#FF922F] border-b-2 border-[#FF922F]" : "text-black"}`}>{data.title}</Link>
                        </NavbarItem>
                    )
                })}
                <SignInComponent />
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