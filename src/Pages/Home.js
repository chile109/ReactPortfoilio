import React from "react";
import "../Styles/Home.css";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Avatar from "@material-ui/core/Avatar";
import { FaUnity, FaReact, FaNodeJs, FaAndroid, FaAws, FaLinux, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiArduino, SiOculus, SiPostgresql, SiSequelize, SiJenkins, SiCsharp, SiJavascript, SiGnubash } from 'react-icons/si';

function Home() {
    return (
        <div className="home">
            <div className="about">
                <Avatar alt="SharKevin" src="https://avatars.githubusercontent.com/u/13402112?v=4" className={"large"} />
                <h2> Hello, My Name is SharKevin</h2>
                <div className="prompt">
                    <p>A software developer with a passion for Metaverse.</p>
                    <EmailIcon onClick={() => window.location = 'mailto:chile109@gmail.com'}>Contact Me</EmailIcon>
                    <GithubIcon onClick={() => window.open('https://github.com/chile109', '_blank')}>Github</GithubIcon>
                </div>
            </div>
            <div className="skills">
                <h1> Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>
                            <FaUnity /> Unity,  <SiOculus /> XR(Oculus/VIVE/Vuforia/MARS),  <FaReact /> React,  <FaAndroid /> Android,  <SiArduino /> Arduino
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            <FaAws /> AWS service,  <FaNodeJs /> Node.js,  <SiSequelize /> Sequelize,  <SiPostgresql /> Postgres,  <FaLinux /> Linux,  <FaDocker /> Docker,  <SiJenkins /> Jenkins
                        </span>
                    </li>
                    <li className="item">
                        <h2>Language</h2>
                        <span> <SiCsharp /> C#,  <FaGitAlt /> Git,  <SiJavascript /> JavaScript,   <SiGnubash /> bash shell</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
