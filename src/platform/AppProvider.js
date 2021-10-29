import React, { useState } from 'react';

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {

    const [selectedTimer, setSelectedTimer]  = useState("Stopwatch");
    const [settings, setSettings] = useState();
    const [startTime, setStartTime] = useState("00:00:00");
    const [statusMessage, setStatusMessage] = useState("");
    const [timerCounting, setTimerCounting] =  useState(false);
    const [counter, setCounter] = useState("00:00:00");
    const [isFrontSide, setFront ] = useState(true);

    const resetTimer = (defaultSettings, statusMessage, startTime) => {
        setSettings(defaultSettings);
        setStatusMessage(statusMessage);
        setStartTime(startTime);
    }


    return <AppContext.Provider 
            value={
                    {   selectedTimer, setSelectedTimer,
                        settings, setSettings, 
                        startTime, setStartTime, 
                        statusMessage, setStatusMessage, 
                        timerCounting, setTimerCounting,
                        counter, setCounter,
                        isFrontSide, setFront,
                        resetTimer
                }}>
            {children}
        </AppContext.Provider>;
};

export default AppProvider;