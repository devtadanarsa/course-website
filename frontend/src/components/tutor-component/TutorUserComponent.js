import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import UpdateTutorComponent from "./UpdateTutorComponent";

export default function TutorUserComponent(props){
    const [showMore, setShowMore] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseInIframe, setIsMouseInIframe] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleIframeMouseEnter = () => {
    setIsMouseInIframe(true);
  };

  const handleIframeMouseLeave = () => {
    setIsMouseInIframe(false);
  };


  return (
    <div
      className={`flex mt-12`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex border-2 rounded-md px-5 py-3 w-fit w-3/4 hover:border-[#FB9C46]">
        <img
          src={props.imagePath || "/images/default.png"}
          className="h-[180px] w-[200px]"
        />
        <div className="ml-5">
          <h1 className="text-[20px] font-semibold">{props.name}</h1>
          <div className="mt-4">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faGraduationCap}
                style={{ color: "#4D4C5C" }}
              />
              <p className="text-[#4D4C5C] ml-3">{props.degree}</p>
            </div>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faLanguage} style={{ color: "#4D4C5C" }} />
              <p className="text-[#4D4C5C] ml-3">{`Speaks ${props.language} (Native)`}</p>
            </div>
            <div className="mt-5 max-w-[400px] mr-12">
              {showMore ? (
                <>
                  {`${props.miniDesc} ${props.extraDesc}`}
                  <br />
                  <Button
                    className="text-black font-semibold underline bg-transprent px-0 py-0"
                    onClick={toggleShowMore}
                  >
                    Hide Details
                  </Button>
                </>
              ) : (
                <>
                  {`${props.miniDesc}`}
                  <br />
                  <Button
                    className="text-black font-semibold underline bg-transprent px-0 py-0"
                    onClick={toggleShowMore}
                  >
                    Read more
                  </Button>
                </>
              )}
              <div></div>
            </div>
          </div>
        </div>
        <div className="font-semibold bottom-0 relative mt-28 ">
          <Button className="h-[50px] w-[220px] bg-[#FB9C46] text-white">
            <a  href="https://api.whatsapp.com/send?phone=6287785533382">Book Trial Lessons</a>
          </Button>
          <br />
        </div>
      </div>
      {isHovered && (
        <div
          className="ml-4 w-1/4"
          onMouseEnter={handleIframeMouseEnter}
          onMouseLeave={handleIframeMouseLeave}
        >
          <iframe
            src={props.video}
            className="h-[200px] w-[310px] rounded-lg"
          />
          <Button className="w-[310px] mt-4 h-[50px] bg-transparent border-2 border-[#FB9C46] font-semibold text-[#FB9C46]">
            View Details
          </Button>
        </div>
      )}
    </div>
  );
}