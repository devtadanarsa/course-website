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

    const handleSignUp = async (onClose) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if(password != confirmPassword){
            const passwordErrorDiv = document.getElementById('password-error');
            passwordErrorDiv.classList.remove('hidden');
            passwordErrorDiv.classList.add('block');
            return;
        }

        try{
            const response = await fetch("http://localhost:8000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    username: username,
                    password: password,
                }),
            });

            if(response.ok){
                alert("User added successfully");
                onClose();
            }else{
                const errorMessage = await response.text();
                alert(`Error : ${errorMessage}`);
            }
        }catch(error){
            console.error(`Error : ${error}`);
            alert("An error occurred while signing up");
        }
    }
    
    
    return(
        <div>
            <Button onPress={onOpen} className="bg-[#FB9C46] text-white font-semibold px-6 hover:scale-110">Sign Up</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" backdrop="blur">
                <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
                        <ModalBody>
                            <Input id="name" autoFocus label="Full Name" variant="bordered"/>
                            <Input id="email" label="Email" variant="bordered"/>
                            <Input id="username" label="Username" variant="bordered"/>
                            <div className="flex">
                                <Input id="password" label="Password" variant="bordered"
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
                                <Input id="confirm-password" label="Confirm Password" variant="bordered"
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
                            <div id="password-error" className="flex justify-center bg-[#e54141] py-2 rounded-lg hidden">
                                <p className="text-white">Error : The password do not match!</p>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onPress={() => handleSignUp(onClose)} className="w-full font-semibold py-7 bg-[#FB9C46]">Sign Up</Button>
                        </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </div>
    )
}