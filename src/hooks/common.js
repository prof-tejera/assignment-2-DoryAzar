import { useEffect, useRef } from 'react';
import { WORK_MODE } from '../utils/helpers';

// Hook used to start the timers
export const useTimerStarter = (context) => {
  
  const {timerCounting, startTimer, isOver, pauseTimer, completeTimer} = context;
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
  }, [timerCounting, startTimer, isOver, pauseTimer, completeTimer]);

  return  runningTimer.current;

};

// Hook use to initialize timers
export const useTimerInitializer = (settings, context) => {
  const {setSettings, setCounter, mode, setCurrentRound } = context; 
  const { startTime, stopTime, totalRounds, restStartTime  } = settings;

  const counterValue = mode === WORK_MODE? startTime : restStartTime;

  useEffect(() => {
    setSettings({ startTime, stopTime, totalRounds: totalRounds?? 1, restStartTime: restStartTime?? 0 });
    setCurrentRound(1);
    setCounter(counterValue);
  }, [setSettings, setCounter, startTime, stopTime, totalRounds, restStartTime, setCurrentRound, mode, counterValue]);

}