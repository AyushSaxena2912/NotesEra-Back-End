import Navbar from '../../components/Navbar/navbar';
import{BsSearch} from'react-icons/bs';
import'./videosection.css';
import SearchBar from '../../components/SearchBar/Searchbar';
import image from "../../assets/seachsection.png";
import {useState} from 'react';
import { Link } from 'react-router-dom';
const VideoSection =()=>{
    const [isdataavailable,setIsDataAvailable]=useState(false);
    const [subjects,setsubjectlist]=useState([])
    const getdataHandler =(subjectlist)=>{
        setIsDataAvailable(true)
        setsubjectlist(subjectlist);
        console.log(subjectlist);
    }
    return<div className="videosection">
        <Navbar/>
        <h1>Search your course videos here <BsSearch/></h1>
        <SearchBar getdata={getdataHandler}/>{!isdataavailable&&<div className='searchimage'><img src={image} alt="searchimage" /></div>}
        {isdataavailable&&<div className="subjects-container video">
            {subjects.map((subject, index) => (
                <Link to={"/playcoursevideo/"+subject._id+"/"+subject.subjectname} style={{ textDecoration: 'none' ,color:'black'}} className='subject-rectangle'>{subject.subjectname}</Link>
            ))}
          </div>}
    </div>
}
export default VideoSection;