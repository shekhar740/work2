import Link from "next/link"
import { Inbox } from "./Inbox"

export const RightBar = ()=>{
    return (
        <div>
            <h1 className="flex justify-between items-center font-bold text-2xl my-3">Notification <Link href="/dashboard/showbar"  className="font-medium text-sm hover:text-blue-600 cursor-pointer">View all</Link></h1>
           <Inbox />
        </div>
    )
}