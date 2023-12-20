import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function AdminPage(){
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

    const deleteCourse = async (courseId) => {
        try{
            const response = await fetch(`${url}/${courseId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if(response.ok){
                alert("Course deleted successfully");
                fetchInfo();
            }else{
                const errorMessage = await response.text();
                alert(`Error : ${errorMessage}`);
            }
        }catch(error){
            console.error(`Error : ${error}`);
            alert("An error occured while deleting the course");
        }
    }


    return(
        <div className="mx-24 mt-12">
            <Link href="/admin/course/add-course">
                <Button color="success" radius="sm" className="text-white" startContent={<FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} />}>Add Course</Button>
            </Link>
            <table className="w-full mt-4">
                <thead>
                    <tr>
                        <th className="border py-4">No</th>
                        <th className="border">Course Name</th>
                        <th className="border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {course.map((data, index) => {
                        return(
                            <tr key={data.id}>
                                <td className="border text-center py-4">{index + 1}</td>
                                <td className="border px-4">{data.course_title}</td>
                                <td className="border px-4 w-1/6">
                                    <div className="flex justify-center gap-4">
                                        <Link href={`/admin/course/${data.course_id}`}>
                                            <Button color="warning" className="text-white" startContent={<FontAwesomeIcon icon={faPen} style={{color: "#ffffff",}}/>}>
                                                Edit
                                            </Button>
                                        </Link>
                                        <Button color="danger" className="text-white" startContent={<FontAwesomeIcon icon={faTrash} style={{color: "#ffffff",}}/>} onClick={() => deleteCourse(data.course_id)}>
                                            Delete
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}