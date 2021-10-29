import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Container.css';

class Container extends Component {
  render() {
    
    const { children }  = this.props;
    return <div className="container">{children}</div>;
  }
}

Container.propTypes  = {
  children: PropTypes.node
}

export default Container;