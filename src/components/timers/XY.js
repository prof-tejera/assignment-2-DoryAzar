import Timer from "../generic/Timer";
import { useTimer } from '../../hooks/useTimer'

const XY = () => {

  useTimer();
  return <Timer />

}

export default XY;