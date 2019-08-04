import React from 'react';

function Slide(props) {
  return (
    <div className={`slide ${props.className}`} style={{ height: `${props.height}px` }}>
      {props.children}
    </div>
  );
}

export default Slide;
