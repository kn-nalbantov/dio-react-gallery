import logo from './logo.svg';
import './App.css';
import Collection from './components/Collection.js';

function App() {
  return (
    <div className="App">
      <h1>Gallery</h1>
      <Collection name="Kaos"/>
      <Collection name="La Matta"/>
      <Collection name="Robert Rudger"/>
    </div>
  );
}

export default App;
