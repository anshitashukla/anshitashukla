import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants/Experience";

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Experience
        </h2>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(255, 255, 255)",
              }}
              date={exp.duration}
              dateClassName="text-white"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={
                <img
                  src={exp.image}
                  alt="Experience Icon"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              }
            >
              <span>
                <img
                  src={exp.image}
                  alt="Experience Icon"
                  style={{ width: "10%", height: "10%", borderRadius: "50%" }}
                />
              </span>
              <h3 className="vertical-timeline-element-title text-lg font-bold">
                {exp.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-600">
                {exp.company}
              </h4>
              <h4 className="text-[0.7rem] text-gray-400">{exp.duration}</h4>
              <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
              <div className="mt-4 text-gray-600">
                <strong className="">Skills: </strong>{" "}
                {exp.skills.map((skill, index) => (
                  <React.Fragment key={index}>
                    <span className="text-color-primary font-bold">
                      {skill},
                    </span>
                    {index < exp.skills.length - 1 && " "}
                  </React.Fragment>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceSection;
