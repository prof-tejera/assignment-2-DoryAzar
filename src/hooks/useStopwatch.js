import { useContext, useEffect, useRef } from 'react';
import {  AppContext } from '../platform/AppProvider'; 

export const useStopwatch = () => {
    const {        
        startTime, setStartTime,
        stopTime, setStopTime,
        totalRounds, setTotalRounds,
        currentRound, setCurrentRound,
        mode, setMode,
        statusMessage, setStatusMessage, 
        timerCounting, toggleCounting,
        counter, setCounter,
        isFrontSide, toggleSide,
        isOver, startTimer, pauseTimer, resetTimer, completeTimer, messenger,
        initializeTimer } = useContext(AppContext);

    setStartTime(10);
    setStopTime(2);
    setTotalRounds(1);
    setCurrentRound(1);
    setMode("work");
    setStatusMessage("Hello");
    setCounter(1);

    return {
        startTime, setStartTime,
        stopTime, setStopTime,
        totalRounds, setTotalRounds,
        currentRound, setCurrentRound,
        mode, setMode,
        statusMessage, setStatusMessage, 
        timerCounting, toggleCounting,
        counter, setCounter,
        isFrontSide, toggleSide,
        isOver, startTimer, pauseTimer, resetTimer, completeTimer, messenger,
        initializeTimer

    }

}