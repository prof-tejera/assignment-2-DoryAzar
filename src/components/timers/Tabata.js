import Timer from "../generic/Timer";
import { useTimer } from '../../hooks/useTimer';

const SETTINGS_FORM = [
  {id: "startTime", label: "Work duration", placeholder: "Work for that long"},
  {id: "restStartTime", label: "Rest duration", placeholder: "Rest for that long"},
  {id:"totalRounds", label: "Rounds", placeholder: "Stops after that many rounds"}
];

const Tabata = ()  => {
  
  useTimer({
    startTime: 3,
    restStartTime: 4,
    totalRounds: 2
  });
  return <Timer settings={SETTINGS_FORM} />
  
}

export default Tabata;