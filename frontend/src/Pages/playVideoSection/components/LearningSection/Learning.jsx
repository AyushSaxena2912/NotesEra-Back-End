import Videosec from "../VideoSection/Videosection"
import UnitList from "../unitList/UnitLists"
import './learningsec.css'
import axios from "axios";
import { useState,useEffect } from "react";
const Learning=(props)=>{
    const [getData,setGetData]= useState([])
    const fetchdata =()=>{
        if(props.id){
            axios.get(`https://noteseravideobackend.onrender.com/video/${props.id}/units`).then(res=>{
            console.log(res.data)
            setGetData(res.data)})
        }
    }
    useEffect(()=>{
        fetchdata();
    })
    const[linkdata,setLinkData]=useState(null)
    const handlelink =(link)=>{
        setLinkData(link);
        console.log(link);
    }
     console.log(linkdata);
    
    return<div className="learningtab">
         <Videosec link={linkdata}/>
        <UnitList data={getData} onSelectLink={handlelink}/> 

        </div> 
}
export default Learning