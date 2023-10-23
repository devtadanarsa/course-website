import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

export default function TutorListComponent() {
  const personLogo = <FontAwesomeIcon icon={faPerson} />;
  const starLogo = (
    <FontAwesomeIcon icon={faStar} style={{ color: "#fff70f" }} />
  );
  const tutors = [
    "Tude Prayatna",
    "Devta Danarsa",
    "Ayu Aprilia",
    "Putra WIjaya",
    "Pevita Pearce",
  ];
  const navbarItem = ["Profile", "Schedule"];
  return (
    <div className="max-w-[900px] px-24">
      {tutors.map((data) => {
        return (
          <div className="flex space-x-2 space-y-2">
            <div>
              <Card className="w-[449px] h-[675px] justify-center">
                <div className="flex justify-center">
                  <Image
                    alt="nextui logo"
                    width={354.05}
                    height={206.53}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  />
                </div>
                <CardBody>
                  <div>
                    <div className="flex space-x-40">
                      <div>
                        <h1 className="text-[20px] font-bold">{data}</h1>
                        <h3 className="text-[#979797]">Community Tutor</h3>
                      </div>
                      <div>
                        <p className="text-[14px]">4.9 rating</p>
                        <p className="">
                          {starLogo} {starLogo} {starLogo} {starLogo} {starLogo}
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div>
                        <p className="font-bold pt-4 text-[16px]">Speaks</p>
                        <p className="text-[#979797] text-[14px] pb-3">
                          English -{" "}
                          <span className="text-[#FB9C46] text-[14px]">
                            Native
                          </span>{" "}
                          <span className="m-2">|</span>
                          Spanish -{" "}
                          <span className="text-[#FB9C46] text-[14px]">
                            Native
                          </span>
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
              </Card>
            </div>
            <div>
              <Card className="w-[449px] h-[675px]">
                <Navbar className="font-poppins pt-6 border-b-2">
                  <NavbarContent
                    justify="center"
                    className="font-semibold mx-[90px]"
                  >
                    {navbarItem.map((item, index) => {
                      return (
                        <NavbarItem key={index} className="px-5">
                          <Link
                            href={item}
                            className={`${
                              item === "Profile"
                                ? "text-[#FF922F] border-b-2 border-[#FF922F]"
                                : "text-[#979797]"
                            }`}
                          >
                            {item}
                          </Link>
                        </NavbarItem>
                      );
                    })}
                  </NavbarContent>
                </Navbar>
                <div className="flex justify-center">
                  <Image
                    alt="nextui logo"
                    width={354.05}
                    height={206.53}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  />
                </div>
                <CardBody className="px-12">
                  <h1 className="font-poppins font-semibold">Description</h1>
                  <p className="font-[14px] text-[#979797]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Feugiat aliquam integer sit mauris sit. Pellentesque urna,
                    adipiscing at aliquam tempor non. Lectus bibendum
                    sollicitudin aliquet id...
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
}
