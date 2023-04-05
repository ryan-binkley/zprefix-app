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

// ***** Items table *****


export { getUsers, getUserByID };