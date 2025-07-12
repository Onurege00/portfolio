import { Col, Container, Row } from "react-bootstrap";
import name from "../assets/img/name.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={name} alt="Name" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon mt-4">
                            <a href="https://www.linkedin.com/in/onur-ege-19230626b/"><img src={navIcon1} alt="LinkedIn" /></a>
                            <a href="https://github.com/Onurege00"><img src={navIcon2} alt="Github" /></a>
                            <a href="mailto:egeonur2121@gmail.com"><img src={navIcon3} alt="Gmail" /></a>
                        </div>
                        <p>
                            CopyRight 2025. All Right Reserved
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}