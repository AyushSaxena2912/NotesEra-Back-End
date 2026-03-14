import "./navbar.css";
import image from "../../assets/darkLogo.png";
const Navbar = (props) => {
  let subjectname = "";
  let backlink = "/";
  if (props.subjectname && props.backlink) {
    subjectname = props.subjectname;
    backlink = props.backlink;
  }
  return (
    <div className="vidnavbar">
      <div className="logoside">
        <img src={image} alt=" this is logo" />
      </div>
      <div className="subjectname">{subjectname}</div>
      <a href={backlink} className="backbutton">
        back
      </a>
    </div>
  );
};
export default Navbar;

