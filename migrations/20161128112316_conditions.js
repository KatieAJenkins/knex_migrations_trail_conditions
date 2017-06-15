'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('conditions', function(table){
    table.increments();
    //trail id
    table.integer('trail_id').notNullable().references('id').inTable('trails').onDelete('cascade'); //foreign key
    //runner id
    table.integer('runner_id').notNullable().references('id').inTable('runners').onDelete('cascade'); //foreign key
    //description of trail conditions
    table.text('description');
    //creation date
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {

};
