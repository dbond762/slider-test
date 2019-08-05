import React from 'react';

import './ToBottom.css';

function ToBottom(props) {
  return (
    <div className={`to-bottom ${props.className}`}>
      <div className="to-bottom__btn" onClick={props.nextSlide.bind(this)}>
        <span className="to-bottom__text">Листайте вниз</span>
        <div className="to-bottom__shape"></div>
      </div>
      <div className="to-bottom__shine"></div>
    </div>
  );
}

export default ToBottom;
