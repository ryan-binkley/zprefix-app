import { knexToDB } from "./dbConnection.js";


// ***** Users table *****

const getUsers = () => {
    return knexToDB
        .select('*')
        .from('users');
}

const getUserByID = (inputID) => {
    return knexToDB
        .select('*')
        .from('users')
        .where({user_id:inputID});
}

// ***** Movies table *****

const getMovies = () => {
    return knexToDB
        .select('*')
        .from('movies');
}

const getMovieByID = (inputID) => {
    return knexToDB
        .select('*')
        .from('movies')
        .where({movie_id:inputID});
}


export { getUsers, getUserByID, getMovies, getMovieByID };