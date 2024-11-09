import { MenuIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import logo from "../assets/logo.png"

function Navbar() {
    return (
        <div className="w-full 2xl:w-large px-6 lg:px-28 2xl:px-0 mx-auto flex justify-between items-center pt-6 lg:pt-10">
            <div className="w-fit font-bold text-white text-lg flex items-center gap-4">
                <Image alt="logo" src={logo} width={50} />
                <span>
                Visual Local City
                </span>
            </div>
            <div className="list-none text-white hidden xl:flex items-center">
                <li className="px-6">
                    <a className="hover:text-gray-200 transition-all" href="#">Home</a>
                </li>
                <li className="px-6">  
                    <a className="hover:text-gray-200 transition-all" href="#partner">Partner</a>
                </li>
                <li className="px-6">
                    <a className="hover:text-gray-200 transition-all" href="#harga">Harga</a>
                </li>
                <li className="px-6">
                    <a className="hover:text-gray-200 transition-all" href="#">Fitur</a>
                </li>
                <li className="px-6">
                    <a className="hover:text-gray-200 transition-all" href="#">Tentang Kami</a>
                </li>
            </div>
            <div className="hidden xl:block">
                <button className="bg-btnDark text-white w-44 h-16 font-medium rounded-lg hover:shadow-xl transition duration-200">Hubungi Kami</button>
            </div>
            <div className="block xl:hidden">
                <button className='pt-1'><MenuIcon className='w-8 text-white'/></button>
            </div>
        </div>
    )
}

export default Navbar
