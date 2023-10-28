import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons"
import { pemrogramanKotlinCourse } from "@/data/constants"
import Link from "next/link"
import {Accordion, AccordionItem} from "@nextui-org/react";
import { useState, useEffect, React } from "react"

export default function TutorialListComponent(props){
    const [selectedKeys, setSelectedKeys] = useState([]);
    useEffect(() => {
        if (props.pathID !== null) {
            setSelectedKeys([props.pathID.toString()]);
          }
      }, [props.pathID]);

    return(
        <div className="border-l-2 border-[#FB9C46] w-4/12 sticky top-0 max-h-screen overflow-y-auto">
            <h1 className="flex justify-end font-bold text-[20px] pr-4 mt-6 pb-6 border-b-2 border-[#FB9C46] text-[#FB9C46]">Daftar Modul</h1> 
            <div className="ml-6"></div>
            <Accordion selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
                {pemrogramanKotlinCourse.map((data) => {
                    return(
                        <AccordionItem 
                            key={data.id} 
                            title={
                                <span className="text-[#FB9C46] font-semibold">{data.title}</span>
                            }
                        >
                            {data.content.map((value) => {
                                return(
                                    <div className="flex items-center mt-3 ml-8" key={value.id}>
                                        <Link href={`/lessons/1/sublessons/${data.id}/path/${value.id}`} className="flex items-center">
                                            <FontAwesomeIcon icon={((data.id == props.pathID && value.id == props.pathDetailID) ? faCircleSolid : faCircle)} size="2xs" style={{color: "",}} />
                                            <h2 className={`ml-4 text-[17px] ${((data.id == props.pathID) && (value.id == props.pathDetailID)) ? "font-semibold text-[#]" : ""}`}>{value.title}</h2>
                                        </Link>
                                    </div>    
                                )
                            })}
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </div>
    )
}