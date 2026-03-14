import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [isHeaderAtTop, setIsHeaderAtTop] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const setScrollPosition = () => {
      const { scrollY } = window;
      if (scrollY <= 10) setIsHeaderAtTop(true);
      else setIsHeaderAtTop(false);
    };
    setScrollPosition();
    window.addEventListener("scroll", setScrollPosition);
    return () => {
      window.removeEventListener("scroll", setScrollPosition);
    };
  }, []);

  useEffect(() => {
    const closeNavOnLg = () => {
      if (window.innerWidth >= 990) setIsNavOpen(false);
    };
    window.addEventListener("resize", closeNavOnLg);
    return () => {
      window.removeEventListener("resize", closeNavOnLg);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isHeaderAtTop && !isNavOpen ? styles.transparentHeader : ""
      }`}
    >
      <div className={`${styles.wrapper} container d-flex flex-column`}>
        <div className="d-flex justify-content-between align-items-center py-3">
          <div className={`${styles.imgContainer}`}>
            <a href="/">
              <img src="/Assets2/darkLogo.png" alt="NotesEra logo" />
            </a>
          </div>
          <Nav location={location} />
          <div
            className={`${styles.menuBtn} ${isNavOpen ? styles.navOpen : ""}`}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <div className={`${styles.menuBar} ${styles.menuBar1}`} />
            <div className={`${styles.menuBar} ${styles.menuBar2}`} />
            <div className={`${styles.menuBar} ${styles.menuBar3}`} />
          </div>
        </div>
        {isNavOpen ? (
          <nav className={`${styles.mobNav}`}>
            <Nav location={location} />
          </nav>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

const Nav = ({ location }) => {
  return (
    <nav className={`${styles.nav}`}>
      <ul className="d-flex list-unstyled">
        <li
          className={location.pathname === "/landing" ? styles.activeLink : ""}
        >
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Video Section</a>
        </li>
        <li>
          <a href="/">Social Welfare</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>

      <div className={styles.primaryBtn}>
        <a href="https://razorpay.me/@notes-era" className="btn">
          <span>
            <small>Donate Now!</small>
            <small>Donate Now!</small>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
