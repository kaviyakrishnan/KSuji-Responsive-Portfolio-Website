import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {

    const formIniDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        message: ''
    }
    
        const [formDetails,setformDetails] = useState(formIniDetails);
        const [buttonText, setButtonText] = useState('Send');
        const [status, setStatus] = useState({});

        const onFormUpdate = (category, value) => {
            setformDetails({
                ...formDetails,
                [category]: value
            })
        }

        const handleSubmit = async (e) =>
        {
            e.preventDefault();
            setButtonText('Sending..');
            let response = await fetch("http://localhost:5000/contact",{
                    method:"POST",
                    headers: {
                        "Content-Type": "Application/json;charset=utf-8",
                    },
                    body: JSON.stringify(formDetails),
            });
            setButtonText("Send");
            let result = response.json();
            setformDetails(formIniDetails);
            if (result.code === 200){
                setStatus({
                    success: true, message: 'Message sent successfully'
                });
            }else{
                setStatus({
                    success: false, message: 'Something went wrong, please try again later.'
                });
            }
            
        };

        return(
            <section className="contact" id="connect">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <img src={contactImg} alt="Contact Us" />
                        </Col>
                        <Col md={6}>
                            <h2>Get In Touch</h2>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                <div class="row">
                                    <Col sm={6} className="px-1">
                                        <input id="fname" type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                    </Col>
                                    <Col sm={6} className="px-2">
                                        <input id="lname" type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                    </Col>
                                    </div>
                                    <div class="row">
                                    <Col sm={6} className="px-3">
                                        <input id="form-email" type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                    </Col>
                                    <Col sm={6} className="px-4">
                                        <input id="tel" type="tel" value={formDetails.phoneNo} placeholder="Phone Number" onChange={(e) => onFormUpdate('phoneNo', e.target.value)} />
                                    </Col>
                                    </div>
                                    <div class="row">
                                    <Col>
                                    <textarea className="px-5" row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button class="send"  type="submit"><span>{buttonText}</span></button>
                                    </Col>
                                    </div>
                                    
                                    {
                                        status.message &&
                                        <Col>
                                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                        </Col>
                                    }
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    
} 