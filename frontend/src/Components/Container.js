import React, { useState, useContext, useEffect } from "react";
import { Distribution } from "../App";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button } from "react-bootstrap";
import '../ComponentCSS/Container.css'

export const Container = (props) => {


    return (
        <div id="container" className="rounded-4 border-dark border border-4">
            {props.children}
        </div>
    )
}