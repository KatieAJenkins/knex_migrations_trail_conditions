
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('conditions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('conditions').insert({
          id: 1,
          trail_id: 1,
          runner_id: 1,
          description: 'baby rattlesnakes!'
      ]);
    }
    });
};
