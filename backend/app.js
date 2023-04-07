import express from "express";
import cors from "cors";

// Methods from Controller.js
import { getUsers, getUserByID, patchUserByID, newUser, getItems, getItemByID, getItemsByUserID, addItem, deleteItem, updateItem } from "./db/Controller.js";


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

app.patch("/users/:id", (req, res) => {
    patchUserByID(req.params.id, req.body)
        .then(data => {
            console.log("User updated!");
            console.log(req.body);
            res.status(200).json("Request successful");
        })
        .catch(err => {
            res.send(err);
        })
})


// ***** Items table *****

app.get("/items/", (req, res) => {
    getItems()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        })
});

app.get("/items/:id", (req, res) => {
    getItemByID(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        })
});

app.get("/items/user/:id", (req, res) => {
    getItemsByUserID(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        })
});

app.post("/additem", (req, res) => {
    addItem(req.body)
        .then(data => {
            console.log("Item added!");
            res.status(200).json("Request successful");
        })
        .catch(err => {
            res.send(err);
        })
});

app.delete("/item/:id", (req, res) => {
    deleteItem(req.params.id)
    .then(data => {
        console.log("Item deleted!");
        res.status(200).json("Request successful");
    })
    .catch(err => {
        res.send(err);
    })
})

app.patch("/item/:id", (req, res) => {
    updateItem(req.params.id, req.body)
        .then(data => {
            console.log("Item updated!");
            res.status(200).json("Request successful");
        })
        .catch(err => {
            res.send(err);
        })
})