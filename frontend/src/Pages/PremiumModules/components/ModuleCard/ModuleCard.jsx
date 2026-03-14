import { MdArrowOutward } from "react-icons/md";
import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "./ModuleCard.module.css";

const ModuleCard = ({
  imgSrc,
  link = "/",
  name,
  about,
  price,
  oldPrice,
  rating,
  totalRatings,
}) => {
  const roundedRating = Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, index) => index);

  return (
    <a href={link} className={`${styles.card} d-flex flex-column gap-1 shadow`}>
      <div className={`${styles.imgContainer}`}>
        <img src={imgSrc} alt={`${name} thumbnail`} />
      </div>
      <div className={`${styles.textContainer} d-flex flex-column gap-1`}>
        <h1>Premium Modules</h1>
        <h2>
          <span>{name}</span> <MdArrowOutward />
        </h2>
        <p className={styles.para}>{about}</p>
        <div
          className={`${styles.priceContainer} d-flex justify-content-start gap-2`}
        >
          {oldPrice ? (
            <p className={`${styles.oldPrice} position-relative`}>
              {oldPrice}₹<div />
            </p>
          ) : (
            ""
          )}
          <p className={styles.price}>{price}₹</p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <div
            className={`${styles.ratingsContainer} d-flex align-items-center gap-1`}
          >
            <p className={`${styles.ratingPara}`}>{rating}</p>
            <div className={`${styles.ratings} d-flex align-items-center`}>
              {stars.map((_, index) => (
                <div key={index}>
                  {index + 1 <= roundedRating ? <FaStar /> : <FaRegStar />}
                </div>
              ))}
            </div>
          </div>
          <p className={styles.totalRatingsPara}>{`(${totalRatings})`}</p>
        </div>
      </div>
    </a>
  );
};

export default ModuleCard;
