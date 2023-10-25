import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function AcademiesNavbarComponent(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return(
        <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" className="font-poppins pt-6 border-b-2 border-[#FB9C46] px-16 text-[#FB9C46]">
            <NavbarContent>
                <NavbarBrand className="cursor-pointer">
                    <FontAwesomeIcon icon={faArrowLeft} style={{color: "#FB9C46",}} />
                    <Link className="font-bold text-inherit ml-6" href="/">Memulai Pemrograman dengan Kotlin</Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="end" className="font-semibold hidden sm:flex gap-4">
                <div className="flex items-center border-2 border-[#FB9C46] pl-5 rounded-2xl">
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#FB9C46",}} />
                    <input className="rounded-2xl pl-3 py-2 focus:outline-none placeholder-[#FB9C46] font-regular" placeholder="Search"/>
                </div>
            </NavbarContent>
        </Navbar>
    )
}