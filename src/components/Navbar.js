/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navImgOne from '../assets/img/navImgOne.svg';
import navImgTwo from '../assets/img/navImgTwo.svg';
import navImgThree from '../assets/img/navImgThree.svg';

//creating functional component
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [Scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

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
            <button  className="vvd" onClick={() => console.log('connect')}>
                <span>
                    Let's connect
                </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}