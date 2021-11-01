import Timer from "../generic/Timer";
import { useTimer } from "../../hooks/useTimer";

const StopWatch = ()  =>  {

  useTimer();
  return <Timer />

}

export default StopWatch;
