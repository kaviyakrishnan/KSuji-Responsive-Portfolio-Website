import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ExpCard } from "./ExpCard";
import expImgOne from "../assets/img/expImg1.png";
import expImgTwo from "../assets/img/expImg2.png";
import expImgThree from "../assets/img/expImg3.png";


export const Experience = () => {
    // Array containing experience data with title, description, and image URL
   const experience = [
    {
        title: "Student Software Engineer",
        description: "Elentra Corp 2022-2023 ",
        imgUrl: expImgOne,
    },
    {
        title: "Volunteer Programmer",
        description: "Charity Project-Canada Revenue Agency May 2023 - Aug 2023",
        imgUrl: expImgThree,
    },
    {
        title: "Restaurant Supervisor",
        description: "Osmow's Shawarma",
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
                    <Nav.Link eventKey="first">Work Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">Personal Projects</Nav.Link>
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
                                         <Col>
                                       <ExpCard
                                       key={index}
                                       {...experience}
                                       />
                                       </Col>
                                    )
                                })
                            }
                        </Row>    
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <h4>Responsive Web Portfolio:</h4> 
                        <p>JavaScript(ReactJs), HTML, CSS, Animate.</p>
                        <p> View code in <a href="https://github.com/kaviyakrishnan/KSuji-Responsive-Portfolio-Website">Github</a></p>
                        </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
            
        </Container>
    </section>
    )
}