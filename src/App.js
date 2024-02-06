//imports
import './App.css';
import { NavBar } from './components/Navbar.js';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import {Experience} from './components/Experience';
import {Contact} from './components/Contact.js';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  // Start of JSX block, wrapping elements in a div .Renders each component of App.
    <div className="App">
   <NavBar />
    <Banner />
    <Skills />
    <Experience />
   <Contact />
   <Footer />
    </div>
    
  );
}

export default App;