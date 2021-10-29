import { useContext, useEffect } from 'react';
import Timer from "../generic/Timer";
import {  AppContext } from '../../platform/AppProvider';

const DEFAULT_SETTINGS = [
  {label: "Start Time", value: "00:00:00", placeholder: "Start the timer at this time"},
  {label: "Stop Time", value: "00:30:00", placeholder: "Stop the timer at this time"}
];

const StopWatch = ()  =>  {
  const { setSettings, setStatusMessage } = useContext(AppContext);

  useEffect(() => {
    setSettings(DEFAULT_SETTINGS);
    setStatusMessage("Count to 00:30:00");

  }, [setSettings, setStatusMessage]);

  return <Timer />;
}

export default StopWatch;
