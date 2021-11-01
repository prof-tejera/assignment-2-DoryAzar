import Timer from "../generic/Timer";
import { useTimer } from '../../hooks/useTimer';

const SETTINGS_FORM = [
  {id: "startTime", label: "Start Time", placeholder: "Start the timer at this time"},
  {id: "stopTime", label: "Stop Time", placeholder: "Stop the timer at this time"},
  {id:"totalRounds", label: "Rounds", placeholder: "Stops after that many rounds"}
];

const XY = () => {

  useTimer({
    startTime: 2,
    stopTime: 0,
    totalRounds: 4
  });
  return <Timer settings={SETTINGS_FORM} />
}

export default XY;