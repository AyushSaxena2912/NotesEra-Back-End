import './videosec.css'
const Videosec=(props)=>{
    return<div className="videoSec">
       {!props.link&&
       <div>
        {/* <p className='ptag' style={{textAlign:"center",marginTop:"0px",padding:'0px',fontWeight:"bold"}}>please select a topic first</p>
        <br/> */}
        <iframe  src= "https://res.cloudinary.com/dpnibtyoj/video/upload/v1701689106/Untitled_design_ndsupf.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;muted loop" allowFullScreen></iframe></div>
        }

       {
        props.link&&<iframe  src= {props.link}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       }
        </div>
}
export default Videosec