import { useContext, useEffect, useRef} from 'react';
import {  AppContext } from '../../platform/AppProvider';
import Timer from "../generic/Timer";

const SETTINGS_FORM = [
  {id: "startTime", label: "Start Time", value: "00:20:10", placeholder: "Start the timer at this time"},
  {id: "stopTime", label: "Stop Time", value:"00:00:00", placeholder: "Stop the timer at this time"},
  {id:"rounds", label: "Rounds", value:"2", placeholder: "Stops after that many rounds"}
];

const XY = () => {

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

export default XY;