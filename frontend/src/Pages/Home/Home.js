import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  const [sectionInView, setSectionInView] = useState(false);

  // const [showPopup, setShowPopup] = useState(false);
  // // const openInNewTab = (url) => {
  // //   window.open(url, "_blank", "noreferrer");
  // // };
  // useEffect(() => {
  //   // Function to show the popup after a delay
  //   const showPopupAfterDelay = () => {
  //     setTimeout(() => {
  //       setShowPopup(true);
  //     }, 10000); // 10 seconds delay (10000 milliseconds)
  //   };

  //   // Call the function to start the countdown when the component mounts
  //   showPopupAfterDelay();
  // }, []);

  // // Function to close the popup
  // const closePopup = () => {
  //   setShowPopup(false);
  // };

  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSectionInView(true);
          sectionObserver.unobserve(entry.target);
        }
      });
    });

    const sectionElement = document.querySelector(".counter_section");
    if (sectionElement) {
      sectionObserver.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        sectionObserver.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <>
      {/* <!-- Body Wrap - Start --> */}
      <div className="page_wrapper">
        {/* <!-- Back To Top - Start --> */}
        <div className="backtotop">
          <a href="/" className="scroll">
            <i className="far fa-arrow-up"></i>
          </a>
        </div>
        {/* <!-- Back To Top - End -->

        <!-- Site Header - Start
          ================================================== --> */}
        <header className="site_header site_header_1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col col-lg-3 col-5">
                <div className="site_logo">
                  <a className="site_link" href="index.html">
                    <img
                      src="Assets2/notesera_logo.png"
                      style={{ width: "200px" }}
                      alt="NotesEra - Online Learning Platform"
                    />
                  </a>
                </div>
              </div>
              <div className="col col-lg-6 col-2">
                <nav className="main_menu navbar navbar-expand-lg">
                  <div
                    className="main_menu_inner collapse navbar-collapse justify-content-center"
                    id="main_menu_dropdown"
                  >
                    <ul className="main_menu_list unordered_list_center">
                      <li className="dropdown active" />
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col col-lg-3 col-5">
                <ul className="header_btns_group unordered_list_end">
                  <li className="d-lg-none">
                    {/* <button className="mobile_menu_btn" type="button" data-bs-toggle="collapse"
                      data-bs-target="#main_menu_dropdown" aria-controls="main_menu_dropdown" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <i className="far fa-bars">
                      </i>
                    </button> */}
                  </li>
                  {/* <li>
                    <a className="btn border_dark" href="login.html">
                      <span>
                        <small>Login</small>
                        <small>Login</small>
                      </span>
                    </a>
                  </li> */}
                  <li>
                    <a
                      className="btn btn_dark"
                      href="http://chat.whatsapp.com/CU0h46Rmu5j3R9iqG3ci4Y"
                    >
                      <span>
                        <small>Join Our Community</small>
                        <small>Join Our Community</small>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        {/* <!-- Site Header - End
          ================================================== -->*/}

        {/*<!-- Main Body - Start
          ================================================== -->*/}
        <main className="page_content">
          {/*<!-- Banner Section - Start
            ================================================== --> */}
          <section className="hero_banner style_1">
            <div className="container">
              <div className="content_wrap">
                <div className="row">
                  <div className="col col-lg-7">
                    <h1
                      className="banner_small_title"
                      style={{
                        fontSize: "50px",
                        textAlign: "left",
                        color: "#AF69EE",
                        marginBottom: "40px",
                      }}
                    >
                      Notes-Era
                    </h1>
                    <h2 className="banner_big_title">
                      Your Ultimate Source for All Educational Requirements
                      Online
                    </h2>
                    <p className="banner_description">
                      Welcome to Notes-Era – Your Ultimate Source for All
                      Educational Note Requirements Online. At Notes-Era, we
                      understand the importance of quality educational resources
                      in your learning journey. Our platform offers a
                      comprehensive collection of notes, study materials, and
                      resources to cater to the diverse needs of students and
                      learners.
                    </p>
                    <ul className="banner_btns_group unordered_list">
                      <li>
                        <Link to="/courses" className="btn btn_primary">
                          <span>
                            <small>Explore Notes</small>
                            <small>Explore Notes</small>
                          </span>
                        </Link>
                      </li>
                      {/* <Link to="/premium" className="btn btn_premium"> */}
                      <a
                        className="btn btn_premium"
                        href="https://drive.google.com/drive/folders/1TWq-kyU5SE-L-eInlt10IaAxaHY8WvRW?usp=drive_link "
                      >
                        <span>
                          <small> Second Year Notes</small>
                          <small> Second Year Notes</small>
                        </span>
                      </a>
                      {/* </Link> */}
                      <li>
                        {/* <button className="btn btn_primary" onClick={()=>{setShowPopup(true)}}>
                          <span>
                            <small>MST bundle !!</small>
                            <small>DAA/FMEA MST2</small>
                          </span>
                        </button> */}
                      </li>
                    </ul>
                  </div>
                  <div className="col col-lg-5">
                    <div className="banner_image_1 decoration_wrap">
                      {/*
                        <div className="image_wrap">
                          <img
                            src="https://res.cloudinary.com/dckce9dzy/image/upload/v1693751695/Assets2/banner_gwfmq2.png"
                            alt="Notes-Era – Online Learning Platform"
                          />
                        </div>
                      */}
                      <div className="satisfied_student">
                        <h3 className="wrap_title">4000+ Satisfied Student</h3>
                        <ul className="students_thumbnail unordered_list_center">
                          <li>
                            <span>
                              <img
                                src="https://res.cloudinary.com/dckce9dzy/image/upload/v1693751792/Assets2/Untitleddesign_1_wceupe.png"
                                alt="Notes-Era – Online Learning Platform"
                              />
                            </span>
                          </li>
                          <li>
                            <span>
                              <img
                                src="https://res.cloudinary.com/dckce9dzy/image/upload/v1693751793/Assets2/Untitleddesign_2_fje1wf.png"
                                alt="Notes-Era – Online Learning Platform"
                              />
                            </span>
                          </li>
                          <li>
                            <span>
                              <img
                                src="https://res.cloudinary.com/dckce9dzy/image/upload/v1693751793/Assets2/Untitleddesign_3_lknnof.png"
                                alt="Notes-Era – Online Learning Platform"
                              />
                            </span>
                          </li>
                          <li>
                            <span>
                              <img
                                src="https://res.cloudinary.com/dckce9dzy/image/upload/v1693751793/Assets2/Untitleddesign_4_ljes1d.png"
                                alt="Notes-Era – Online Learning Platform"
                              />
                            </span>
                          </li>
                          <li>
                            <span>
                              <img
                                src="https://res.cloudinary.com/dckce9dzy/image/upload/v1693751794/Assets2/Untitleddesign_flr1tu.png"
                                alt="Notes-Era – Online Learning Platform"
                              />
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="deco_item shape_img_1"
                        data-parallax='{"y" : -130, "smoothness": 6}'
                      >
                        <img
                          src="assets/images/shape/shape_img_1.png"
                          alt="Notes-Era – Online Learning Platform"
                        />
                      </div>
                      <div
                        className="deco_item shape_img_2"
                        data-parallax='{"y" : 160, "smoothness": 6}'
                      >
                        <img
                          src="assets/images/shape/shape_img_2.png"
                          alt="Notes-Era – Online Learning Platform"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Banner Section - End
            ================================================== -->

          <!-- Expect From Course - Start
            ================================================== --> */}
          <section className="expect_from_course section_space_lg">
            <div className="container">
              <div className="row">
                <div className="col col-lg-6">
                  <div className="section_heading">
                    <h2 className="heading_text">
                      Anticipate the Offerings of Notes-Era.
                    </h2>
                    <p className="heading_description mb-0">
                      Discover a treasure trove of educational resources at
                      Notes-Era. Elevate your learning journey with a diverse
                      range of notes, papers, and more.
                    </p>
                  </div>

                  <div
                    className="image_widget"
                    style={{ boxShadow: "10px 10px 0 #af6bed" }}
                  >
                    <img
                      src="https://res.cloudinary.com/dckce9dzy/image/upload/v1693751627/Assets2/about_image_1_bumdcm.jpg"
                      alt="NotesEra – Online Learning Platform"
                    />
                  </div>
                </div>
                <div className="col col-lg-6">
                  {/* <!-- Button will hide on Mobile Device --> */}
                  <div className="btn_wrap pt-0 d-none d-lg-flex justify-content-end"></div>

                  <div className="row">
                    <div className="col col-md-6">
                      <div className="service_item" data-magnetic>
                        <div className="item_icon">
                          <img
                            src="assets/images/service/icon_academic_cap.svg"
                            alt="NotesEra – Online Learning Platform"
                          />
                        </div>
                        <div className="item_content">
                          <h3 className="item_title">Notes</h3>
                          <p className="mb-0">
                            Notes-Era offers comprehensive educational notes,
                            catering to a wide spectrum of subjects and academic
                            levels.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="service_item" data-magnetic>
                        <div className="item_icon">
                          <img
                            src="assets/images/service/icon_physics.svg"
                            alt="NotesEra – Online Learning Platform"
                          />
                        </div>
                        <div className="item_content">
                          <h3 className="item_title">Assignments</h3>
                          <p className="mb-0">
                            Explore a diverse range of assignment resources and
                            guidelines on Notes-Era, enhancing your academic
                            excellence.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="service_item" data-magnetic>
                        <div className="item_icon">
                          <img
                            src="assets/images/service/icon_communication.svg"
                            alt="NotesEra – Online Learning Platform"
                          />
                        </div>
                        <div className="item_content">
                          <h3 className="item_title">Exam Papers</h3>
                          <p className="mb-0">
                            Access a wide range of Exam Papers (PYQ) to excel in
                            your preparations.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="service_item" data-magnetic>
                        <div className="item_icon">
                          <img
                            src="assets/images/service/icon_diploma.svg"
                            alt="Notes-Era – Online Learning Platform"
                          />
                        </div>
                        <div className="item_content">
                          <h3 className="item_title">A certificate</h3>
                          <p className="mb-0">
                            Get certified upon completion for academic Course
                            with our recognized certificates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Button will show on Mobile Device --> */}
                  <div className="btn_wrap pb-0 d-block d-lg-none text-center">
                    <a className="btn border_dark" href="/courses">
                      <span>
                        <small>Explore Notes</small>
                        <small>Explore Notes</small>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Expect From Course - End
            ================================================== -->

          <!-- Counter Section - Start
            ================================================== --> */}
          <section className="counter_section bg_light section_space_md">
            <div
              className={`container ${sectionInView ? "animate-counters" : ""}`}
            >
              <div className="row">
                <div className="col col-lg-3 col-md-6">
                  <InView>
                    {({ inView, ref }) => (
                      <div className="counter_item" ref={ref}>
                        <h3 className="counter_value">
                          {inView ? (
                            <CountUp start={0} end={500} duration={2} />
                          ) : (
                            <span className="counter_value_text">0</span>
                          )}
                          <span>+</span>
                        </h3>
                        <p className="mb-0">
                          Hours of hands-on learning in our courses
                        </p>
                      </div>
                    )}
                  </InView>
                </div>

                <div className="col col-lg-3 col-md-6">
                  <InView>
                    {({ inView, ref }) => (
                      <div className="counter_item" ref={ref}>
                        <h3 className="counter_value">
                          {inView ? (
                            <CountUp start={0} end={4200} duration={2} />
                          ) : (
                            <span className="counter_value_text">0</span>
                          )}
                          <span>+</span>
                        </h3>
                        <p className="mb-0">
                          students excelled academically due to our Notes.
                        </p>
                      </div>
                    )}
                  </InView>
                </div>

                <div className="col col-lg-3 col-md-6">
                  <InView>
                    {({ inView, ref }) => (
                      <div className="counter_item" ref={ref}>
                        <h3 className="counter_value">
                          {inView ? (
                            <CountUp start={0} end={150} duration={2} />
                          ) : (
                            <span className="counter_value_text">0</span>
                          )}
                          <span>+</span>
                        </h3>
                        <p className="mb-0">
                          Courses are covered by Notes-Era comprehensively.
                        </p>
                      </div>
                    )}
                  </InView>
                </div>

                <div className="col col-lg-3 col-md-6">
                  <InView>
                    {({ inView, ref }) => (
                      <div className="counter_item" ref={ref}>
                        <h3 className="counter_value">
                          {inView ? (
                            <CountUp start={0} end={150} duration={2} />
                          ) : (
                            <span className="counter_value_text">0</span>
                          )}
                          <span>+</span>
                        </h3>
                        <p className="mb-0">
                          Professionals guide and support you through the
                          journey.
                        </p>
                      </div>
                    )}
                  </InView>
                </div>
              </div>
            </div>
          </section>
          {
            /* <!-- Counter Section - End
            ================================================== -->

            <!-- Courses Section - Start    (Teams Section)
            ================================================== --> */
            // <section className="courses_section section_space_lg">
            //   <div className="container">
            //     <div className="section_heading">
            //       <div className="row align-items-center justify-content-lg-between">
            //         <div className="col col-lg-6">
            //           <h2 className="heading_text mb-0">
            //             Introducing Our Dedicated Team
            //           </h2>
            //         </div>
            //         <div className="col col-lg-5">
            //           <p className="heading_description mb-0 text-lg-end">
            //             Our diligent team is committed to providing educational support and guidance to enhance learning
            //             experiences.
            //           </p>
            //         </div>
            //       </div>
            //     </div>
            //     <div className="tabs_wrapper">
            //       <ul className="nav" role="tablist">
            //         <li role="presentation">
            //           <button className="active" data-bs-toggle="tab" data-bs-target="#teb_hr" type="button" role="tab"
            //             aria-selected="true">
            //             <i className="fas fa-users"></i>
            //             <span>Founders</span>
            //           </button>
            //         </li>
            //         <li role="presentation">
            //           <button data-bs-toggle="tab" data-bs-target="#teb_photography" type="button" role="tab"
            //             aria-selected="false">
            //             <i className="fas fa-camera"></i>
            //             <span>Technicals</span>
            //           </button>
            //         </li>
            //         <li role="presentation">
            //           <button data-bs-toggle="tab" data-bs-target="#teb_database" type="button" role="tab"
            //             aria-selected="false">
            //             <i className="fas fa-database"></i>
            //             <span>Database</span>
            //           </button>
            //         </li>
            //         <li role="presentation">
            //           <button data-bs-toggle="tab" data-bs-target="#teb_management" type="button" role="tab"
            //             aria-selected="false">
            //             <i className="fas fa-book"></i>
            //             <span>Management</span>
            //           </button>
            //         </li>
            //         <li role="presentation">
            //           <button data-bs-toggle="tab" data-bs-target="#teb_programming" type="button" role="tab"
            //             aria-selected="false">
            //             <i className="fas fa-chart-network"></i>
            //             <span>Content</span>
            //           </button>
            //         </li>
            //         <li role="presentation">
            //           <button data-bs-toggle="tab" data-bs-target="#teb_marketing" type="button" role="tab"
            //             aria-selected="false">
            //             <i className="fas fa-lightbulb-on"></i>
            //             <span>Media</span>
            //           </button>
            //         </li>
            //         <li role="presentation">
            //           <button data-bs-toggle="tab" data-bs-target="#teb_elite" type="button" role="tab"
            //             aria-selected="false">
            //             <i className="fas fa-star"></i>
            //             <span>Team Elite</span>
            //           </button>
            //         </li>
            //       </ul>
            //       <div className="tab-content">
            //         <div className="tab-pane fade show active" id="teb_hr" role="tabpanel">
            //           <div className="row">
            //             <div className="col col-lg-5">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="https://instagram.com/ayushsaxena_29?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
            //                     data-cursor-text="View">
            //                     <img src="Assets2/Ayush_Saxena.jpg" alt="NotesEra – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Founder</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Originator</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Optimism</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Visionary</span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://instagram.com/ayushsaxena_29?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D">
            //                       Ayush Saxena: The Mastermind of Notes-Era
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill" href="https://www.linkedin.com/in/ayush-saxena-3684b2218/">
            //                     <span className="btn_text">LinkedIn</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div>
            //             <div className="col col-lg-5">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="https://www.instagram.com/sakshijha.ai/" data-cursor-text="View">
            //                     <img src="Assets2/Sakshi_Jha.jpg" alt="NotesEra – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Co-Founder</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Modernity</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Resilience</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Initiator</span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://www.instagram.com/sakshijha.ai/">
            //                       Sakshi Jha: A Complete Package of Positive Energy
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill" href="https://www.linkedin.com/in/sakshi-sonam-jha-98519b223/">
            //                     <span className="btn_text">LinkedIn</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div>
            //             <div className="col col-lg-5">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="Add Link"
            //                     data-cursor-text="View">
            //                     <img src="Assets2/Itish_Jain.jpg" alt="NotesEra – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Co-Founder</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Enthusiasm</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Knowledge</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Guidance</span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://www.linkedin.com/in/itish-jain-a3479822a/">
            //                       Itish Jain:"Solving Tomorrow, Together in Peace"
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill"
            //                     href="https://www.linkedin.com/in/itish-jain-a3479822a/">
            //                     <span className="btn_text">Linkedin</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div>
            //             <div className="col col-lg-5">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="Add Link"
            //                     data-cursor-text="View">
            //                     <img src="Assets2/Aradhya_Tiwari.jpg" alt="NotesEra – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Co-Founder</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Technology</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Knowledge</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>focus</span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://www.linkedin.com/in/aradhya-tiwari-7ab767144/">
            //                       Aradhya Tiwari:"Cultivating Connectivity, Nurturing Peace"
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill"
            //                     href="https://www.linkedin.com/in/aradhya-tiwari-7ab767144/">
            //                     <span className="btn_text">Linkedin</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div>
            //           </div>
            //         </div>
            //         <div className="tab-pane fade" id="teb_photography" role="tabpanel">
            //           <div className="row">
            //             <div className="col col-lg-5">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="https://www.linkedin.com/in/sujal-soni/" data-cursor-text="View">
            //                     <img src="Assets2/Sujal_Soni.jpg" alt="NotesEra – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Senior Developer</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Technology</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Future</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Enrichment</span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://www.linkedin.com/in/sujal-soni/">
            //                     Sujal Soni: Diligent Learner, Full Stack Web Developer
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill" href="https://www.linkedin.com/in/sujal-soni/">
            //                     <span className="btn_text">LinkedIn</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div>
            //             <div className="col col-lg-5">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="https://www.linkedin.com/in/sanskarsoni9/" data-cursor-text="View">
            //                     <img src="Assets2/Sanskar_Soni.jpg" alt="NotesEra – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Senior Developer</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Technology</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Development</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Liberated</span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://www.linkedin.com/in/arth-gupta-a85b4a210/">
            //                       Sanskar Soni: Make it work, Make it right, Make it fast
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill" href="https://www.linkedin.com/in/sanskarsoni9/">
            //                     <span className="btn_text">LinkedIn</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div>
            //             <div className="col col-lg-5">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="https://www.linkedin.com/in/arth-gupta-a85b4a210/" data-cursor-text="View">
            //                     <img src="Assets2/Arth_Gupta.jpeg" alt="NotesEra – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Senior Developer</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Technology</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Future</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Evolvement</span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://www.linkedin.com/in/arth-gupta-a85b4a210/">
            //                       Arth Gupta: Elevating Tech Solutions Excellently
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill" href="https://www.linkedin.com/in/arth-gupta-a85b4a210/">
            //                     <span className="btn_text">LinkedIn</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div>
            //             <div className="col col-lg-5">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="https://www.instagram.com/jasneet2003/" data-cursor-text="View">
            //                     <img src="Assets2/Jasneet_Singh_Saini.jpeg" alt="NotesEra – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Developer</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Gamer</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Vlogger</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Creator</span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://www.instagram.com/jasneet2003/">
            //                     Jasneet Singh Saini: I Create Content and craft elegant Frontend
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill" href="https://www.linkedin.com/in/jasneet-singh-saini-473638214/">
            //                     <span className="btn_text">LinkedIn</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div>
            //           </div>
            //         </div>
            //         <div className="tab-pane fade" id="teb_database" role="tabpanel">
            //           <div className="row">
            //             { <div className="col col-lg-4">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="https://instagram.com/mr_singh_jiii?igshid=MmU2YjMzNjRlOQ==" data-cursor-text="View">
            //                     <img src="Assets2/Kulvinder_Singh.jpg" alt="NotesEra – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Database Lead</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Productivity</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Organized</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Structured</span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://instagram.com/mr_singh_jiii?igshid=MmU2YjMzNjRlOQ==">
            //                       Kulvinder Singh: Your Database Manager
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill" href="https://instagram.com/mr_singh_jiii?igshid=MmU2YjMzNjRlOQ==">
            //                     <span className="btn_text">Instagram</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div> }
            //             <div className="col col-lg-4">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="https://instagram.com/ganuanvesha_30?igshid=MmU2YjMzNjRlOQ==" data-cursor-text="View">
            //                     <img src="Assets2/Anvesha_Ganu.jpg" alt="NotesEra – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Database Team</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Productivity</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Organized</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Structured</span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://instagram.com/ganuanvesha_30?igshid=MmU2YjMzNjRlOQ==">
            //                     Anvesha Ganu: Give me info and I'll give you knowledge.
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill" href="https://instagram.com/ganuanvesha_30?igshid=MmU2YjMzNjRlOQ==">
            //                     <span className="btn_text">Instagram</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div>
            //             <div className="col col-lg-4">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="https://www.linkedin.com/in/umang-patanwala-96b032251" data-cursor-text="View">
            //                     <img src="Assets2/Umang_Patanwala.jpg" alt="Collab – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Database Team</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Productivity</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Organized</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Structured</span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://www.linkedin.com/in/umang-patanwala-96b032251">
            //                     Umang Patanwala: Walking database
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill" href="https://www.linkedin.com/in/umang-patanwala-96b032251">
            //                     <span className="btn_text">Linkedin</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div>
            //             { <div className="col col-lg-4">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="https://instagram.com/rg_maheshwari_1006?igshid=MmU2YjMzNjRlOQ==" data-cursor-text="View">
            //                     <img src="Assets2/Rishabh_Maheswari_.jpg" alt="Collab – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Database Team</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Productivity</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Organized</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Structured</span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://instagram.com/rg_maheshwari_1006?igshid=MmU2YjMzNjRlOQ==">
            //                     Rishabh Maheswari: Your friendly neighborhood info-man
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill" href="https://instagram.com/rg_maheshwari_1006?igshid=MmU2YjMzNjRlOQ==">
            //                     <span className="btn_text">Instagram</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div> }
            //             <div className="col col-lg-4">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="https://instagram.com/anoushka18_?igshid=MmU2YjMzNjRlOQ==" data-cursor-text="View">
            //                     <img src="Assets2/Anoushka_Ananda.jpg" alt="Collab – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Database Team</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Productivity</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Organized</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Structured</span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://instagram.com/anoushka18_?igshid=MmU2YjMzNjRlOQ==">
            //                   Anoushka Anand : Let there be light!!
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill" href="https://instagram.com/anoushka18_?igshid=MmU2YjMzNjRlOQ==">
            //                     <span className="btn_text">Instagram</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div>
            //           </div>
            //         </div>
            //         <div className="tab-pane fade" id="teb_management" role="tabpanel">
            //           <div className="row">
            //             { <div className="col col-lg-4">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="https://instagram.com/ajinkyabh2203?igshid=MmU2YjMzNjRlOQ==" data-cursor-text="View">
            //                     <img src="Assets2/Ajinkya_Bhoite_.jpg" alt="NotesEra – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Manager</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Leadership</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Communication</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Decision-making </span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://instagram.com/ajinkyabh2203?igshid=MmU2YjMzNjRlOQ==">
            //                     Ajinkya Bhoite: Desire becomes surrender. Surrender becomes Power.
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill" href="https://instagram.com/ajinkyabh2203?igshid=MmU2YjMzNjRlOQ==">
            //                     <span className="btn_text">Instagram</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div> }
            //           </div>
            //         </div>
            //         <div className="tab-pane fade" id="teb_programming" role="tabpanel">
            //           <div className="row">
            //             <div className="col col-lg-4">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="https://www.instagram.com/sebas_j_tian/" data-cursor-text="View">
            //                     <img src="Assets2/Jerin_Thomas.jpg" alt="NotesEra – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Content Lead</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Introvert</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Scary</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Gangster</span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://www.instagram.com/sebas_j_tian/">
            //                       Jerin Thomas: Less talk more work!
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill" href="https://www.instagram.com/sebas_j_tian/">
            //                     <span className="btn_text">Instagram</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div>
            //             <div className="col col-lg-4">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="https://www.instagram.com/_d.a.a.n.i.y.a.a.l_/?igshid=MmU2YjMzNjRlOQ%3D%3D"
            //                     data-cursor-text="View">
            //                     <img src="Assets2/Daaniyal_Abbasi.jpg" alt="NotesEra – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Content Team</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Growth</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Focus</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Beginnings</span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://www.instagram.com/_d.a.a.n.i.y.a.a.l_/?igshid=MmU2YjMzNjRlOQ%3D%3D">
            //                       Daaniyal Abbasi: A Complete Guide to Content Creation
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill"
            //                     href="https://www.instagram.com/_d.a.a.n.i.y.a.a.l_/?igshid=MmU2YjMzNjRlOQ%3D%3D">
            //                     <span className="btn_text">Instagram</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div>
            //           </div>
            //         </div>
            //         <div className="tab-pane fade" id="teb_marketing" role="tabpanel">
            //           <div className="row">
            //             <div className="col col-lg-4">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="https://www.instagram.com/aditii_003/" data-cursor-text="View">
            //                     <img src="Assets2/Aditi_Dalal.jpg" alt="NotesEra – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Social Media Lead</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Energy</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Creativity</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Attention</span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://www.instagram.com/aditii_003/">
            //                       Aditi Dalal: Your Social Media Manager
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill" href="https://www.instagram.com/aditii_003/">
            //                     <span className="btn_text">Instagram</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div>
            //             <div className="col col-lg-4">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="https://www.instagram.com/_ananya.rai_/" data-cursor-text="View">
            //                     <img src="Assets2/Ananya_Rai.jpg" alt="NotesEra – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Social Media Team</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Energy</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Creativity</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Attention </span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://www.instagram.com/_ananya.rai_/">
            //                       Ananya Rai: A girl with long Hair!
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill" href="https://www.instagram.com/_ananya.rai_/">
            //                     <span className="btn_text">Instagram</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div>
            //           </div>
            //         </div>
            //         <div className="tab-pane fade" id="teb_elite" role="tabpanel">
            //           <div className="row">
            //             <div className="col col-lg-4">
            //               <div className="course_card">
            //                 <div className="item_image">
            //                   <a href="https://instagram.com/krishna_.agrawal_?igshid=MmU2YjMzNjRlOQ==" data-cursor-text="View">
            //                     <img src="Assets2/Krishna_Agarwal_.jpg" alt="NotesEra – Online Learning Platform" />
            //                   </a>
            //                 </div>
            //                 <div className="item_content">
            //                   <div className="d-flex align-items-center justify-content-between mb-3">
            //                     <ul className="item_category_list unordered_list">
            //                       <li><a href="#!">Team Elite</a></li>
            //                     </ul>
            //                     <div className="item_price">
            //                       <span className="sale_price">3rd Year</span>
            //                     </div>
            //                   </div>
            //                   <ul className="meta_info_list unordered_list">
            //                     <li>
            //                       <i className="fas fa-chart-bar"></i>
            //                       <span>Adaptability</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-clock"></i>
            //                       <span>Authenticity</span>
            //                     </li>
            //                     <li>
            //                       <i className="fas fa-star"></i>
            //                       <span>Adaptability</span>
            //                     </li>
            //                   </ul>
            //                   <h3 className="item_title">
            //                     <a href="https://instagram.com/krishna_.agrawal_?igshid=MmU2YjMzNjRlOQ==">
            //                     Krishna Agarwal: Your everyday bad boy!!
            //                     </a>
            //                   </h3>
            //                   <a className="btn_unfill" href="https://instagram.com/krishna_.agrawal_?igshid=MmU2YjMzNjRlOQ==">
            //                     <span className="btn_text">Instagram</span>
            //                     <span className="btn_icon">
            //                       <i className="fas fa-long-arrow-right"></i>
            //                       <i className="fas fa-long-arrow-right"></i>
            //                     </span>
            //                   </a>
            //                 </div>
            //               </div>
            //             </div>
            //           </div>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </section>
          }
          {/* <!-- Courses Section - End
            ================================================== -->

          <!-- Advertisement Section - Start
            ================================================== --> */}
          <section className="advertisement_section bg_dark">
            <div
              className="container"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <div className="row align-items-center">
                <div className="col col-lg-6">
                  <div className="section_heading mb-lg-0">
                    <h2
                      className="heading_text text-white"
                      style={{ textAlign: "left" }}
                    >
                      Take the Next Step Toward Your Personal and Professional
                      Goals
                    </h2>
                    <p className="heading_description mb-0 text-white">
                      Embark on a journey towards achieving your aspirations,
                      both personal and professional, by accessing our valuable
                      resources and courses. Your success story begins with us.
                      Unlock your potential today.
                    </p>
                    <div className="btn_wrap pb-0">
                      <a className="btn btn_primary" href="/courses">
                        <span>
                          <small>Explore Notes</small>
                          <small>Explore Notes</small>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-6">
                  <div className="row images_group decoration_wrap">
                    <div className="col col-md-6 col-sm-6">
                      <div className="image_wrap">
                        <img
                          src="https://res.cloudinary.com/dckce9dzy/image/upload/v1693751699/Assets2/GROUP3_jc8gy2.avif"
                          alt="NotesEra – Online Learning Platform"
                        />
                      </div>
                      <div className="image_wrap">
                        <img
                          src="https://res.cloudinary.com/dckce9dzy/image/upload/v1693751751/Assets2/RedBrownHaired_b2xmqb.avif"
                          alt="NotesEra – Online Learning Platform"
                        />
                      </div>
                    </div>
                    <div className="col col-md-6 col-sm-6">
                      <div className="image_wrap">
                        <img
                          src="https://res.cloudinary.com/dckce9dzy/image/upload/v1693751682/Assets2/GROUP1_l6yqnz.avif"
                          alt="NotesEra – Online Learning Platform"
                        />
                      </div>
                      <div className="image_wrap">
                        <img
                          src="https://res.cloudinary.com/dckce9dzy/image/upload/v1693751686/Assets2/GROUP4_agwq2y.avif"
                          alt="NotesEra – Online Learning Platform"
                        />
                      </div>
                    </div>
                    <div
                      className="deco_item shape_img_1"
                      data-parallax='{"y" : -130, "smoothness": 6}'
                    >
                      <img
                        src="assets/images/shape/shape_img_3.png"
                        alt="NotesEra – Online Learning Platform"
                      />
                    </div>
                    <div
                      className="deco_item shape_img_2"
                      data-parallax='{"y" : 130, "smoothness": 6}'
                    >
                      <img
                        src="assets/images/shape/shape_img_3.png"
                        alt="NotesEra – Online Learning Platform"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Advertisement Section - End
            ================================================== -->

          <!-- Courses Info Section - Start
            ================================================== --> */}
          <section className="courses_info_section section_space_lg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col col-lg-6">
                  <div className="image_widget">
                    <img
                      src="https://res.cloudinary.com/dckce9dzy/image/upload/v1693751894/Assets2/young-attractive-smiling-student_kxvd2e.jpg"
                      alt="NotesEra – Online Learning Platform"
                      loading="lazy"
                    />
                    {/* Assets2/young-attractive-smiling-student.jpg */}
                  </div>
                </div>
                <div className="col col-lg-6">
                  <div className="content_wrap ps-lg-3">
                    <div className="section_heading">
                      <h2 className="heading_text">
                        Choose Notes-Era for Unmatched Learning Experience
                      </h2>
                      <p className="heading_description mb-0">
                        Elevate your learning with Note- Era's comprehensive
                        resources, expertly tailored to enhance your educational
                        journey and success.
                      </p>
                    </div>
                    <ul className="info_list unordered_list_block">
                      <li>
                        <i className="fas fa-square"></i>
                        <span>
                          Tailored courses for top grades and academic
                          excellence.
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-square"></i>
                        <span>
                          Quick prep: notes, last-minute study, key questions,
                          and more.
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-square"></i>
                        <span>
                          Skip assignment worries: no files, projects, or
                          hassles.
                        </span>
                      </li>
                    </ul>
                    <div className="btn_wrap pb-0">
                      <a className="btn btn_dark" href="/courses">
                        <span>
                          <small>Get Your Assignments</small>
                          <small>Get Your Assignments</small>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!--         Courses Info Section - End
            ================================================== -->

          <!-- Pricing Section - Start
            ================================================== --> */}
          <section className="pricing_section section_space_lg bg_light">
            <div className="container decoration_wrap">
              <div className="section_heading text-center">
                <h2 className="heading_text mb-0">Premium BootCamps</h2>
              </div>

              <div className="pricing_cards_wrapper row align-items-center">
                <div className="col col-lg-4">
                  <div className="pricing_card text-center tilt">
                    <h3 className="card_heading">Basic Plan</h3>
                    <div className="pricing_wrap">
                      <span className="price_value">
                        <sup>₹</sup>49
                      </span>
                      <small className="d-block">Special Offer!</small>
                    </div>
                    <hr />
                    <ul className="info_list unordered_list_block text-start">
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>
                          DSA in C++ / Basic C-Programming for 1st Sem Students.
                          Any one bootcamp lectures recording (valid for only 3
                          Months).
                        </span>
                      </li>
                      <li />
                      <i className="fas fa-caret-right"></i>
                      <span>Notes+Assignments</span>
                      {/* <!--                   </li>
                                  <li>
                                    <i className="fas fa-caret-right"></i>
                                <span></span> -->
                <!--                   </li>
                                  <li>
                                    <i className="fas fa-caret-right"></i> -->
                <!--              <span>End Semster Exam Packages</span> -->
                <!--                   </li> -->  */}
                    </ul>
                    <div className="btn_wrap pb-0">
                      <a className="btn border_dark" href="#!">
                        <span>
                          <small>Soon</small>
                          <small>Soon</small>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="pricing_card text-center bg_dark tilt">
                    {/* <!--                 <div className="card_badge">For 1st Year Only</div> --> */}
                    <h3 className="card_heading">Standard Plan</h3>
                    <div className="pricing_wrap">
                      <span className="price_value">
                        <sup>₹</sup>69
                      </span>
                      <small className="d-block">Special Offer !</small>
                    </div>
                    <hr />
                    <ul className="info_list unordered_list_block text-start">
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>
                          10 Days Basic C-Programming Bootcamp for First Year
                          Students.
                        </span>
                      </li>
                      <center>(OR)</center>
                      <li>
                        <span>
                          10 Days Basic JAVA Programming Bootcamp for Second
                          Year Students.
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Live Classes+Doubt Sessions</span> {/* Refer */}
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>
                          Lectures recording (Valid for only 3 Months).
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>VIVA Questions</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Notes+Assignments</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Logic Building</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Resume Building</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Certificates ISO Certified</span>
                      </li>
                    </ul>
                    <div className="btn_wrap pb-0">
                      <a
                        className="btn btn_primary"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf9tazhrqFzZ_EYh-nPGgVaOjEXxIbkRajOaY8nRteXivCq3Q/viewform?usp=sf_link"
                      >
                        <span>
                          <small>Register Now</small>
                          <small>Register Now</small>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4">
                  <div className="pricing_card text-center tilt">
                    <h3 className="card_heading">Premium Plan</h3>
                    <div className="pricing_wrap">
                      <span className="price_value">
                        <sup>₹</sup>99
                      </span>
                      <small className="d-block">Special Offer!</small>
                    </div>
                    <hr />
                    <ul className="info_list unordered_list_block text-start">
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>DSA in C++ 15 Days Bootcamp</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Live Classes+Doubt Sessions</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Logic Building</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Basic Interview Questions Practice</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>
                          Lectures recordings(Valid for only 3 Months)
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Notes+Assignments</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Resume Building</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Certificates ISO Certified</span>
                      </li>
                    </ul>
                    <div className="btn_wrap pb-0">
                      <a
                        className="btn border_dark"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf9tazhrqFzZ_EYh-nPGgVaOjEXxIbkRajOaY8nRteXivCq3Q/viewform?usp=sf_link"
                      >
                        <span>
                          <small>Register Now</small>
                          <small>Register Now</small>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-3">
                  <div className="pricing_card text-center bg_dark tilt">
                    {/* <!--                 <div className="card_badge">For 1st Year Only</div> --> */}
                    <h3 className="card_heading">Mega Plan</h3>
                    <div className="pricing_wrap">
                      <span className="price_value">
                        <sup>₹</sup>159
                      </span>
                      <small className="d-block">Special Offer !</small>
                    </div>
                    <hr />
                    <ul className="info_list unordered_list_block text-start">
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>15 Days Python MEGA bootcamp</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>PYTHON from scratch</span> {/* Refer */}
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Live Classes+Doubt Sessions</span> {/* Refer */}
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>2 Practical projects</span> {/* Refer */}
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Lectures recording (for 1 year) .</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>GIT/GITHUB mastery</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Linkedin Growing tips</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Life time code access</span>
                      </li>
                      <li>
                        <i className="fas fa-caret-right"></i>
                        <span>Certificates ISO Certified</span>
                      </li>
                    </ul>
                    <div className="btn_wrap pb-0">
                      <a
                        className="btn btn_primary"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf9tazhrqFzZ_EYh-nPGgVaOjEXxIbkRajOaY8nRteXivCq3Q/viewform?usp=sf_link"
                      >
                        <span>
                          <small>Register Now</small>
                          <small>Register Now</small>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="deco_item shape_img_1"
                data-parallax='{"y" : 130, "smoothness": 6}'
              >
                <img
                  src="assets/images/shape/shape_img_4.png"
                  alt="NotesEra – Online Learning Platform"
                />
              </div>
              <div
                className="deco_item shape_img_2"
                data-parallax='{"y" : -130, "smoothness": 6}'
              >
                <img
                  src="assets/images/shape/shape_img_5.png"
                  alt="NotesEra – Online Learning Platform"
                />
              </div>
            </div>
          </section>
          {/* <!-- Pricing Section - End
            ================================================== -->

          <!-- Testimonial Section - Start
            ================================================== --> */}
          <section className="testimonial_section section_space_lg">
            <div className="container">
              <div className="section_heading">
                <div className="row align-items-center">
                  <div className="col col-lg-7">
                    <h2 className="heading_text mb-0">
                      Don’t just take our word for it
                    </h2>
                  </div>
                  <div className="col col-lg-5 d-lg-flex d-none justify-content-end">
                    <div className="carousel_arrow">
                      <button type="button" className="cc2c_left_arrow">
                        <i className="far fa-arrow-left"></i>
                        <i className="far fa-arrow-left"></i>
                      </button>
                      <button type="button" className="cc2c_right_arrow">
                        <i className="far fa-arrow-right"></i>
                        <i className="far fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial_carousel">
                <div
                  className="common_carousel_2col"
                  data-cursor-text="Drag"
                  data-slick='{"dots":false}'
                >
                  <div className="carousel_item">
                    <div className="testimonial_item">
                      <div className="testimonial_image">
                        <img
                          src="Assets2/Durva.jpg"
                          alt="NotesEra – Online Learning Platform"
                        />
                      </div>
                      <div className="testimonial_content">
                        <ul className="rating_star unordered_list">
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h3 className="testimonial_title">
                          Incredible resource!
                        </h3>
                        <p>
                          Fantastic study notes website! Genuine content and
                          user-friendly interface make accessing study material
                          a breeze. A valuable resource for students.
                        </p>
                        <h4 className="testimonial_designation">
                          Advance Java Programming: 4th Semester
                        </h4>
                        <h5 className="testimonial_name">Durva Sadawarte</h5>
                        <span className="quote_icon">
                          <i className="fas fa-quote-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="carousel_item">
                    <div className="testimonial_item">
                      <div className="testimonial_image">
                        <img
                          src="Assets2/Hardik_Gupta.jpg"
                          alt="NotesEra – Online Learning Platform"
                        />
                      </div>
                      <div className="testimonial_content">
                        <ul className="rating_star unordered_list">
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h3 className="testimonial_title">
                          A true gem for B.Tech students!
                        </h3>
                        <p>
                          "5 stars for these B.Tech notes! They've become my
                          go-to study material. The precision and depth make
                          learning efficient and effective."
                        </p>
                        <h4 className="testimonial_designation">
                          Data Structures: 3rd Semester
                        </h4>
                        <h5 className="testimonial_name">Hardik Gupta</h5>
                        <span className="quote_icon">
                          <i className="fas fa-quote-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="carousel_item">
                    <div className="testimonial_item">
                      <div className="testimonial_image">
                        <img
                          src="Assets2/Kanishk_Jain.jpg"
                          alt="NotesEra – Online Learning Platform"
                        />
                      </div>
                      <div className="testimonial_content">
                        <ul className="rating_star unordered_list">
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h3 className="testimonial_title">
                          These B.Tech notes are a goldmine for exam
                          preparation.
                        </h3>
                        <p>
                          The best thing that I liked about Notes-Era is that
                          the Notes are very skillfully planned and are designed
                          as per the needs, no extra unwanted information is
                          there which helps when we have to study for an exam or
                          when we have to do a quick revision.
                        </p>
                        <h4 className="testimonial_designation">
                          Database Management: 4th Semester
                        </h4>
                        <h5 className="testimonial_name">Kanishk Jain</h5>
                        <span className="quote_icon">
                          <i className="fas fa-quote-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="carousel_item">
                    <div className="testimonial_item">
                      <div className="testimonial_image">
                        <img
                          src="Assets2/Mahik_Makariya_.jpg"
                          alt="NotesEra – Online Learning Platform"
                        />
                      </div>
                      <div className="testimonial_content">
                        <ul className="rating_star unordered_list">
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                          <li className="active">
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <h3 className="testimonial_title">
                          Marks Oreinted Notes!
                        </h3>
                        <p>
                          Very helpful website for the students. The topic I was
                          searching for here has been explained very easily and
                          in simple language.All notes are covered
                          according to the syllabus.
                        </p>
                        <h4 className="testimonial_designation">
                          Operating System: 4th Semester
                        </h4>
                        <h5 className="testimonial_name">Mahik Makariya</h5>
                        <span className="quote_icon">
                          <i className="fas fa-quote-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel_arrow d-lg-none d-flex justify-content-center">
                  <button type="button" className="cc2c_left_arrow">
                    <i className="far fa-arrow-left"></i>
                    <i className="far fa-arrow-left"></i>
                  </button>
                  <button type="button" className="cc2c_right_arrow">
                    <i className="far fa-arrow-right"></i>
                    <i className="far fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Testimonial Section - End
            ================================================== --> */}

          {/* <!-- Newslatter Section - Start
            ================================================== --> */}
          <section className="newslatter_section">
            <div className="container">
              <div
                className="newslatter_box"
                style={{
                  backgroundColor: "#9451d2",
                  boxShadow: "10px 10px 10px #000000",
                  color: "white",
                }}
              >
                <div className="row justify-content-center">
                  <div className="col col-lg-6">
                    <div className="section_heading text-center">
                      <h2 className="heading_text" style={{ color: "white" }}>
                        Subscribe Now And Get All Updates on Phone!
                      </h2>
                      <p
                        className="heading_description mb-0"
                        style={{ color: "white" }}
                      >
                        Subscribe for instant mobile updates, ensuring you're
                        always informed and connected. Don't miss out!
                      </p>
                    </div>
                    <form name="submit-to-google-sheet">
                      <div className="form_item m-0">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                        />
                        <br />
                        <button type="submit-btn" className="btn btn_dark">
                          <span>
                            <small>Subscribe</small>
                            <small>Subscribe</small>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Newslatter Section - End
                ================================================== --> */}
        </main>
        {/* <!-- Main Body - End
              ================================================== --> */}

        {/* <!-- Site Footer - Start
              ================================================== --> */}
        <footer className="site_footer">
          <div className="footer_widget_area">
            <div className="container">
              <div className="row">
                <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="footer_widget">
                    <div className="site_logo">
                      <a className="site_link" href="index.html">
                        <img
                          src="https://res.cloudinary.com/dckce9dzy/image/upload/v1693751840/Assets2/NotesEra_sq741d.png"
                          alt="NotesEra - Online Learning Platform"
                        />
                      </a>
                    </div>
                    <p>
                      Notes-Era: Your ultimate study companion. Expert resources
                      for academic success, hassle-free learning, and better
                      grades.
                    </p>
                    <ul className="social_links unordered_list">
                      <li>
                        <a href="https://www.instagram.com/noteseraa/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/noteseraa/">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/noteseraa/">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/noteseraa/">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col col-lg-6">
                  <div className="row">
                    <div className="col col-md-4 col-sm-4">
                      <div className="footer_widget">
                        <h3 className="footer_widget_title">Links</h3>
                        <ul className="page_list unordered_list_block">
                          <li>
                            <Link to="/privacypolicy">
                              <span className="item_icon">
                                <i className="fas fa-caret-right"></i>
                              </span>
                              <span className="item_text">privacypolicy</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/terms">
                              <span className="item_icon">
                                <i className="fas fa-caret-right"></i>
                              </span>
                              <span className="item_text">
                                Terms and Conditions
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col col-md-4 col-sm-4">
                      <div className="footer_widget">
                        <h3 className="footer_widget_title">Support</h3>
                        <ul className="page_list unordered_list_block">
                          <li>
                            <a href="coursesdropdown.html">
                              <span className="item_icon">
                                <i className="fas fa-caret-right"></i>
                              </span>
                              <span className="item_text">Coming Soon</span>
                            </a>
                          </li>
                          <li>
                            <a href="coursesdropdown.html">
                              <span className="item_icon">
                                <i className="fas fa-caret-right"></i>
                              </span>
                              <span className="item_text">Coming Soon</span>
                            </a>
                          </li>
                          <li>
                            <a href="coursesdropdown.html">
                              <span className="item_icon">
                                <i className="fas fa-caret-right"></i>
                              </span>
                              <span className="item_text">Coming Soon</span>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <span className="item_icon">
                                <i className="fas fa-caret-right"></i>
                              </span>
                              <span className="item_text">Coming Soon</span>
                            </a>
                          </li>
                          <li>
                            <a href="#!">
                              <span className="item_icon">
                                <i className="fas fa-caret-right"></i>
                              </span>
                              <span className="item_text">Coming Soon</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-6 col-sm-6">
                  <div className="footer_widget">
                    <h3 className="footer_widget_title">Latest Posts</h3>
                    <ul className="blog_small_group unordered_list_block">
                      <li>
                        <a
                          className="blog_small"
                          href="https://www.instagram.com/p/Ct1zJSPNdKA/?img_index=1"
                        >
                          <span className="item_image">
                            <img
                              src="https://res.cloudinary.com/dckce9dzy/image/upload/v1693751633/Assets2/article1_y1lbop.png"
                              alt="NotesEra – Online Learning Platform"
                            />
                          </span>
                          <span className="item_content">
                            <span className="item_author">
                              <i className="fas fa-user-alt"></i> by Notes-Era
                            </span>
                            <strong className="item_title">
                              Best Video Editing Softwares in 2023
                            </strong>
                            <small className="item_post_date">
                              14 Aug 2023
                            </small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="blog_small"
                          href="https://www.instagram.com/p/CtyxOG7tDPP/?img_index=1"
                        >
                          <span className="item_image">
                            <img
                              src="https://res.cloudinary.com/dckce9dzy/image/upload/v1693751638/Assets2/article2_aheonw.png"
                              alt="NotesEra – Online Learning Platform"
                            />
                          </span>
                          <span className="item_content">
                            <span className="item_author">
                              <i className="fas fa-user-alt"></i> by Notes-Era
                            </span>
                            <strong className="item_title">
                              Four Books To Improve your Mindset.
                            </strong>
                            <small className="item_post_date">
                              14 Aug 2023
                            </small>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright_widget">
            <div className="container">
              <p className="copyright_text text-center mb-0">
                <a href="https://www.instagram.com/noteseraa/">Copyright</a> ©{" "}
                <b>2023</b> Notes-Era. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
      {/* // {showPopup && (
      //   <div className="popup-container">
      //     <div className="popup-content">
      //       <span className="popup-close" onClick={closePopup}>
      //         &times;
      //       </span>
      //       <img src="https://res.cloudinary.com/dpnibtyoj/image/upload/v1702269087/fmea-poster_pyu8ou.png" alt="Notes-Era MST bunddle" />
      //       <a href="/premium" className="btn btn_premium mt-4">
      //         <span>
      //           <small>Notes-Era Premium</small>
      //           <small>Notes-Era Premium</small>
      //         </span>
      //       </a>
      //     </div>
      //   </div>
      )} */}
    </>
  );
}
