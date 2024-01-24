import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import expImgOne from "../assets/img/expImg1.jpg";
import expImg2 from "../assets/img/expImg2.jpg";

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
        imgUrl: expImg2,
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
                <Nav variant="pills" defaultActiveKey="/home">
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
                                        <p>{experience.title}</p>
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
    </section>
    )
}