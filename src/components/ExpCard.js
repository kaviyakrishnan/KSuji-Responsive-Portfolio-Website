import { Col } from "react-bootstrap";

// Define a functional component named ExpCard and destructure props
export const ExpCard = ({title,description,imgURL}) => {

    return(
            <Col sm={6} md={4}>
                <div className="exp-Imgbx">
                    <img src={imgURL} alt=""/>
                    <div className="exp-txtbx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </Col>
    )
}