import { Component } from 'react';
import Timer from "../generic/Timer";

const settings = [
  {label: "Start Time", value: "00:00:00", placeholder: "Start the timer at this time"},
  {label: "Stop Time", value: "00:30:00", placeholder: "Stop the timer at this time"}
];

class StopWatch extends Component {
  render() {

    return <Timer statusMessage="Count to 00:30:00" settings={settings} />;
  }
}

export default StopWatch;
