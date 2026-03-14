import secondaryButton from "./SecondaryButton.module.css";

const SecondaryButton = ({ children, handleClick, isLink, link, target }) => {
  return isLink
    ? (
      <a
        href={link}
        target={target}
        onClick={handleClick}
        className={`${secondaryButton.button} btn`}
      >
        <span>
          <small>{children}</small>
          <small>{children}</small>
        </span>
      </a>
    )
    : (
      <button onClick={handleClick} className={`${secondaryButton.button} btn`}>
        <span>
          <small>{children}</small>
          <small>{children}</small>
        </span>
      </button>
    );
};

export default SecondaryButton;
