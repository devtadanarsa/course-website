import {
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@nextui-org/react";
import { lessonCard } from "@/data/constants";

export default function LessonCardComponent() {
  return (
    <div className="px-24 py-12 grid grid-flow-row-dense grid-cols-3 grid-rows-3 ">
      {lessonCard.map((data) => {
        return (
          <Card className="w-[350px] mb-[20px]">
            <CardHeader>
              <div className="w-[350px] flex justify-center">
                <iframe src={data.link} allowFullScreen />
              </div>
            </CardHeader>
            <CardBody className="p-[10px]">
              <div className="flex place-content-between">
                <div>
                  <h1 className="text-[20px] font-bold">{data.title}</h1>
                </div>
              </div>
              <Button
                color="warning"
                className="text-white font-semibold mt-[10px]"
              >
                Book Lesson
              </Button>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}
