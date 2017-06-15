'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('runners').del()

    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('runners').insert({
          id: 1,
          first_name: 'Jenny',
          last_name: 'Zinko'
        }),
      ]);
    });
};
