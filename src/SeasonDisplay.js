import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  "summer": {
    text: "it's a very hot day",
    iconName: "sun"
  },
  "winter": {
    text: "wow!! it's cold!!",
    iconName: "winter"
  }
}

// latitude > 0: Northern Hemisphere
// latitude < 0: Southern hemisphere
// Northern Hemisphere: Apr to Sep => Summer
// Southern Hemisphere: Apr to Sep => Winter
function getSeason(latitude, month) {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude < 0 ? "winter" : "summer";
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive icon ${iconName}`}/>
      <h2>{text}</h2>
      <i className={`icon-right massive icon ${iconName}`}/>
    </div>
  )
}

export default SeasonDisplay;