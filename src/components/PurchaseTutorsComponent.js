import { Button } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function PurchaseTutorsComponent(){
    return (
        <div className="flex justify-between mt-32 relative">
            <div>
                <h1 className="text-[36px] font-semibold max-w-[600px] mt-24">Purchase Your Awesome Lessons and Find Your Tutors </h1>
                <p className="text-[18px] text-[#6C6C6C] max-w-[600px] mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem habitant a tincidunt cras accumsan integer suscipit. Libero accumsan eget aliquet.</p>
                <div className="flex text-[16px] mt-10">
                    <Button className="bg-[#FB9C46] text-white px-5 py-6 mr-5">Book Your Lessons</Button>
                    <Button className="bg-transparent border-2 border-[#FB9C46] text-[#FB9C46] font-semibold py-6">Find Your Tutors</Button>
                </div>
            </div>
            <div>
                <div className="border-4 rounded-full border-[#FB9C46] px-5 py-5 mr-12">
                    <div className="bg-[#F0D9CA] rounded-full pr-24 overflow-hidden">
                        <img src="images/tutors-image.svg"/>
                    </div>
                </div>
                <div className="rounded-full h-[80px] w-[80px] border-4 border-white absolute right-[90px] top-[20px]">
                    <img src="/images/china.svg"/>
                </div>
                <div className="bg-white w-fit px-10 py-5 absolute top-16 right-[450px] shadow-2xl shadow-orange-500 rounded-2xl">
                    <div className="flex justify-center">
                        <FontAwesomeIcon icon={faHeart} beat style={{color: "#fb9c46",}}/>
                    </div>
                    <h1 className="text-[#fb9c46] text-[16px] font-semibold flex justify-center mt-2">1850+</h1>
                    <p className="text-[14px] flex justify-center">Classes</p>
                </div>
            </div>
        </div>
    )
}