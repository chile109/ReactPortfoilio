import React from "react";
import { useParams } from "react-router-dom";
import "../Styles/ProjectPreview.css";
import { ProjectList } from "../Helpers/ProjectList";
import WebIcon from "@material-ui/icons/Language";
import ReactPlayer from 'react-player/youtube'

function ProjectPreview() {
    const { id } = useParams();
    const project = ProjectList[id];

    return (
        <div className="project">
            <h1>{project.name}</h1>
            <ReactPlayer url={project.video} />
            {/* <img src={project.image} alt={project.name} /> */}
            <p>
                {project.description}
            </p>
            <WebIcon onClick={() => window.open(project.url, '_blank')} />
        </div>
    );
}

export default ProjectPreview;