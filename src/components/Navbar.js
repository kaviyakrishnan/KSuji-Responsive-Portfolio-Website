import { useEffect, useState } from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navImgOne from '../assets/img/navImgOne.svg';
import navImgTwo from '../assets/img/navImgTwo.svg';
import navImgThree from '../assets/img/navImgThree.svg';
import {Link} from 'react-scroll';

//creating functional component
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [Scrolled, setScrolled] = useState(false);

    // useEffect hook to handle scroll event and update state based on scroll position
    useEffect(() => {
        // Function to check scroll position and update state accordingly
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        // Cleanup function to remove event listener when component unmounts
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    // Render JSX representing the navbar section of the portfolio
    return(
        <Navbar expand="lg" className={Scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'Skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
    
                <a href="https://www.linkedin.com/in/kaviya-krishnan-suji/"><img src={navImgOne} alt="" /></a>
                <a href="https://www.facebook.com/kavya.krishnan.5492216" ><img src={navImgTwo} alt="" /></a>
                <a href="https://www.instagram.com/kaviya_krishnan_suji/" ><img src={navImgThree} alt="" /></a>

            </div>
            <Link to="connect" smooth={true} duration={500}>
            <button  className="vvd">
                <span>
                    Let's connect
                </span>
            </button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}