import { useContext, useEffect } from 'react';
import {  AppContext } from '../../platform/AppProvider';
import Timer from '../../components/generic/Timer';

const DEFAULT_SETTINGS = [
  {label: "Start Time", value: "00:30:00", placeholder: "Start the timer at this time"},
  {label: "Stop Time", value:"00:10:00", placeholder: "Stop the timer at this time"},
  {label: "Another setting", placeholder: "TBD"}
];

const Countdown = () => {
  const { setSettings, setStatusMessage, setStartTime } = useContext(AppContext);

  useEffect(() => {

    setSettings(DEFAULT_SETTINGS);
    setStatusMessage("Count from 00:30:00");
    setStartTime("00:30:00");

  }, [setSettings, setStatusMessage, setStartTime]);

  return <Timer />;
}

export default Countdown;
