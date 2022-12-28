import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/ProjectPreview.css";
import { ProjectList } from "../Helpers/ProjectList";
import WebIcon from "@material-ui/icons/Language";

function ProjectPreview() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} />
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <WebIcon />
        </div>
    );
}

export default ProjectPreview;