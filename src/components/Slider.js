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
        <ToBottom className={`slider__to-bottom ${this.state.slide === this.count - 1 ? 'slider__to-bottom--hidden' : ''}`} nextSlide={this.nextSlide} />
      </div>
    );
  }

  changeSlide = (newSlide) => {
    this.setState({
      slide: newSlide,
    });
  }

  nextSlide = () => {
    this.changeSlide(this.state.slide + 1);
  }

  prevSlide = () => {
    this.changeSlide(this.state.slide - 1);
  }

  componentDidMount() {
    const slider = document.querySelector('.slider');
    let startY = 0;

    slider.addEventListener('touchstart', e => {
      e.preventDefault();
      startY = e.changedTouches[0].pageY;
    });

    slider.addEventListener('touchend', e => {
      e.preventDefault();

      const diff = e.changedTouches[0].pageY - startY;
      if (diff > 0 && this.state.slide > 0) {
        this.prevSlide();
      } else if (diff < 0 && this.state.slide < this.count - 1) {
        this.nextSlide();
      }
    });
  }
}

export default Slider;
