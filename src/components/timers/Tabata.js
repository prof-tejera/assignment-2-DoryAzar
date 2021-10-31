import { useContext, useEffect, useRef } from 'react';
import {  AppContext } from '../../platform/AppProvider';
import Timer from "../generic/Timer";

const SETTINGS_FORM = [
  {id:"startTime", label: "Work Time", value: "00:45:00", placeholder: "Start the timer at this time"},
  {id:"rest", label: "Rest Time", value:"00:10:00", placeholder: "Timer will rest for that duration"},
  {id:"rounds", label: "Rounds", value:"2", placeholder: "Stops after that many rounds"}
];

const Tabata = ()  => {
  
  const {timerCounting, isOver, resetTimer, startTimer, pauseTimer, completeTimer } = useContext(AppContext);
  const runningTimer = useRef();

  useEffect(() => {
    if (timerCounting && !isOver()) {
      runningTimer.current = startTimer()
    } else if (isOver()) {
      completeTimer();
    }
    else if (!isOver()) {
      pauseTimer(runningTimer.current);
    }
    return () => {
      pauseTimer(runningTimer.current);
    };
  }, [timerCounting, resetTimer, startTimer, isOver, pauseTimer, completeTimer]);


  return <Timer settings={SETTINGS_FORM} />
  
}

export default Tabata;