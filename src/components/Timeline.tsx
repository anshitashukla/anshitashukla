// src/components/Timeline.tsx
import React from "react";
import TimelineItem from "./TimelineItem";
import "../styles/components/Timeline.css"; // Import your CSS file for styling

interface TimelineProps {
  items: {
    date: string;
    logo?: string;
    title: string;
    subtitle?: string;
    description?: string;
    skills?: string[];
  }[];
}

function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <TimelineItem key={index} data={item} />
      ))}
    </div>
  );
}

export default Timeline;
