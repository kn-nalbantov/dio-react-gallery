import logo from './logo.svg';
import './App.css';
import Collection from './components/Collection.js';
import { flags } from '../src/images.js';
import { useState } from 'react';

function App() {
  const [lang, setLang] = useState('eng');

  function changeLang(e) {
    setLang(e.target.id);
  }
  return (
    <div>
      <div className='heading'>
        <h1>{lang === 'eng' ? 'Gallery' : lang === 'bg' ? 'Галерия' : 'Galleria'}</h1>
        <img src={flags['bg.png']} alt='bg flag' onClick={changeLang} id='bg' />
        <img src={flags['eng.png']} alt='end flag' onClick={changeLang} id='eng' />
        <img src={flags['it.png']} alt='it flag' onClick={changeLang} id='it' />
      </div>
      <Collection name='lamatta' lang={lang} />
      <Collection name='kaos' lang={lang} />
      <Collection name='rr' lang={lang} />
    </div>
  );
}

export default App;
