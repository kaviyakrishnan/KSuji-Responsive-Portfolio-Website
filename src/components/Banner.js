import { useEffect, useState } from "react";
import { Container, Row , Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/headerImg.svg";
import { Link } from 'react-scroll';
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    //index of word displayed on screen for rotate animation
    const [loopNum, setLoopNum] = useState(0);
    //word typed out set to false initially
    const [isDeleting,setIsDeleting] = useState(false);
    //animation rotating
const toRotate = [" Software Developer ", " New Graduate ", " Tech Savvy "];
//indicates portion of word displayed in roating animation
const [text, setText] = useState('');
//variable responsible for dtermining speed btw words
const [delta,setDelta] = useState(300 - Math.random() * 100);
//indicates time btw letter typed
const period = 2000;
/**
 * function responsible for word typed and deleted in roatating line animation
 */
useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    }, delta);

    return () => { clearInterval(ticker)};
}, [text])

const tick = () => {
    // Calculate the index within the toRotate array based on the current loopNum
    let inter = loopNum % toRotate.length;
    // Get the full text corresponding to the current index
    let fulltext = toRotate[inter];
    // Determine the updated text based on whether characters are being added or deleted
    let updatedText = isDeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1);

    setText(updatedText);

    // Adjust the speed of character deletion
    if (isDeleting) {
        setDelta(PrevDelta => PrevDelta /2)
    }

    // Check if the text is fully typed out before starting deletion
    if (!isDeleting && updatedText === fulltext) {
        setIsDeleting(true);
        setDelta(period);
    }else if(isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }

 }

// Render JSX representing the banner section of the portfolio
return(
   <section className="banner" id="home">
        <Container>
            <Row className="align_items_center">
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                    <span className="tagl">Welcome to my Portfolio</span>
                    <h1>{`Hi i am Kaviya krishnan Suji`}</h1>
                    <h2><span className="wrap">{text}</span></h2>
                    <p>I am a recent Computer Programming and Analysis graduate from St. Lawrence College. I have worked as a Student Software Engineer at Elentra Corp for a year. I have more than one year of professional experience with Object Oriented Programming in various programming languages and data Integration. I am tech-savvy, and researching the latest tools and technologies is a passion of mine. I am also a critical thinker and an effective problem solver who enjoys tackling competing challenges!</p>
                    <Link to="connect" smooth={true} duration={500}>
                    <button>Let's Connect<ArrowRightCircle size={25}/> </button>
                    </Link>
                    </div> }
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img" />
                </Col>
            </Row>
        </Container>
   </section>
)

}