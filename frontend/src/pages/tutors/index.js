import NavbarComponent from "@/components/NavbarComponent"
import FooterComponent from "@/components/FooterComponent"
import SearchComponent from "@/components/SearchComponent"
import { tutors } from "@/data/constants";
import { useState } from "react";
import TutorComponent from "@/components/tutor-component/TutorComponent";

export default function Tutors(){
    const [searchInput, setSearchInput] = useState('')
    const [activeTutor, setActiveTutor] = useState(null);

    const handleSearchInputChange = (value) => {
        setSearchInput(value);
    };

    const handleTutorHover = (tutorId) => {
        setActiveTutor(tutorId);
    };

    const handleTutorBlur = () => {
        setActiveTutor(null);
    };

    return(
        <>
            <NavbarComponent page="Find Tutors" />
            <div className="px-10 md:px-24">
                <SearchComponent name="Tutors" onSearchInputChange={handleSearchInputChange}/>
                {tutors.map((data) => {
                    return(
                        <TutorComponent 
                            key={data.id} 
                            name={data.name} 
                            degree={data.degree} 
                            language={data.language} 
                            miniDesc={data.miniDesc} 
                            extraDesc={data.extraDesc} 
                            video={data.video} 
                            isActive={activeTutor == data.id} 
                            onHover={() => handleTutorHover(data.id)}
                            onBlur={handleTutorBlur}
                        />
                    )
                })}

            </div>
            <FooterComponent />
        </>
    )
}