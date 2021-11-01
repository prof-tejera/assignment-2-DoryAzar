import  { useContext, useEffect } from 'react';
import './Display.css';
import PropTypes from 'prop-types';
import {  TimerContext } from '../../../platform/TimerProvider';
import * as utils from "../../../utils/helpers";
import className from 'classnames';

const Display = () => {
    const { counter, timerCounting,  statusMessage, setStatusMessage, messenger, isComplete } = useContext(TimerContext);

    const successStyle = [{
        "success": isComplete
    }];

    useEffect(() => {
        setStatusMessage(messenger());
    }, [setStatusMessage, messenger]);
		
    return (

        // Return is stylized circular display
        <div className="display_circular">
            <div className="marker">
                { statusMessage && <p className={className("header", successStyle)}>{ statusMessage }</p>}
                {!isComplete && <p className={className("value neonText", successStyle)}>{ utils.formatTime(counter) }</p>}
                {isComplete && <p className={className("value neonText", successStyle)}>Nice!</p>}
            </div>
        
            { 
                // Animate if timer is on
                !!timerCounting && 
                    <>
                        <div className="display_circular_back-1"></div>
                        <div className="display_circular_back-2"></div>
                    </>
            }
        </div>

    );
}


Display.propTypes = {
	isStarted: PropTypes.bool,
    value: PropTypes.string,
    status: PropTypes.string
}


export default Display;
