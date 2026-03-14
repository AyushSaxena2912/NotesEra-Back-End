import styles from "./PreviewCard.module.css";

const PreviewCard = ({ imgSrc, imgAlt }) => {
  return (
    <div className={`${styles.container} shadow`}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default PreviewCard;
