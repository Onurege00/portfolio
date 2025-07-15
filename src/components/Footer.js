import { Col, Container, Row } from "react-bootstrap";
import name from "../assets/img/name.svg";
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import mail from '../assets/img/mail.svg';

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6} href="#home">
                        <img src={name} alt="Name" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon mt-4">
                            <a href="https://www.linkedin.com/in/onur-ege-19230626b/"><img src={linkedin} alt="LinkedIn" /></a>
                            <a href="https://github.com/Onurege00"><img src={github} alt="Github" /></a>
                            <a href="mailto:egeonur2121@gmail.com"><img src={mail} alt="Gmail" /></a>
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