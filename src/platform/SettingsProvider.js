import React, { useState, useCallback } from 'react';
import { TIMER_SETTINGS, T_STOPWATCH, saveToStorage } from '../utils/helpers';

export const SettingsContext = React.createContext({});


export const SettingsProvider = ({ children }) => {

    const [selectedTimer, setSelectedTimer]  = useState(T_STOPWATCH);
    const [startTime, setStartTime] = useState(0);
    const [stopTime, setStopTime] = useState(0);
    const [totalRounds, setTotalRounds] = useState(0);
    const [restStartTime, setRestStartTime] = useState(0);


    // Getter that wraps all the settings in one object
    const getSettings = () => {
        if (startTime === 0 && stopTime === 0  && totalRounds === 0 && restStartTime === 0)
            return  null;
        else
            return {startTime, stopTime, totalRounds, restStartTime};
    }

    // Setter that sets all the settings in one call
    const setSettings = useCallback((settings) =>  {
        if (isPersistent()) saveToStorage(selectedTimer, settings);
        setStartTime(settings.startTime && isValid(settings.startTime)? parseInt(settings.startTime): 0);
        setStopTime(settings.stopTime && isValid(settings.stopTime)? parseInt(settings.stopTime): 0);
        setTotalRounds(settings.totalRounds && isValid(settings.totalRounds, "rounds")? parseInt(settings.totalRounds):  1);
        setRestStartTime(settings.restStartTime && isValid(settings.restStartTime) ? parseInt(settings.restStartTime): 0);
    }, [selectedTimer])

    // Checks if input is valid based on expected configurations in timer.json
    const isValid =  (value, mode = "time") =>  value && !isNaN(value) && value <= TIMER_SETTINGS.configurations[mode].max && value >= TIMER_SETTINGS.configurations[mode].min;
    
    // Checks if persistence is turned on in the configurations
    const isPersistent = () => TIMER_SETTINGS.configurations.persistence;

    return <SettingsContext.Provider 
            value={{ 
                selectedTimer, setSelectedTimer,
                startTime, setStartTime,
                stopTime, setStopTime,
                totalRounds, setTotalRounds,
                restStartTime, setRestStartTime,
                getSettings, setSettings, isPersistent
            }}>
            {children}
        </SettingsContext.Provider>;
};

export default SettingsProvider;