import { tutors } from "@/data/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";
import {
  NavbarContent,
  Navbar,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Tab, Tabs } from "@nextui-org/react";
import { Code } from "@nextui-org/react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";

export default function TutorProfileComponent() {
  const star = <FontAwesomeIcon icon={faStar} />;

  const tutorSchedule = () => {
    <p>hi</p>;
  };
  return (
    <div className="px-24 p-[30px]">
      <Tooltip
        placement="right"
        content={
          <div>
            <Image
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <h1>tude pra</h1>
          </div>
        }
      >
        <Card className="w-[1000px] h-[600px]">
          <CardHeader className="px-10 pt-10">
            <div className="flex gap-5"></div>
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="/avatars/avatar-1.png"
            />
            <div className="pl-[10px]">
              <h1 className="font-bold text-[20px]">Tude Prayatna</h1>
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
                            Live in Denpasar, Sesetan
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
                          <p className="font-sans">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                          </p>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="teach" title="Me as a Teacher">
                      <Card>
                        <CardBody className="h-[200px]">
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. I'm patient and supportive. I do know that
                          mistakes are part of the process and I offer a humane
                          approach. I like to have a friendly relationship with
                          my students as long as there's mutual respect. Je suis
                          patiente et vous encourage dans vos efforts. Je sais
                          que les erreurs font partie de l'apprentissage et vous
                          propose une approche humaine dans un cadre détendu.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="myLessons" title="My Lessons">
                      <Card>
                        <CardBody className="h-[200px]">
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum. cjsksjcsjcbsajbcsjkabcbsac. sckskscnnsac
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
            <div className="flex justify-center font-bold text-[25px] gap-[120px]">
              <h1 className="font-bold text-yellow-400">
                {star}
                {tutors[0].rating}
              </h1>
              <h1>545</h1>
              <h1>4,431</h1>
              <h1>100%</h1>
              <h1>99%</h1>
            </div>
            <div className="flex justify-center font-semibold text-[15px] text-[#808080] gap-[110px]">
              <p>Rating</p>
              <p>Students</p>
              <p>Lessons</p>
              <p>Attendance</p>
              <p>Response</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
