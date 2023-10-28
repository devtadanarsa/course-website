import {
  Card,
  CardBody,
  CardHeader,
  Button,
  ModalBody,
} from "@nextui-org/react";
import { lessonCard } from "@/data/constants";
import { Modal, ModalContent } from "@nextui-org/react";
import ModalButtonComponent from "./ModalButtonComponent";

export default function LessonCardComponent() {
  return (
    <div className="px-24 py-12">
      {lessonCard.map((data) => {
        return (
          <Card className="w-[350px]">
            <CardHeader>
              <div className="w-[350px] flex justify-center">
                <iframe src={data.link} allowFullScreen />
              </div>
            </CardHeader>
            <CardBody className="p-[10px]">
              <div className="flex place-content-between">
                <h1 className="text-[20px] font-bold">Lessons</h1>
                <div>
                  <p className="font-semibold text-small">This is</p>
                  <h1 className="text-[20px] font-bold">{data.title}</h1>
                </div>
              </div>
              <Button
                color="warning"
                className="text-white font-semibold mt-[10px]"
              >
                Book Lesson
              </Button>
              <ModalButtonComponent />
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}
