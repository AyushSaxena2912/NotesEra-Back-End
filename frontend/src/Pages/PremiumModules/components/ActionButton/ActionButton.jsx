import styles from "./ActionButton.module.css";

const ActionButton = ({ isLink = true, href = "/", children, handleClick }) => {
  return isLink ? (
    <a href={href} className={`${styles.btn} btn`}>
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

export default ActionButton;
