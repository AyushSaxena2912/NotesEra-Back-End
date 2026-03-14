import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "./ReviewCard.module.css";

const ReviewCard = ({
  imgSrc,
  imgAlt,
  rating,
  shortReview,
  review,
  name,
  about,
}) => {
  const roundedRating = Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, index) => index);

  return (
    <div className={`${styles.card} d-flex flex-column gap-4 p-4`}>
      <div
        className={`${styles.userContainer} d-flex align-items-center gap-2`}
      >
        <div className={`${styles.imgContainer}`}>
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className="d-flex flex-column gap-1">
          <strong>{name}</strong>
          <p>{about}</p>
          <div className={`${styles.ratings} d-flex`}>
            {stars.map((_, index) => (
              <div key={index}>
                {index + 1 <= roundedRating ? <FaStar /> : <FaRegStar />}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${styles.reviewContainer} d-flex flex-column gap-3`}>
        {shortReview ? (
          <p className={`${styles.shortReview}`}>
            <strong>{shortReview}</strong>
          </p>
        ) : (
          ""
        )}
        <p className={`${styles.review}`}>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
