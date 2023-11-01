import { pemrogramanKotlinCourse } from "@/data/constants"

export default function TutorialsComponent(props){
    return(
        <div className="mx-24 mt-8 w-8/12 h-screen">
            {pemrogramanKotlinCourse.map((data) => (
                data.content.map((value) => {
                    if(data.id == props.pathID && value.id == props.pathDetailID){
                        return (
                            <>
                                <h1 className="flex justify-center font-bold text-[30px] text-black mb-5">{value.title}</h1>
                                <div key={value.id} className="w-full h-3/4 border-[12px]">
                                    <iframe key={value.id} src={value.link} className="w-full h-full" allowFullScreen/>
                                </div>
                            </>
                        )
                    }
                    return null;
                })
            ))}
        </div>
    )
}