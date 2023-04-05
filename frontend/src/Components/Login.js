import React, { useState, useContext, useEffect } from "react";
import { Distribution } from "../App";
import { useNavigate } from "react-router-dom";
// import './Login.css';
import { Col, Row } from "react-bootstrap";

export const Login = () => {
    const navigate = useNavigate();
    const { setLoggedin, setUserData, allUsers, setAllUsers } = useContext(Distribution);
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8082/users")
            .then(response => response.json())
            .then(data => {
                setAllUsers(data)
            })
    }, [setAllUsers])


    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div id='headerDisplacer'>
            <Row>
                <Row>
                    <Col>Username: </Col>
                    <Col><input type='field' placeholder="Username" onChange={handleChangeUsername} /></Col>
                </Row>
                <Row>
                    <Col>Password: </Col>
                    <Col><input type='password' placeholder="Password" onChange={handleChangePassword} /></Col>
                </Row>
            </Row>

            <button className="loginButton" onClick={() => {
                var login_check = 'no';

                allUsers.map(user => {
                    if (username === user.username && password === user.password) {
                        setLoggedin(true)
                        navigate('/personalinventory')
                        setUserData([user])
                        login_check = 'yes'
                        return <></>; // For eslint warning
                    }
                    return <></>; // For eslint warning
                })

                if (login_check === 'no') {
                    alert('Username or Password is incorrect.')
                }
            }
            }>Login</button> <br />
        </div>
    )
}