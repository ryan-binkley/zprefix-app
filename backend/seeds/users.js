/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { first_name: "Bob", last_name: "Voban", username: "bobv", password: "bv"},
    { first_name: "Cindy", last_name: "LooHoo", username: "cindyl", password: "cl"},
    { first_name: "Vanessa", last_name: "Assenav", username: "vanessaa", password: "va"},
    { first_name: "Ryan", last_name: "Binkley", username: "ryanb", password: "rb"},
    { first_name: "Potato", last_name: "Tomato", username: "potatot", password: "pt"}
  ]);
};
