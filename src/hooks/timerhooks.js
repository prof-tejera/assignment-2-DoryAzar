import { useEffect, useRef } from 'react';
import { WORK_MODE, T_TABATA } from '../utils/helpers';

// Hook used to start the timers
export const useTimerStarter = (context) => {
  
  const {timerCounting, startTimer, isTimerOver, pauseTimer, completeTimer, selectedTimer} = context;
  const runningTimer = useRef();

  useEffect(() => {
    if (timerCounting && !isTimerOver()) runningTimer.current = startTimer()
    else if (isTimerOver()) completeTimer();
    else if (!isTimerOver()) pauseTimer(runningTimer.current);
    return () => pauseTimer(runningTimer.current);
  }, [timerCounting, startTimer, isTimerOver, pauseTimer, completeTimer, selectedTimer]);

  return  runningTimer.current;

};

//Hook use to initialize timers
export const useTimerInitializer = (inputSettings, context) => {

  const {setSettings, setCounter, setCurrentRound, mode, selectedTimer, setToComplete, setTimerCounting } = context; 
  const { startTime, stopTime, totalRounds, restStartTime } = inputSettings;

  const setSettingsRef =  useRef(setSettings);
  setSettingsRef.current = setSettings;

  useEffect(() => {

    setSettingsRef.current({ startTime, stopTime, totalRounds: totalRounds?? 1, restStartTime: restStartTime?? 0 });
    setCounter(mode === WORK_MODE? startTime : restStartTime);

    //Only reset if it is not TABATA
    if (selectedTimer !== T_TABATA)  {
      setCurrentRound(1);
      setToComplete(false);
      setTimerCounting(false);
    } 
  }, [setCounter, startTime, stopTime, totalRounds, restStartTime, 
      setCurrentRound, mode, selectedTimer, setToComplete, setTimerCounting]);
    
}

