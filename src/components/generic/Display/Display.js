import  { useContext } from 'react';
import './Display.css';
import PropTypes from 'prop-types';
import {  AppContext } from '../../../platform/AppProvider';

const Display = () => {
    const { timerCounting,  statusMessage, counter } = useContext(AppContext);
		
    return (

        // Return is stylized circular display
        <div className="display_circular">
            <div className="marker">
                { statusMessage && <p className="header">{ statusMessage }</p>}
                <p className="value neonText">{ counter }</p>
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
