import React, { useState, useContext, useEffect } from "react";
import { Distribution } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button } from "react-bootstrap";
import { Container } from './Container';
import '../ComponentCSS/Profile.css';


export const Profile = () => {
    const [profileEditMode, setProfileEditMode] = useState(false);
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const [firstName, setFirstName] = useState([]);
    const [lastName, setLastName] = useState([]);
    const { userData, setUserData } = useContext(Distribution);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`http://localhost:4000/users/${userData[0].id}`)
            .then(response => response.json())
            .then(data => {
                setUserData(data);
            })
    }, [])

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

    const saveInfo = () => {

        const modifiedUser = {
            "first_name": firstName,
            "last_name": lastName,
            "username": username,
            "password": password
        }

        fetch(`http://localhost:4000/users/${userData[0].id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(modifiedUser)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(userData)
                alert("User updated! You will be redirected to your inventory now.");
                navigate('/personalinventory');
                console.log("Success:", data);
            })
            .catch((error) => {
                alert("Could not update user.");
                console.error("Error:", error);
            })


        editToggle();
    }

    const editToggle = () => {
        if (profileEditMode === false)
            setProfileEditMode(true);
        if (profileEditMode === true)
            setProfileEditMode(false);
    }

    return (
        <div className="itemmaincontainer">
            <Row>
                <Col>
                    {!profileEditMode ?
                        <Container id="itembox">
                            <div className="usertext">First Name: {userData[0].first_name}</div>
                            <div className="usertext">Last Name: {userData[0].last_name}</div>
                            <div className="usertext">Username: {userData[0].username}</div>
                            <div className="usertext">Password: {userData[0].password}</div>
                            <Button variant="dark" id="seteditmodebutton" onClick={ editToggle }>Edit</Button>
                        </Container>
                        :
                        <Container id="itembox">
                            <div className="usertext">First Name: <input placeholder={userData[0].first_name} onChange={handleChangeFirstName} /></div>
                            <div className="usertext">Last Name: <input placeholder={userData[0].last_name} onChange={handleChangeLastName} /></div>
                            <div className="usertext">Username: <input placeholder={userData[0].username} onChange={handleChangeUsername} /></div>
                            <div className="usertext">Password: <input placeholder={userData[0].password} onChange={handleChangePassword} /></div>
                            <Button variant="dark" id="seteditmodebutton" onClick={ saveInfo }>Save</Button>
                        </Container>
                    }
                </Col>
            </Row>
        </div>
    )
}