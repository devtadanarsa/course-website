import CourseDetailComponent from "@/components/course-components/CourseDetailComponent"
import NavbarComponent from "@/components/NavbarComponent"
import FooterComponent from "@/components/FooterComponent";
import { courseList } from "@/data/constants"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function LessonDetail(){
    const router = useRouter();
    console.log(router);
    const [lessonID, setLessonID] = useState(router.query.id);

    useEffect(() => {
        setLessonID(router.query.id);
    }, [router.query.id]);

    const selectedLesson = courseList.find((data) => data.id === lessonID);

    return(
        <>
            <NavbarComponent page="Lessons"/>
            {courseList.map((data) => {
                if(data.id == lessonID){
                    return(
                        <CourseDetailComponent key={data.id} title={data.title} rating={data.rating} difficulty={data.difficulty} time={data.time} description={data.description} detailDescription={data.detailDescription} tech={data.tech} total={data.total}/>
                    )
                }
            })}
            <FooterComponent />
        </>
    )
}