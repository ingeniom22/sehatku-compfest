import React from "react";

function Stats() {
  return (
    <div className="stats stats-vertical bg-transparent text-white shadow-2xl h-[60%] overflow-hidden">
      <div className="stat">
        <div className="stat-title">Training Data</div>
        <div className="stat-value">2K</div>
        <div className="stat-desc">Rows</div>
      </div>

      <div className="stat">
        <div className="stat-title">Resource</div>
        <div className="stat-value">21.4K</div>
        <div className="stat-desc">Articles</div>
      </div>

      <div className="stat">
        <div className="stat-title">TechStack</div>
        <div className="stat-value my-2">6<span className="text-lg"> Latest</span></div>
        <div className="stat-desc">Technologies</div>
      </div>
    </div>
  );
}

export default Stats;
