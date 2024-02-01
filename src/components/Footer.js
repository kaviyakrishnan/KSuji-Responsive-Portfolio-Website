import { Col, Container, Row} from "react-bootstrap";
import { CustomForm } from "./CustomForm";
import logo from "../assets/img/logo.svg";
import navImgOne from '../assets/img/navImgOne.svg';
import navImgTwo from '../assets/img/navImgTwo.svg';
import navImgThree from '../assets/img/navImgThree.svg';

export const Footer = () => {
    return (
        <footer classname="footer">
            <Container>
                <Row classname="align-item-center">
                    <CustomForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href="https://www.linkedin.com/in/kaviya-krishnan-suji/"><img src={navImgOne} alt="" /></a>
                        <a href="https://www.facebook.com/kavya.krishnan.5492216" ><img src={navImgTwo} alt="" /></a>
                        <a href="https://www.instagram.com/kaviya_krishnan_suji/" ><img src={navImgThree} alt="" /></a>

                        </div>
                        <p>@CopyRight 2022. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}