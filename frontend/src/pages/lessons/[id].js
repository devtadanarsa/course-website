import CourseDetailComponent from "@/components/course-components/CourseDetailComponent"
import NavbarComponent from "@/components/NavbarComponent"
import FooterComponent from "@/components/FooterComponent";
import { courseList } from "@/data/constants"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function LessonDetail(){
    const router = useRouter();
    
    const [lessonId, setLessonId] = useState(null);
    const [courseDetail, setCourseDetail] = useState([]);

    useEffect(() => {
        if (router.query.id) {
            setLessonId(router.query.id);
        }
    }, [router.query.id]);

    const url = `http://localhost:8000/lessons/${lessonId}`;

    const fetchInfo = () => {
        if(lessonId){
            return fetch(url)
                .then((res) => res.json())
                .then((data) => setCourseDetail(data))
        }
    }

    useEffect(() => {
        fetchInfo();
    }, [lessonId]);

    return(
        <>
            <NavbarComponent page="Lessons"/>
            {courseDetail.map((data) => {
                return(
                    <CourseDetailComponent key={data.id} id={data.course_id} title={data.course_title} rating={data.rating} difficulty={data.difficulty} time={data.total_time} description={data.main_description} detailDescription={data.detailed_description} total={data.total_student}/>
                    )
                })}
            <FooterComponent />
        </>
    )
}