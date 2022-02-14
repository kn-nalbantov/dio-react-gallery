import React from 'react';
import kaos from '../icons/kaos.svg';
import lamatta from '../icons/lamatta.svg';
import robertrudger from '../icons/robertrudger.svg';
import { images } from '../images.js';
import { lang } from '../lang.js';

export default function Collection(prop) {
  const svgs = {kaos, lamatta, robertrudger};
  const imgs = {kaos: images['6.JPG'], lamatta: images['0.JPG'], robertrudger: images['12.JPG']}
  console.log(prop.lang)
  return (
    <div tabIndex="-1" className="collection">
      <img src={svgs[prop.name]} alt="La Matta logo" className="logo" />
            <p>{lang[prop.lang][prop.name]} <a href={"https://area98.it/collections/" + prop.name} target="_blank" rel="noreferrer">{lang[prop.lang]['learn']}</a></p>
            <button>⬇</button>
            <div className="fullimg">
                <img src={imgs[prop.name]} alt={prop.name} className="displayed" />
            </div>
            <div className="thumb-bar"></div>
    </div>
  )
}
