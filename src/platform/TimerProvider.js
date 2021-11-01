import React, { useState, useContext } from 'react';
import { T_STOPWATCH, T_COUNTDOWN, T_XY, T_TABATA, WORK_MODE, REST_MODE, formatTime } from '../utils/helpers';
import { SettingsContext } from './SettingsProvider';
export const TimerContext = React.createContext({});

export const TimerProvider = ({ children }) => {

    const { ...settingsContext } = useContext(SettingsContext);
    const { 
        selectedTimer,
        startTime,
        stopTime,
        restStartTime,
        totalRounds } = settingsContext;

    const [statusMessage, setStatusMessage] = useState("");
    const [timerCounting, setTimerCounting] =  useState(false);
    const [counter, setCounter] = useState(startTime);
    const [currentRound, setCurrentRound] = useState(1);
    const [mode, setMode] = useState(WORK_MODE);
    const [isFrontSide, setIsFrontSide] = useState(true);

    // private function: start the counter
    const startCounting =  () => {
        switch(selectedTimer) {
            case T_STOPWATCH:
                setCounter((counter) => counter + 1);
                break;
            case T_TABATA:
                setCounter((counter) => counter - 1);
                if (counter === 0 && mode === REST_MODE) {
                    resetTimer(false);
                    setMode(WORK_MODE);
                    setCurrentRound((currentRound) => currentRound + 1);
                } else if (counter ===  0 && mode === WORK_MODE) {
                    resetTimer(false)
                    setMode(REST_MODE);
                }
                break;
            default:
                setCounter((counter) => counter - 1);
                if (counter === 0) {
                    resetTimer(false);
                    setCurrentRound((currentRound) => currentRound + 1);
                }

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
    const resetTimer = (resetMode = true) => {
        setCounter(mode === WORK_MODE? startTime : restStartTime);
        if (resetMode) {
            setMode(WORK_MODE);
            setCurrentRound(1);
        }
    }

    // End the timer
    const completeTimer = (interval) => {
        clearInterval(interval);
        toggleCounting();
        setCounter(stopTime);
        setCurrentRound(totalRounds);
        setMode(WORK_MODE);
    }

    // Toggle timer on, off
    const toggleCounting  = () => {
        setTimerCounting(!timerCounting);
    }

    // Toggle between timer and settings card
    const toggleSide = () => {
        if (!isFrontSide) resetTimer();
        setIsFrontSide(!isFrontSide);
    }


    // Check if the timer completed
    const isOver = () =>  {
        
        // countdown
        if (startTime >= stopTime)
            return  timerCounting && counter <= stopTime && currentRound === totalRounds;
        
        // countup
        else
            return  timerCounting && counter >= stopTime && currentRound === totalRounds;
    }

    // Conversation handler
    const messenger = () => {
        const duration = Math.abs(startTime - stopTime);
        const remaining =  Math.abs(counter - duration);
        const elapsed = Math.abs((remaining - duration)/ duration);

        if (mode === REST_MODE && (counter === startTime + 1 || counter === startTime - 1)) return "Breathe...";
        if (mode === WORK_MODE && (counter === startTime + 1 || counter === startTime - 1)) return "Let's move that body!";
        if (counter === stopTime && currentRound === totalRounds)  return "You made it! Again?";
        if (!timerCounting && counter !== startTime && counter !== stopTime ) return "Let's take a breath...";
        if (duration >= 10 && elapsed < 0.2) return "Almost There!";
        if (duration >=10 && elapsed < 0.4 ) return "Keep moving...You can do it";
        if (selectedTimer === T_XY) return `Round ${currentRound} of ${totalRounds}`;
        if ([T_STOPWATCH, T_COUNTDOWN].includes(selectedTimer)) return `Counting to ${formatTime(stopTime)}`;
        if (selectedTimer === T_TABATA) return `${mode} -  Round ${currentRound} of ${totalRounds}`;
    }

    return <TimerContext.Provider 
            value={{ 
                currentRound, setCurrentRound,
                mode, setMode,
                statusMessage, setStatusMessage, 
                timerCounting, toggleCounting,
                counter, setCounter,
                isFrontSide, toggleSide,
                isOver, startTimer, pauseTimer, resetTimer, completeTimer, messenger,
                ...settingsContext

            }}>
            {children}
        </TimerContext.Provider>;
};

export default TimerProvider;