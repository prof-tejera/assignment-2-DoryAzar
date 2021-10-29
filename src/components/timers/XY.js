import { Component } from 'react';
import Timer from "../generic/Timer";

const settings = [
  {label: "Start Time", value: "00:20:10", placeholder: "Start the timer at this time"},
  {label: "Stop Time", value:"00:00:00", placeholder: "Stop the timer at this time"},
  {label: "Rounds", value:"2", placeholder: "Stops after that many rounds"}
];

class XY extends Component {
  render() {
    return <Timer statusMessage="Round 1 of 2" startTime="00:20:10" settings={settings} />;
  }
}

export default XY;