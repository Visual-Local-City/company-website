import { WifiIcon, AdjustmentsIcon, ClockIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import AnimScroll from "./animScroll"

function Benefit() {

    let data = [
        {
            id: 1,
            icon: <WifiIcon className="w-16 shadow-lg shadow-purple-500/50 bg-purple-500 text-white rounded-lg p-4" />,
            title: 'Paket Unlimited',
            description: 'Dapatkan paket internet Unlimited dengan kecepatan tinggi tanpa batasan kuota. Nikmati streaming, gaming, dan browsing tanpa gangguan!'
        },
        {
            id: 2,
            icon: <AdjustmentsIcon className="w-16 shadow-lg shadow-cyan-500/50 bg-cyan-500 text-white rounded-lg p-4" />,
            title: 'Gratis Pemasangan',
            description: 'Nikmati pemasangan gratis tanpa biaya tambahan. Kami pastikan proses pemasangan cepat dan profesional!'        },
        {
            id: 3,
            icon: <ClockIcon className="w-16 shadow-lg shadow-sky-500/50 bg-sky-500 text-white rounded-lg p-4" />,
            title: 'Layanan Cepat Tanggap',
            description: 'Kami siap membantu Anda dengan respons cepat kapan saja! Layanan pelanggan kami selalu siap memberikan solusi untuk kenyamanan Anda.'
       }
    ]

    useEffect(()=>{
        AnimScroll(".title",100,".title")
        AnimScroll("#card-0",100,".content")
        AnimScroll("#card-1",150,".content")
        AnimScroll("#card-2",200,".content")
    })

    return (

        <div className="px-3 sm:px-0 xl:w-container mx-auto my-40 md:my-40">
            <div className="title x-full md:w-7/12 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold leading-relaxed">Apa saja yang anda dapatkan?</h2>
                <p className="mt-4 sm:w-3/4 mx-auto text-slate-600 text-base">Sebelum Anda membeli produk kami, cari tahu apa saja manfaat yang akan Anda peroleh.</p>
            </div>
            <div className="card-list mt-16 text-center md:text-left flex flex-wrap justify-center gap-3 sm:gap-10">
                {
                    data.map((content,i) => {
                        return (
                            <div id={"card-"+i} className="group shadow-lg shadow-slate-200/20 bg-white rounded-2xl hover:rounded-2xl transition duration-200 ease-out p-6 sm:p-8 sm:w-[360px]">
                                <span className='flex justify-center md:justify-start'>{content.icon}</span>
                                <h3 className="mt-8 text-2xl font-medium">{content.title}</h3>
                                <p className="content  my-4 text-sm leading-loose text-slate-600">{content.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Benefit
