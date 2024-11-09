import { } from "@heroicons/react/outline"
import Image from "next/image"
import logo from "../assets/logo.png"

function Footer() {

    let dataFooter = [
        {
            title: 'Links',
            content: ['Home', 'Pelayanan', 'Harga']
        },
        {
            title: 'Perusahaan',
            content: ['Tentang Kami', 'Kontak', 'Disclaimer', 'Kebijakan Privasi']
        },
        {
            title: 'Lokasi',
            content: ['Indonesia', ' Jl Tambak, Batu, Jawa Timur', 'Jawa Timur 60252']
        }
    ]

    return (
        <div className="bg-slate-900 w-full py-14">
            <div className="w-full xl:w-container mx-auto px-8 text-gray-400 lg:grid grid-cols-2 text-sm">
                <div className="mr-0 lg:mr-40">
                <div className="w-fit font-bold text-white text-lg flex items-center gap-4">
                <Image alt="logo" src={logo} width={50} />
                <div>

                <span>
                Visual Local City
                </span>
                    <span className="block text-sm font-normal leading-relaxed italic text-slate-400">Hold the World, Not a Dream</span>
                </div>
            </div>
                    <p class="my-8 text-slate-400">Kami memberikan solusi konektivitas Internet Terbaik untuk Anda</p>
                    <div className="flex items-center">
                        <a href="#" className="bg-slate-300 text-white w-10 h-10 p-3 rounded-xl items-center flex justify-center mr-3 hover:bg-white transition-all">
                            <img  src="/facebook-logo.png" alt="facebook" />
                        </a>
                        <a href="#" className="bg-slate-300 w-10 h-10 p-3 rounded-xl items-center flex justify-center mr-3 hover:bg-white transition-all">
                            <img src="/instagram-logo.png" alt="instagram" />
                        </a>
                       
                    </div>
                </div>
                <div className="hidden lg:flex justify-between">
                    {dataFooter.map(footer => {
                        return (
                            <div className="">
                                <h4 className="font-medium text-white text-base">{footer.title}</h4>
                                {footer.content.map(content => {
                                    return (
                                        <p className="mt-3">{content}</p>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer
