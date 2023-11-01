import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar, faSignal, faBook, faPerson } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function CourseComponent(props) {
  return (
    <Link href="lessons/1">
      <div className="border-2 rounded-lg w-full xl:w-fit px-5 py-5 hover:scale-105 transition-transform h-[330px]">
        <div className="flex">
          <img src={props.image} className="h-[150px] hidden md:block"/>
          <div className="ml-4 text-[20px] font-semibold">
            <h1>{props.title}</h1>
            <div className="flex mt-2">
              <div className="flex items-center mr-5">
                <FontAwesomeIcon icon={faClock} style={{color: "#00d5ff",}} />
                <p className="text-[15px] ml-2">{`${props.time} jam`}</p>
              </div>
              <div className="flex items-center mr-5">
                <FontAwesomeIcon icon={faStar} style={{color: "#f9d006",}} />
                <p className="text-[15px] ml-2">{props.rating}</p>
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
            <p className="text-[15px] ml-2">{`${props.total} Siswa Terdaftar`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
