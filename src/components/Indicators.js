import React from 'react';

import './Indicators.css';

function Indicators(props) {
  return (
    <div className={`indicators ${props.className}`} style={{ top: `${props.top}px` }}>
      {showIndicators(props)}
    </div>
  );
}

function showIndicators(props) {
  return [...Array(props.count)].map((_, i) => {
    let indicatorsClass = 'indicators__circle';
    if (props.activeSlide === i) {
      indicatorsClass += ' indicators__circle--active';
    }
    return (
      <div className={indicatorsClass} key={i} onClick={props.onChangeSlide.bind(this, i)}></div>
    );
  });
}

export default Indicators;
