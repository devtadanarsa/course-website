import { tutors } from "@/data/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import { NavbarContent, Navbar } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Tab, Tabs } from "@nextui-org/react";
import { Code } from "@nextui-org/react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Tooltip } from "@nextui-org/react";

export default function TutorProfileComponent() {
  const star = <FontAwesomeIcon icon={faStar} />;

  return (
    <div className="">
      <Tooltip
        placement="right"
        content={
          <Card className="w-[350px]">
            <CardHeader>
              <div className="w-[350px] flex justify-center">
                <iframe
                  src="https://www.youtube.com/embed/bMknfKXIFA8"
                  allowFullScreen
                />
              </div>
            </CardHeader>
            <CardBody className="p-[10px] shadow shadow-none">
              <div className="flex place-content-between">
                <h1 className="text-[20px] font-bold">Lessons</h1>
                <div>
                  <p className="text-small">this is</p>
                  <h1 className="text-[20px] font-bold">Learn React</h1>
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
              src="/images/ayuAprilia.jpg"
            />
            <div className="pl-[10px]">
              <h1 className="font-bold text-[20px]">{tutors[0].name}</h1>
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
                            I have taught over 23,300 English lessons online. I
                            have also taught English as a second language at the
                            Russian-Armenian University and the American
                            University of Armenia.
                          </p>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="teach" title="Me as a Teacher">
                      <Card>
                        <CardBody className="h-[200px] text-justify">
                          <h1 className="font-semibold text-md">
                            Me as a Teacher
                          </h1>
                          <p className="text-small">
                            As a programmer teacher, you are a beacon of
                            knowledge, guiding aspiring coders through the
                            intricate world of programming. You ignite the spark
                            of curiosity and nurture the passion for innovation,
                            empowering individuals to transform their ideas into
                            tangible creations. With patience and expertise, you
                            unravel the complexities of code, transforming
                            daunting syntax into a language of possibilities.
                            Your lessons extend beyond mere technical skills;
                            you instill the confidence and problem-solving
                            mindset that empowers your students to become
                            architects of the digital realm. Through your
                            dedication, you cultivate a generation of tech-savvy
                            individuals, poised to shape the future with their
                            ingenuity.
                          </p>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="myLessons" title="My Lessons">
                      <Card>
                        <CardBody className="h-[200px]">
                          <h1 className="font-bold">My Lessons</h1>
                          <p className="text-small">
                            Coding challenges: You can give your students coding
                            challenges to solve, either individually or in
                            groups. This is a great way to help them practice
                            their coding skills and to learn new concepts.
                            Software development projects: You can have your
                            students work on software development projects, such
                            as building a website or a mobile app. This is a
                            great way to help them learn the entire software
                            development process, from ideation to deployment.
                            Games: You can use coding games to help your
                            students learn programming concepts in a fun and
                            engaging way. There are many different coding games
                            available online and in app stores. Real-world
                            problems: You can challenge your students to solve
                            real-world problems using coding. This is a great
                            way to help them see how coding can be used to make
                            a difference in the world.
                          </p>
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
