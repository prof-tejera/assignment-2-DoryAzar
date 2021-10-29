import { useContext, useEffect } from 'react';
import Timer from "../generic/Timer";
import {  AppContext } from '../../platform/AppProvider';

const DEFAULT_SETTINGS = [
  {label: "Start Time", value: "00:20:10", placeholder: "Start the timer at this time"},
  {label: "Stop Time", value:"00:00:00", placeholder: "Stop the timer at this time"},
  {label: "Rounds", value:"2", placeholder: "Stops after that many rounds"}
];

const XY = () => {
  const { setSettings, setStatusMessage, setStartTime } = useContext(AppContext);

  useEffect(() => {
    setSettings(DEFAULT_SETTINGS);
    setStatusMessage("Round 1 of 2");
    setStartTime("00:20:10");
  }, [setSettings, setStatusMessage, setStartTime]);

  return <Timer />;
}

export default XY;