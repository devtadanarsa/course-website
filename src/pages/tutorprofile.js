import TutorProfileComponent from "@/components/TutorProfileComponent";
import { lessonTable } from "@/data/constants";
import LessonsTableComponent from "@/components/LessonsTableComponent";
import { Card, CardBody } from "@nextui-org/react";

export default function TutorProfile() {
  return (
    <div className="p-[24px]">
      <TutorProfileComponent />
      <h1 className="mt-[20px] font-bold text-xl">Lessons</h1>
      <Card className="w-fit">
        <CardBody>
          {lessonTable.map((data) => {
            return (
              <LessonsTableComponent
                title={data.title}
                description={data.description}
                price={data.price}
                language={data.language}
              />
            );
          })}
        </CardBody>
      </Card>
    </div>
  );
}
