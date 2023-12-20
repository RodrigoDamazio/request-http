import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
//import Section from './components/Section';
//import Header from './components/Header';
//import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>

    <footer>
    <h1>SegTrabDigital</h1>
      <p>Nós iremos cuidar da sua segurança</p>
      <p>&copy; 2023 SegTrabDigital</p>
    </footer>
      
      
    </div>
  );
}

export default App;
