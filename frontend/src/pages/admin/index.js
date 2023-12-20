import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonChalkboard, faBook } from "@fortawesome/free-solid-svg-icons"
import { Link } from "@nextui-org/react"

export default function AdminPage(){
    return(
        <div className="flex items-center justify-center gap-8 font-semibold mt-12">
            <Link href="/admin/course" className="flex shrink-0">
                <div className="flex justify-between items-center bg-[#1AA184] text-white w-[400px] h-[200px] px-20">
                    <h1 className="text-[25px]">Control Course</h1>
                    <FontAwesomeIcon icon={faBook} size="2xl" style={{color: "#ffffff",}} />
                </div>
            </Link>
            <Link href="/admin/tutors">
                <div className="flex justify-between items-center bg-[#DE5249] text-white w-[400px] h-[200px] px-20">
                    <h1 className="text-[25px]">Control Tutors</h1>
                    <FontAwesomeIcon icon={faPersonChalkboard} size="2xl" style={{color: "#ffffff",}} />
                </div>
            </Link>
        </div>
    )
}