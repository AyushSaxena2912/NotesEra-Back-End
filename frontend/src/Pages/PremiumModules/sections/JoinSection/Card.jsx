const Card = ({ styles, imgSrc, imgAlt, heading, about }) => {
  return (
    <div className={`${styles.card} d-flex gap-4 align-items-center`}>
      <div className={`${styles.cardImgContainer}`}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className={`${styles.cardTextContainer} d-flex flex-column gap-3`}>
        <h2>{heading}</h2>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default Card;
