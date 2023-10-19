import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

export default function TutorListComponent() {
  const personLogo = <FontAwesomeIcon icon={faPerson} />;
  const starLogo = (
    <FontAwesomeIcon icon={faStar} style={{ color: "#f5ee2e" }} />
  );
  return (
    <Card className="w-[449px] h-[675px]">
      <Image
        alt="nextui logo"
        width={354.05}
        height={206.53}
        radius="sm"
        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
      />
      <CardBody>
        <div>
          <div className="flex space-x-40">
            <div>
              <h1 className="text-[20px] font-bold">Tude Prayatna</h1>
              <h3 className="text-[#979797]">Community Tutor</h3>
            </div>
            <div>
              <p className="text-[14px]">4.9 rating</p>
              <p>
                {starLogo} {starLogo} {starLogo} {starLogo} {starLogo}
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <p className="font-bold pt-4 text-[16px]">Speaks</p>
              <p className="text-[#979797] text-[14px] pb-3">
                English -{" "}
                <span className="text-[#FB9C46] text-[14px]">Native</span>{" "}
                <span className="m-2">|</span>
                Spanish -{" "}
                <span className="text-[#FB9C46] text-[14px]">Native</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-40">
          <div>
            <p className="font-bold text-[14px]">30 Min Trial</p>
            <p className="text-[#979797] text-[14px]">Rp.235.000</p>
          </div>

          <div>
            <p className="font-bold text-[14px]">Hourly Rate Form</p>
            <p className="text-[#979797] text-[14px]">Rp.500.000</p>
          </div>
        </div>

        <div className="border-b-2 pb-4"></div>
        <div className="flex space-x-40 space-y-5">
          <p className="text-[16px] font-bold text-[#FB9C46] pt-5">
            {personLogo} Students
          </p>
          <button className="bg-[#058E6E] px-10 py-2 text-[#FFFFFF] rounded-lg">
            Book
          </button>
        </div>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}
