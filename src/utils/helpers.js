// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.
import timers from '../utils/timers.json';

export const readCollection = (arr, keyName) => {
    return arr.map((item) => {
        return item[keyName];
    });
}

export const getTimer = (timerName, arr) =>  {
    function isTimer(timer) {
        return timer.title === timerName;
    }
    return arr.find((isTimer)).C;
}

const isMatch = (setting, value) => {
    return setting.id === value; 
}

export const getSetting = (value, settings) => {
    const match = settings.find((setting) => isMatch(setting, value));
    return match.value;
}

export const formatTime = (timer) => {
    const seconds = `0${(timer % 60)}`.slice(-2)
    const fetchedMinutes = `${Math.floor(timer / 60)}`
    const minutes = `0${fetchedMinutes % 60}`.slice(-2)
    const hours = `0${Math.floor(timer / 3600)}`.slice(-2)
  
    return `${hours}:${minutes}:${seconds}`
}

export const T_STOPWATCH = "Stopwatch";
export const T_COUNTDOWN = "Countdown";
export const T_TABATA = "Tabata";
export const T_XY = "XY";

export const TIMER_SETTINGS = timers;
