import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Computer Engineer", "Software Developer", "AI and Data Science Enthusiast"]
    const [text, setText] = useState("");

    const TYPING_SPEED = 100;
    const DELETING_SPEED = 50;
    const PAUSE_DURATION = 1000;

    useEffect(() => {
        const handleTyping = () => {
            const current = loopNum % toRotate.length;
            const fullText = toRotate[current];
            const updatedText = isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
            } else if (isDeleting && updatedText === "") {
                setIsDeleting(false);
                setLoopNum((prev) => prev + 1);
            }
        };

        const timeout = setTimeout(
        handleTyping,
        isDeleting ? DELETING_SPEED : TYPING_SPEED
        );

        return () => clearTimeout(timeout);
    }, [text, isDeleting, loopNum, toRotate]);

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome To My Portfolio</span>
                        <h1>{`Hi, I'm `}<span className="wrap">{text}</span></h1>
                        <p>Computer Engineer with hands-on experience in backend development, mobile application design, and graph-based machine learning. Skilled in building software solutions using Java, Kotlin, Python, and Spring Boot. Passionate about solving complex problems, learning cutting-edge technologies, and delivering clean, maintainable code. </p>
                        <button onClick={()=>console.log("connect")}>Let's Connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header img"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}