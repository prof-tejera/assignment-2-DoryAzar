import Timer from "../generic/Timer";
import { useTimer } from "../../hooks/useTimer";

const SETTINGS_FORM = [
  {id: "startTime", label: "Start Time", placeholder: "Start the timer at this time"},
  {id: "stopTime", label: "Stop Time", placeholder: "Stop the timer at this time"},
];

const StopWatch = ()  =>  {

  useTimer({
    startTime: 1,
    stopTime: 3
  });
  return <Timer settings={SETTINGS_FORM} />

}

export default StopWatch;
