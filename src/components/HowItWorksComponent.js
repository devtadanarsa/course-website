import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function HowItWorksComponent() {
  const userLogo = <FontAwesomeIcon icon={faUser} />;
  return (
    <div>
      <div className="font-poppins">
        <h1 className="font-[600] text-[36px] text-[#393939] leading-[68px]">
          Here's how it <span className="text-[#FB9C46]">works</span>
        </h1>
        <p className="text-[#6C6C6C] text-[18px] w-[540px] h-[89px] leading-[28.8px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
          habitant a tincidunt cras accumsan integer suscipit. Libero accumsan
          eget aliquet.
        </p>
      </div>

      <div>
        <Card className="w-[600px] h-[86px] my-[25px] shadow-md shadow-[#FB9C46]">
          <CardBody>
            <div className="flex">
              <div>
                <span className="mr-[70px] h-[45px] w-[45px]">{userLogo}</span>
              </div>
              <div>
                <h1 className="text-[#FB9C46] text-[18px]">Find a tutor</h1>
                <p className="font-poppins text-[15px] text-[#393939]">
                  Choose your ideal teacher from over 10,000 qualified language
                  tutors.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card className="w-[600px] h-[86px] my-[25px] shadow-md shadow-[#FB9C46]">
          <CardBody>
            <div className="flex">
              <div>
                <span className="mr-[70px] h-[45px] w-[45px]">{userLogo}</span>
              </div>
              <div>
                <h1 className="text-[#FB9C46] text-[18px]">Book a lesson</h1>
                <p className="font-poppins text-[15px] text-[#393939]">
                  Choose your ideal teacher from over 10,000 qualified language
                  tutors.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card className="w-[600px] h-[86px] my-[25px] shadow-md shadow-[#FB9C46]">
          <CardBody>
            <div className="flex">
              <div>
                <span className="mr-[70px] h-[45px] w-[45px]">{userLogo}</span>
              </div>
              <div>
                <h1 className="text-[#FB9C46] text-[18px]">Start learning</h1>
                <p className="font-poppins text-[15px] text-[#393939]">
                  Choose your ideal teacher from over 10,000 qualified language
                  tutors.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
