
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Ex1 } from './Ex1';
import { Ex2 } from './Ex2';
import { Ex3 } from './Ex3';
import { Ex4 } from './Ex4';
import { Ex5 } from './Ex5';
import { NavBar } from './NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
              <Route path="/" element={<Ex1></Ex1>} />
              <Route path="/Ex2" element={<Ex2></Ex2>} />
              <Route path="/Ex3" element={<Ex3></Ex3>} />
              <Route path="/Ex4" element={<Ex4></Ex4>} />
              <Route path="/Ex5" element={<Ex5></Ex5>} />
          </Routes>
          <NavBar/>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
