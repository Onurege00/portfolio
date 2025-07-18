import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import contactImg from "../assets/img/contactBackground2.png";

export const Contact = () => {

    const initialFormDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    }

    const [formDetails, setFormDetails] = useState(initialFormDetails);
    const [buttonText, setButtonText] = useState("send");
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setButtonText("Sending...");
        try {
            const response = await fetch("https://mail.onurege.tech/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"  
              },
              body: JSON.stringify(formDetails)
            });

            setButtonText("Send");
            let result = await response.json();
            setFormDetails(initialFormDetails);

            if(result.code === 200){
                setStatus({success: true, message:"Messsage sent succesfully."});
            }else{
                setStatus({success: false, message:"Something went wrong, please try again later."});
            }

        } catch (err) {
            console.error("Error while sending:", err);
            setButtonText("Send");
            setStatus({ success: false, message: "Request failed. Check your internet or try again later." });
        }
    }

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="contact us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate("email", e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate("phone", e.target.value)}/>
                                </Col>
                                <Col>
                                    <textarea row={6} value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)}/>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.message === "false" ? "danger":"success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}