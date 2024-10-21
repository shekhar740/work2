import { chooses } from "@/data/form"
import Image from "next/image"
import { title } from "process"

export const Choose = ()=>{
    return (
        <section id="whyChooseUs">
                <h1 className="text-center text-3xl font-extrabold">Why Choose Us</h1>
                <p className="text-center mt-2 text-lg font-normal ">We Offer <strong >quality</strong> with the <strong>Easy to use</strong> Easy to use and ease to use <strong>Service</strong> </p>
                <div className="grid md:grid-cols-2 gap-3 md:gap-5 mt-20  md:mx-10 lg:grid-cols-3 mx-8">
                    {chooses.map((item,index)=>(
                       <div key={index} className="bg-[#b89be7] shadow-white shadow-2xl p-5  rounded-lg">
                        <Image src={item.icon} width={50} height={5} alt={title} />
                        <h4 className="md:text-xl text-md mt-6 font-bold">{item?.title}</h4>
                        <p className="mt-4">{item.description}</p>
                       </div> 
                    ))}
                </div>
        </section>
    )
}