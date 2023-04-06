import React, { useState, useContext, useEffect } from "react";
import { Distribution } from "../App";
//import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { Container } from "./Container.js";
import '../ComponentCSS/PersonalInv.css';

export const PersonalInv = () => {
    const { userData, allItems, setAllItems } = useContext(Distribution)

    useEffect(() => {
        fetch("http://localhost:4000/items")
          .then(response => response.json())
          .then(data => {
            setAllItems(data)
          })
      }, [])

    return (
        <div className="maincontainer">
            <Row>
                
                {allItems.map((num) => {
                    return (
                        <Col md={{ span: 2 }} className="individualcontainers">
                            <Container>
                                
                            </Container>
                        </Col>
                    )
                }
                )}
            </Row>
        </div>
    )
}