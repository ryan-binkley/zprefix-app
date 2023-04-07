import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Distribution } from '../App';
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ComponentCSS/Header.css";

export const Header = () => {

    const navigate = useNavigate();
    const { loggedin, setLoggedin, userData, setUserData } = useContext(Distribution)

    return (
        <div id='user_buttons'>
            <div>
                <Button className='fullinventorybutton btn btn-light' onClick={() => navigate("/")}>Full Inventory</Button>
                <div className='title'>Inventory Tracker</div>
            </div>
            {loggedin ?
                <>
                    <div>
                        <Button className='personalinventorybutton btn btn-light' onClick={() => navigate("/personalinventory")}>My Inventory</Button>
                    </div>
                    <p id='currentusertext' className='currentloggedinuser'>User: {userData[0].first_name} {userData[0].last_name}</p>
                    <Button variant="light" id='profilebutton' onClick={() => navigate('/profile')}>Profile</Button>
                    <Button className="btn btn-light signoutbutton" onClick={() => {
                        setLoggedin(false)
                        navigate("/")
                        setUserData([]);
                    }}>Sign Out</Button>
                </>
                :
                <>
                    <div id='currentusertext'>User: Visitor</div>
                    <div className="loginandsignupbuttons">
                        <Button className="btn btn-light loginbutton" onClick={() => navigate("/login")}>Login</Button>
                        <Button className="signupbutton btn btn-light" onClick={() => navigate("/signup")}>Sign Up</Button>
                    </div>
                </>
            }
        </div>
    )
}