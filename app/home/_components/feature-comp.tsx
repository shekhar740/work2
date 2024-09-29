import title1 from "@/public/home/title2.svg" 
import Image from "next/image"
interface featureCompProps{
    feature : {
        title : string,
        description : string,
    }
}
export const BoxFeature = ({feature}:featureCompProps)=>{
    return (
        <div className="bg-[#D9D9D9] p-5 rounded-md mt-20">
            <Image src={title1} alt="" width={50} height={100} />
            <h1 className="mt-3 text-2xl italic">{feature.title}</h1>
            <p className="mt-10 opacity-60 text-sm">Provide Functionality for retailers to track their inventory in real-time,including addition user management</p>
            
        </div>
    )
}