import { useContext, useEffect, useRef } from 'react';
import {  AppContext } from '../../platform/AppProvider';
import Timer from '../../components/generic/Timer';

const SETTINGS_FORM = [
  {id: "startTime", label: "Start Time", placeholder: "Start the timer at this time"},
  {id: "stopTime", label: "Stop Time", placeholder: "Stop the timer at this time"},
];

const Countdown = () => {

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

export default Countdown;
