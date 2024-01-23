//import logo from './logo.svg';
import './App.css';

import { NavBar } from './components/Navbar.js';
import { Banner } from './components/Banner';
//import { Skill } from './components/Skill';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
  
    <div className="App">
   <NavBar />
    <Banner />
    </div>
    
  );
}

export default App;