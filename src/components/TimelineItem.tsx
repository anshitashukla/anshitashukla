// src/components/TimelineItem.tsx
import React from "react";

interface TimelineItemProps {
  data: {
    date: string;
    logo?: string;
    title: string;
    subtitle?: string;
    description?: string;
    skills?: string[];
  };
}

function TimelineItem({ data }: TimelineItemProps) {
  return (
    <div className="timeline-item">
      <div className="timeline-icon"></div> {/* Empty icon for styling */}
      <div className="timeline-date">{data.date}</div>
      <div className="timeline-card">
        {data.logo && <img src={data.logo} alt={data.title} className="logo" />}
        <h3>{data.title}</h3>
        {data.subtitle && <p className="subtitle">{data.subtitle}</p>}
        {data.description && <p className="description">{data.description}</p>}
        {data.skills && (
          <div className="skills">
            <strong>Skills:</strong> {data.skills.join(", ")}
          </div>
        )}
      </div>
    </div>
  );
}

export default TimelineItem;
