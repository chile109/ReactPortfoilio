import React from "react";
import ProjectItem from "../Components/ProjectItem";
import "../Styles/Projects.css";
import { ProjectList } from "../Helpers/ProjectList";

function Projects() {
    return (
        <div className="projects">
            <div className="projectList">
                {ProjectList.map((project, idx) => {
                    return (
                        <ProjectItem
                            name={project.name}
                            image={project.image}
                            id={idx}
                        />
                    );
                })
                }
            </div>
        </div>
    );
}

export default Projects;