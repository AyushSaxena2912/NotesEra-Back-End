import styles from "./SecondaryButton.module.css";

const SecondaryButton = ({
  isLink = false,
  href = "/",
  children,
  handleClick = () => {},
}) => {
  return isLink ? (
    <a className={`${styles.btn} btn`} href={href}>
      <span>
        <small>{children}</small>
        <small>{children}</small>
      </span>
    </a>
  ) : (
    <button className={`${styles.btn} btn`} onClick={handleClick}>
      <span>
        <small>{children}</small>
        <small>{children}</small>
      </span>
    </button>
  );
};

export default SecondaryButton;
