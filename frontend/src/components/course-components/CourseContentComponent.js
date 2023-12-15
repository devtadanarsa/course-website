import { courseList } from "@/data/constants";

/* 
    This component is used in page : lessons/[...slug].js
    Used to showing the iframe content of a lesson

    TASK : 
    FETCH REST API
*/

export default function CourseContentComponent(props){
    return(
        <div className="mx-24 mt-8 w-8/12 h-screen">
            {courseList.map((course) => {
                if(course.id == props.pathID){
                    return course.courseContent.map((data) => {
                        return data.content.map((value) => {
                            if(data.id == props.pathSubID && value.id == props.pathDetailID){
                                return(
                                    <>
                                        <h1 className="flex justify-center font-bold text-[30px] text-black mb-5">{value.title}</h1>
                                        <div key={value.id} className="w-full h-3/4 border-[12px]">
                                            <iframe key={value.id} src={value.link} className="w-full h-full" allowFullScreen/>
                                        </div>
                                    </>
                                )
                            }
                        })
                    })
                }
            })}
        </div>
    )
}