import AcademiesNavbarComponent from "@/components/course-components/AcademiesNavbarComponent"
import CourseContentComponent from "@/components/course-components/CourseContentComponent";
import CourseContentListComponent from "@/components/course-components/CourseContentListComponent";
import FetchTestComponent from "@/components/course-components/FetchTestComponent";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function AcademiesPage(){
    const [data, setData] = useState(null);
    const router = useRouter();
    const pathID = router.query.slug?.[0];
    const pathSubID = router.query.slug?.[2];
    const pathDetailID = router.query.slug?.[4];
    const url = `http://localhost:8000/lessons/${pathID}/${pathSubID}`;
  
    useEffect(() => {
      const fetchData = async () => {
        if (!isNaN(pathID) && !isNaN(pathSubID)) {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! Status ${response.status}`);
            }
            const data = await response.json();
            setData(data);
          } catch (error) {
            console.error("Error fetching data:", error.message);
          }
        }
      };
  
      fetchData();
    }, [url, pathID, pathSubID]);

    return(
        <div>
            <AcademiesNavbarComponent />
            <div className="flex">
                {/* <CourseContentComponent pathID={pathID} pathSubID={pathSubID} pathDetailID={pathDetailID}/> */}
                <CourseContentComponent chapter={data} pathDetailID={pathDetailID}/>
                <CourseContentListComponent chapter={data} pathID={pathID} pathSubID={pathSubID} pathDetailID={pathDetailID}/>
                {/* <CourseContentListComponent pathID={pathID} pathSubID={pathSubID}  pathDetailID={pathDetailID}/> */}
            </div>
        </div>
    )
}