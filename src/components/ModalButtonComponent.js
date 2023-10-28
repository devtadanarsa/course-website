import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { lessonCard } from "@/data/constants";

export default function ModalButtonComponent() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const getIndexById = (id) => {
    return lessonCard.findIndex((lesson) => lesson.id === id);
  };

  return (
    <>
      <Button keys={getIndexById} onPress={onOpen} className="mt-[5px]">
        Tutor Contact
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              Tutor Contact
            </ModalHeader>
            <ModalBody>
              <p className="font-bold text-small">Tude Prayatna</p>
              <p>{lessonCard[0].tutorContact[0].name}</p>
              <p>{lessonCard[0].tutorContact[0].instagram}</p>
              <p>{lessonCard[0].tutorContact[0].address}</p>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
