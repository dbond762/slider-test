import React, { Component } from 'react';

import './Slider.css';
import Indicators from './Indicators';
import ToBottom from './ToBottom';

class Slider extends Component {
  state = {
    slide: 0,
  };

  children = React.Children.map(this.props.children, child => {
    return React.cloneElement(child, {
      height: this.props.height,
    });
  });

  count = React.Children.count(this.props.children);

  render() {
    return (
      <div className="slider" style={{ height: `${this.props.height}px` }}>
        <div className="slider__slides" style={{ top: `-${this.state.slide * this.props.height}px` }}>
          {this.children}
        </div>
        <Indicators className="slider__indicators" count={this.count} activeSlide={this.state.slide}
        top={this.props.height / 2 - (this.count * 40) / 2} onChangeSlide={this.changeSlide} />
        <ToBottom/>
      </div>
    );
  }

  changeSlide = (newSlide) => {
    this.setState({
      slide: newSlide,
    });
  }
}

export default Slider;
