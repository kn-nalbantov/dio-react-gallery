import React from 'react';
import kaos from '../icons/kaos.svg';
import lamatta from '../icons/lamatta.svg';
import robertrudger from '../icons/robertrudger.svg';
import { imgs } from '../images.js';
import { lang } from '../lang.js';

export default function Collection(prop) {
  const svgs = { kaos, lamatta, robertrudger };

  function onClick(e) {
    // document.querySelectorAll('.thumb-bar').forEach(x => x.style.display = 'block');
    //change display of e.target thumb-bar pics
  }
  return (
    <div tabIndex='-1' className='collection'>
      <img src={svgs[prop.name]} alt='La Matta logo' className='logo' />
      <p>
        {lang[prop.lang][prop.name]}{' '}
        <a href={'https://area98.it/collections/' + prop.name} target='_blank' rel='noreferrer'>
          {lang[prop.lang]['learn']}
        </a>
      </p>
      <button onClick={onClick}>⬇</button>
      <div className='fullimg'>
        <img src={imgs[prop.name][0]} alt={prop.name} className='displayed' />
      </div>
      <div>
        {imgs[prop.name].map((x) => (
          <img src={x} key={x + 1} className='thumb-bar' />
        ))}
      </div>
    </div>
  );
}
