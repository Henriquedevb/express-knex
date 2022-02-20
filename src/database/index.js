import knexfile from "../../knexfile";
import knex from "knex";

module.exports = knex(knexfile.development);
