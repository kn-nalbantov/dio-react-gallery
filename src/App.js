import logo from './logo.svg';
import './App.css';
import Collection from './components/Collection.js';
import { flags } from '../src/images.js';

function App() {
  return (
    <div>
      <div className='heading'>
        <h1>Gallery</h1>
        <img src={flags['bg.png']} alt='bg flag' />
        <img src={flags['eng.png']} alt='end flag' />
        <img src={flags['it.png']} alt='it flag' />
      </div>
      <Collection name='lamatta' />
      <Collection name='kaos' />
      <Collection name='rr' />
    </div>
  );
}

export default App;
