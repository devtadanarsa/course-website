import {Button} from "@nextui-org/react";
import FormField from "@/components/admin-components/FormFieldComponent";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

export default function AddCourse(){
    const [courseData, setCourseData] = useState({
        title: "",
        shortDescription: "",
        detailedDescription: "",
        estimatedTotalTime: "",
        difficulty: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCourseData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleAddCourse = async () => {
        try{
            const response = await fetch("http://localhost:8000/lessons", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: courseData.title,
                    shortDescription: courseData.shortDescription,
                    detailedDescription: courseData.detailedDescription,
                    estimatedTotalTime: courseData.estimatedTotalTime,
                    difficulty: courseData.difficulty
                }),
            });

            if(response.ok){
                alert("Course added successfully")
            }else{
                const errorMessage = await response.text();
                alert(`Error : ${errorMessage}`);
            }
        }catch(error){
            console.error(`Error : ${error}`);
            alert("An error occurred while adding course");
        }
    }

    return(
        <div className="mx-24">
            <h1 className="text-[30px] font-semibold mt-10">Add Course</h1>
            <div className="mt-6">
                <FormField label="Course Title" type="text" placeholder="Course Title" name="title" onChange={handleChange}/>
                <FormField label="Short Description" type="text" placeholder="Short Description" name="shortDescription" onChange={handleChange}/>
                <FormField label="Detailed Description" type="text" placeholder="Detailed Description" name="detailedDescription" onChange={handleChange}/>
                <FormField label="Estimated Total Time" type="text" placeholder="Estimated Total Time" name="estimatedTotalTime" onChange={handleChange}/>
                <FormField label="Difficulty" type="select" placeholder="Difficulty" name="difficulty" onChange={handleChange}>
                    <option>Pemula</option>
                    <option>Menengah</option>
                    <option>Mahir</option>
                    <option>Profesional</option>
                </FormField>
                <Button radius="sm" color="success" className="mt-5 px-6 text-white" startContent={<FontAwesomeIcon icon={faFloppyDisk} style={{color: "#ffffff",}}/>} onClick={handleAddCourse}>Submit</Button>
            </div>
        </div>
    )
}