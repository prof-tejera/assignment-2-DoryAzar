import Timer from '../../components/generic/Timer';
import { useTimer } from "../../hooks/useTimer";

const SETTINGS_FORM = [
  {id: "startTime", label: "Start Time", placeholder: "Start the timer at this time"},
  {id: "stopTime", label: "Stop Time", placeholder: "Stop the timer at this time"},
];

const Countdown = () => {

  useTimer({
    startTime: 10,
    stopTime: 0,
  });

  return <Timer settings={SETTINGS_FORM} />
  
}

export default Countdown;
