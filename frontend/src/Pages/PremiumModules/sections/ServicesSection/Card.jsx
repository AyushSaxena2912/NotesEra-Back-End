import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styles from "./ServicesSection.module.css";

const Card = ({ cardStyle, imgSrc, imgAlt, heading, para, link = "/" }) => {
  return (
    <div className={`${styles.card} ${cardStyle}`}>
      <div className={styles.cardHeadingContainer}>
        <img src={imgSrc} alt={imgAlt} />
        <h1>{heading}</h1>
      </div>
      <p className={styles.cardPara}>{para}</p>
      <a href={link} className={styles.cardLearnMoreContainer}>
        <span>Learn more</span> <MdOutlineKeyboardArrowRight />
      </a>
    </div>
  );
};

export default Card;
