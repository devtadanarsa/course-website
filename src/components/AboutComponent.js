import { visiMisi } from "@/data/constants"
import { kenapaTutorify } from "@/data/constants"

export default function AboutComponent(){
    return (
        <div>
            <div className="flex justify-between items-center bg-[#090D19] text-white">
                <div className="pl-24">
                    <h2 className="text-[#FB9C46]">Tentang Tutorify</h2>
                    <h1 className="text-[36px] font-semibold mt-2">Apa sih Tutorify itu?</h1>
                    <p className="max-w-[500px] mt-5">Tutorify adalah sebuah platform pendidikan teknologi yang menyediakan konten pelajaran digital skills dengan metode “blended-learning” dalam bentuk online maupun offline.</p>
                </div>
                <img src="/images/dinosaurus.png" className="h-[450px] pr-24"/>
            </div>
            <div className="flex px-24 mt-24">
                {visiMisi.map((data) => {
                    return (
                        <div key={data.id} className="w-1/2">
                            <h2 className="text-[#FB9C46]">{data.topic}</h2>
                            <h1 className="text-[#058E6E] font-bold text-[36px] mt-2">{data.title}</h1>
                            <p className="max-w-[550px] mt-4">{data.text}</p>
                        </div>
                    )
                })}
            </div>
            <h1 className="flex justify-center font-bold text-[36px] mt-24">Kenapa Tutorify</h1>
            <div className="grid grid-cols-2 gap-4 place-items-center mx-24 mt-16">
                {kenapaTutorify.map((data) => {
                    return (
                        <div className="border-2 rounded-xl px-4 h-[190px] flex items-center" key={data.id}>
                            <img src={data.image} className="mr-5"/>
                            <div>
                                <h1 className="text-[20px] font-bold text-[#FB9C46]">{data.title}</h1>
                                <p className="mt-2">{data.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}