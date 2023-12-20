import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button} from "@nextui-org/react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";

export default function AddChapterComponent(props){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const handleAddChapter = async (onClose) => {
        const chapterTitle = document.getElementById('chapter-title').value;

        try{
            const response = await fetch(`http://localhost:8000/lessons/${props.courseId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chapterTitle: chapterTitle
                })
            });

            if(response.ok){
                alert("Chapter added successfully");
                onClose();
            }else{
                const errorMessage = await response.text();
                alert(`Error : ${errorMessage}`);
            }
        }catch(error){
            console.error(`Error: ${error}`);
            alert("An error is occured when adding chapter");
        }
    }

    return(
        <>
            <Button className="text-white mb-5" onPress={onOpen} color="success" radius="sm" startContent={<FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} />}>Add Chapter</Button>
            <Modal 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Add New Chapter</ModalHeader>
                    <ModalBody>
                        <Input
                        autoFocus
                        label="Chapter Name"
                        variant="bordered"
                        id="chapter-title"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" className="text-white" onPress={() => handleAddChapter(onClose)}>
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