import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function SignUpComponent(){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [isPasswordVisible, setIsVisible] = React.useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isPasswordVisible);
    const toggleConfirmPasswordVisibility = () => setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    
    
    return(
        <div>
            <Button onPress={onOpen} className="bg-[#FB9C46] text-white font-semibold px-6 hover:scale-110">Sign Up</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" backdrop="blur">
                <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
                        <ModalBody>
                            <Input autoFocus label="Full Name" variant="bordered"/>
                            <Input label="Email" variant="bordered"/>
                            <Input label="Username" variant="bordered"/>
                            <div className="flex">
                                <Input label="Password" variant="bordered"
                                    endContent={
                                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                            {isPasswordVisible ? (
                                                <FontAwesomeIcon icon={faEye} style={{color: "#000000",}} />
                                            ) : (
                                                <FontAwesomeIcon icon={faEyeSlash} style={{color: "#000000",}} />
                                            )}
                                        </button>
                                    }
                                    type={isPasswordVisible ? "text" : "password"}
                                />
                                <Input label="Confirm Password" variant="bordered"
                                    endContent={
                                        <button className="focus:outline-none" type="button" onClick={toggleConfirmPasswordVisibility}>
                                            {isConfirmPasswordVisible ? (
                                                <FontAwesomeIcon icon={faEye} style={{color: "#000000",}} />
                                            ) : (
                                                <FontAwesomeIcon icon={faEyeSlash} style={{color: "#000000",}} />
                                            )}
                                        </button>
                                    }
                                    type={isConfirmPasswordVisible ? "text" : "password"}
                                    className="ml-4"
                                />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onPress={onClose} className="w-full font-semibold py-7 bg-[#FB9C46]">Sign Up</Button>
                        </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </div>
    )
}