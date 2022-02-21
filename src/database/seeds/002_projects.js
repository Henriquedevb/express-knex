exports.seed = function (knex) {
  return knex("projects")
    .del()
    .then(() => {
      return knex("projects").insert([{ user_id: 6, title: "meu projeto 1" }]);
    });
};
