import { useCallback, useEffect, useState } from "react";
import { fetchSubjects } from "../../utils/premium";

import Header from "./components/Header/Header";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";
import SubjectCard from "./components/SubjectCard/SubjectCard";
import SubscribeCard from "./components/SubscribeCard/SubscribeCard";
import Footer from "./components/Footer/Footer";
import DarkEllipse from "./components/Ellipses/DarkEllipse";
import LightEllipse from "./components/Ellipses/LightEllipse";
import BrightEllipse from "./components/Ellipses/BrightEllipse";

import premium from "./Premium.module.css";
import Spinner from "./components/Spinner/Spinner";
import SecondaryButton from "./components/SecondaryButton/SecondaryButton";

const Premium = () => {
  const [subjects, setSubjects] = useState(null);

  const setData = useCallback(async () => {
    const data = await fetchSubjects({
      yearValue: 3,
      programmeValue: "btech",
      branchValue: "cse",
    });
    setSubjects(data);
  }, []);

  useEffect(() => {
    setData();
  }, [setData]);

  return (
    <div className={premium.wrapper}>
      <div className={premium.body}>
        <main>
          {/* <!-- Header Section --> */}
          <Header />
          {/* <!-- Hero Section --> */}
          <section
            className={`${premium.hero} container d-flex flex-column flex-md-row align-items-center justify-content-md-around`}
          >
            <div className={premium.heroTextContainer}>
              <h1 className="text-start">Notes-Era Premium</h1>
              <h2 className="text-start p-0">
                Exam<br />
                Boosters !
              </h2>
              <p className="">
                "Unlock the Era of Premium Learning with Notes-Era: Elevate Your
                Knowledge, <span>Embrace</span> Success."
              </p>
              <PrimaryButton isLink={true} link="/premium#premiums" target="">
                Get Started
              </PrimaryButton>
            </div>
            <div className={premium.heroImgContainer}>
              <img
                src="/Assets2/Premiums/hero.png"
                alt="NotesEra Hero"
                width={348}
                height={257}
              />
            </div>
          </section>

          {/* <!-- Introduction Section --> */}
          <section className={`${premium.intro} container`}>
            <h1>Notes-Era Premium</h1>
            <p className="text-center mx-auto">
              "Unlock success with Notes-Era's{" "}
              <span>
                20-page Exam Cracker + Detailed unit notes included!
              </span>{" "}
              Clear diagrams, integrated past questions. Perfect for quick
              revisions and anyone aiming to master the complete unit. Elevate
              your learning with Notes-Era Premium."
            </p>
          </section>

          <section className={`${premium.notes} container`}>
            <h1>Fundamentals of Managment ,economics and accountancy  Quick shorts</h1>
            <div
              style={{
                position: "relative",
                paddingTop: "max(60%,324px)",
                width: "100%",
                height: 0,
              }}
            >
              <iframe
                title="SE Notes"
                style={{
                  position: "absolute",
                  border: "none",
                  width: "100%",
                  height: "100%",
                  left: "0%",
                  top: "3%",
                }}
                src="https://online.fliphtml5.com/conct/xfwe/"
                seamless="seamless"
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allowFullscreen="true"
              >
              </iframe>
            </div>
            <SecondaryButton isLink={true} link="https://drive.google.com/file/d/1jYYrWGZtSu5Dh5jGT0RDm9E4GwJhjJbD/view?usp=drive_link "target="_blank">
              View In Drive
            </SecondaryButton>
          </section>
          {/* <!-- Contents Section --> */}

          <section className={premium.announcement}>
            <h1>More Subjects Coming Soon...</h1>
          </section>
          {subjects?.length
            ? (
              <section
                id="premiums"
                className={`${premium.contents} container`}
              >
                <div className="row">
                  {subjects.map((subject, index) =>
                    index === subjects.length - 1 && subject.length % 2 === 1
                      ? (
                        <div
                          key={index}
                          className="col-12 col-md-12 col-lg-4"
                        >
                          <SubjectCard
                            name={subject.name}
                            imageLink={subject.imgLink}
                            sampleLink={"/"}
                            link={subject.link}
                          />
                        </div>
                      )
                      : (
                        <div
                          key={subject.name}
                          className="col-12 col-md-6 col-lg-4"
                        >
                          <SubjectCard
                            name={subject.name}
                            imageLink={subject.imgLink}
                            sampleLink={"/"}
                            link={subject.link}
                          />
                        </div>
                      )
                  )}
                </div>
              </section>
            )
            : (
              <div className="py-5 my-6">
                <Spinner size={100} />
              </div>
            )}

          {/* <!-- Subscription Section --> */}
          <section className={`${premium.subscribe} container mt-5`}>
            <SubscribeCard />
          </section>
        </main>

        {/* <!-- Footer Section --> */}
        <Footer />
      </div>

      {/* <!-- Design Ellipses--> */}
      <div className={premium.ellipseContainer}>
        <div className={`${premium.ellipse1} position-absolute`}>
          <LightEllipse size="1000px" opacity={0.125} />
        </div>
        <div className={`${premium.ellipse2} position-absolute`}>
          <DarkEllipse size="675px" opacity={0.25} />
        </div>
        <div className={`${premium.ellipse3} position-absolute`}>
          <LightEllipse size="275px" opacity={0.2} />
        </div>
        <div className={`${premium.ellipse4} position-absolute`}>
          <LightEllipse size="350px" opacity={0.2} />
        </div>
        <div className={`${premium.ellipse5} position-absolute`}>
          <LightEllipse size="500px" opacity={0.2} />
        </div>
        <div className={`${premium.ellipse6} position-absolute`}>
          <LightEllipse size="350px" opacity={0.2} />
        </div>
        <div className={`${premium.ellipse7} position-absolute`}>
          <LightEllipse size="500px" opacity={0.1} />
        </div>
        <div className={`${premium.ellipse8} position-absolute`}>
          <LightEllipse size="350px" opacity={0.15} />
        </div>
        <div className={`${premium.ellipse9} position-absolute`}>
          <LightEllipse size="500px" opacity={0.2} />
        </div>
        <div className={`${premium.ellipse10} position-absolute`}>
          <LightEllipse size="1000px" opacity={0.1} />
        </div>
        <div className={`${premium.ellipse11} position-absolute`}>
          <BrightEllipse size="1300px" opacity={0.15} />
        </div>
      </div>
    </div>
  );
};

export default Premium;
