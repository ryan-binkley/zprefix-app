import React, { useState, useContext, useEffect } from "react";
import { Distribution } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Button } from "react-bootstrap";
import { Container } from './Container';
import '../ComponentCSS/ItemDetails.css';



export const ItemDetails = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const [editMode, setEditMode] = useState(false);
    const { loggedin, itemName, setItemName, itemQuantity, setItemQuantity, itemDescription, setItemDescription } = useContext(Distribution);

    useEffect(() => {
        fetch(`http://localhost:4000/items/${id}`)
            .then(response => response.json())
            .then(data => {
                setItem(data)
            })
    }, [])


    const handleChangeItemName = (e) => {
        setItemName(e.target.value);
    };
    const handleChangeItemQuantity = (e) => {
        setItemQuantity(e.target.value);
    }
    const handleChangeItemDescription = (e) => {
        setItemDescription(e.target.value);
    };


    const editModeFunction = () => {
        if (editMode === false)
            setEditMode(true);
        else if (editMode === true)
            setEditMode(false);
    }

    const saveItemFunction = () => {
        
        const modifiedItem = {
            "user_id": item[0].user_id, 
            "item_name": itemName, 
            "description": itemDescription, 
            "quantity": itemQuantity
        }

        fetch(`http://localhost:4000/item/${item[0].id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(modifiedItem)
        })
            .then((response) => response.json())
            .then((data) => {
                alert("Item updated! You will be redirected to your inventory now.");
                navigate('/personalinventory');
                console.log("Success:", data);
            })
            .catch((error) => {
                alert("Could not update item.");
                console.error("Error:", error);
            })

        if (editMode === false)
            setEditMode(true);
        else if (editMode === true)
            setEditMode(false);
    }

    const deleteItem = () => {
        fetch(`http://localhost:4000/item/${item[0].id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => {
                alert("Item deleted! You will be redirected to your inventory now.");
                navigate('/personalinventory');
                console.log("Success:", data);
            })
            .catch((error) => {
                alert("Could not create item.");
                console.error("Error:", error);
            })
    }

    return (
        <div className="itemmaincontainer">
            {item.map(item => {
                return (
                    <Row>
                        <Col>
                            {!editMode ?
                                <Container id="itembox">
                                    <div className="itemname"> Item: {item.item_name}</div>
                                    <div className="itemquantity">Quantity: {item.quantity}</div>
                                    <div className="itemowner">Item Owner: {item.first_name} {item.last_name}</div>
                                    <div className="itemdescriptionitemdetails">Description: {item.description}</div>
                                </Container>
                                :
                                <Container id="itembox">
                                    
                                    <div className="itemname"> Item:
                                        <input placeholder={item.item_name} onChange={handleChangeItemName}>

                                        </input>
                                    </div>

                                    <div className="itemquantity">Quantity:
                                        <input placeholder={item.quantity} type="number" onChange={handleChangeItemQuantity}>

                                        </input>
                                    </div>

                                    <div className="itemdescription">Description:

                                    </div>
                                    <textarea placeholder={item.description} id="inputdescription" onChange={handleChangeItemDescription}>

                                    </textarea>
                                </Container>
                            }
                            {loggedin && !editMode ?
                                <>
                                    <Button variant="dark" id="specificeditbutton" onClick={editModeFunction}>Edit</Button>
                                    <Button variant="dark" id="specificdeletebutton" onClick={deleteItem}>Delete</Button>
                                </>
                                :
                                loggedin && editMode ?
                                    <>
                                        <Button variant="dark" id="saveitembutton" onClick={saveItemFunction}>Save Item</Button>
                                    </>
                                    :
                                    <>
                                    </>
                            }
                        </Col>
                    </Row>
                )
            })}
        </div>
    )
}