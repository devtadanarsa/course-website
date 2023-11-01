import { Button } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faFile, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function PurchaseTutorsComponent(){
    return (
        <div className="block justify-between mt-32 relative xl:flex">
            <div data-aos="fade-right">
                <h1 className="text-[36px] font-semibold max-w-[600px] mt-24">Purchase Your Awesome Lessons and Find Your Tutors </h1>
                <p className="text-[18px] text-[#6C6C6C] max-w-[600px] mt-6">Unlock the door to knowledge and skills with our exceptional lessons and find experienced tutors to guide you on your learning journey.</p>
                <div className="flex text-[16px] mt-10">
                    <Link href="/lessons">
                        <Button className="bg-[#FB9C46] text-white px-5 py-6 mr-5 hover:scale-110 transition-transform">Book Your Lessons</Button>
                    </Link>
                    <Link href="/tutors">
                        <Button className="bg-transparent border-2 border-[#FB9C46] text-[#FB9C46] font-semibold py-6 hover:scale-110 transition-transform">Find Your Tutors</Button>
                    </Link>
                </div>
            </div>
            <div data-aos="fade-left">
                <div className="border-4 rounded-full border-[#FB9C46] px-5 py-5 mr-12 hidden xl:block">
                    <div className="bg-[#F0D9CA] rounded-full pr-24 overflow-hidden">
                        <img src="images/tutors-image.svg" className="w-full h-full object-cover"/>
                    </div>
                </div>
                <div className="rounded-full h-[80px] w-[80px] border-4 border-white absolute right-[80px] top-[40px] hidden xl:block overflow-hidden">
                    <img src="/images/white-man.jpg"/>
                </div>
                <div className="rounded-full h-[80px] w-[80px] border-4 border-white absolute right-[480px] bottom-[100px] hidden xl:block overflow-hidden">
                    <img src="/images/white-female.png"/>
                </div>
                <div className="absolute right-[370px] -top-[15px] bg-white px-5 py-4 rounded-full bg-[#f5f5f5] border-4 border-white hidden xl:block">
                    <FontAwesomeIcon icon={faFile} size="2xl" style={{color: "#FB9C46",}} />
                </div>
                <div className="absolute right-[120px] bottom-[15px] bg-white px-4 py-4 rounded-full bg-[#f5f5f5] border-4 border-white hidden xl:block ">
                    <FontAwesomeIcon icon={faShieldHalved} size="2xl" style={{color: "#FB9C46",}} />
                </div>
                <div className="bg-white w-fit px-12 py-3 absolute top-[120px] right-[450px] shadow-2xl shadow-orange-500 rounded-2xl hidden xl:block">
                    <div className="flex justify-center">
                        <FontAwesomeIcon icon={faHeart} style={{color: "#fb9c46",}}/>
                    </div>
                    <h1 className="text-[#fb9c46] text-[16px] font-semibold flex justify-center mt-2">100+</h1>
                    <p className="text-[14px] flex justify-center">Classes</p>
                </div>
            </div>
        </div>
    )
}