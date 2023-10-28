import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { courseList } from "@/data/constants";
import { faClock, faStar, faBars } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@nextui-org/react";

export function CourseComponent() {
  const clockLogo = <FontAwesomeIcon icon={faClock} />;
  const starLogo = <FontAwesomeIcon icon={faStar} />;
  const levelLogo = <FontAwesomeIcon icon={faBars} />;

  return (
    <div className="grid grid-cols-3 gap-4 content-start">
      {courseList.map((course) => {
        return (
          <Card className="max-w-[500px] m-[20px] p-[5px]">
            <CardBody>
              <div className="flex gap-3 pb-[20px]">
                <div className="">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    className="w-20 h-20 text-large"
                  />
                </div>
                <div>
                  <h1 className="text-[15px] font-bold font-poppins">
                    {course.title}
                  </h1>
                  <div className="flex gap-5">
                    <p className="text-small font-poppins">
                      {starLogo}
                      {course.time}
                    </p>
                    <p className="text-small font-poppins">
                      {starLogo}
                      {course.id}
                    </p>
                    <p className="text-small font-poppins">
                      {levelLogo}
                      {course.level}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-default-400">{course.desc}</p>
              </div>
            </CardBody>
            <CardFooter>
              <div className="flex gap-6">
                <p>modul</p>
                <p>siswa</p>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
