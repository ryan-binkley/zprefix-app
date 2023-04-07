import React, { useContext } from "react";
import { Distribution } from "../App";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button } from "react-bootstrap";
import { Container } from './Container';
import '../ComponentCSS/AddItem.css';


export const AddItem = () => {
    const { userData, itemName, setItemName, itemQuantity, setItemQuantity, itemDescription, setItemDescription } = useContext(Distribution);
    const navigate = useNavigate();



    const handleChangeItemName = (e) => {
        setItemName(e.target.value);
    };
    const handleChangeItemQuantity = (e) => {
        setItemQuantity(e.target.value);
    }
    const handleChangeItemDescription = (e) => {
        setItemDescription(e.target.value);
    };

    const additem = () => {
        const newItem = {
            "user_id": userData[0].id, 
            "item_name": itemName, 
            "description": itemDescription, 
            "quantity": itemQuantity
        }

        fetch('http://localhost:4000/additem', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(newItem)
        })
            .then((response) => response.json())
            .then((data) => {
                alert("New item created! You will be redirected to your inventory now.");
                navigate('/personalinventory');
                console.log("Success:", data);
            })
            .catch((error) => {
                alert("Could not create item.");
                console.error("Error:", error);
            });
    }


    return (
        <div className="itemmaincontainer">
            <Row>
                <Col>
                    <Container id="itembox">
                        <div className="itemname"> Item:
                            <input placeholder="Input item name" onChange={handleChangeItemName}>

                            </input>
                        </div>

                        <div className="itemquantity">Quantity:
                            <input placeholder="Input quantity" type="number" onChange={handleChangeItemQuantity}>

                            </input>
                        </div>

                        <div className="itemdescription">Description:

                        </div>
                        <textarea placeholder="Input description" id="inputdescription" onChange={handleChangeItemDescription}>

                        </textarea>
                        <Button variant="dark" id="addbutton" onClick={additem}>Add</Button>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}