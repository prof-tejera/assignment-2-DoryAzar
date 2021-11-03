import React, { useState } from 'react';
import { TIMER_SETTINGS, T_STOPWATCH } from '../utils/helpers';

export const SettingsContext = React.createContext({});


export const SettingsProvider = ({ children }) => {

    const [selectedTimer, setSelectedTimer]  = useState(T_STOPWATCH);
    const [startTime, setStartTime] = useState(0);
    const [stopTime, setStopTime] = useState(0);
    const [totalRounds, setTotalRounds] = useState(0);
    const [restStartTime, setRestStartTime] = useState(0);

    const getSettings = () => {
        if (startTime === 0 && stopTime === 0  && totalRounds === 0 && restStartTime === 0)
            return  null;
        else
            return {startTime, stopTime, totalRounds, restStartTime};
    }

    const setSettings = (settings) =>  {
        setStartTime(settings.startTime? parseInt(settings.startTime): 0);
        setStopTime(settings.stopTime? parseInt(settings.stopTime): 0);
        setTotalRounds(settings.totalRounds? parseInt(settings.totalRounds):  1);
        setRestStartTime(settings.restStartTime? parseInt(settings.restStartTime): 0);
        //return settings;
    }

    const dispatchSettings  = (inputSettings)  =>  {
        const settings = TIMER_SETTINGS.schema[selectedTimer];
        settings.forEach((setting) => {
            const input = document.querySelector(`#${setting.id}`);
            if (input) input.value = inputSettings[setting.id];
        });
        return inputSettings;
      }
 
    return <SettingsContext.Provider 
            value={{ 
                selectedTimer, setSelectedTimer,
                startTime, setStartTime,
                stopTime, setStopTime,
                totalRounds, setTotalRounds,
                restStartTime, setRestStartTime,
                getSettings, setSettings,
                dispatchSettings
            }}>
            {children}
        </SettingsContext.Provider>;
};

export default SettingsProvider;