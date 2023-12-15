import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import {Accordion, AccordionItem} from "@nextui-org/react";
import { useState, useEffect, React } from "react"

export default function CourseContentListComponent(props){
    const [selectedKeys, setSelectedKeys] = useState([]);
    useEffect(() => {
        if (props.pathID !== null && props.pathID !== undefined) {
            setSelectedKeys([props.pathID.toString()]);
          }
      }, [props.pathID]);

    return(
        <div className="border-l-2 w-4/12 sticky top-0 max-h-screen overflow-y-auto">
            <h1 className="flex justify-end font-bold text-[20px] pr-4 mt-6 pb-6 border-b-2">Daftar Modul</h1> 
            <Accordion selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
                {props.chapter && props.chapter.map((data) => {
                    return(
                        <AccordionItem key={data.chapter_id} title={<span className="font-semibold">{data.chapter_title}</span>}>
                            {data.content.map((value) => {
                                return(
                                    <div className="flex items-center mt-3 ml-8" key={value.id}>
                                        <Link href={`/lessons/${props.pathID}/sublessons/${data.chapter_id}/path/${value.id}`} className="flex items-center">
                                            <FontAwesomeIcon icon={((value.id == props.pathDetailID) ? faCircleSolid : faCircle)} size="2xs" style={{color: "",}} />
                                            <h2 className={`ml-4 text-[17px] ${(value.id == props.pathDetailID) ? "font-semibold text-[#]" : ""}`}>{value.name}</h2>
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