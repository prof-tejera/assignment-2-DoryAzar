import { useEffect, useRef } from 'react';

// Hook used to start the timers
export const useTimerStarter = (context) => {
  
  const {timerCounting, startTimer, isTimerOver, pauseTimer, completeTimer} = context;
  const runningTimer = useRef();

  useEffect(() => {
    if (timerCounting && !isTimerOver()) runningTimer.current = startTimer()
    else if (isTimerOver()) completeTimer();
    else pauseTimer(runningTimer.current); 
    return () => pauseTimer(runningTimer.current);
  }, [timerCounting, startTimer, isTimerOver, pauseTimer, completeTimer]);

  return  runningTimer.current;

};

//Hook use to initialize timers
export const useTimerInitializer = (inputSettings, context) => {

  const {mode, initializeTimer } = context; 
  const { startTime, stopTime, totalRounds, restStartTime  } = inputSettings;

  const setInitialRef =  useRef();
  setInitialRef.current = initializeTimer;

  useEffect(() => {
    
    // reinitialize the timer
    setInitialRef.current ({ startTime, stopTime, totalRounds, restStartTime });

  }, [startTime, stopTime, totalRounds, restStartTime, mode]);  
}

