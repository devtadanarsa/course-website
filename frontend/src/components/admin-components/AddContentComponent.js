import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button} from "@nextui-org/react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";

export default function AddContentComponent(props){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const handleAddContent = async (onClose) => {
        const contentTitle = document.getElementById('content-title').value;
        const videoLink = document.getElementById('video-link').value;

        try{
            const response = await fetch(`http://localhost:8000/lessons/${props.courseId}/content/${props.chapterId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contentTitle: contentTitle,
                    videoLink: videoLink
                })
            });

            if(response.ok){
                alert("Content added successfully");
                onClose();
            }else{
                const errorMessage = await response.text();
                alert(`Error :${errorMessage}`)
            }
        }catch(error){
            console.error(`Error :${error}`);
            alert("An error is occured when adding content");
        }
    }

    return(
        <>
            <Button color="success" isIconOnly endContent={<FontAwesomeIcon icon={faPlus} style={{color: "#ffffff"}}/>} onPress={onOpen}/>
            <Modal 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Add Chapter Content</ModalHeader>
                    <ModalBody>
                        <Input
                        autoFocus
                        label="Content Name"
                        variant="bordered"
                        id="content-title"
                        />
                        <Input
                        label="Video Link"
                        variant="bordered"
                        id="video-link"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" className="text-white" onClick={() => handleAddContent(onClose)}>
                        Submit
                        </Button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}