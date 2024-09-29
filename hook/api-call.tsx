'use client'
import axios from "axios"
import { useMemo, useState } from "react"

export const createUser = ()=>{
    const [isLoading,setisLoading] = useState()
}
export const fetchUserInfo = async ()=>{
    try {
        const resonse = await axios.get("/api/auth");
        return resonse.data
    } catch (error) {
        throw new Error("there was someting erroro")
    }
}