import AcademiesNavbarComponent from "@/components/course-components/AcademiesNavbarComponent"
import CourseContentComponent from "@/components/course-components/CourseContentComponent";
import CourseContentListComponent from "@/components/course-components/CourseContentListComponent";
import { useRouter } from "next/router";

export default function AcademiesPage(){
    const router = useRouter();
    const pathID = router.query.slug && Array.isArray(router.query.slug) ? router.query.slug[0] : null;
    const pathSubID = router.query.slug && Array.isArray(router.query.slug) ? router.query.slug[2] : null;
    const pathDetailID = router.query.slug && Array.isArray(router.query.slug) ? router.query.slug[4] : null;
    console.log(router);

    return(
        <div>
            <AcademiesNavbarComponent />
            <div className="flex">
                <CourseContentComponent pathID={pathID} pathSubID={pathSubID} pathDetailID={pathDetailID}/>
                <CourseContentListComponent pathID={pathID} pathSubID={pathSubID}  pathDetailID={pathDetailID}/>
            </div>
        </div>
    )
}