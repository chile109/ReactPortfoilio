import React from "react";
import "../Styles/Home.css";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Avatar from "@material-ui/core/Avatar";

function Home() {
    return (
        <div className="home">
            <div className="about">
                <Avatar alt="SharKevin" src="https://avatars.githubusercontent.com/u/13402112?v=4" className={"large"} />
                <h2> Hello, My Name is SharKevin</h2>
                <div className="prompt">
                    <p>A software developer with a passion for Metaverse.</p>
                    <EmailIcon />
                    <GithubIcon />
                </div>
            </div>
            <div className="skills">
                <h1> Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>
                            Unity, React.js, WebGL, Android, XR(Oculus/VIVE/Vuforia/MARS), Arduino, Kinect
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            AWS service, Node.js, Sequelize, Postgres, Linux, Docker, Jenkins, Exrpress, Django, RTMP
                        </span>
                    </li>
                    <li className="item">
                        <h2>Language</h2>
                        <span>C#, Git, JavaScript, SQL, Json, Python, Ruby, JAVA, bash shell.</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
