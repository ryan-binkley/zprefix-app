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
        .from('users')
        .where('id', '=', inputID);
}

const patchUserByID = (inputID, updatedUser) => {
    return knexToDB('users')
        .where('id', '=', inputID)
        .update(updatedUser);
}

const newUser = (newUser) => {
    return knexToDB('users')
        .insert(newUser)
}


// ***** Items table *****

const getItems = () => {
    return knexToDB
        .select('first_name', 'last_name', 'items.id', 'item_name', 'description', 'quantity')
        .from('users')
        .join('items', 'users.id', '=', 'items.user_id')
        .orderBy('items.id');
}

const getItemByID = (inputID) => {
    return knexToDB
        .select('first_name', 'last_name', 'items.user_id', 'items.id', 'item_name', 'description', 'quantity')
        .from('users')
        .join('items', 'users.id', '=', 'items.user_id')
        .where('items.id', '=', inputID)
        .orderBy('items.id');
}

const getItemsByUserID = (inputUserID) => {
    return knexToDB
        .select('first_name', 'last_name', 'items.id', 'item_name', 'description', 'quantity')
        .from('users')
        .join('items', 'users.id', '=', 'items.user_id')
        .where('items.user_id', '=', inputUserID)
        .orderBy('items.id');
}

const addItem = (inputItem) => {
    return knexToDB('items')
        .insert(inputItem);
}

const deleteItem = (inputID) => {
    return knexToDB('items')
        .where('id', '=', inputID)
        .del();
}

const updateItem = (inputID, inputObject) => {
    return knexToDB('items')
        .where('items.id', '=', inputID)
        .update(inputObject);
}

export { getUsers, getUserByID, patchUserByID, newUser, getItems, getItemByID, getItemsByUserID, addItem, deleteItem, updateItem };