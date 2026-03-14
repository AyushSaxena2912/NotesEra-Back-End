// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import SecondaryButton from "../SecondaryButton/SecondaryButton.jsx";
import subjectCard from "./SubjectCard.module.css";

const SubjectCard = ({ name, sampleLink, link, imageLink }) => {
  return (
    <div className={`${subjectCard.wrapper} mx-auto`}>
      <div className={`${subjectCard.card} `}>
        <img src={imageLink} alt={`NotesEra ${name} img`} />
        <a
          href={link}
          target="_blank"
          className={`${subjectCard.overlay} d-flex align-items-end justify-content-center`}
          rel="noreferrer"
        >
          {
            // <p className="d-flex gap-2 align-items-center">
            //   View Sample
            //   <span className="d-flex align-items-center m-0 p-0">
            //     <HiOutlineArrowNarrowRight />
            //   </span>
            // </p>
          }
        </a>
      </div>
      <div className="text-center">
        <SecondaryButton isLink={true} link={link} target="_blank">
          {`${name}`}
        </SecondaryButton>
      </div>
    </div>
  );
};

export default SubjectCard;
