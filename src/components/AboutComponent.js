import { visiMisi } from "@/data/constants"

export default function AboutComponent(){
    return (
        <div>
            <div className="flex justify-between items-center bg-[#090D19] text-white">
                <div className="pl-24">
                    <h2 className="text-[#FB9C46]">Tentang Tutorify</h2>
                    <h1 className="text-[36px] font-semibold mt-2">Apa sih Tutorify itu?</h1>
                    <p className="max-w-[500px] mt-5">Skilvul adalah sebuah platform pendidikan teknologi yang menyediakan konten pelajaran digital skills dengan metode “blended-learning” dalam bentuk online maupun offline.</p>
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
            <div className="px-24">
                <div className="flex mt-12">
                    <div className="border-2 rounded-xl mr-12 px-4 py-6 w-1/2 flex items-center">
                        <img src="/images/book-icon.svg" className="mr-5"/>
                        <div>
                            <h1 className="text-[20px] font-bold text-[#FB9C46]">Kurikulum Berdasarkan Kebutuhan Industri</h1>
                            <p>Hemat waktu dan biaya! Kurikulum Skilvul dibuat agar lebih mudah dimengerti dan sesuai dengan kebutuhan industri. Hampir 50% peserta berasal dari background non-IT dan 90% lulusan berhasil mendapatkan pekerjaan setelahnya.</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-xl px-4 py-6 w-1/2 flex items-center">
                        <img src="/images/why-learn-personalization.svg" className="mr-5"/>
                        <div>
                            <h1 className="text-[20px] font-bold text-[#FB9C46]">Personalisasi Proses Pembelajaran</h1>
                            <p>Dengan adanya SkilPath, kamu bebas memilih spesialisasi yang diinginkan agar dapat disesuaikan dengan kebutuhan industri saat ini.</p>
                        </div>
                    </div>
                </div>
                <div className="flex mt-12">
                    <div className="border-2 rounded-xl mr-12 px-4 py-6 w-1/2 flex items-center">
                        <img src="/images/why-learn-blended-learning.svg" className="mr-5"/>
                        <div>
                            <h1 className="text-[20px] font-bold text-[#FB9C46]">Metode Blended-Learning</h1>
                            <p>Proses pembelajaran menggunakan metode blended-learning yaitu secara online dan offline. Kamu dapat mengikuti kelas online dan sekaligus bertanya langsung kepada para mentor. Metode ini akan lebih efektif karena proses mengajar dua arah.</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-xl px-4 py-6 w-1/2 flex items-center">
                        <img src="/images/why-learn-certification.svg" className="mr-5"/>
                        <div>
                            <h1 className="text-[20px] font-bold text-[#FB9C46]">Sertifikasi</h1>
                            <p>Kamu akan mendapatkan SkilBadge setiap kali berhasil menyelesaikan sebuah kelas. SkilBadge tersebut dapat digunakan sebagai sertifikasi pada saat job hunting lho!.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="flex">
                <div>
                    <h1 className="text-[20px]">Kurikulum Berdasarkan Kebutuhan Industri</h1>
                    <p>Hemat waktu dan biaya! Kurikulum Skilvul dibuat agar lebih mudah dimengerti dan sesuai dengan kebutuhan industri. Hampir 50% peserta berasal dari background non-IT dan 90% lulusan berhasil mendapatkan pekerjaan setelahnya.</p>
                </div>
                <div>
                    <h1 className="text-[20px]">Kurikulum Berdasarkan Kebutuhan Industri</h1>
                    <p>Hemat waktu dan biaya! Kurikulum Skilvul dibuat agar lebih mudah dimengerti dan sesuai dengan kebutuhan industri. Hampir 50% peserta berasal dari background non-IT dan 90% lulusan berhasil mendapatkan pekerjaan setelahnya.</p>
                </div>
            </div>
            <div className="flex">
                <div>
                    <h1 className="text-[20px]">Kurikulum Berdasarkan Kebutuhan Industri</h1>
                    <p>Hemat waktu dan biaya! Kurikulum Skilvul dibuat agar lebih mudah dimengerti dan sesuai dengan kebutuhan industri. Hampir 50% peserta berasal dari background non-IT dan 90% lulusan berhasil mendapatkan pekerjaan setelahnya.</p>
                </div>
                <div>
                    <h1 className="text-[20px]">Kurikulum Berdasarkan Kebutuhan Industri</h1>
                    <p>Hemat waktu dan biaya! Kurikulum Skilvul dibuat agar lebih mudah dimengerti dan sesuai dengan kebutuhan industri. Hampir 50% peserta berasal dari background non-IT dan 90% lulusan berhasil mendapatkan pekerjaan setelahnya.</p>
                </div>
            </div> */}
        </div>
    )
}