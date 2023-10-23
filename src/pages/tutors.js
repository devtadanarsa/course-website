import NavbarComponent from "@/components/NavbarComponent"
import FooterComponent from "@/components/FooterComponent"
import SearchComponent from "@/components/SearchComponent"

export default function Tutors(){
    return(
        <>
            <NavbarComponent page="Find Tutors" />
            <div className="px-24">
                <SearchComponent />
            </div>
            <FooterComponent />
        </>
    )
}