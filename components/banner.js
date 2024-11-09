import { useEffect } from 'react'
import AnimScroll from "./animScroll"
import Image from 'next/image'
import net from '../assets/dashboard.jpg'

function Banner() {
    useEffect(() => {
        AnimScroll(".anim-1", 150,".anim-1")
        AnimScroll(".anim-2", 200,".anim-1")
        AnimScroll(".anim-3", 250,".anim-1") 
    }, [])
 
    return (
        <div className="w-full xl:w-container px-8 lg:px-20 xl:px-0 mx-auto text-white text-center mt-16 xl:mt-28">
            <div className="w-full lg:w-4/6 mx-auto">
                <h1 className="anim-1 text-4xl md:text-5xl font-bold leading-tight md:leading-tight">
                    Konektivitas Internet Terbaik untuk Anda
                </h1>
                <p className="anim-2 mt-5 text-base md:text-lg leading-normal md:leading-relaxed">
                    Dengan Koneksi Berkualitas Tinggi yang Kami Tawarkan, Setiap Momen Dalam Hidup Anda Akan Terhubung dan Penuh Makna—Kami Berkomitmen untuk Membawa Anda ke Era Digital yang Lebih Baik dan Lebih Terhubung.
                </p>
                <div className="anim-2 mt-7">
                    <button className="bg-btnDark text-white w-44 mx-3 h-16 font-medium rounded-lg hover:shadow-xl transition-all">Hubungi Kami</button>
                    <button className="bg-btnLight text-blue w-44 mx-3 h-16 font-medium rounded-lg hover:shadow-xl transition-all">Lihat Produk</button>
                </div> 
            </div>
            <Image className="anim-3 mt-10 absolute left-0 right-0 md:relative md:mt-20 shadow-2xl rounded-3xl max-h-[850px] object-cover object-bottom border-8 border-white/30" loading='lazy' src={net} alt="software dashboard" />
        </div>
    )
}

export default Banner
