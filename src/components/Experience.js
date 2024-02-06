import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ExpCard } from "./ExpCard";
import expImgOne from "../assets/img/expImg1.png";
import expImgTwo from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Experience = () => {
    // Array containing experience data with title, description, and image URL
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
 // Render JSX representing the experience section of the portfolio
    return(
    <section className="experience" id="experience">
        <Container>
            <Row>
                <Col>
                <h2>Relevant Experiences</h2>
                <p>Co-Op , Personal Projects, and Volunteer Work.</p>
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
                                    // Iterate over each experience item in the array and return an ExpCard component
                                    return(
                                         // Pass necessary props to ExpCard component and assign a unique key to each iteration
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