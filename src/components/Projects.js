import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projectBackground from "../assets/img/projectBackground.svg";
import "animate.css";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const project1 = [
        {
            title: "Android App (Jetpack Compose)",
            description: "Modern mobile interface built with Kotlin and Jetpack Compose. Includes movie search, TopAppBar, paginated categories, and responsive design.",
            imgUrl: projectBackground
        },{
            title: "Spring Boot Backend API",
            description: "Handles all data operations including movie details, user favorites, and TMDb integration. Secured with Firebase token validation.",
            imgUrl: projectBackground
        },{
            title: "Firebase Authentication",
            description: "Google Sign-In integration via Firebase. Authenticated users can rate, favorite, and get personalized recommendations.",
            imgUrl: projectBackground
        },{
            title: "TMDb Integration",
            description: "Fetches up-to-date movie metadata like posters, titles, genres, and overviews. Used in both recommendations and search features.",
            imgUrl: projectBackground
        },{
            title: "Recommendation Engine (Graph ML)",
            description: "Neo4j GDS-powered movie recommendations using Node2Vec, FastRP, and link prediction models. Hybrid logic combines graph rank and similarity.",
            imgUrl: projectBackground
        },{
            title: "Collaborative Filtering",
            description: "User-based collaborative filtering service generates home screen suggestions using Neo4j relationships and past ratings.",
            imgUrl: projectBackground
        }
    ];

    const project2 = [
        {
            title: "Java Swing UI",
            description: "Clean and intuitive desktop interface for customer/product management. Implements classic forms and dialogs.",
            imgUrl: projectBackground
        },{
            title: "Hibernate ORM & Mysql",
            description: "All application data is persisted with Hibernate ORM, ensuring seamless object-relational mapping. MySQL is used as the backend database for robust data storage.",
            imgUrl: projectBackground
        },{
            title: "Customer & Product Management",
            description: "Supports full CRUD operations: add, edit, delete customers and products. Users can view detailed lists and interact with data via intuitive controls.",
            imgUrl: projectBackground
        },{
            title: "Cart System & Login Flow",
            description: "Basic cart and basket management functionality included. Users can log in and manage their own session.",
            imgUrl: projectBackground
        },{
            title: "MVC Architectural Pattern",
            description: "Implements the Model-View-Controller (MVC) design pattern for better code organization and maintainability.",
            imgUrl: projectBackground
        }
    ];
    const project3 = [
        {
            title: "For more project check my github account",
            description: "https://github.com/Onurege00",
            imgUrl: projectBackground
        }
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                        { ({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                <h2>Projects</h2>
                                <p>Real-world projects combining software engineering with data science and intelligent systems.</p>
                            </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Movie Recommendation App</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Customer Management System</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">For More</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            project1.map((project, index) =>{
                                                return(
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            project2.map((project, index) =>{
                                                return(
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            project3.map((project, index) =>{
                                                return(
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    );
}