import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function SignInComponent(){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return(
        <>
            <Button onPress={onOpen} className="bg-[#407F55] text-white font-semibold md:mx-4 lg:mx-10 px-8 hover:scale-110">Login</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" backdrop="blur">
                <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                        <ModalBody>
                            <Input autoFocus label="Email" variant="bordered"/>
                            <Input label="Password" variant="bordered"
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                        {isVisible ? (
                                            <FontAwesomeIcon icon={faEye} style={{color: "#000000",}} />
                                        ) : (
                                            <FontAwesomeIcon icon={faEyeSlash} style={{color: "#000000",}} />
                                        )}
                                    </button>
                                }
                                type={isVisible ? "text" : "password"}
                            />
                            <div className="flex py-2 px-1 justify-between">
                                <Checkbox classNames={{ label: "text-small",}}>Remember me</Checkbox>
                                <Link color="primary" href="#" size="sm">Forgot password?</Link>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="flat" onPress={onClose}>
                            Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                            Sign in
                            </Button>
                        </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}