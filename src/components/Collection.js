import React from 'react';
import kaos from '../icons/kaos.svg';
import lamatta from '../icons/lamatta.svg';
import rr from '../icons/robertrudger.svg';
import pic0 from '../pictures/1.JPG';
import images from '../images.js';

export default function Collection(prop) {
  const svgs = {kaos, lamatta, rr};
  const imgs = {kaos: images['6.JPG'], lamatta: images['0.JPG'], rr: images['12.JPG']}
  console.log(images)
  return (
    <div tabIndex="-1" className="collection">
      <img src={svgs[prop.name]} alt="La Matta logo" className="logo" />
            <p>Бъди различен! Ла Мата взима прекаленото и му инжектира стил. <a href="https://area98.it/collections/lamatta" target="_blank">Научете повече.</a></p>
            <button>⬇</button>
            <div className="fullimg">
                <img src={imgs[prop.name]} alt="picture of a La Matta" className="displayed" />
            </div>
            <div className="thumb-bar"></div>
    </div>
  )
}
