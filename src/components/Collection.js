import React from 'react';
import kaos from '../icons/kaos.svg';
import lamatta from '../icons/lamatta.svg';
import rr from '../icons/robertrudger.svg';
import pic0 from '../pictures/1.JPG';

export default function Collection(prop) {
  const svgs = {kaos, lamatta, rr};
  return (
    <div tabIndex="-1" className="collection">
      <img src={svgs[prop.name]} alt="La Matta logo" className="logo" />
            <p>Бъди различен! Ла Мата взима прекаленото и му инжектира стил. <a href="https://area98.it/collections/lamatta" target="_blank">Научете повече.</a></p>
            <button>⬇</button>
            <div className="fullimg">
                <img src={pic0} alt="picture of a La Matta" className="displayed" />
            </div>
            <div className="thumb-bar"></div>
    </div>
  )
}
