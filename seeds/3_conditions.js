'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('conditions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('conditions').insert({
          id: 1,
          trail_id: 1,
          runner_id: 2,
          condition: 'This trail is so muddy. So, so muddy.'
        }),

        knex('conditions').insert({
          id: 2,
          trail_id: 2,
          runner_id: 3,
          condition: 'BEARS EVERYWHERE!'
        }),

        knex('conditions').insert({
          id: 3,
          trail_id: 3,
          runner_id: 1,
          condition: 'Trail is in suhweet condition, dudes.'
        })

      ]);
    });
};
