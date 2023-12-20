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

export default function AddTutorsComponent() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [name, setName] = useState("");
  const [degree, setDegree] = useState("");
  const [language, setLanguage] = useState("");
  const [desc, setDesc] = useState("");
  const [video, setVideo] = useState("");
  const [imageURL, setImageURL] = useState(null);

  // const file = e.target.files[0];
  // const handleFileChange = (e) => {
  //   // Create a temporary URL for the selected file
  //   const url = URL.createObjectURL(file);

  //   // Set the temporary URL in the state
  //   setImageURL(url);
  // };

  const submit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("profile_image", file);
    try {
      const body = {
        name,
        degree,
        language,
        desc,
        video,
        imageURL,
      };
      const response = await fetch("http://localhost:8000/tutors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location = "/tutors";
    } catch (err) {
      console.error(err.message);
    }
  };

  // console.log(imageURL)

  return (
    <>
      <Button
        className="border border-collapse text-lg bg-[#46b435] text-white mt-2"
        color="white"
        onPress={onOpen}
      >
        {" "}
        Add Tutor
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Tutor Information
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
                  {/* <input
                    type="file"
                    accept="image/*"
                    label="Upload Image"
                    onChange={(e) => {
                      setImageURL(URL.createObjectURL(e.target.files[0]));
                    }}
                    // onChange={handleFileChange}
                    required
                  /> */}
                </ModalBody>
                <ModalFooter>
                  <button color="primary" onPress={console.log("p")}>
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
