import'./searchbar.css'
import Select from 'react-select';
import{BsSend} from'react-icons/bs';
import { useState,useEffect } from 'react';
import axios from 'axios';

import  Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const SearchBar =(props)=>{
  const[isdataLoading,setisDataloading]=useState(true)
  const [departmentlist ,setDepartmentList]= useState([])
  const[yearlist,setYearlist]=useState([]);
  const[collegelist,setcollegelist]=useState([]);
  const [collegeselected,setCollegeSelected]=useState(null);
  const[yearselected,setyearselected]=useState(null)
  const[departmentselected,setDepartmentSelected]=useState(null);
    useEffect(()=>{
        axios.get("https://noteseravideobackend.onrender.com/video/see").then((response)=>{
            const collegedata = response.data.map((data)=>({
              value:data,label:data
            }))
            setisDataloading(false);
            setcollegelist(collegedata)
        }).catch(err=>{
            console.log("error in searching data",err);
        })
    },[])
    const collegelistChangeHandler=(selectedOption)=>{
      setCollegeSelected(selectedOption.value);
      axios.get(`https://noteseravideobackend.onrender.com/video/see/${selectedOption.value}`).then((response)=>{
        const yeardata = response.data.map((data)=>({
          value:data,label:data
        }))
        setYearlist(yeardata);
      })
    }
    const yearlistChangeHandler=(selectedOption)=>{
      setyearselected(selectedOption.value);
      axios.get(`https://noteseravideobackend.onrender.com/video/see/${collegeselected}/${selectedOption.value}`).then((response)=>{
        const departmentdata = response.data.map((data)=>({
          value:data,label:data
        }))
        setDepartmentList(departmentdata);
      })
    }
    const departmentChangeHandler = (selectedOption)=>{
      setDepartmentSelected(selectedOption.value)
    }
    const submitHandler= async()=>{
      if(collegeselected&&yearselected&&departmentselected){
       const response= await axios.get(`https://noteseravideobackend.onrender.com/video/see/${collegeselected}/${yearselected}/${departmentselected}`
       )
       const subjects = response.data;
       console.log(subjects);
       props.getdata(subjects);
      }
    }
    return<div className="Searchbar">
      <ul className='SearchBarOptions'>
        <li>
              {isdataLoading&&<Skeleton height="40px"/>}
              {!isdataLoading && <Select  className="searchoptionliselect"options={collegelist} onChange={collegelistChangeHandler} placeholder="selectcollege"/>}
        </li>
        <li>
              {isdataLoading&&<Skeleton height="40px"/>}
              {!isdataLoading&&<Select className='selected' options={yearlist} 
              onChange={yearlistChangeHandler}
              placeholder="select year"/>}
        </li>
        <li>  {isdataLoading&&<Skeleton height="40px"/>}
              {!isdataLoading&&
              <Select className='selected' options={departmentlist} 
              onChange={departmentChangeHandler}
              placeholder="select department"/>}
        </li>
      </ul>
      <button className='searchsubmitbutton' onClick={submitHandler}>submit<BsSend/></button>
    </div>
}
export default SearchBar;