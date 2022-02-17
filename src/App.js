
import './App.css';
import Header from './frontend/Header';
import Home from "./frontend/Home";

function App() {
  return (
    // BEM
    <div className="app">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
