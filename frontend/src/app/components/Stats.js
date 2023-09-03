import React from "react";

function Stats() {
  return (
    <div className="stats stats-vertical bg-transparent text-white shadow-2xl h-[60%] overflow-hidden">
      <div className="stat">
        <div className="stat-title">Resources</div>
        <div className="stat-value">31K</div>
        <div className="stat-desc">Journal & Website</div>
      </div>

      <div className="stat">
        <div className="stat-title">New Users</div>
        <div className="stat-value">4,200</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
      </div>

      <div className="stat">
        <div className="stat-title">New Registers</div>
        <div className="stat-value my-2">1,200</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
}

export default Stats;
