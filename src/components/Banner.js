import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import profile from "../assets/img/profile.jpg";
import { useEffect, useState } from "react";
import "animate.css";
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router} from "react-router-dom";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Computer Engineer", "Software Developer", "AI and Data Science Enthusiast"]
    const [text, setText] = useState("");

    const TYPING_SPEED = 75;
    const DELETING_SPEED = 25;
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
        <Router>
            <section className="banner" id="home">
                <Container> 
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                            { ({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <span className="tagline">Welcome To My Portfolio</span>
                                    <h1>{`Hi, I'm a `}<span className="wrap">{text}</span></h1>
                                    <p>As a software engineer, I have full-stack development experience. On the backend, I have developed robust and scalable applications using Java and the Spring Framework; on the frontend, I have built user-focused solutions with Ember.js. I have worked on RESTful and SOAP APIs as well as microservice architectures, and possess strong knowledge in database design and querying (PostgreSQL, DBeaver). 
                                        
                                        I am proficient with version control systems (Git) and have basic Docker knowledge, allowing me to adapt to modern development workflows. I contribute to quality assurance processes by writing unit and integration tests, and I take an active role in software documentation and release management.I also have experience in deployments using Jenkins and CI/CD pipelines, and have participated in Agile methodology-based sprint cycles. 
                                        
                                        Thanks to my analytical thinking skills and collaborative mindset, I play an active role in production-level development processes, where I continue to pursue my work. </p>
                                    <HashLink to="#connect">
                                        <button onClick={()=>console.log("connect")}>Let's Connect<ArrowRightCircle size={25}/></button>
                                    </HashLink>
                                </div>}
                            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={profile} alt="profile img" className="profile-img"></img>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Router>
    );
}