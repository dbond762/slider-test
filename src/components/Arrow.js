import React from 'react';

import './Arrow.css';

function Arrow(props) {
  return (
    <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 1536" width="2048" height="1536">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="5"
          refX="0" refY="2.5" orient="auto">
          <polygon points="0 0, 10 2.5, 0 5" fill="#fff" />
        </marker>
      </defs>
      <line x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} stroke="#fff"
        stroke-width="2" marker-end="url(#arrowhead)" />
    </svg>
  );
}

export default Arrow;
