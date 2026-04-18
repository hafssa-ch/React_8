// src/App.js
import FetchData from './components/FetchData';
import AxiosData from './components/AxiosData';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">✨ TP – Consommer une API avec React</h1>
      <div className="components-grid">
        <FetchData />
        <AxiosData />
      </div>
    </div>
  );
}

export default App;