import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Distribution } from '../App';
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ComponentCSS/Footer.css";


export const Footer = () => {


    return (
        <div className="footer border-top border-dark border-5">
            <p id="title">Inventory Tracker</p>
            <p id="copyright">©2023</p>
        </div>
    )
}