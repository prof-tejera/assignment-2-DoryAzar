import { useState } from 'react';
import AppProvider from '../platform/AppProvider';
import Tabs  from "../components/generic/Tabs/Tabs";
import Panel from "../components/generic/Panel/Panel";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import * as utils from '../utils/helpers.js';
import { T_STOPWATCH, T_COUNTDOWN, T_XY, T_TABATA } from '../utils/helpers';

const TimersView = () => {

  const [selectedTimer, setSelectedTimer] = useState(T_STOPWATCH);
  
  const timers = [
    { title: T_STOPWATCH, C: <Stopwatch /> },
    { title: T_COUNTDOWN, C: <Countdown /> },
    { title: T_XY, C: <XY /> },
    { title: T_TABATA, C: <Tabata /> },
  ];


  const handleChange =  (v) => {
    setSelectedTimer(v);
  }

  return (
    <AppProvider timer={selectedTimer}>
      <Tabs tabItems={utils.readCollection(timers, 'title')} 
            onChange={handleChange} />
      <Panel id="timer_panel">
        {utils.getTimer(selectedTimer, timers)}
      </Panel>
    </AppProvider>

  );
  

}


export default TimersView;
