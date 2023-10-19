import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/react";
import React from "react";

export default function NavbarComponent(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Home",
        "Lessons",
        "Find Tutors",
        "About Us",
    ];

    return(
        <div className="px-24">
            <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" className="font-poppins pt-6 border-b-2">
                <NavbarContent>
                    <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                    />
                    <NavbarBrand>
                    <p className="font-bold text-inherit">Tutorify</p>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent justify="end" className="font-semibold">
                    {menuItems.map((item, index) => {
                        return(
                            <NavbarItem key={index} className="px-5">
                                <Link href={item} className={`${(item === "Home") ? "text-[#FF922F] border-b-2 border-[#FF922F]" : "text-black"}`}>{item}</Link>
                            </NavbarItem>
                        )
                    })}
                    <Button className="bg-[#407F55] text-white font-semibold mx-10 px-8">Login</Button>
                    <Button className="bg-[#FB9C46] text-white font-semibold px-6">Sign Up</Button>
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                        color={
                            index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                        }
                        className="w-full"
                        href="#"
                        size="lg"
                        >
                        {item}
                        </Link>
                    </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>

        </div>
    )

}