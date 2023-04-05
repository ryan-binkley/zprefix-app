import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Distribution } from '../App';
// import './Header.css';

export const Header = () => {

    const navigate = useNavigate();
    const { loggedin, setLoggedin, setUserData } = useContext(Distribution)

    return (
        <>
            <div id='wrapper'>
                <div id='user buttons'>
                    {loggedin ?
                        <>
                            <button className="headerButton2" onClick={() => {
                                setLoggedin(false)
                                navigate("/")
                                setUserData([]);
                            }}>Sign Out</button>
                        </>
                        :
                        <>
                            <button className="headerButton1" onClick={() => navigate("/login")}>Login</button>
                            <button className="headerButton1" onClick={() => navigate("/signup")}>Sign Up</button>
                        </>
                    }
                </div>
            </div>
        </>
    )
}