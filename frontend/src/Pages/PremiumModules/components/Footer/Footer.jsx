import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div
        className={`${styles.wrapper} container d-flex flex-column gap-5 px-3`}
      >
        <div
          className={`${styles.mainContainer} d-flex flex-wrap gap-5 justify-content-between mb-5`}
        >
          <div
            className={`${styles.footerSectionContainer} ${styles.footerImgSection} align-items-center`}
          >
            <img
              src="/Assets2/lightTexturedLogo.png"
              alt="Notes-Era Logo"
              width={200}
            />
            <div className="d-flex flex-column align-items-center gap-2">
              <p>"Notes-Era: Unleash Knowledge, Inspiring Growth."</p>
              <p>Don't go anywhere every solution is here.</p>
            </div>
          </div>
          <div className={`${styles.footerSectionContainer}`}>
            <h1>Colleges</h1>
            <p>RGPV Colleges</p>
            <p>Medi-Caps University</p>
            <p>IIST</p>
            <p>SVIT</p>
          </div>
          <div className={`${styles.footerSectionContainer}`}>
            <h1>Sections</h1>
            <a href="/">Home</a>
            <div className="d-flex align-items-center gap-3">
              <a href="/">Blog Section</a>
              <span className={styles.badge}>New</span>
            </div>
            <a href="/">Video Section</a>
            <a href="/">Internship Updates</a>
          </div>
          <div className={`${styles.footerSectionContainer}`}>
            <h1>Social</h1>
            <a href="/">YouTube</a>
            <a href="/">Instagram</a>
            <a href="/">LinkedIn</a>
            <a href="/">Twitter</a>
          </div>
          <div className={`${styles.footerSectionContainer}`}>
            <h1>Legal</h1>
            <a href="/">Terms</a>
            <a href="/">Privacy</a>
            <a href="/">Cookies</a>
            <a href="/">Contact</a>
          </div>
        </div>
        <div
          className={`${styles.copyrightContainer} d-flex justify-content-between align-items-center`}
        >
          <p>Copyright &copy; 2024 Notes-Era. All rights reserved.</p>
          <div className={`${styles.socialIcons} d-flex gap-3`}>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaLinkedin />
            </a>
            <a href="/">
              <FaFacebook />
            </a>
            <a href="/">
              <FaGithub />
            </a>
            <a href="/">
              <FaDribbble />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
