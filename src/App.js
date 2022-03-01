import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [a, setA] = useState("qqqqq");
  const [b, setB] = useState("rrrrrrrrr");

  useEffect(() => {
    setA("wwwww");
    setB("xxxxxxx")
  }, []);

  console.log(a);
  console.log(b);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
