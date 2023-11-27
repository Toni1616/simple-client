import {Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <Container>
            <hr/>
            <Row className="mt-5 mb-5 justify-content-center">
                <Col md={{span: 3,offset:1}}>
                    <h4 className="text-decoration-underline">User</h4>
                    <NavLink className="text-dark fw-bold" to={"/create"}>Create a user</NavLink>
                </Col>
                <Col md={{span: 3,offset:1}}>
                    <h4 className="text-decoration-underline">Contact</h4>
                    <NavLink className="text-muted" to={"/contact"}>Contact</NavLink>
                </Col>
                <Col md={{span: 3,offset:1}}>
                    <h4 className="text-decoration-underline">About Us</h4>
                    <NavLink className="text-muted" to={"/about"}>About</NavLink>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer