import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function SearchComponent(){
    return(
        <div className="flex items-center mt-4 text-[14px]">
            <div className="flex w-3/4 border-2 border-[#FB9C46] rounded-xl">
                <input type="text" placeholder="Tutors Name" className="py-4 px-5 outline-none w-3/4 placeholder-[#FB9C46] text-[#FB9C46] rounded-xl"/>
                <Button className="px-24 rounded-xl bg-[#FB9C46] py-[22px] my-2 text-white">Search</Button>
            </div>
            <Dropdown className="shadow-2xl">
                <DropdownTrigger>
                    <Button 
                        variant="bordered" 
                        color="warning" 
                        startContent={<FontAwesomeIcon icon={faEye} style={{color: "#FB9C46",}} />}
                        endContent={<FontAwesomeIcon icon={faCaretDown} style={{color: "#FB9C46",}} className="pl-20"/>} 
                        className="py-8 ml-4">Popular Tutors
                    </Button>
                </DropdownTrigger>
                <DropdownMenu 
                    aria-label="Action event example" 
                    onAction={(key) => alert(key)}
                >
                    <DropdownItem key="new">New file</DropdownItem>
                    <DropdownItem key="copy">Copy link</DropdownItem>
                    <DropdownItem key="edit">Edit file</DropdownItem>
                    <DropdownItem key="delete" className="text-danger" color="danger">
                    Delete file
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}