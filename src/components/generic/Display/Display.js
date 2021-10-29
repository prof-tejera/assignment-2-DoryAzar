import { Component } from 'react';
import './Display.css';
import PropTypes from 'prop-types';


class Display extends Component {

	render() {

		const {isStarted = false, value = "00:00:00", status = "" } = this.props;
		
        return (

            // Return is stylized circular display
            <div className="display_circular">
                <div className="marker">
                    { status && <p className="header">{ status }</p>}
                    <p className="value neonText">{ value }</p>
                </div>
            
                { 
                    // Animate if timer is on
                    !!isStarted && 
                        <>
                            <div className="display_circular_back-1"></div>
                            <div className="display_circular_back-2"></div>
                        </>
                }
            </div>

        );
	}
}

Display.propTypes = {
	isStarted: PropTypes.bool,
    value: PropTypes.string,
    status: PropTypes.string
}


export default Display;
