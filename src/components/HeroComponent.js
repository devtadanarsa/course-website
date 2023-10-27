import { Button } from "@nextui-org/react"
import CourseIconComponent from "./CourseIconComponent"
import {Avatar, AvatarGroup} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function HeroComponent(){

    return(
        <>
            <div className="md:flex justify-between relative">
                <div className="mt-5 md:mt-24 text-[16px]" data-aos="fade-right" data-aos-duration="5000">
                    <h2 className="text-[#FB9C46] font-semibold">We Are The Best</h2>
                    <h1 className="text-[48px] font-bold mt-5 md:mt-12">Learn From Home<br/>With <span className="text-[#FB9C46]">The Best</span><br/>Online Language Tutors</h1>
                    <p className="text-[#6C6C6C] max-w-[500px] mt-10 text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id interdum dui mollis . Suspendisse nulla :</p>
                    <Button className="w-full md:w-fit bg-[#058E6E] text-white font-semibold px-16 py-6 rounded-2xl mt-8 hover:scale-110 transition-transform">Try Free Lessons</Button>
                </div>
                <div className="bg-[#FB9C46] rounded-[300px] overflow-hidden mt-20 mr-12" data-aos="fade-left">
                    <img src="/images/hero-image.svg"/>
                </div>
                <div className="absolute top-[200px] right-[400px] bg-white px-5 py-5 rounded-2xl shadow-2xl shadow-orange-500" data-aos="zoom-in" data-aos-delay="500">
                    <h1 className="text-[16px] font-semibold">200+ Tutors Online</h1>
                    <AvatarGroup isBordered className="justify-start" total={99}>
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d"/>
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" color="warning"/>
                    </AvatarGroup>
                </div>
            </div>
            <div className="md:flex justify-between mt-24" data-aos="fade-up">
                <div>
                    <h2 className="text-[#FB9C46] font-semibold text-[16px]">What do you want to learn?</h2>
                    <h1 className="text-[48px] font-semibold text-[#393939]">What We Offer</h1>
                    <h2 className="text-[#FB9C46] font-semibold text-[18px]">I want to learn </h2>
                </div>
                <div className="max-w-[750px] text-[#6C6C6C]">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna nec faucibus ridiculus placerat ipsum. Volutpat eget ut vitae amet ullamcorper et, ante venenatis.</p>
                    <div className="flex items-center mt-2">
                        {[1, 2, 3, 4, 5, 6].map((index) => {
                            return(
                                <div key={index} className="mr-4">
                                    <CourseIconComponent image="/images/china.svg"/>
                                </div>
                            )
                        })}
                        <div className="flex cursor-pointer items-center">
                            <p className="text-[#FB9C46] text-[18px] ml-5 mr-3">View All</p>
                            <FontAwesomeIcon icon={faCaretRight} beat style={{color: "#FB9C46",}} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}