import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button} from "@nextui-org/react";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";

export default function EditChapterComponent(props){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const handleEditChapter = async (onClose) => {
        const chapterTitle = document.getElementById('chapter-title').value;
        try{
            const response = await fetch(`http://localhost:8000/lessons/${props.courseId}/${props.chapterId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chapterTitle: chapterTitle,
                })
            });
            if(response.ok){
                alert("Chapter edited successfully");
                onClose();
            }else{
                const errorMessage = await response.text();
                throw new Error(`Error : ${errorMessage}`)
            }
        }catch(error){
            console.error(`Error : ${error}`);
            alert("An error occured while editing chapter");
        }
    }    

    return(
        <>
            <Button color="warning" isIconOnly endContent={<FontAwesomeIcon icon={faPen} style={{color: "#ffffff",}} />} onPress={onOpen}/>
            <Modal 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Edit Chapter Content</ModalHeader>
                    <ModalBody>
                        <Input
                        autoFocus
                        label="Content Name"
                        variant="bordered"
                        id="chapter-title"
                        defaultValue={props.defaultValue}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" className="text-white" onClick={() => handleEditChapter(onClose)}>
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