import { Button } from "@nextui-org/react"
import {Avatar, AvatarGroup} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCode } from "@fortawesome/free-solid-svg-icons";
import { faReact, faVuejs, faJava, faJs, faPython, faLinux } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from 'next/image'

export default function HeroComponent(){

    return(
        <>
            <section className="md:flex justify-between relative">
                <div className="mt-5 md:mt-24 text-[16px]" data-aos="fade-right" data-aos-duration="5000">
                    <h2 className="text-[#FB9C46] font-semibold text-center min-[870px]:text-left">We Are The Best</h2>
                    <h1 className="text-[48px] text-center min-[870px]:text-left w-full md:text-[40px] lg:text-[48px] font-bold mt-5 md:mt-12 min-[880px]:max-w-[400px] lg:max-w-[600px]">Learn From Home With <span className="text-[#FB9C46]">The Best</span> Programming Language Tutors</h1>
                    <p className="text-[#6C6C6C] text-center min-[870px]:text-left min-[870px]:max-w-[400px] xl:max-w-[500px] mt-10 text-[18px]">Enhance your programming skills with the guidance of the finest programming language tutors, all from the comfort of your home.</p>
                    <Link href="/lessons">
                        <Button className="w-full min-[870px]:w-fit bg-[#058E6E] text-white font-semibold px-16 py-6 rounded-2xl mt-8 hover:scale-110 transition-transform">Try Free Lessons</Button>
                    </Link>
                </div>
                <div className="bg-[#FB9C46] rounded-[300px] overflow-hidden mt-20 mr-0 md:mr-0 lg:mr-4 xl:mr-12 hidden min-[870px]:block" data-aos="fade-left">
                    <Image src='/images/hero-image.svg' height={200} width={450} layout="responsive" alt="hero-images"/>
                </div>
                <div className="bg-white absolute top-[100px] min-[870px]:top-[220px] xl:top-[190px] md:right-[270px] min-[870px]:right-[400px] xl:right-[450px] rounded-full h-[80px] md:h-[100px] w-[80px] md:w-[100px] border-4 border-white overflow-hidden hidden min-[870px]:block" data-aos="zoom-in" data-aos-delay="600">
                    <Image src='/images/manajemen-proyek-course.png' height={100} width={100} alt="icon-1"/>
                </div>
                <div className="bg-white absolute top-[65px] right-[100px] rounded-full h-[100px] w-[100px] border-4 border-white overflow-hidden hidden min-[870px]:block" data-aos="zoom-in" data-aos-delay="700">
                    <img src="/images/front-end-course.png"/>
                </div>
                <div className="bg-white absolute bottom-[230px] right-[0px] rounded-full h-[100px] w-[100px] border-4 border-white overflow-hidden hidden min-[870px]:block" data-aos="zoom-in" data-aos-delay="800">
                    <img src="/images/analisis-data-course.jpg"/>
                </div>
                <div className="absolute min-[870px]:bottom-[2px] lg:bottom-[100px] right-0 min-[870px]:right-[200px] lg:right-[300px] xl:right-[400px] bg-white px-5 py-5 rounded-2xl shadow-2xl shadow-orange-500 hidden min-[870px]:block" data-aos="zoom-in" data-aos-delay="500">
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
            </section>
            <section className="block min-[870px]:flex justify-between mt-24" data-aos="fade-up">
                <div className="w-full min-[870px]:w-1/2">
                    <h2 className="text-[#FB9C46] text-center min-[870px]:text-left font-semibold text-[16px]">What do you want to learn?</h2>
                    <h1 className="text-[48px] text-center min-[870px]:text-left font-semibold text-[#393939]">What We Offer</h1>
                    <h2 className="text-[#FB9C46] text-center min-[870px]:text-left font-semibold text-[18px]">I want to learn</h2>
                </div>
                <div className="max-w-full md:max-w-[750px] text-[#6C6C6C]">
                    <p className="text-center min-[870px]:text-left">Explore our comprehensive range of courses and expert instructors to help you achieve your learning goals.</p>
                    <div className="items-center mt-4 block min-[870px]:flex">
                        <div className="flex items-center justify-center min-[870px]:justify-normal">
                        <FontAwesomeIcon icon={faJs} size="2xl" style={{color: "#FB9C46",}} className="border-3 border-[#FB9C46] rounded-full px-5 py-4 mr-4" data-aos="fade-up" data-aos-delay="500"/>
                        <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#FB9C46",}} className="border-3 border-[#FB9C46] rounded-full px-4 py-4 mr-4" data-aos="fade-up" data-aos-delay="1000"/>
                        <FontAwesomeIcon icon={faVuejs} size="2xl" style={{color: "#FB9C46",}} className="border-3 border-[#FB9C46] rounded-full px-4 py-4 mr-4" data-aos="fade-up" data-aos-delay="1500"/>
                        <FontAwesomeIcon icon={faJava} size="2xl" style={{color: "#FB9C46",}} className="border-3 border-[#FB9C46] rounded-full px-5 py-4 mr-4" data-aos="fade-up" data-aos-delay="2000"/>
                        <FontAwesomeIcon icon={faPython} size="2xl" style={{color: "#FB9C46",}} className="border-3 border-[#FB9C46] rounded-full px-5 py-4 mr-4" data-aos="fade-up" data-aos-delay="2500"/>
                        <FontAwesomeIcon icon={faLinux} size="2xl" style={{color: "#FB9C46",}} className="border-3 border-[#FB9C46] rounded-full px-5 py-4" data-aos="fade-up" data-aos-delay="3000"/>
                        </div>
                        <Link href="/lessons">
                            <div className="flex justify-center min-[870px]:justify-normal cursor-pointer items-center" data-aos="fade-up" data-aos-delay="3500">
                                <p className="text-[#FB9C46] text-[18px] ml-5 mr-3">View All</p>
                                <FontAwesomeIcon icon={faCaretRight} beat style={{ color: "#FB9C46" }} />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}