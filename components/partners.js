import { useEffect } from 'react'
import AnimScroll from "./animScroll"
import Image from 'next/image'
import Java from "../assets/java.png"
import Tp from "../assets/tp.png"
import Zte from "../assets/zte.png"

function Partners() {

    useEffect(() => {
        AnimScroll(".anim1",100,".anim1")
        AnimScroll(".anim2",80,".anim1")
    })

    return ( 
        <div className="anim1 mt-60 sm:mt-64 md:mt-36 lg:mt-72 xl:mt-72 px-8 md:px-24 xl:px-0 w-full xl:w-container mx-auto">
            <h2 className="text-center text-3xl md:text-4xl font-semibold w-full lg:w-7/12 mx-auto leading-tight md:leading-relaxed text-slate-800">Partner Kami</h2>
            <div className="anim2 flex justify-around items-center mt-8 md:mt-16">
                <Image className="w-24 md:w-36"  src={Tp} alt="tplink logo" />
                <Image className="w-24 md:w-60"  src={Java} alt="javamedianet logo" />
                <Image className="w-24 md:w-24"  src={Zte} alt="ztelogo logo" />
            </div>
        </div> 
    )
}

export default Partners
