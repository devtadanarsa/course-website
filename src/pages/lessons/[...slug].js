import AcademiesNavbarComponent from "@/components/AcademiesNavbarComponent"
import TutorialsComponent from "@/components/TutorialsComponent"
import TutorialListComponent from "@/components/TutorialListComponent"
import { useRouter } from "next/router";

export default function AcademiesPage(){
    const router = useRouter();
    const lessonsID = router.query.slug && Array.isArray(router.query.slug) ? router.query.slug[0] : null;
    const pathID = router.query.slug && Array.isArray(router.query.slug) ? router.query.slug[2] : null;
    const pathDetailID = router.query.slug && Array.isArray(router.query.slug) ? router.query.slug[4] : null;
    console.log(router);

    return(
        <div>
            <AcademiesNavbarComponent />
            <div className="flex">
                <TutorialsComponent pathID={pathID} pathDetailID={pathDetailID}/>
                <TutorialListComponent pathID={pathID} pathDetailID={pathDetailID}/>
            </div>
        </div>
    )
}