import {  useContext, useEffect } from 'react';
import { AppContext } from '../platform/AppProvider';
import Tabs  from "../components/generic/Tabs/Tabs";
import Panel from "../components/generic/Panel/Panel";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import * as utils from '../utils/helpers.js';

const TimersView = () => {
  
  const {selectedTimer, setSelectedTimer} = useContext(AppContext);
  
  const timers = [
    { title: "Stopwatch", C: <Stopwatch /> },
    { title: "Countdown", C: <Countdown /> },
    { title: "XY", C: <XY /> },
    { title: "Tabata", C: <Tabata /> },
  ];

  const handleChange =  (v) => {
    setSelectedTimer(v);
  }

  // Switching timers
  useEffect(() => {
    console.log(`Mount ${selectedTimer}`);

    return () => console.log(`UnMount ${selectedTimer}`);

  }, [selectedTimer]);


  return (
    <>
      <Tabs tabItems={utils.readCollection(timers, 'title')} 
            onChange={handleChange} />
      <Panel id="timer_panel">
        {utils.getTimer(selectedTimer, timers)}
      </Panel>
    </>

  );
  

}


export default TimersView;
