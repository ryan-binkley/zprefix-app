import express from "express";
import cors from "cors";

// Methods from Controller.js
import { getUsers, getUserByID, newUser, getItems } from "./db/Controller.js";


const app = express();
const PORT = 4000;


app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. - Console Message`);
})

app.get("/", (req, res) => {
    res.send("Welcome to the backend home page!");
});


// ***** Users table *****

app.get("/users", (req, res) => {
    getUsers()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        })
});

app.get("/users/:id", (req, res) => {
    getUserByID(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        })
});

app.post("/signup", (req, res) => {
    newUser(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        })
})


// ***** Users table *****

app.get("/items", (req, res) => {
    getItems()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        })
});