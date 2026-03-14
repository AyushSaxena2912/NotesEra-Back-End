import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({
  isLink = false,
  href = "/",
  children,
  handleClick = () => {},
}) => {
  return isLink ? (
    <a href={href} className={`${styles.btn} btn`}>
      <span>
        <small>{children}</small>
        <small>{children}</small>
      </span>
    </a>
  ) : (
    <button onClick={handleClick} className={`${styles.btn} btn`}>
      <span>
        <small>{children}</small>
        <small>{children}</small>
      </span>
    </button>
  );
};

export default PrimaryButton;
