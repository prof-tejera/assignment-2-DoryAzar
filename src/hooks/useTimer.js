import { useState } from 'react';
import { TIMER_SETTINGS, T_STOPWATCH, T_COUNTDOWN, T_XY, T_TABATA } from '../utils/helpers';

export const useTimer = (timer) => {

    const [selectedTimer, setSelectedTimer] = useState(timer);
    const [startTime, setStartTime] = useState(TIMER_SETTINGS[timer]['startTime']);
    const [stopTime, setStopTime] = useState(TIMER_SETTINGS[timer]['stopTime']);
    const [totalRounds, setTotalRounds] = useState(1);
    const [currentRound, setCurrentRound] = useState(1);
    const [mode, setMode] = useState("work");

    const [statusMessage, setStatusMessage] = useState("");
    const [timerCounting, setTimerCounting] =  useState(false);
    const [counter, setCounter] = useState(TIMER_SETTINGS[timer]['counter']);
    const [isFrontSide, setIsFrontSide] = useState(true);


    const initializeTimer = (timer) => { 
        setStartTime(TIMER_SETTINGS[timer]['startTime']);
        setCounter(startTime);
    }

    // private function: start the counter
    const startCounting =  () => {
        switch(selectedTimer) {
            case T_STOPWATCH:
                setCounter((counter) => counter + 1);
                break;
            case T_COUNTDOWN:
                setCounter((counter) => counter - 1);
                break;
            case T_XY:
                break;
            case T_TABATA:
                break;
            default:
                break;
        }
    }

    // Start the timer
    const startTimer = () => {
        return setInterval(() => {
                startCounting();
            }, 1000);
    }

    // Pause the timer
    const pauseTimer = (interval) => {
        clearInterval(interval);
    }

    // Reset the timer
    const resetTimer = () => {
        setCounter(startTime);
    }

    const completeTimer = (interval) => {
        clearInterval(interval);
        toggleCounting();
        setCounter(stopTime);
    }


    // toggle timer on, off
    const toggleCounting  = () => {
        setTimerCounting(!timerCounting);
    }

    // toggle between timer and settings card
    const toggleSide = () => {
        setIsFrontSide(!isFrontSide);
    }

    // check if the timer completed
    const isOver = () =>  {
        if (startTime  <= stopTime)
            return  timerCounting && counter >= stopTime && currentRound === totalRounds;
        else
            return  timerCounting && counter <= stopTime && currentRound === totalRounds;
    }

    // conversation handler
    const messenger = () => {
        if (counter === startTime) return "Let's move that body!";
        if (counter === stopTime)  return "You made it! Again?";
        if (!timerCounting && counter !== startTime) return "Let's take a breath...";
    }

    return {
        selectedTimer, setSelectedTimer,
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