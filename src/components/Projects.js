import React, { useEffect, useState } from "react";
import { projects } from "../data";
import { FaGithub, FaEye } from "react-icons/fa";

const Projects = () => {
  const [items, setItems] = useState(projects);
  const [itemcategory, setItemCategory] = useState("All");
  const allCategories = [
    "All",
    ...new Set(projects.map((item) => item.category)),
  ];

  const filterItems = (category) => {
    if (category === "All") {
      setItems(projects);
      setItemCategory("All");
      return;
    }

    let newItems = projects.filter((item) => item.category === category);
    setItems(newItems);
    setItemCategory(category);
  };

  return (
    <section className="section projects-section" id="projects">
      <div className="title-container projects-title-container">
        <h1 className="projects-title title">
          <span>3.</span> Projects
        </h1>
        <div className="line projects-title-line"></div>
      </div>

      <div className="btns-container">
        {allCategories.map((category, index) => {
          return (
            <button
              aria-label="Project_btn"
              key={index}
              className={`category-btn ${
                category === itemcategory ? "category-btn-active" : null
              }`}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="projects-container">
        {items.map((item) => {
          const { id, title, code, preview, desc, image } = item;
          return (
            <article key={id} className="project-item">
              <div className="img-container">
                <img src={image} alt={title} className="project-image" />
                <svg className="card__svg" viewBox="0 0 800 500">
                  <path
                    className="c"
                    d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                    stroke="transparent"
                    fill="white"
                  />
                  <path
                    className="card__line"
                    d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                    stroke="gray"
                    strokeWidth="3"
                    fill="transparent"
                  />
                </svg>
              </div>

              <div className="project-desc">
                <h2 className="project-title">{title}</h2>
                <p className="project-info">{desc}</p>
              </div>
              <div className="project-icons">
                <a aria-label="Source_code" href={code} target="_blank">
                  <FaGithub />
                </a>

                <a aria-label="Project_preview" href={preview} target="_blank">
                  <FaEye />
                </a>
              </div>
              <div className="circle circle-left"></div>
              <div className="circle circle-right"></div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
