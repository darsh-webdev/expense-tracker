import React from "react";
import "./chart-bar.styles.scss";

const ChartBar = ({ value, maxValue, label }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar-content">
        <div className="chart-bar-fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar-label">{label}</div>
    </div>
  );
};

export default ChartBar;
