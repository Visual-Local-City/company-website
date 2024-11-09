import { CheckIcon } from "@heroicons/react/solid"
import { useEffect } from 'react'
import AnimScroll from "./animScroll"

function Pricing() {

    let dataPrice = [
        {
            title: 'Paket Hemat',
            price: 'Rp. 125.000',
            description: 'Nikmati akses internet cepat dengan paket Hemat. Dapatkan sekarang!',
            include: [
                'Kecepatan hingga 15 Mbps',
                'Layanan pelanggan 24/7',
                'Gratis biaya pemasangan'
            ],
            containerClass: "bg-zinc-800",
            buttonClass: "bg-green-500"
        },
        {
            title: 'Paket Utama',
            price: 'Rp. 170.000',
            description: 'Paket Utama, rekomendasi pilihan paling populer dengan kecepatan lebih besar.',
            include: [
                'Kecepatan hingga 20 Mbps',
                'Layanan pelanggan 24/7',
                'Gratis biaya pemasangan'
            ],
            containerClass: "bg-zinc-800",
            buttonClass: "bg-sky-500",
            special: true,
        },
        {
            title: 'Paket Ideal',
            price: 'Rp. 300.000',
            description: 'Paket Ideal untuk kebutuhan internet tanpa batas dengan kecepatan tertinggi.',
            include: [
                'Kecepatan hingga 50 Mbps',
                'Layanan pelanggan 24/7',
                'Gratis biaya pemasangan'
            ],
            containerClass: "bg-zinc-800",
            buttonClass: "bg-indigo-500"
        }
    ]

    useEffect(() => {
        AnimScroll(".title3", 100, ".title3")
        AnimScroll("#price-0", 200, ".content2")
        AnimScroll("#price-1", 300, ".content2")
        AnimScroll("#price-2", 400, ".content2")
    })


    return (
        <div className="my-52 w-full xl:w-container mx-auto px-10 xl:px-0">
            <div className="title3 w-full lg:w-7/12 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight md:leading-relaxed">Harga Produk yang Kami Tawarkan</h2>
                <p className="mt-5 mb-40 w-3/4 mx-auto text-base">Nikmati kuota besar dan akses internet cepat sesuai kebutuhan Anda, dengan harga yang fleksibel dan tanpa gangguan.</p>
            </div>
            <div className="flex flex-wrap xl:flex-nowrap gap-10 justify-center mt-16 relative">
  {dataPrice.map((data, i) => {
    return (
      <div
        id={"price-" + i}
        className={`rounded-xl bg-white shadow-lg shadow-zinc-200/20 p-10 flex flex-col justify-between transform ${data.class} ${data.special ? 'scale-110 border-4 shadow-sky-200/20 border-sky-500' : ''}`}
      >

                            {data.special ? (
                                <div class=" bg-sky-500 text-white w-fit px-3 py-1 rounded absolute -top-5 left-1/2 transform -translate-x-1/2">Rekomendasi</div>
                            ) : null}
                            <div className="text-slate-600">
                                <h3 className="text-2xl font-medium">{data.title}</h3>
                                <p className="text-4xl mt-8 font-bold text-slate-900">{data.price} <span className="text-base font-light">/ Bulan</span></p>
                                <p className="content2 mt-5 text-base">{data.description}</p>
                                {data.include.map(inc => {
                                    return (
                                        <div className='flex items-start gap-5 mt-7 text-base'>
                                            <CheckIcon className='w-5 bg-white text-midBlue rounded-full p-1' />
                                            <p className="">{inc}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="mt-20">
                                <button className={`text-white group-hover:text-white w-full h-16 font-medium rounded-lg hover:shadow-xl transition duration-200 ${data.buttonClass}`}>Pesan Sekarang</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Pricing
