import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <TrackVisibility>
                            { ({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>
                                        Skills
                                    </h2>
                                    <p>I specialize in developing web applications, mobile experiences, and applying machine learning to solve real-world problems. Good at Java, Ember.js, Kotlin, Python, and React. I build efficient APIs with Spring Boot and craft user-friendly Android apps using Jetpack Compose. My skills also includes working with Neo4j for graph data science, developing recommendation systems. I strive to create performant, maintainable, and impactful software.</p>
                                </div>}
                            </TrackVisibility>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image"/>
                                    <h5>Full Stack Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>Mobile Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>Application Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image"/>
                                    <h5>ML & Data Science</h5>
                                </div>
                            </Carousel> 
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    );
}