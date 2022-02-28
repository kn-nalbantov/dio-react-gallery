import React, { useState } from 'react';
import kaos from '../icons/kaos.svg';
import lamatta from '../icons/lamatta.svg';
import robertrudger from '../icons/robertrudger.svg';
import { imgs } from '../images.js';
import { lang } from '../lang.js';

export default function Collection(prop) {
  const svgs = { kaos, lamatta, robertrudger };
  const [isOpen, setOpen] = useState(false);

  function onClick(e) {
    const container = e.target.parentNode;
    const col = e.target.parentNode.children[4].children;

    if (!isOpen) {
      e.target.textContent = '⬆';
      setOpen(true);
      container.style.height = '500px';
      Array.from(col).forEach(x => x.style.display = 'block');
    } else {
      e.target.textContent = '⬇';
      Array.from(col).forEach(x => x.style.display = 'none');
      container.style.height = '250px';
      setOpen(false);
    }
  }

  function select(e) {
    e.target.style.border = 'thick double blue';
  }

  function changeSelection() {
    //TODO
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
      <div id={'imgs-' + prop.name}>
        {imgs[prop.name].map((x) => (
          <img src={x} key={x + 1} className='thumb-bar' onClick={select} onKeyDown={changeSelection} />
        ))}
      </div>
    </div>
  );
}
