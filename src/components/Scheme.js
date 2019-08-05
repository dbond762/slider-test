import React from 'react';

import './Scheme.css';
import Arrow from './Arrow';

function Scheme() {
  return (
    <div className="scheme slide-3__scheme">
      <div className="scheme-box scheme-box--vertical scheme__box-1">
        <div className="scheme-box__desc">
          <span className="scheme-box__number scheme-box__number--wide">1</span>
          <span className="scheme-box__text scheme-box__text--large">β-клетки</span>
        </div>
        <div className="scheme-box__elipse scheme-box__elipse--large">
          <span className="beta">β</span>
        </div>
      </div>
      <div className="scheme-box scheme__box-2">
        <div className="scheme-box__desc scheme-box__desc--left">
          <span className="scheme-box__number">2</span>
          <span className="scheme-box__text">↓ инкретинового<br /> эффекта</span>
        </div>
      </div>
      <div className="scheme-box scheme__box-3">
        <div className="scheme-box__desc scheme-box__desc--right">
          <span className="scheme-box__number">3</span>
          <span className="scheme-box__text">Дефект α-клеток</span>
        </div>
      </div>
      <div className="scheme-box scheme__glukagon">
        <div className="scheme-box__desc">
          <span className="scheme-box__text scheme-box__text--small">↑ глюкагон</span>
        </div>
      </div>
      <div className="scheme-box scheme__giperglikemiya">
        <div className="scheme-box__desc">
          <span className="scheme-box__text scheme-box__text--large">Гипергликемия</span>
        </div>
      </div>
      <div className="scheme-box scheme__box-11">
        <div className="scheme-box__desc scheme-box__desc--left">
          <span className="scheme-box__number">11</span>
          <span className="scheme-box__text">Почки</span>
        </div>
        <div className="scheme-box__elipse">
          <div className="scheme-box__img-wrap">
            <img className="scheme-box__img" src={require('../assets/img/scheme/lipid_copy.png')} alt="kidneys" />
          </div>
        </div>
      </div>
      <div className="scheme-box scheme__box-8">
        <div className="scheme-box__desc scheme-box__desc--left">
          <span className="scheme-box__number">8</span>
          <span className="scheme-box__text">Микрофлора<br /> кишечника</span>
        </div>
        <div className="scheme-box__elipse">
          <div className="scheme-box__img-wrap">
            <img className="scheme-box__img" src={require('../assets/img/scheme/brain1_copy.png')} alt="intestines" />
          </div>
        </div>
      </div>
      <div className="scheme-box scheme__box-9">
        <div className="scheme-box__desc scheme-box__desc--left">
          <span className="scheme-box__number">9</span>
          <span className="scheme-box__text">Нарушение иммунной<br /> регуляции/воспаление</span>
        </div>
        <div className="scheme-box__elipse">
          <div className="scheme-box__img-wrap">
            <img className="scheme-box__img" src={require('../assets/img/scheme/infection.png')} alt="infection" />
          </div>
        </div>
      </div>
      <div className="scheme-box scheme__alimin">
        <div className="scheme-box__desc">
          <span className="scheme-box__text scheme-box__text--small">↓ амилин</span>
        </div>
      </div>
      <div className="scheme-box scheme__box-10">
        <div className="scheme-box__desc scheme-box__desc--left">
          <span className="scheme-box__number">10</span>
          <span className="scheme-box__text">Желудок</span>
        </div>
        <div className="scheme-box__elipse">
          <div className="scheme-box__img-wrap">
            <img className="scheme-box__img" src={require('../assets/img/scheme/stomach.png')} alt="stomach" />
          </div>
        </div>
      </div>
      <div className="scheme-box scheme__box-7">
        <div className="scheme-box__elipse">
          <div className="scheme-box__img-wrap">
            <img className="scheme-box__img" src={require('../assets/img/scheme/brain.png')} alt="brain" />
          </div>
        </div>
        <div className="scheme-box__desc scheme-box__desc--right">
          <span className="scheme-box__number">7</span>
          <span className="scheme-box__text">Головной мозг</span>
        </div>
      </div>
      <div className="scheme-rect scheme__rect">
        <div className="scheme-box scheme-rect__text">
          <div className="scheme-box__desc">
            <span className="scheme-box__text scheme-box__text--small">Инсулинорезистентность</span>
          </div>
        </div>
        <div className="scheme-box scheme-rect__box">
          <div className="scheme-box__elipse">
            <div className="scheme-box__img-wrap">
              <img className="scheme-box__img" src={require('../assets/img/scheme/Capa_1.png')} alt="liver" />
            </div>
          </div>
          <div className="scheme-box__desc scheme-box__desc--right">
            <span className="scheme-box__number">6</span>
            <span className="scheme-box__text">Печень</span>
          </div>
        </div>
        <div className="scheme-box scheme-rect__box">
          <div className="scheme-box__elipse">
            <div className="scheme-box__img-wrap">
              <img className="scheme-box__img" src={require('../assets/img/scheme/musle.png')} alt="muscles" />
            </div>
          </div>
          <div className="scheme-box__desc scheme-box__desc--right">
            <span className="scheme-box__number">5</span>
            <span className="scheme-box__text">Мышцы</span>
          </div>
        </div>
        <div className="scheme-box scheme-rect__box">
          <div className="scheme-box__elipse">
            <div className="scheme-box__img-wrap">
              <img className="scheme-box__img" src={require('../assets/img/scheme/lipid_copy_2.png')} alt="fat" />
            </div>
          </div>
          <div className="scheme-box__desc scheme-box__desc--right">
            <span className="scheme-box__number">4</span>
            <span className="scheme-box__text">Жировые клетки</span>
          </div>
        </div>
      </div>
      <Arrow x1="811" y1="153" x2="605" y2="183" />
      <Arrow x1="591" y1="204" x2="798" y2="174" />
      <Arrow x1="841" y1="212" x2="591" y2="360" />
      <Arrow x1="587" y1="383" x2="837" y2="237" />
      <Arrow x1="870" y1="232" x2="545" y2="508" />
      <Arrow x1="900" y1="268" x2="900" y2="360" />
      <Arrow x1="957" y1="268" x2="957" y2="652" />
      <Arrow x1="1013" y1="268" x2="1013" y2="360" />
      <Arrow x1="1287" y1="383" x2="1038" y2="237" />
      <Arrow x1="1034" y1="212" x2="1283" y2="359" />
      <Arrow x1="1295" y1="202" x2="1090" y2="175" />
      <Arrow x1="1077" y1="152" x2="1282" y2="178" />
      <Arrow x1="530" y1="579" x2="530" y2="606" />
      <Arrow x1="590" y1="593" x2="748" y2="670" />
      <Arrow x1="622" y1="705" x2="744" y2="705" />
      <Arrow x1="900" y1="583" x2="900" y2="652" />
      <Arrow x1="1013" y1="530" x2="1013" y2="549" />
      <Arrow x1="1013" y1="618" x2="1013" y2="653" />
      <Arrow x1="933" y1="795" x2="933" y2="769" />
      <Arrow x1="991" y1="749" x2="991" y2="776" />
      <Arrow x1="1485" y1="345" x2="1485" y2="319" />
      <Arrow x1="1509" y1="300" x2="1509" y2="326" />
    </div>
  );
}

export default Scheme;
