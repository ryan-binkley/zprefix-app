import express from "express";
import cors from "cors";

// Methods from Controller.js
import {} from "./db/Controller.js";


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

  // ***** Items table *****

  app.get("/movies", (req, res) => {
    getMovies()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        })
  });

  app.get("/movies/:id", (req, res) => {
    getMovieByID(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        })
  });