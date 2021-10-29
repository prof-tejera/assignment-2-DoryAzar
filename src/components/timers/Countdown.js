import { Component } from 'react';
import Timer from "../generic/Timer";

const settings = [
  {label: "Start Time", value: "00:30:00", placeholder: "Start the timer at this time"},
  {label: "Stop Time", value:"00:10:00", placeholder: "Stop the timer at this time"},
  {label: "Another setting", placeholder: "TBD"}
];

class Countdown extends Component {
  render() {

    return <Timer statusMessage="Count from 00:30:00"  startTime="00:30:00" settings={settings} />;
  }
}

export default Countdown;
