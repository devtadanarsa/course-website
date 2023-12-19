import { tutors } from "@/data/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import { NavbarContent, Navbar } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Tab, Tabs } from "@nextui-org/react";
import { Code } from "@nextui-org/react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Tooltip } from "@nextui-org/react";
import LessonCardComponent from "./LessonCardComponent";
import { useEffect, useState } from "react";

export default function TutorProfileComponent(props) {
  const star = <FontAwesomeIcon icon={faStar} />;
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    if (props.pathID !== null && typeof props.pathID !== "undefined") {
      setSelectedKeys([props.pathID.toString()]);
    }
  }, [selectedKeys]);

  console.log(selectedKeys);

  return (
    <div className="px-24 p-[25px]">
      <Tooltip
        placement="right"
        content={
          <Card className="w-[350px]">
            <CardHeader>
              <div className="w-[350px] flex justify-center">
                <iframe
                  src="https://www.youtube.com/embed/ZIR6hUgrv_U"
                  allowFullScreen
                />
              </div>
            </CardHeader>
            <CardBody className="p-[10px]">
              <div className="flex place-content-between">
                <h1 className="text-[20px] font-bold">Lessons</h1>
                <div>
                  <p className="font-semibold">This is</p>
                  <h1 className="text-[20px] font-bold">Sex Education</h1>
                </div>
              </div>
              <Button
                color="warning"
                className="text-white font-semibold mt-[10px]"
              >
                Book Lesson
              </Button>
              <Button className="font-semibold mt-[10px]">Tutor Contact</Button>
            </CardBody>
          </Card>
        }
      >
        <Card className="w-[1000px] h-[400px]">
          <CardHeader className="px-10 pt-10">
            <div className="flex gap-5"></div>
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="/avatars/avatar-1.png"
            />
            <div className="pl-[10px]">
              <h1 className="font-bold text-[20px]">{props.name}</h1>
              <h3 className="text-[12px] font-semibold tracking-tight text-default-400">
                PROFESIONAL PROF
              </h3>
            </div>
          </CardHeader>
          <CardBody>
            <Navbar className="mt-[80px]">
              <NavbarContent>
                <div className="flex w-full flex-col">
                  <Tabs aria-label="Options">
                    <Tab key="aboutMe" title="About Me">
                      <Card className="w-[900px]">
                        <CardBody className="h-[200px]">
                          <h5 className="text-[10px]">From Bali</h5>
                          <h4 className="text-[12px] mb-[10px]">
                            {props.address}
                          </h4>
                          <h1 className="font-bold mb-[10px]">
                            Things About Me
                          </h1>
                          <div className="flex gap-5 mb-[15px]">
                            <h2 className="font-semibold font-arial text-[#6C6C6C] text-small">
                              Interest topic
                            </h2>
                            <Code className="text-[12px] gap-2">Music</Code>
                            <Code className="text-[12px] gap-2">Workout</Code>
                            <Code className="text-[12px] gap-2">Pussy</Code>
                          </div>
                          <p className="font-sans">{props.about}</p>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="teach" title="Me as a Teacher">
                      <Card>
                        <CardBody className="h-[200px]">
                          <h1 className="font-bold">Me as a Teacher</h1>
                          <p className="py-[20px]">
                            I like to surf, i always wanted a kid I like to
                            surf, i always wanted a kid I like to surf, i always
                            wanted a kid I like to surf, i always wanted a kid
                            wanted a kid I like to surf, i always wanted a kid
                            wanted a kid I like to surf, i always wanted a kid
                            wanted a kid I like to surf, i always wanted a kid
                            wanted a kid I like to surf, i always wanted a kid
                          </p>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="myLessons" title="My Lessons">
                      <Card>
                        <CardBody className="h-[200px]">
                          <p>Here are lists of my lessons</p>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </NavbarContent>
            </Navbar>
          </CardBody>
        </Card>
      </Tooltip>
      <div className="mt-[20px]">
        <Card className="w-[1000px]">
          <CardBody className="px-12">
            <div className="flex justify-center gap-[120px] font-bold">
              <div>
                <h1 className="flex justify-center font-bold text-yellow-400">
                  {star}
                  {tutors[0].rating}
                </h1>
                <p className="text-[#808080]">Rating</p>
              </div>
              <div>
                <h1 className="flex justify-center">545</h1>
                <p className="text-[#808080]">Students</p>
              </div>
              <div>
                <h1 className="flex justify-center">4,431</h1>
                <p className="text-[#808080]">Lessons</p>
              </div>
              <div>
                <h1 className="flex justify-center">100%</h1>
                <p className="text-[#808080]">Attendance</p>
              </div>
              <div>
                <h1 className="flex justify-center">99%</h1>
                <p className="text-[#808080]">Response</p>
              </div>
            </div>
            {/* <div className="flex justify-center font-semibold text-[15px] text-[#808080] gap-[110px]"> */}
            {/* </div> */}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
