import NavbarComponent from "@/components/NavbarComponent"
import FooterComponent from "@/components/FooterComponent"
import { CourseComponent } from "@/components/course-components/CourseComponent"
import SearchComponent from "@/components/SearchComponent"
import { courseList } from "@/data/constants"
import { useState, useEffect } from "react"

export default function LessonsPage(){
    const url = "http://localhost:8000/lessons";
    const [course, setCourse] = useState([]);

    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((data) => setCourse(data))
    }

    useEffect(() => {
        fetchInfo();
    }, []);


    const [searchInput, setSearchInput] = useState('')

    const handleSearchInputChange = (value) => {
        setSearchInput(value);
    };

    return(
        <>
            <NavbarComponent page="Lessons"/>
            <div className="px-10 md:px-24">
                <SearchComponent name="Lessons" onSearchInputChange={handleSearchInputChange}/>
                <div className="grid grid-cols-1 xl:grid-cols-2 mx-8 mt-8 gap-4">
                    {course.map((data) => {
                        if(data.course_title.toLowerCase().includes(searchInput.toLowerCase())){
                            return(
                                <div key={data.id} className="w-[600px]">
                                    <CourseComponent id={data.course_id} title={data.course_title} time={data.total_time} difficulty={data.difficulty} description={data.main_description} module={data.total_module} total={data.total_student} image={"/images/kotlin-course.jpg"}/>
                                </div>
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