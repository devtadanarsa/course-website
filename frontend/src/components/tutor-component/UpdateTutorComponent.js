import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

export default function UpdateTutorComponent({ tutor }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [name, setName] = useState(tutor.tutor_name);
  const [degree, setDegree] = useState(tutor.speciality);
  const [language, setLanguage] = useState(tutor.native_language);
  const [desc, setDesc] = useState(tutor.tutor_desc);
  const [video, setVideo] = useState(tutor.intro_video_link);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        name,
        degree,
        language,
        desc,
        video,
      };
      const response = await fetch(
        `http://localhost:8000/tutors/${tutor.tutor_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location = "/admin/tutors";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Button
        className="border border-collapse mt-4 ml-2 text-md"
        color="primary"
        onPress={onOpen}
      >
        {" "}
        Edit Tutor
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Tutor Information
              </ModalHeader>
              <form onSubmit={submit} id="submit-form">
                <ModalBody>
                  <Input
                    type="Name"
                    label="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                  />
                  <Input
                    type="Degree"
                    label="Degree"
                    value={degree}
                    onChange={(e) => {
                      setDegree(e.target.value);
                    }}
                    required
                  />
                  <Input
                    type="Native Language"
                    label="Native Language"
                    value={language}
                    onChange={(e) => {
                      setLanguage(e.target.value);
                    }}
                    required
                  />
                  <Input
                    type="Description"
                    label="Description"
                    value={desc}
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                    required
                  />
                  <Input
                    type="Video Link"
                    label="Video Link"
                    value={video}
                    onChange={(e) => {
                      setVideo(e.target.value);
                    }}
                    required
                  />
                </ModalBody>
                <ModalFooter>
                  <button
                    color="primary"
                    onPress={console.log("p")}
                    onClick={(e) => {
                      submit(e);
                    }}
                  >
                    Submit
                  </button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
