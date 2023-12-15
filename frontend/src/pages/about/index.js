import NavbarComponent from "@/components/NavbarComponent"
import FooterComponent from "@/components/FooterComponent"
import AboutComponent from "@/components/about-us/AboutComponent"

export default function AboutUs(){
    return (
        <>
            <NavbarComponent page="About Us"/>
            <AboutComponent />
            <FooterComponent />
        </>
    )
}