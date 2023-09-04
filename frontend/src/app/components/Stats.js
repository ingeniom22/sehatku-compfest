import React from "react";

function Stats() {
  return (
    <div className="stats stats-vertical bg-transparent text-white shadow-2xl h-[60%] overflow-hidden">
      <div className="stat">
        <div className="stat-title text-gray-400">Training Data</div>
        <div className="stat-value">2K</div>
        <div className="stat-desc text-gray-400">Rows</div>
      </div>

      <div className="stat">
        <div className="stat-title text-gray-400">Model Size</div>
        <div className="stat-value">7B</div>
        <div className="stat-desc text-gray-400">Parameters</div>
      </div>

      <div className="stat">
        <div className="stat-title text-gray-400">TechStack</div>
        <div className="stat-value my-2">6<span className="text-lg"> Latest</span></div>
        <div className="stat-desc text-gray-400">Technologies</div>
      </div>
    </div>
  );
}

export default Stats;
