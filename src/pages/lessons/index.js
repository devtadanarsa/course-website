import NavbarComponent from "@/components/NavbarComponent"
import FooterComponent from "@/components/FooterComponent"
import { CourseComponent } from "@/components/course-components/CourseComponent"
import SearchComponent from "@/components/SearchComponent"
import { courseList } from "@/data/constants"
import { useState } from "react"

export default function LessonsPage(){
    const [searchInput, setSearchInput] = useState('')

    const handleSearchInputChange = (value) => {
        setSearchInput(value);
    };

    return(
        <>
            <NavbarComponent page="Lessons"/>
            <div className="px-10 md:px-24">
                <SearchComponent name="Lessons" onSearchInputChange={handleSearchInputChange}/>
                <div className="grid grid-cols-1 xl:grid-cols-2 mx-8 mt-8 gap-8">
                    {courseList.map((data) => {
                        if(data.title.toLowerCase().includes(searchInput.toLowerCase())){
                            return(
                                <CourseComponent key={data.id} title={data.title} time={data.time} rating={data.rating} difficulty={data.difficulty} description={data.description} module={data.module} total={data.total} image={data.image}/>
                            )
                        }
                        return null;
                    })}
                </div>
            </div>
            <FooterComponent />
        </>
    )
}