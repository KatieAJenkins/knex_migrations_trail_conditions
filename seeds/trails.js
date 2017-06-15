'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trails').del() //what table to insert and delete from

    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('trails').insert(
        {id: 1, //must include 
          name: 'Mount Sanitas',
          length: 3.4,
          elevation_gain: 1700
      }),

      ]);
    });
};
