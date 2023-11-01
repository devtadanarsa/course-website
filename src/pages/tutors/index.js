import NavbarComponent from "@/components/NavbarComponent"
import FooterComponent from "@/components/FooterComponent"
import SearchComponent from "@/components/SearchComponent"
import TutorListComponent from "@/components/TutorListComponent";
import { tutors } from "@/data/constants";
import { useState } from "react";

export default function Tutors(){
    const [searchInput, setSearchInput] = useState('')

    const handleSearchInputChange = (value) => {
        setSearchInput(value);
    };

    return(
        <>
            <NavbarComponent page="Find Tutors" />
            <div className="px-10 md:px-24">
                <SearchComponent name="Tutors" onSearchInputChange={handleSearchInputChange}/>
                <div className="grid grid-cols-3 gap-8 mx-5">
                    {/* {tutors.map((data) => {
                        return(
                            <TutorListComponent name={data.name} social={data.social} key={data.id} personality={data.personality} price={data.price} desc={data.desc} id={data.id}/>
                        )
                    })}
                    {tutors.map((data) => {
                        return(
                            <TutorListComponent name={data.name} social={data.social} key={data.id} personality={data.personality} price={data.price} desc={data.desc} id={data.id}/>
                        )
                    })}
                    {tutors.map((data) => {
                        return(
                            <TutorListComponent name={data.name} social={data.social} key={data.id} personality={data.personality} price={data.price} desc={data.desc} id={data.id}/>
                        )
                    })} */}
                    {
                        tutors.map((data) => {
                            if(data.name.toLowerCase().includes(searchInput.toLowerCase())){
                                return(
                                    <TutorListComponent name={data.name} social={data.social} key={data.id} personality={data.personality} price={data.price} desc={data.desc} id={data.id}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <FooterComponent />
        </>
    )
}