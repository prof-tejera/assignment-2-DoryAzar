import React, { Component } from 'react';
import './Card.css';
import className from 'classnames';
import PropTypes from 'prop-types';

class Card extends Component {

    render() {
        const { side ="front", children } = this.props;

        const cardStyle = [{
            [`panel_face_${side}`]: side? true : false
        }]

        return (
            <div className={className(cardStyle)}>
                { children }
            </div>
        );
    }
    
}

Card.propTypes = {
    side: PropTypes.string,
    children: PropTypes.node
}

export default Card;