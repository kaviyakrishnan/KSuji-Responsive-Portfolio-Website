import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ExpCard } from "./ExpCard";
import expImgOne from "../assets/img/expImg1.png";
import expImgTwo from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Experience = () => {
   
   const experience = [
    {
        title: "Volunteer Programmer",
        description: "bshdvluhgkdjsbjsd",
        imgUrl: expImgOne,
    },
    {
        title: "Restaurant Supervisor",
        description: "bshdvluhgkdjsbjsd",
        imgUrl: expImgTwo,
    }
];
    return(
    <section className="experience" id="experience">
        <Container>
            <Row>
                <Col>
                <h2>Relevant Experiences</h2>
                <p>lorem ipsum</p>
                <Tab.Container id="experience-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                experience.map((experience, index) => {
                                    return(
                                       <ExpCard
                                       key={index}
                                       {...experience}
                                       />
                                    )
                                })
                            }
                        </Row>    
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-Img-right" src={colorSharp2} alt="" />
    </section>
    )
}