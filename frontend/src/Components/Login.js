import React, { useState, useContext, useEffect } from "react";
import { Distribution } from "../App";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button } from "react-bootstrap";
import '../ComponentCSS/Login.css';

export const Login = () => {
    const navigate = useNavigate();
    const { setLoggedin, setUserData, allUsers, setAllUsers } = useContext(Distribution);
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);


    useEffect(() => {
        fetch("http://localhost:4000/users")
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
        <div id='headerDisplacer' className="rounded-4 border-dark border border-4">
            <p className="logintext">LOGIN</p>

            <Row>
                <Row style={{ paddingLeft: 80, paddingRight: 80 }}>
                    <Col className="loginusername">Username: </Col>
                    <Col className="loginusername"><input type='field' placeholder="Username" onChange={handleChangeUsername} /></Col>
                </Row>
                <Row style={{ paddingLeft: 80, paddingRight: 80 }}>
                    <Col className="loginpassword">Password: </Col>
                    <Col className="loginpassword"><input type='password' placeholder="Password" onChange={handleChangePassword} /></Col>
                </Row>
            </Row>

            <Button className="btn btn-light loginbuttonforloginpage" onClick={() => {
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
            }>Login</Button> <br />
        </div>
    )
}