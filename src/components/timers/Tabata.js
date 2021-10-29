import { useContext, useEffect } from 'react';
import Timer from "../generic/Timer";
import {  AppContext } from '../../platform/AppProvider';

const DEFAULT_SETTINGS = [
  {label: "Work Time", value: "00:45:00", placeholder: "Start the timer at this time"},
  {label: "Rest Time", value:"00:10:00", placeholder: "Timer will rest for that duration"},
  {label: "Rounds", value:"2", placeholder: "Stops after that many rounds"}
];

const Tabata = ()  => {
  const { setSettings, setStatusMessage, setStartTime } = useContext(AppContext);
  
  useEffect(() => {
    setSettings(DEFAULT_SETTINGS);
    setStatusMessage("Work - Round 1 of 2");
    setStartTime("00:45:00");
  }, [setSettings, setStatusMessage, setStartTime]);

  return <Timer />;
  
}

export default Tabata;