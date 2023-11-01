import { Card, CardHeader, Chip, Divider } from "@nextui-org/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { CardBody, Button, ScrollShadow, Textarea } from "@nextui-org/react";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function CourseDetailComponent(props) {

  const labelList = [
    {
      id: 1,
      label: "Sertifikat",
      desc: "Dapatkan sertifikat standar Industri setelah menyelesaikan kelas ini."
    },
    {
      id: 2,
      label: "Code Review",
      desc: "Kode yang anda kerjakan akan di review secara Komprehensif oleh Reviewer."
    },
    {
      id: 3,
      label: "Forum Diskusi",
      desc: "Diskusikan materi belajar dengan siswa lainnya."
    },
    {
      id: 4,
      label: "Modul Tutorial",
      desc: "Materi bacaan elektronik disajikan dengan bahasa yang mudah dipahami."
    },
    {
      id: 5,
      label: "Submission",
      desc: "Uji kemampuan teknis Anda dengan mengerjakan tugas submission."
    },
    {
      id: 6,
      label: "Ujian",
      desc: "Validasi pengetahuan Anda dengan mengerjakan soal-soal ujian."
    },
  ]

  return (
    <div className="">
      <div className="px-24 py-10">
        <Card>
          <CardBody className="flex gap-5 px-7 py-10 h-fit">
            <div className="flex items-center gap-5">
              <img src="/images/kotlin-course.jpg" className="h-[200px] w-[200px]"/>
              <div className="">
                <h5 className="font-semibold text-[#F59E0B]">
                  <FontAwesomeIcon icon={faStar} /> {props.rating}
                </h5>
                <h1 className="font-bold text-[30px] mb-[10px] font-poppins">
                  {props.title}
                </h1>
                <h5 className="text-[20px] font-poppins font-semibold">
                  Teknologi:{" "}
                  <Chip
                    className="border-black ml-[5px] font-poppins"
                    variant="bordered"
                  >
                    Kotlin
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
                          <h1 className="font-bold">{`Level ${props.difficulty}`}</h1>
                          <p>Mempelajari mengenai topik dasar dan lain-lain</p>
                        </div>
                      }
                      closeDelay={0}
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
                      <h5 className="font-poppins">{`${props.time} Jam Belajar`}</h5>
                    </div>
                  </div>
                </div>
                <h1 className="w-[650px] mt-[20px] text-small text-[#808080]">
                  {props.description}
                </h1>
              </div>
              <div className="ml-[40px]">
                <Card className="w-[300px] h-fit shadow shadow-lg">
                  <CardBody className="p-[30px]">
                    <Link href="/lessons/1/sublessons/1/path/1">
                      <Button className="mb-[10px] place-items-streth p-[5px] bg-[#F59E0B] text-white font-semibold rounded-md py-2 hover:scale-105 transition-transform w-full">
                        Belajar Sekarang
                      </Button>
                    </Link>
                    <hr className="mb-[10px]" />
                    <Button className="mb-[10px] font-semibold hover:scale-105 transition-transform">
                      Informasi Kelas
                    </Button>
                    <Button className="mb-[10px] font-semibold hover:scale-105 transition-transform">
                      Lihat Silabus
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
            {labelList.map((data) => (
              <div
                key={data.id}
                style={{ flex: "0 0 auto", minWidth: "50px" }}
              >
                <Card className="w-[400px] h-[150px] border border-[#808080]">
                  <CardHeader>
                    <div>
                      <h1 className="font-semibold">{data.label}</h1>
                      <p>{data.desc}</p>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </ScrollShadow>
        </div>
      </div>
    </div>
  );
}
