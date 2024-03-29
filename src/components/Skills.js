import { Container, Row , Col} from "react-bootstrap";
import  Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import meterImg from "../assets/img/meter2.svg";
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {

    // Define breakpoints and corresponding number of items to display for different screen sizes
    const responsive = {
        superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
        }
    };

    // Render JSX representing the skills section of the portfolio
    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skills-bx">
                            <h2>
                                Skills
                            </h2>
                            <p> Here are some of my skills based on experience and knowledge. </p>

                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                <div className="item">
                                    <img src={meterImg} alt="slider-Img" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg} alt="slider-Img" />
                                    <h5>PHP</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg} alt="slider-Img" />
                                    <h5>TypeScript</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg} alt="slider-Img" />
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg} alt="slider-Img" />
                                    <h5>React Js</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg} alt="slider-Img" />
                                    <h5>Phaser</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg} alt="slider-Img" />
                                    <h5>Node Js</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg} alt="slider-Img" />
                                    <h5>Linux</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg} alt="slider-Img" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg} alt="slider-Img" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg} alt="slider-Img" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg} alt="slider-Img" />
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg} alt="slider-Img" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg} alt="slider-Img" />
                                    <h5>Agile</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-img-left" src={colorSharp} alt="" />
        </section>
    )
        

}