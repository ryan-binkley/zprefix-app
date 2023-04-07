import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import '../ComponentCSS/Signup.css';

export const Signup = () => {
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const [firstName, setFirstName] = useState([]);
    const [lastName, setLastName] = useState([]);
    const navigate = useNavigate();


    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const newUser = () => {
        const newUser = {
            "username": username,
            "password": password,
            "first_name": firstName,
            "last_name": lastName
        }

        fetch('http://localhost:4000/signup', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(newUser)
        })
            .then((response) => response.json())
            .then((data) => {
                alert("New user created! You will be redirected to the login page now.");
                navigate('/login');
                console.log("Success:", data);
            })
            .catch((error) => {
                alert("Could not create user.");
                console.error("Error:", error);
            });
    }



    return (
        <div id='headerDisplacer' className="square rounded-4 border-dark border border-4">
            <Container>
                <Row><div className="signupstuffheader">SIGNUP</div></Row>
                <Row>
                    <Row style={{ paddingLeft: 80, paddingRight: 80 }}>
                        <Col className="signupstuff">First name: </Col>
                        <Col className="signupstuff"><input type='field' placeholder="First name" onChange={handleChangeFirstName} /></Col>
                    </Row>
                    <Row style={{ paddingLeft: 80, paddingRight: 80 }}>
                        <Col className="signupstuff">Last name: </Col>
                        <Col className="signupstuff"><input type='field' placeholder="Last name" onChange={handleChangeLastName} /></Col>
                    </Row>
                    <Row style={{ paddingLeft: 80, paddingRight: 80 }}>
                        <Col className="signupstuff">Username: </Col>
                        <Col className="signupstuff"><input type='username' placeholder="Username" onChange={handleChangeUsername} /></Col>
                    </Row>
                    <Row style={{ paddingLeft: 80, paddingRight: 80 }}>
                        <Col className="signupstuff">Password: </Col>
                        <Col className="signupstuff"><input type='password' placeholder="Password" onChange={handleChangePassword} /></Col>
                    </Row>
                </Row>
                <Button className="btn btn-light signuppagesignupbutton" onClick={newUser}>Sign Up</Button> <br />
            </Container>
        </div>
    )
}
