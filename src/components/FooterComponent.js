import { teacherList } from "@/data/constants"
import { lessonList } from "@/data/constants"
import { companyList } from "@/data/constants"
import { moreList } from "@/data/constants"

export default function FooterComponent(){
    return(
        <div className="bg-[#F2BF62] text-white">
            <div className="flex justify-between pl-28 pr-48 px-24 mt-20 pt-24">
                <div className="text-[16px]">
                    <h1 className="font-semibold">Tutorify</h1>
                    <p className="max-w-[170px] mt-6">Learn more than just a language</p>
                </div>
                <div>
                    <h1 className="font-semibold">Find Teacher</h1>
                    {teacherList.map((data) => {
                        return (
                            <p key={data.id} className="mt-6">{data.title}</p>
                        )
                    })}
                </div>
                <div>
                    <h1 className="font-semibold">Lessons</h1>
                    {lessonList.map((data) => {
                        return (
                            <p key={data.id} className="mt-6">{data.title}</p>
                        )
                    })}
                </div>
                <div>
                    <h1 className="font-semibold">Company</h1>
                    {lessonList.map((data) => {
                        return (
                            <p key={data.id} className="mt-6">{data.title}</p>
                        )
                    })}
                </div>
                <div>
                    <h1 className="font-semibold">More</h1>
                    {moreList.map((data) => {
                        return (
                            <p key={data.id} className="mt-6">{data.title}</p>
                        )
                    })}
                </div>
            </div>
            <p className="text-[16px] font-bold flex justify-center mt-32 pb-20">Copyright 2023. Created with love</p>
        </div>
    )
}