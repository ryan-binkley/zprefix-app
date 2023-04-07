import React, { useState, useContext, useEffect } from "react";
import { Distribution } from "../App";
import { useNavigate } from "react-router-dom";
import { Col, Row, Button } from "react-bootstrap";
import { Container } from "./Container.js";
import '../ComponentCSS/PersonalInv.css';

export const PersonalInv = () => {
    const [myItems, setMyItems] = useState([]);
    const { userData } = useContext(Distribution);

    const navigate = useNavigate();


    useEffect(() => {
        fetch(`http://localhost:4000/items/user/${userData[0].id}`)
            .then(response => response.json())
            .then(data => {
                setMyItems(data)
            })
    }, [])

    return (
        <div className="maincontainerpersonal">
            <Button className="additembutton" variant="secondary" onClick={() => navigate('/additem')}>Add Item</Button>
            <Row>
                {myItems.map((item) => {
                    return (
                        <Col md={{ span: 3 }} className="individualcontainers">
                            <Container>
                                <div className="itemname"> Item: {item.item_name}</div>
                                <div className="itemquantity">Quantity: {item.quantity}</div>
                                <div className="itemowner">Item Owner: {item.first_name} {item.last_name}</div>
                                <div className="visitoritemdescription">Description: {item.description.length < 100 ? item.description : item.description.slice(0, 99) + "..."}</div>
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