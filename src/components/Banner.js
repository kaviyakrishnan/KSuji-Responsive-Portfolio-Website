import { useEffect, useState } from "react";
import { Container, Row , Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/headerImg.svg";

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
    let inter = loopNum % toRotate.length;
    let fulltext = toRotate[inter];
    let updatedText = isDeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
        setDelta(PrevDelta => PrevDelta /2)
    }

    if (!isDeleting && updatedText === fulltext) {
        setIsDeleting(true);
        setDelta(period);
    }else if(isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }

 }


return(
   <section className="banner" id="home">
        <Container>
            <Row className="align_items_center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagl">Welcome to my Portfolio</span>
                    <h1>{`Hi i am Kaviya krishnan Suji`}</h1>
                    <h2><span className="wrap">{text}</span></h2>
                    <p>dfghbdiuhabbfggggauidgjnaikdngaubgdnokasmdfijandfgkadfghbaidkgmiasdgiaduhhSJNGI</p>
                    <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/> </button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img" />
                </Col>
            </Row>
        </Container>
   </section>
)

}