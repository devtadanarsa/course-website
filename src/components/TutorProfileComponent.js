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
    if (props.pathID !== null && typeof props.pathID !== 'undefined') {
        setSelectedKeys([props.pathID.toString()]);
      }
  }, [props.pathID]);

  console.log(props.pathID);

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
                          <p className="font-sans">
                            {props.about}
                          </p>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="teach" title="Me as a Teacher">
                      <Card>
                        <CardBody className="h-[200px]">
                          Usap air matamu Yang menetes di pipimu Ku pastikan
                          semuanya Akan baik-baik saja Bila kau terus pandangi
                          Langit tinggi di angkasa oh Tak kan ada habisnya Sgala
                          hasrat di dunia Hawa tercipta di dunia Untuk menemani
                          sang Adam Begitu juga dirimu Tercipta tuk temani aku
                          Renungkan sejenak Arti hadirku di sini Jangan pernah
                          ingkari Dirimu adalah wanita Harusnya dirimu menjadi
                          Perhiasan sangkar maduku oh Walaupun kadang diriku
                          Bertekuk lutut di hadapanmu Hawa tercipta di dunia
                          Untuk menemani sang Adam Begitu juga dirimu Tercipta
                          tuk temani aku Harusnya dirimu menjadi Perhiasan
                          sangkar maduku oh Walaupun kadang diriku Bertekuk
                          lutut di hadapanmu Hawa tercipta di dunia Untuk
                          menemani sang Adam Begitu juga dirimu Tercipta tuk
                          temani aku Hawa tercipta di dunia (Hawa tercipta di
                          dunia) Untuk menemani sang Adam (menemani sang Adam)
                          Begitu juga dirimu (begitu juga dirimu) Tercipta tuk
                          temani aku Hawa tercipta di dunia (Hawa tercipta di
                          dunia) Untuk menemani sang Adam (menemani sang Adam)
                          Begitu juga dirimu (begitu juga dirimu) Tercipta tuk
                          temani aku (menemani aku) Bukalah pintu jiwamu Dengar
                          bisikan sanubari Semua adalah isyarat Isyarat dari
                          Sang Pencipta
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="myLessons" title="My Lessons">
                      <Card>
                        <CardBody className="h-[200px]">
                          You know you love me (yo), I know you care (uh-huh)
                          Just shout whenever (yo), and I'll be there (uh-huh)
                          You are my love (yo), you are my heart (uh-huh) And we
                          will never, ever, ever be apart (yo, uh-huh) Are we an
                          item? (Yo) girl, quit playin' (uh-huh) "We're just
                          friends" (yo), what are you sayin'? (Uh-huh) Said,
                          "There's another" (yo), and looked right in my eyes
                          (uh-huh) My first love broke my heart for the first
                          time, and I was like (yo, uh-huh) "Baby, baby, baby,
                          oh" Like, "Baby, baby, baby, no" Like, "Baby, baby,
                          baby, oh" I thought you'd always be mine, mine "Baby,
                          baby, baby, oh" Like, "Baby, baby, baby, no" Like,
                          "Baby, baby, baby, oh" I thought you'd always be mine,
                          mine Oh, for you, I would've done whatever (uh-huh)
                          And I just can't believe we ain't together (yo,
                          uh-huh) And I wanna play it cool (yo), but I'm losin'
                          you (uh-huh) I'll buy you anything (yo), I'll buy you
                          any ring (uh-huh) And I'm in pieces (yo), baby, fix me
                          (uh-huh) And just shake me 'til you wake me from this
                          bad dream (yo, uh-huh) I'm goin' down (oh), down,
                          down, down (uh-huh) And I just can't believe, my first
                          love won't be around, and I'm like "Baby, baby, baby,
                          oh" Like, "Baby, baby, baby, no" Like, "Baby, baby,
                          baby, oh" I thought you'd always be mine, mine "Baby,
                          baby, baby, oh" Like, "Baby, baby, baby, no" Like,
                          "Baby, baby, baby, oh" I thought you'd always be mine,
                          mine (Luda!) When I was 13, I had my first love There
                          was nobody that compared to my baby And nobody came
                          between us, nor could ever come above She had me goin'
                          crazy Oh, I was starstruck She woke me up daily Don't
                          need no Starbucks (woo) She made my heart pound And
                          skip a beat when I see her in the street and At school
                          on the playground But I really wanna see her on the
                          weekend She knows she got me dazin' 'Cause she was so
                          amazin' And now, my heart is breakin' But I just keep
                          on sayin' "Baby, baby, baby, oh" Like, "Baby, baby,
                          baby, no" Like, "Baby, baby, baby, oh" I thought you'd
                          always be mine, mine "Baby, baby, baby, oh" Like,
                          "Baby, baby, baby, no" Like, "Baby, baby, baby, oh" I
                          thought you'd always be mine, mine I'm gone (yeah,
                          yeah, yeah, yeah, yeah, yeah) Now, I'm all gone (yeah,
                          yeah, yeah, yeah, yeah, yeah) Now, I'm all gone (yeah,
                          yeah, yeah, yeah, yeah, yeah) Now, I'm all gone (gone,
                          gone, gone) I'm gone
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
