import './unitdesc.css'
import { AiOutlineArrowDown ,AiOutlineArrowUp} from "react-icons/ai";
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const UnitDesc=(props)=>{
    const [isopen,setIsOpen]= useState(false);
    const handleButtonClick=()=>{
        setIsOpen(!isopen)
    };
    const handleLink=(link)=>{
        props.onSelectLink(link);
    }
    let content
    if(isopen){
        content=<div className='unitdata'>
            {props.unittopic.map(topic=><p onClick={()=>handleLink(topic.uri)}>{topic.topicname}</p>)}
        </div>
    }
    return<div className="details">
        <button  className="detailsdropdownbutton" onClick={handleButtonClick}>{/*props */}
        <div class='buttonname'>{!props&&<Skeleton/>}{props.unitname}
        </div>{!isopen&&<AiOutlineArrowDown/>}{isopen&&<AiOutlineArrowUp/>}</button>
        <div>{content}</div>
    </div>
}
export default UnitDesc
