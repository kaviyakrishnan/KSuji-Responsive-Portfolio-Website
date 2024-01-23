import { Container, Row , Col} from "react-bootstrap";
import  Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import meterImg from "../assets/img/meter2.svg";
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {

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

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skills-bx">
                            <h2>
                                Skills
                            </h2>
                            <p> lorem ipsum</p>

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
                                    <h5>React</h5>
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