import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function SearchComponent(props){
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        props.onSearchInputChange(inputValue);
    };

    return(
        <div className="flex items-center mt-4 text-[14px]">
            <div className="flex w-full md:w-3/4 border-2 rounded-xl shadow-lg">
                <input 
                    type="text" 
                    placeholder={`${props.name} Name`} 
                    className="py-4 px-5 outline-none w-3/4 rounded-xl"
                    onChange={handleInputChange} 
                />
                <Button className="px-24 rounded-xl bg-[#FB9C46] py-[22px] my-2 text-white mr-4">Search</Button>
            </div>
            <div className="hidden md:block shadow-2xl ml-4 rounded-xl">
                <Dropdown className="shadow-2xl">
                    <DropdownTrigger>
                        <Button 
                            variant="bordered"
                            color="#[E0E3E7]"  
                            startContent={<FontAwesomeIcon icon={faEye} style={{color: "#CCCCCC",}} />}
                            endContent={<FontAwesomeIcon icon={faCaretDown} style={{color: "#CCCCCC",}} className="pl-20"/>} 
                            className="py-8 text-[#9BA3AF]">{`Popular ${props.name}`}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu 
                        aria-label="Action event example" 
                        onAction={(key) => alert(key)}
                    >

                        <DropdownItem key="new">{`HTML ${props.name}`}</DropdownItem>
                        <DropdownItem key="copy">{`React ${props.name}`}</DropdownItem>
                        <DropdownItem key="edit">{`Python ${props.name}`}</DropdownItem>
                        <DropdownItem key="edit">{`Java ${props.name}`}</DropdownItem>
                        <DropdownItem key="edit">{`Other ${props.name}`}</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>

            </div>
    )
}