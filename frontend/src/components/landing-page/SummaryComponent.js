import {Avatar, AvatarGroup, Button} from "@nextui-org/react";
import Link from "next/link";

export default function SummaryComponent(){
    return(
        <div className="text-white bg-gradient-to-r from-[#FF922F] to-[#F1BF62] pt-24 px-24 pb-16 mt-16 rounded-2xl block lg:flex justify-between items-center relative" data-aos="zoom-in">
            <div>
                <h1 className="text-[36px] font-semibold max-w-[400px]">Learn more than just a language</h1>
                <p className="text-[14px] mt-10">Over 100,000 students join us monthly</p>
                <div className="flex items-center mt-5">
                    <AvatarGroup isBordered className="justify-start" total={99}>
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
                        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                    </AvatarGroup>
                    <p className="text-14px ml-8 border-b-2 border-white cursor-pointer">and others</p>
                </div>
            </div>
            <Link href="/lessons">
                <Button className="bg-white py-8 px-8 text-[#FB9C46] text-[16px] font-semibold z-[9] hover:scale-105 transition-transform mt-8 lg:mt-0">Get your free lessons now</Button>
            </Link>
            <img src="/images/circles-line.svg" className="absolute right-10 hidden lg:block"/>
        </div>
    )
}