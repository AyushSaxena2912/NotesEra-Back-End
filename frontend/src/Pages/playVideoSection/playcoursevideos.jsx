import Navbar from "../../components/Navbar/navbar";
import { useParams } from "react-router-dom";
import Learning from "./components/LearningSection/Learning";
import './playcoursevideos.css'
const PlaycourseVideos=()=>{
    const params = useParams();
    
    return<div className="playvideosection">
    <Navbar subjectname={params.name} backlink="/videosection"/>
    <Learning id={params.id}/>
    </div>
}
export default PlaycourseVideos;