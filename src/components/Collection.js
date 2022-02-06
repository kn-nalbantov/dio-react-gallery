import React from 'react';
import kaos from '../icons/kaos.svg';
import lamatta from '../icons/lamatta.svg';
import rr from '../icons/robertrudger.svg';

export default function Collection(prop) {
  return (
    <div tabIndex="-1" className="collection">
      <img src={prop.name} alt="La Matta logo" class="logo" />
            <p>Бъди различен! Ла Мата взима прекаленото и му инжектира стил. <a href="https://area98.it/collections/lamatta" target="_blank">Научете повече.</a></p>
            <button>⬇</button>
            <div class="fullimg">
                <img src="" alt="picture of a La Matta" class="displayed" />
            </div>
            <div class="thumb-bar"></div>
    </div>
  )
}
