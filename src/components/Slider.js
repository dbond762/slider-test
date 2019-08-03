import React, { Component } from 'react';

import Indicators from './Indicators';
import ToBottom from './ToBottom';

class Slider extends Component {
  state = {
    slide: 0,
  };

  render() {
    return (
      <div>
        {this.props.children}
        <Indicators/>
        <ToBottom/>
      </div>
    );
  }
}

export default Slider;
