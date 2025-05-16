// import { EducationSectionProps } from "../interfaces/experience.interface";

// const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
//   return (
//     <section id="education" className="bg-primary py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-white mb-8 text-center">
//           Education
//         </h2>
//         {education.map((edu, index) => (
//           <div key={index} className="bg-white shadow rounded-lg p-6 mb-2">
//             <h3 className="text-xl font-semibold text-gray-900">
//               {edu.institution}
//             </h3>
//             <p className="text-gray-600">
//               {edu.degree} ({edu.duration})
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default EducationSection;

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "../constants/Education";
import { Education as EducationType } from "../interfaces/experience.interface"; // Renamed import to avoid conflict

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Education
        </h2>
        <VerticalTimeline>
          {education.map((edu: EducationType, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(255, 255, 255)",
              }}
              date={edu.duration}
              dateClassName="text-white"
              iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
              icon={
                <img
                  src={edu.image}
                  alt="Experience Icon"
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title text-lg font-bold">
                {edu.institution}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-600">
                {edu.degree}
              </h4>
              <h4 className="text-[0.7rem] text-gray-400">{edu.duration}</h4>
              <p className="mt-4 text-gray-600 list-disc list-inside space-y-2">
                {edu.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default EducationSection;
