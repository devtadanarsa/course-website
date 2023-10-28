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
  // const data = lessonCard.find((data) => data.id === id);

  return (
    <>
      <Button onPress={onOpen} className="mt-[5px]">
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
              <p>prayatnaaa</p>
              <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat
                consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
                consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
                et. Culpa deserunt nostrud ad veniam.
              </p>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
