import { knexToDB } from "./dbConnection.js";


// ***** Users table *****

const getUsers = () => {
    return knexToDB
        .select('*')
        .from('users')
        .orderBy('id');
}

const getUserByID = (inputID) => {
    return knexToDB
        .select('*')
        .from('users')
        .where({user_id:inputID});
}

const patchUserByID = (inputID, updatedUser) => {
    return knexToDB('users')
        .select('*')
        .where({user_id:inputID})
        .update(updatedUser);
}

const newUser = (newUser) => {
    return knexToDB('users')
        .insert(newUser)
}


// ***** Items table *****

const getItems = () => {
    return knexToDB
        .select('*')
        .from('items')
        .orderBy('id');
}


export { getUsers, getUserByID, newUser, getItems };