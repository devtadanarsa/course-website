import { Card, CardHeader, Chip, Divider } from "@nextui-org/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { CardBody, Button, ScrollShadow, Textarea } from "@nextui-org/react";

export default function CourseDetailComponent() {
  const labelList = [
    "Sertifikat",
    "Pengalaman",
    "Rumah",
    "Motor",
    "Anjing",
    "Pacar",
    "KOntol",
    "Praytna",
    "Studio",
    "e",
    "tes",
  ];
  return (
    <div className="">
      <div className="px-24 py-10">
        <Card>
          <CardBody className="flex gap-5 px-24 py-10 h-fit">
            <div className="flex gap-5">
              <div className="">
                <h5 className="font-semibold text-[#F59E0B]">
                  <FontAwesomeIcon icon={faStar} /> 5.0
                </h5>
                <h1 className="font-bold text-[30px] mb-[10px] font-poppins">
                  Belajar Analisis Data dengan React
                </h1>
                <h5 className="text-[20px] font-poppins font-semibold">
                  Teknologi:{" "}
                  <Chip
                    className="border-black ml-[5px] font-poppins"
                    variant="bordered"
                  >
                    Data
                  </Chip>
                </h5>
                <div className="flex mt-[18px]">
                  <div className="flex gap-1 text-[20px]">
                    <h5 className="">
                      <FontAwesomeIcon
                        icon={faBars}
                        style={{ color: "#337eff" }}
                      />
                    </h5>
                    <Tooltip
                      content={
                        <div>
                          <h1 className="font-bold">Level Pemula</h1>
                          <p>Mempelajari mengenai topik dasar dan lain-lain</p>
                        </div>
                      }
                      closeDelay={1000}
                      placement="right"
                      showArrow={true}
                    >
                      <h5 className="underline underline-offset-2 cursor-pointer font-poppins text-[#808080]">
                        Level: Pemula
                      </h5>
                    </Tooltip>
                    <div className="flex gap-1 ml-[15px] text-[#808080]">
                      <h5>
                        <FontAwesomeIcon icon={faClock} />
                      </h5>
                      <h5 className="font-poppins">24 Jam Belajar</h5>
                    </div>
                  </div>
                </div>
                <h1 className="w-[650px] mt-[20px] text-small text-[#808080]">
                  Pelajari berbagai konsep dasar analisis data beserta
                  tahapannya, dilengkapi pembahasan studi kasus menggunakan
                  bahasa pemrograman Python.
                </h1>
              </div>
              <div className="ml-[40px]">
                <Card className="w-[300px] h-fit shadow shadow-lg">
                  <CardBody className="p-[30px]">
                    <button className="mb-[10px] place-items-streth p-[5px] bg-[#F59E0B] text-white font-semibold">
                      Belajar Sekarang
                    </button>
                    <hr className="mb-[10px]" />
                    <Button className="mb-[10px] font-semibold">
                      Lihat Kelas
                    </Button>
                    <Button className="mb-[10px] font-semibold">
                      Lihat Cewek
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="px-24 py-10">
        <h1 className="text-[30px] font-semibold mb-[10px]">
          What will you get
        </h1>
        <div className="flex">
          <ScrollShadow
            hideScrollBar
            offset={100}
            size={40}
            orientation="horizontal"
            className="flex gap-3"
            style={{ width: "100%", overflowX: "auto" }}
          >
            {labelList.map((label) => (
              // <Textarea
              //   isReadOnly
              //   label={label}
              //   labelPlacement="inside"
              //   defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
              //   className="flex gap-3 max-w-xs"
              // />
              <div
                key={label}
                style={{ flex: "0 0 auto", minWidth: "50px" }}
                className=""
              >
                <Card className="w-[400px] h-[100px] border border-[#808080]">
                  <CardHeader>
                    <h1 className="font-semibold">{label}</h1>
                  </CardHeader>
                  <CardBody className="">
                    <p>very cool right</p>
                  </CardBody>
                </Card>
              </div>
            ))}
          </ScrollShadow>
        </div>
      </div>
    </div>
  );
}
