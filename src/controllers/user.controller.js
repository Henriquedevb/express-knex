const knex = require("../database");

module.exports = {
  async index(req, res) {
    const results = await knex("users");
    return res.json(results);
  },
  async create(req, res, next) {
    const { username } = req.body;

    try {
      await knex("users").insert({ username });

      res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    const { username } = req.body;
    const { id } = req.params;

    try {
      await knex("users").update({ username }).where({ id });

      res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    const { id } = req.params;

    try {
      await knex("users").where({ id }).del();

      res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
};
