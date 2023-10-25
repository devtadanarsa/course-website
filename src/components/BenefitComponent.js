import { benefitList } from "@/data/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function BenefitComponent(){
    return(
        <div className="flex mt-28 relative">
            <div className="h-[400px] w-[430px] bg-[#F0D9CA] absolute bottom-0 rounded-2xl -z-[1]" data-aos="zoom-in"/>
            <img src="/images/people-benefits.svg" className="rounded-2xl" data-aos="zoom-in"/>
            <div className="pl-40" data-aos="fade-left">
                <h1 className="text-[36px] font-semibold text-[#393939]">What Will You <span className="text-[#058E6E]">Get</span> ?</h1>
                <p className="text-[18px] text-[#6C6C6C] max-w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id interdum dui mollis . Suspendisse nulla :</p>
                <div className="h-[400px] w-[500px] bg-gradient-to-b from-black-to-transparent absolute"/>
                {benefitList.map((data) => {
                    return(
                        <div key={data.id} className="flex px-4 py-4 mt-7 bg-white shadow-green-100 shadow-2xl">
                            <div className="bg-[#058E6E] px-2 py-1 h-fit w-fit rounded-md">
                                <FontAwesomeIcon icon={faCheck} style={{color: "#ffffff",}} />
                            </div>
                            <div className="ml-8">
                                <h1 className="text-[#393939] text-[16px] font-semibold">{data.title}</h1>
                                <p className="text-[#8D8D8D] text-[14px] max-w-[300px]">{data.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}