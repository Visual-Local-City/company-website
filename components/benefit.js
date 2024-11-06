import { UsersIcon, ShoppingCartIcon, ClockIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import AnimScroll from "./animScroll"

function Benefit() {

    let data = [
        {
            id: 1,
            icon: <UsersIcon className="w-16 bg-gradient rounded-lg p-4" />,
            title: 'Can be used by more than One Person',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cum eligendi voluptatibus quasi quaerat!"
        },
        {
            id: 2,
            icon: <ShoppingCartIcon className="w-16 bg-gradient rounded-lg p-4" />,
            title: '50% Discount On Every Purchase',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cum eligendi voluptatibus quasi quaerat!"
        },
        {
            id: 3,
            icon: <ClockIcon className="w-16 bg-gradient rounded-lg p-4" />,
            title: '24 Hours Customer service',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nisi cum eligendi voluptatibus quasi quaerat!"
        }
    ]

    useEffect(()=>{
        AnimScroll(".title",100,".title")
        AnimScroll("#card-0",100,".content")
        AnimScroll("#card-1",150,".content")
        AnimScroll("#card-2",200,".content")
    })

    return (
        <div className="xl:w-container mx-auto my-24 md:my-40 text-white">
            <div className="title x-full md:w-7/12 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold leading-relaxed">Apa saja yang anda dapatkan?</h2>
                <p className="mt-2 w-3/4 mx-auto text-slate-400 text-base">Sebelum Anda membeli produk kami, cari tahu apa saja manfaat yang akan Anda peroleh.</p>
            </div>
            <div className="card-list mt-16 text-center md:text-left flex flex-wrap justify-center gap-10">
                {
                    data.map((content,i) => {
                        return (
                            <div id={"card-"+i} className="group hover:bg-midBlue rounded-2xl hover:rounded-2xl transition duration-200 ease-out p-8 w-[360px]">
                                <span className='flex justify-center md:justify-start'>{content.icon}</span>
                                <h3 className="mt-8 text-2xl font-medium">{content.title}</h3>
                                <p className="content  my-4 text-sm leading-loose text-slate-400 group-hover:text-white">{content.description}</p>
                                <a className='font-medium underline' href="#">Read More</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Benefit
