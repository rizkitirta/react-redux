import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [name, setName] = useState("Tirta")
  return (
    <div className="App">
      <h2>Aplikasi Kontak {name}</h2>
    </div>
  );
}

export default App;
