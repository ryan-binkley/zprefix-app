import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
// import './Signup.css';

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
        const newUser = { "username": username, "first name": firstName, "last name": lastName, "password": password }

        fetch('http://localhost:4000/signup', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(newUser)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message === 'The data you are looking for could not be found. Please try again.') {
                    alert('Unable to create new user. Please make sure you have input valid entries and try again.')
                } else if (data.message === 'New user created.') {
                    alert("New user created, you're being navigated to the login page.", navigate('/login'))
                }
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }



    return (
            <div id='headerDisplacer'>
                <Container>
                <Row><div>Please enter the information below</div></Row>
                <Row>
                    <Row>
                        <Col>First name: </Col>
                        <Col><input type='field' placeholder="First name" onChange={handleChangeFirstName} /></Col>
                    </Row>   
                    <Row>
                        <Col>Last name: </Col>
                        <Col><input type='field' placeholder="Last name" onChange={handleChangeLastName} /></Col>
                    </Row> 
                    <Row>
                        <Col>Username: </Col>
                        <Col><input type='username' placeholder="Username" onChange={handleChangeUsername} /></Col>
                    </Row> 
                    <Row>
                        <Col>Password: </Col>
                        <Col><input type='password' placeholder="Password" onChange={handleChangePassword} /></Col>
                    </Row>
                </Row>
                <button className="signupButton" onClick={newUser}>Sign Up</button> <br />
                </Container>
            </div>
    )
}
