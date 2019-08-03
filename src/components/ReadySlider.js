import React from 'react';

import './ReadySlider.css';
import Slide from './Slide';
import Slider from './Slider';

function ReadySlider() {
  return (
    <Slider>
      <Slide className="slide-1">
        <h1 className="slide-1__header">Всегда ли цели терапии СД2 на поверхности?</h1>
        <div className="box box-1 slide-1__box-1">
          <div className="box__elipse-1 box-1__elipse">
            <div className="box__elipse-2">
              <div className="box__elipse-3"></div>
            </div>
          </div>
          <span className="box__text box-1__text">Цель по HbA1c</span>
        </div>
        <div className="box box-2 slide-1__box-2">
          <div className="box__elipse-1 box-2__elipse">
            <div className="box__elipse-2">
              <div className="box__elipse-3"></div>
            </div>
          </div>
          <span className="box__text box-2__text">Гипогликемия</span>
        </div>
        <div className="box box-3 slide-1__box-3">
          <div className="box__elipse-1 box-3__elipse">
            <div className="box__elipse-2">
              <div className="box__elipse-3"></div>
            </div>
          </div>
          <span className="box__text box-3__text">Осложнения СД</span>
        </div>
        <div className="box box-4 slide-1__box-4">
          <div className="box__elipse-1 box-4__elipse">
            <div className="box__elipse-2">
              <div className="box__elipse-3"></div>
            </div>
          </div>
          <span className="box__text box-4__text">СС риски</span>
        </div>
      </Slide>
      <Slide className="slide-2">Slide 2</Slide>
      <Slide className="slide-3">Slide 3</Slide>
    </Slider>
  );
}

export default ReadySlider;
