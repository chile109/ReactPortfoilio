import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceList } from "../Helpers/ExperienceList";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#0fce2f">
                {ExperienceList.map((exp, idx) => {
                    return (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date={exp.Period}
                            iconStyle={exp.Format}
                            icon={exp.Icon}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {exp.Title}
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                {exp.Location}
                            </h4>
                            <p>{exp.Description}</p>
                        </VerticalTimelineElement>
                    );
                })}

            </VerticalTimeline>
        </div>
    );
}

export default Experience;