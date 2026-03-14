import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import footer from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${footer.wrapper}`}>
      <div className={`$footer.body{} container`}>
        <div
          className={`${footer.content} d-flex flex-column gap-4 flex-md-row flex-wrap align-items-center justify-content-between`}
        >
          <a href="/">
            <img
              src="/Assets2/lightLogo.png"
              alt="NotesEra Logo"
              width={110}
              height={40}
            />
          </a>
          <PrimaryButton isLink={true} link="mailto:noteseraa@gmail.com">
            Contact Us For More Details
          </PrimaryButton>
          <div className={`${footer.socials}`}>
            <p>Social Media Links</p>
            <ul
              className={`${footer.links} m-0 d-flex align-items-center justify-content-evenly list-unstyled fs-4`}
            >
              <li>
                <a
                  href="https://www.linkedin.com/company/notes-era/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Notes-Era"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${footer.copyright} text-center`}>
          <p>
            <span>@Notesera 2023</span>. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
