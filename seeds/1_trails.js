'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trails').del()

    .then(function () {
      return Promise.all([
        // Inserts seed entries

        knex('trails').insert({
          id: 1,
          name: 'Devil\'s Backbone',
          length: 4.2,
          elevation_gain: 750
        }),

        knex('trails').insert({
          id: 2,
          name: 'Tower\s Road',
          length: 3.4,
          elevation_gain: 1500
        }),

        knex('trails').insert({
          id: 3,
          name: 'Mount Sanitas',
          length: 3.3,
          elevation_gain: 1700
        }),

        knex('trails').insert({
          id: 4,
          name: 'Horsetooth',
          length: 2.5,
          elevation_gain: 1550
        })

      ]);
    });
};
