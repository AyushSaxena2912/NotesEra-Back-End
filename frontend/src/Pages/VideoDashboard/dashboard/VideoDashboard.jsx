import Navbar from "../../../components/Navbar/navbar";
import SearchBar from "../../../components/SearchBar/Searchbar";
import { useState } from "react";

import Card from "../../../components/UI/Card";
import Button from "../../../components/UI/button";
import "./videodashboard.css";
import VideoForm from "../../../components/videoForm/VideoForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EditTopic from "../../../components/videoForm/EditTopicForm";
import Cookies from "js-cookie";
const VideoDashboard = () => {
  const navigate = useNavigate();
  const [edittopicpopup, setedittopicpopup] = useState(false);
  const [topicid, settopicid] = useState(null);
  const [topicname, settopicname] = useState(null);
  const [topicuri, settopicuri] = useState(null);
  const [cartIsShown, SetCartIsShown] = useState(false);
  const showCartHandler = () => {
    SetCartIsShown(true);
  };
  const hideCardHandler = () => {
    SetCartIsShown(false);
    setedittopicpopup(false);
  };
  const [isdataavaliable, setIsDataAvailable] = useState(false);
  const [subjectList, setSubjectList] = useState([]);
  const getsubjectlistHandler = (subjectlist) => {
    setSubjectList(subjectlist);
    console.log(subjectlist);
    setIsDataAvailable(true);
  };
  const deletetopic = (topicid, courseid) => {
    console.log(topicid, courseid);
    axios
      .delete(
        `https://noteseravideobackend.onrender.com/video/deletetopic/${topicid}/${courseid}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((res) => {
        alert("deleted topic succussfully!!");
        window.location.reload(false);
      })
      .catch((err) => {
        alert("error occured while deleting the topic");
        navigate('/hacker-Samajne-wale-ke-liye-msg');
      });
  };
  const edittopicHandler = (topicid, topicname, topicuri) => {
    console.log(topicid, topicname, topicuri);
    setedittopicpopup(true);
    settopicid(topicid);
    settopicname(topicname);
    settopicuri(topicuri);
  };
  const logout = () => {
    Cookies.remove("token");
    navigate("/videologin");
  };
  return (
    <div className="videodashboard">
      {cartIsShown && <VideoForm hideCard={hideCardHandler} />}
      {edittopicpopup && (
        <EditTopic
          topicid={topicid}
          topicname={topicname}
          topicuri={topicuri}
          hideCard={hideCardHandler}
        />
      )}
      <Navbar />
      <SearchBar getdata={getsubjectlistHandler} />
      <Button onClick={logout}>logout</Button>
      <Button onClick={showCartHandler}>Add Data</Button>
      {!isdataavaliable && (
        <div className="searchimage">
          <img
            src="https://res.cloudinary.com/dpnibtyoj/image/upload/v1701519756/searchimage_tq7c2d.png"
            alt="searchimage"
          />
        </div>
      )}
      {isdataavaliable && (
        <div className="subjects-container video">
          {subjectList.map((subject, index) => (
            <Card>
              <div className="videoSubjectTitledb">
                <h3>{subject.subjectname}</h3>{" "}
              </div>
              <hr></hr>
              <div>
                {subject.coursedata.map((course) => (
                  <Card className="coursedatadb">
                    <div className="unitnamedb">
                      <h4>unit name : {course.unitname}</h4>
                    </div>
                    <div className="topiclistsdb">
                      <ul className="topiclistuldb">
                        {course.topics.map((topic, index) => (
                          <li key={index} className="topicdb">
                            <div>{topic.topicname} </div>
                            <div className="dbbutton">
                              <Button
                                onClick={() => {
                                  edittopicHandler(
                                    topic._id,
                                    topic.topicname,
                                    topic.uri
                                  );
                                }}
                              >
                                edit
                              </Button>{" "}
                              <Button
                                onClick={() => {
                                  deletetopic(topic._id, course._id);
                                }}
                              >
                                delete
                              </Button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <hr></hr>
                  </Card>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
export default VideoDashboard;
