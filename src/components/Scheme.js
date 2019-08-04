import React from 'react';

import './Scheme.css';

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
    </div>
  );
}

export default Scheme;
