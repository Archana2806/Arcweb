import React, { useState, useEffect } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const [activeExperience, setActiveExperience] = useState(null);

    const toggleTab = (index) => {
        setToggleState(index);
        setActiveExperience(null); // Reset active experience when switching tabs
    };

    const handleExperienceTitleClick = (experience) => {
        setActiveExperience(experience);
    };

    const handleCloseClick = () => {
        setActiveExperience(null);
    };

    useEffect(() => {
        if (activeExperience) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [activeExperience]);

    const renderWhiteDivContent = () => {
        switch (activeExperience) {
            case "Loop Express":
                return <p>
                    • Led the development of a multi-step seller onboarding system, integrating GST verification API to automate verification, reducing manual effort by up to 80%, and delivered a cross-platform mobile app (Android & iOS) using Flutter for a seamless onboarding experience.<br /><br />
                    • Engineered a scalable product management system, capable of handling 500+ sellers, enabling efficient inventory management with MongoDB integration, optimizing update processes by up to 40%.<br /><br />
                    • Designed and implemented secure APIs with JWT authentication & RBAC, ensuring data integrity, role-based access control, and protection against unauthorized access, scalable to handle thousands of secure transactions daily.</p>;
            case "CTTC":
                return <p>
                    • Acquired in-depth knowledge of machine learning principles and techniques, contributing to several high-impact projects focused on data analytics and research.<br /><br />
                    • Successfully applied algorithms such as KNN and CNN to image generation and lemmatization tasks, improving the accuracy and efficiency of data processing models.<br /><br />
                    • Conducted comprehensive data analysis using Tableau, transforming raw data into actionable insights with error rates consistently below 5%.</p>;
            case "Edureka":
                return <p>
                    • Acquired in-depth knowledge of machine learning principles and techniques, contributing to several high-impact projects focused on data analytics and research.<br /><br />
                    • Successfully applied algorithms such as KNN and CNN to image generation and lemmatization tasks, improving the accuracy and efficiency of data processing models.<br /><br />
                    • Conducted comprehensive data analysis using Tableau, transforming raw data into actionable insights with error rates consistently below 5%.</p>;
            default:
                return null;
        }
    };

    return (
        <section className="qualification__section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={toggleState === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <HiOutlineAcademicCap className="qualification__icon" />
                        Education
                    </div>
                    <div
                        className={toggleState === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <HiOutlineBriefcase className="qualification__icon" />
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor's in CSE</h3>
                                <span className="qualification__subtitle">VITAM</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2020-2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Intermediate</h3>
                                <span className="qualification__subtitle">Hinjilicut Autonomous Science College</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2018-2020
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Matriculation</h3>
                                <span className="qualification__subtitle">De Paul School</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    - 2018
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {/* First Experience (Left) */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title" onClick={() => handleExperienceTitleClick("Loop Express")}>Software Developer</h3>
                                <span className="qualification__subtitle">Loop Express</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    Nov 2024 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* Second Experience (Right) */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title" onClick={() => handleExperienceTitleClick("CTTC")}>Machine Learning Intern</h3>
                                <span className="qualification__subtitle">CTTC</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    Oct 2023 - Dec 2023
                                </div>
                            </div>
                        </div>

                        {/* Third Experience (Left) */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title" onClick={() => handleExperienceTitleClick("Edureka")}>DS and ML Intern</h3>
                                <span className="qualification__subtitle">Edureka</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    Apr 2023 - Aug 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {activeExperience && toggleState === 2 && (
                <div className="overlay">
                    <div className="white-div">
                        <button className="close-button" onClick={handleCloseClick}>×</button>
                        {renderWhiteDivContent()}
                    </div>
                </div>
            )}
        </section>
    );
}

export default Qualification;
