import { useEffect, useState, useMemo } from "react";
import "./Home.css";
import { data } from "./data";
import NavTab from "./NavTab/NavTab";
import { Link } from "react-router-dom";

function Home() {
  const [projects, setProjects] = useState(data);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const tabs = useMemo(() => {
    const uniqueTabs = ["All"];
    data.forEach(({ group }) => {
      if (!uniqueTabs.includes(group)) uniqueTabs.push(group);
    });
    return uniqueTabs;
  }, []);

  const setProject = (group) => {
    if (group === "All") {
      setProjects(data);
    } else {
      setProjects(data.filter((item) => item.group === group));
    }
  };

  return (
    <div className="Home">
      <div className="icon_and_button">
      <button className="btn btn__primary about">
        <Link to="/about">About Me</Link>
      </button>
      <span className="social-icon-group">
      <a href="https://github.com/sangampshinde" target="_blank" rel="noopener noreferrer" className="social-icon">
      <i className="fab fa-github-square"></i>
      </a>
      &nbsp;&nbsp;
      <a href="https://www.linkedin.com/in/sangamshinde" target="_blank" rel="noopener noreferrer" className="social-icon">
      <i className="fab fa-linkedin"></i>
      </a>
      </span>
      </div>
      

      <NavTab tabs={tabs} onChange={setProject} />

      <div className="project__container">
        {projects.length === 0 ? (
          <p>No projects available in this category.</p>
        ) : (
          projects.map(({ image, title, github, demo, tools }, index) => (
            <div
              className={`project__item ${load ? "zoom_in" : ""}`}
              key={index}
            >
              <div className="project_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className="project__tools">
                {tools.map((tool, toolIndex) => (
                  <span className="badge" key={toolIndex}>
                    {tool}
                  </span>
                ))}
              </div>

              <div className="project_item_button">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn__primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
