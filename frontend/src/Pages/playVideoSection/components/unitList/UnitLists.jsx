import UnitDesc from "../UnitDesc/UnitDesc"
import'./unitlist.css'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const UnitList=(props)=>{
    const handlelink=(link)=>{
        props.onSelectLink(link)
    }
    return<div className="unitlists">
        <div className="unitlistheader">
            {!props&&<Skeleton/>}{props&&<p>course content</p>}
        </div>
        <div className="unitlistcontents">
            {props.data.map((data=><UnitDesc unitname={data.unitname} unittopic={data.topics} onSelectLink={handlelink}/>))}
        </div>
        </div> 
    
}
export default UnitList