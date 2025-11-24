import { useEffect, useState } from "react"

const useCreatingownhook=(param)=>{
    const[githubdata,setgithubdata]=useState({})
    const data=param
    useEffect(()=>{
        gettingdetails(data)

    },[])
    const gettingdetails=async(data)=>{
        const API= "https://api.github.com/users/"+data.username
        console.log(API)
        const result=await fetch(API)
        const response=await result.json()
        setgithubdata(response)

    }
    return githubdata


}
export default useCreatingownhook