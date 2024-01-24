//import logo from './logo.svg';
import './App.css';

import { NavBar } from './components/Navbar.js';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import {Experience} from './components/Experience';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
  
    <div className="App">
   <NavBar />
    <Banner />
    <Skills />
    <Experience />
    </div>
    
  );
}

export default App;