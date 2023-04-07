import React, { useState, useContext, useEffect } from "react";
import { Distribution } from "../App";
import { useNavigate } from "react-router-dom";
import { Col, Row, Button } from "react-bootstrap";
import { Container } from "./Container.js";
import '../ComponentCSS/VisitorInventory.css';
import { ItemDetails } from "./ItemDetails";

export const VisitorInventory = () => {
    const { allItems, setAllItems } = useContext(Distribution);

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:4000/items")
            .then(response => response.json())
            .then(data => {
                setAllItems(data)
            })
    }, [allItems])

    return (
        <div className="maincontainer">
            <Row>
                {allItems.map((item) => {
                    return (
                        <Col md={{ span: 3 }} className="individualcontainers">
                            <Container>
                                <div className="visitoritemname"> Item: {item.item_name}</div>
                                <div className="visitoritemquantity">Quantity: {item.quantity}</div>
                                <div className="visitoritemowner">Item Owner: {item.first_name} {item.last_name}</div>
                                <div className="visitoritemdescription">Description: {item.description.length < 100 ? item.description : item.description.slice(0, 99) + "..." }</div>
                                <Button className="viewitembutton" onClick={() => navigate(`/item/${item.id}`)} variant="dark">View</Button>
                            </Container>
                        </Col>
                    )
                }
                )}
            </Row>
        </div>
    )
}