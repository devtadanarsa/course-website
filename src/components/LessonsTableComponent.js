import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  CardBody,
  Card,
  Code,
} from "@nextui-org/react";

export default function LessonsTableComponent(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="mb-[10px]">
      <Card
        isHoverable
        isPressable
        onPress={onOpen}
        color="white"
        className="w-[960px] mt-[5px] border-b shadow-none hover:bg-[#D3D3D3]"
      >
        <CardBody>
          <div className="flex justify-between">
            <div>
              <h1 className="text-md font-semibold">{props.title}</h1>
              <p className="text-small text-[#808080]">best tutorial!</p>
            </div>
            <div>
              <Code color="primary">{props.price}</Code>
            </div>
          </div>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {props.title}
              </ModalHeader>
              <ModalBody>
                <div>
                  <h3 className="font-bold text-small">LANGUAGE</h3>
                  <h2 className="text-small text-[#808080]">
                    {props.language}
                  </h2>
                </div>
                <div className="flex gap-3">
                  <p className="text-small">Price - </p>
                  <p className="text-small">{props.price}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Description</h3>
                  <p className="text-small text-justify">{props.description}</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Book Now
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
