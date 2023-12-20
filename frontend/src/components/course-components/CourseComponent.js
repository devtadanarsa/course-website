import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar, faSignal, faBook, faPerson } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

/*
  This component is used in page : lessons/index.js
  Used to show the course briefly
*/
export function CourseComponent(props) {
  // Formatting number to have dots if the number over thousands (ex : 1.000)
  const formattedTotal = props.total.toLocaleString('en-US').replace(/,/g, '.');

  return (
    <Link href={`lessons/${props.id}`}>
      <div className="border-2 rounded-lg w-full px-5 py-5 hover:scale-105 transition-transform h-[330px]">
        <div className="flex">
          <Image src={props.image} height={150} width={150} alt="course-image" className="hidden md:block"/>
          <div className="ml-4 text-[20px] font-semibold">
            <h1>{props.title}</h1>
            <div className="flex mt-2">
              <div className="flex items-center mr-5">
                <FontAwesomeIcon icon={faClock} style={{color: "#00d5ff",}} />
                <p className="text-[15px] ml-2">{`${props.time} jam`}</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faSignal} style={{color: "#005eff",}} />
                <p className="text-[15px] ml-2">{props.difficulty}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="max-w-[535px] mt-4">{props.description}</p>
        <div className="flex mt-7">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBook} style={{color: "#586274",}} />
            <p className="text-[15px] ml-2">{`${props.module} Modul`}</p>
          </div>
          <div className="flex items-center ml-5">
            <FontAwesomeIcon icon={faPerson} style={{color: "#586274",}} />
            <p className="text-[15px] ml-2">{`${formattedTotal} Siswa Terdaftar`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
