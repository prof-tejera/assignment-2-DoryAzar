import React, { Component } from 'react';
import './Panel.css';
import PropTypes from 'prop-types';

class Panel extends Component {
  render() {
    
    const { id = "", children }  = this.props;

    
    return (
        <div className="panel">
            <div className="panel_inner" id={id}>
                {children}
            </div>
        </div>
    );
  }
}

Panel.propTypes  = {
  id: PropTypes.string,
  children: PropTypes.node
}

export default Panel;