import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>Chapters</h2>
      <div className="chapters-grid">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="chapter grid-cols-1">
            <span className="chapter-number">{i + 1}</span>
            <span className="chapter-text">{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
