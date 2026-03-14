import primaryButton from "./PrimaryButton.module.css";

const PrimaryButton = ({ children, handleClick, isLink, link, target }) => {
  return isLink
    ? (
      <a
        href={link}
        target={target}
        className={`${primaryButton.button} btn`}
      >
        <span>
          <small>{children}</small>
          <small>{children}</small>
        </span>
      </a>
    )
    : (
      <button onClick={handleClick} className={`${primaryButton.button} btn`}>
        <span>
          <small>{children}</small>
          <small>{children}</small>
        </span>

      </button>
    );
};

export default PrimaryButton;
