import Timer from "../generic/Timer";
import { useTimer } from '../../hooks/useTimer';

const Tabata = ()  => {
  
  useTimer();
  return <Timer  />
  
}

export default Tabata;