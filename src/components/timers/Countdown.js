import Timer from '../../components/generic/Timer';
import { useTimer } from "../../hooks/useTimer";

const Countdown = () => {

  useTimer();
  return <Timer />
  
}

export default Countdown;
