
import knexfile from "../knexfile.js";
import knex from "knex";

const environment = process.env.NODE_ENV || 'development';
const config = knexfile[environment];

export const knexToDB = knex(config);