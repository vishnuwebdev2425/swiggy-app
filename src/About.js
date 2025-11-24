import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useCreatingownhook from "../utils/useCreatingownhook";
const About=()=>{
    const param=useParams()
    const newdata=param
    const result=useCreatingownhook(newdata)
    console.log(result)
    const{bio,id,avatar_url,location,name,public_repos}=result
    console.log(bio)
    return(
        <div className="final-container">
            <h1>Welcome to Know About The Author</h1>
            <img src={avatar_url}/>
            <h1>Bio:{bio}</h1>
            <h2>Name:{name}</h2>
            <h2>Location:{location}</h2>
            <h2>Id:{id}</h2>
            <h2>Public repo:{public_repos}</h2>


        </div>
    )

    
}
export default About