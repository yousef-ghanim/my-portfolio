import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import { myProjects } from "../data";

const MyProjects = () => {
  return (
    <section className="myProjects-section">
      <div className="myProjects-container">
        {/* <h2 className="myProjects-title">My Project</h2> */}
        <div className="title-container projects-title-container">
          <h1 className="projects-title title">
            <span>3.</span>Feature Projects
          </h1>
          <div className="line projects-title-line"></div>
        </div>
        <div className="myProjects-wrapper">
          {myProjects.map((item) => {
            return (
              <article key={item.id} className="myProjects-item">
                <img
                  className="myProjects-image"
                  src={item.image}
                  alt="myProject-bg"
                />
                <div className="myProjects-info">
                  <h6 className="myProject-title">{item.title}</h6>
                  <p className="myProject-desc">{item.desc}</p>
                  <div className="myProject-icons">
                    <a href={item.preview} className="myProject-preview">
                      <FaEye />
                    </a>
                    <a href={item.code} className="myProject-preview">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
