import React from 'react';

function Slide(props) {
  return (
    <div className={`slide ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Slide;
