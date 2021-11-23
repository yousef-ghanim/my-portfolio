import React, { useState } from "react";
import jobs from "../data";
import profile from "../profile.jpg";

const About = () => {
  const [value, setValue] = useState(0);
  const { company, year, info, job } = jobs[value];
  return (
    <section className="section about-section" id="about">
      <div className="about-text">
        <div className="title-container about-title-container">
          <h1 className="about-title title">
            <span>2.</span> Who am I
          </h1>
          <div className="line about-line"></div>
        </div>
        <div className="info-container">
          <div className="about-info-text">
            <p className="about-info">
              My name is Yousef, a self-taught front-end developer, based in
              Iceland. I had a crazy long journey that led me to be a web
              developer (my recent job was a university instructor). <br />
              <br />I build and develop websites using the latest modern
              development languages and tools, Including but not limited to:
            </p>
            <ul className="tools">
              <li>ReactJs</li>
              <li>React Router</li>
              <li>JavaScript</li>
              <li>JS6</li>
              <li>Styled Comp.</li>
              <li>CSS3</li>
              <li>Html5</li>
              <li>Git</li>
              <li>npm</li>
              <li>Github</li>
            </ul>
          </div>
          <div className="profile-image-container">
            <div className="image-frame">
              <img className="profile-image" src={profile} alt="profile" />
            </div>
          </div>
        </div>
      </div>
      <section className="jobs-section">
        <p className="jobs-text">Previous experiences:</p>
        <div className="jobs-container">
          <div className="btn-container">
            {jobs.map((item, index) => {
              return (
                <button
                  aria-label="Job_btn"
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && "active-job-btn"}`}
                >
                  {item.job}
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3 className="job">{job}</h3>
            <h4 className="company">{company}</h4>
            <span className="year">{year}</span>
            <p className="info">{info}</p>
          </article>
        </div>
      </section>
    </section>
  );
};

export default About;
