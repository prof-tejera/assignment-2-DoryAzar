import { Component } from 'react';

import Tabs  from "../components/generic/Tabs/Tabs";
import Panel from "../components/generic/Panel/Panel";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import * as utils from '../utils/helpers.js';

class TimersView extends Component {
  
  constructor(props) {
    super(props);
    this.state  = {
      selectedTimer: "Stopwatch"
    }
  }

  handleChange =  (v) => {
    this.setState({selectedTimer: v});
  }

  render() {
    const timers = [
      { title: "Stopwatch", C: <Stopwatch /> },
      { title: "Countdown", C: <Countdown /> },
      { title: "XY", C: <XY /> },
      { title: "Tabata", C: <Tabata /> },
    ];

    return (
      <>
        <Tabs tabItems={utils.readCollection(timers, 'title')} 
              onChange={this.handleChange} />
        <Panel id="timer_panel">
          {utils.getTimer(this.state.selectedTimer, timers)}
        </Panel>
      </>
  
    );
  }
}

export default TimersView;
