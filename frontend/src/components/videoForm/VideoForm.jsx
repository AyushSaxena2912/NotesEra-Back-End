
import Modal from "../UI/Modal";
import Button from "../UI/button";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const VideoForm = (props) => {
  const navigate = useNavigate();
    const [errorHandle,setErrorHandling]=useState(false);
    const[inputCollegeName,setInputCollegeName]=useState('');
    const[inputYear,setInputYear]=useState(null);
    const[inputDepartment,setInputDepartment]=useState('');
    const[inputSubjectName,setInputSubjectName]=useState('');
    const[inputUnitName,setInputUnitName]=useState('');
    const[inputTopicName,setInputTopicName]=useState('');
    const[inputTopicUri,setInputTopicUri]=useState('');
    
    const inputCollegeNameHandler=(event)=>{
        console.log(event.target.value);
        setInputCollegeName(event.target.value);
    }
    const inputYearHandler=(event)=>{
        setInputYear(event.target.value);
    }
    const inputDepartmentHandler=(event)=>{
        console.log(event.target.value)
        setInputDepartment(event.target.value);
    }
    
    const inputSubjectNameHandler=(event)=>{
        setInputSubjectName(event.target.value);
        console.log(event.target.value)
    }
    const inputUnitNameHandler=(event)=>{
        setInputUnitName(event.target.value);

    }
    const inputTopicNameHandler=(event)=>{
        setInputTopicName(event.target.value);
        console.log(event.target.value)
    }
    const inputTopicUriHandler=(event)=>{
        setInputTopicUri(event.target.value);
        console.log(event.target.value)
    }
    const cleardataHandler=()=>{
        setInputCollegeName('')
        setInputDepartment('')
        setInputYear('')
        setInputSubjectName('')
        setInputUnitName('')
        setInputTopicName('')
        setInputTopicUri('')
        setErrorHandling(false);
    }
    let error="some field is empty can't submit form!!";
    const submitFormHandler=(event)=>{
        event.preventDefault();
        console.log(inputCollegeName,inputDepartment,inputSubjectName,inputTopicName,inputTopicUri,inputUnitName)
        if(inputSubjectName===" "||inputTopicName===" "||inputTopicUri===" "||inputCollegeName===" "||inputDepartment===" "||inputUnitName===" "||inputYear===null){
            setErrorHandling(true)
        }
        // "Cannot destructure property 'email' of 'req.user' as it is null."
        else{
            axios.post("https://noteseravideobackend.onrender.com/video/add",{
                collegename:inputCollegeName,
                year:inputYear,
                department:inputDepartment,
                subjectname:inputSubjectName,
                unitname:inputUnitName,
                topicname:inputTopicName,
                topicuri:inputTopicUri
            },{
              headers:{
                Authorization:`Bearer ${Cookies.get('token')}`,
              }
            }).then(res=>{
                console.log(res.status);
                setTimeout(function(){alert("successfully added!!")},1000)
            }).catch(err=>{
                error='problem in adding data please try again!! '
                console.log(err);
                setErrorHandling(true);
                navigate('/hacker-Samajne-wale-ke-liye-msg');
            })
        }
    }

  return (
    <>
      <Modal hideCard={props.hideCard}>
        <form>
          <h2>add data</h2>
          {errorHandle&&<h4 style={{color:"red"}}>{error}</h4>}
          <div>
            college name:
            <select id="collegename" name="collegename" onClick={inputCollegeNameHandler}>
              <option value="Medicaps">Medicaps</option>
              <option value="Ips">Ips</option>
              <option value="Acropolis">Acropolis</option>
            </select>
          </div>
          <div>
            year:
            <select id="year" name="year" onClick={inputYearHandler}>
              <option value="1">1st year</option>
              <option value="2">2nd year</option>
              <option value="3">3rd year</option>
              <option value="4">4th year</option>
            </select>
          </div>
          <div>
            department:
            <select id="department" name="department" onClick={inputDepartmentHandler}>
              <option value="CS">Computer Science</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="EC">Electronics Engineering</option>
            </select>
          </div>
          <div>
            Subject name:
            <input type="text" name="subjectname" onChange={inputSubjectNameHandler} value={inputSubjectName}/>
          </div>
          <div>
            unit name:
            <select id="unit" name="unitname" onClick={inputUnitNameHandler}>
              <option value="unit 1">unit 1</option>
              <option value="unit 2">unit 2</option>
              <option value="unit 3">unit 3</option>
              <option value="unit 4">unit 4</option>
              <option value="unit 5">unit 5</option>
            </select>
          </div>
          <div>
            Topic name:
            <input type="text" name="topicname" onChange={inputTopicNameHandler} value={inputTopicName}/>
          </div>
          <div>
            Topic uri:
            <input type="text" name="topicuri" onChange={inputTopicUriHandler} value={inputTopicUri}/>
          </div>
          <div><Button onClick={cleardataHandler}>clear</Button> <Button onClick={submitFormHandler}>add Data</Button></div>
        </form>
      </Modal>
    </>
  );
};
export default VideoForm;
