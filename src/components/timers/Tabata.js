import { Component } from 'react';
import Timer from "../generic/Timer";

const settings = [
  {label: "Work Time", value: "00:45:00", placeholder: "Start the timer at this time"},
  {label: "Rest Time", value:"00:10:00", placeholder: "Timer will rest for that duration"},
  {label: "Rounds", value:"2", placeholder: "Stops after that many rounds"}
];

class Tabata extends Component {
  render() {
    return <Timer statusMessage="Work - Round 1 of 2" startTime="00:45:00" settings={settings} />;
  }
}

export default Tabata;