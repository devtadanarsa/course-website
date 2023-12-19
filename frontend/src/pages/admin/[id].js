import FormField from "@/components/admin-components/FormFieldComponent"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import {Button} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function EditCourse(){
    const router = useRouter();

    const [courseData, setCourseData] = useState(null);
    const [chapterData, setChapterData] = useState(null);
    const [courseId, setCourseId] = useState(null);

    const [courseTitle, setCourseTitle] = useState("");
    const [mainDescripton, setMainDescription] = useState("");
    const [detailedDescription, setDetailedDescription] = useState("");
    const [estimatedTotalTime, setEstimatedTotalTime] = useState("");
    const [difficulty, setDifficulty] = useState("");

    useEffect(() => {
        if(router.query.id){
            setCourseId(router.query.id);
        }
    }, [router.query.id]);
    
    const url = `http://localhost:8000/lessons/${courseId}`;
    const chapterUrl = `http://localhost:8000/lessons/${courseId}/1`;

    const fetchInfo = () => {
        if(courseId){
            return fetch(url)
                .then((res) => res.json()) 
                .then((data) => {
                    setCourseData(data);
                    setCourseTitle(data.length > 0 ? data[0].course_title : "");
                    setMainDescription(data.length > 0 ? data[0].main_description : "");
                    setDetailedDescription(data.length > 0 ? data[0].detailed_description : "");
                    setEstimatedTotalTime(data.length > 0 ? data[0].total_time : "");
                    setDifficulty(data.length > 0 ? data[0].difficulty : "");
                })
        }
    }

    const chapterFetchInfo = () => {
        if(courseId){
            return fetch(chapterUrl)
                .then((res) => res.json())
                .then((data) => {
                    setChapterData(data);
                })
        }
    }

    const handleEditCourse = async () => {
        try{
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: courseTitle,
                    shortDescription: mainDescripton,
                    detailedDescription: detailedDescription,
                    estimatedTotalTime: estimatedTotalTime,
                    difficulty: difficulty
                }),
            });

            if(response.ok){
                alert("Course edited successfully");
            }else{
                const errorMessage = await response.text();
                alert(`Error : ${errorMessage}`);
            }
        }catch(error){
            console.error(`Error : ${error}`);
            alert("An error occurred while editing course");
        }
    }
    
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        if(name === "courseTitle"){
            setCourseTitle(e.target.value);
        }else if(name === "mainDescription"){
            setMainDescription(e.target.value);
        }else if(name === "detailedDescription"){
            setDetailedDescription(e.target.value);
        }else if(name === "estimatedTotalTime"){
            setEstimatedTotalTime(e.target.value);
        }
    }

    useEffect(() => {
        fetchInfo();
        chapterFetchInfo();
    }, [courseId]);


    return(
        <main className="mx-24">
            <section>
                <h1 className="text-[30px] font-semibold mt-10 mb-6">Edit Course</h1>
                <div>
                    {courseData && (
                        <>
                            <FormField name="courseTitle" label="Course Title" type="text" placeholder="Course Title" value={courseTitle || ""} onChange={handleInputChange}/>
                            <FormField name="mainDescription" label="Main Description" type="text" placeholder="Main Description" value={mainDescripton || ""} onChange={handleInputChange}/>
                            <FormField name="detailedDescription" label="Detailed Description" type="text" placeholder="Detailed Description" value={detailedDescription || ""} onChange={handleInputChange}/>
                            <FormField name="estimatedTotalTime" label="Estimated Total Time" type="text" placeholder="Estimated Total TIme" value={estimatedTotalTime || ""} onChange={handleInputChange}/>
                            <FormField label="Difficulty" type="select" placeholder="Difficulty" name="difficulty" value={difficulty} onChange={handleInputChange}>
                                {["Pemula", "Menengah", "Mahir", "Profesional"].map((option) => {
                                    return(
                                    <option key={option} value={option} selected={option === difficulty}>
                                        {option}
                                    </option>
                                    )
                                })}
                            </FormField>
                            <Button radius="sm" color="success" className="mt-5 px-6 text-white" startContent={<FontAwesomeIcon icon={faFloppyDisk} style={{color: "#ffffff",}}/>} onClick={handleEditCourse}>Save</Button>
                        </>
                    )}
                </div>
            </section>
            <section>
                <h1 className="text-[30px] font-semibold mt-10 mb-6">Course Chapter</h1>
                {chapterData && (
                    <>
                        <table className="w-full">
                            {chapterData.map((chapter) => {
                                return(
                                    <>
                                        <thead>
                                            <tr>
                                                <th className="border py-5 text-[20px] text-left pl-4" colSpan="4">Chapter : {chapter.chapter_title}</th>
                                            </tr>
                                            <tr>
                                                <th className="border py-2">No</th>
                                                <th className="border">Content Name</th>
                                                <th className="border">Video Link</th>
                                                <th className="border">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {chapter.content.map((data) => {
                                                return(
                                                    <tr key={data.id}>
                                                        <td className="text-center border">{data.id}</td>
                                                        <td className="border text-left pl-3">{data.name}</td>
                                                        <td className="border text-left pl-3">{data.link}</td>
                                                        <td className="border text-center py-2">
                                                            <div>
                                                            <Button color="danger" className="text-white" isIconOnly startContent={<FontAwesomeIcon icon={faTrash} style={{color: "#ffffff",}}/>} onClick={() => deleteCourse(data.course_id)}/>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </>
                                )
                            })}
                        </table>
                    </>
                )}
            </section>
        </main>
    )
}