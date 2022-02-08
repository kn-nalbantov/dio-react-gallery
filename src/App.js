import logo from './logo.svg';
import './App.css';
import Collection from './components/Collection.js';

function App() {
  return (
    <div className="App">
      <h1>Gallery</h1>
      <Collection name="lamatta"/>
      <Collection name="kaos"/>
      <Collection name="rr"/>
    </div>
  );
}

export default App;
