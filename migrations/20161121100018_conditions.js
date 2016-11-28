'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('conditions', function(table){
    table.increments();
    table.integer('trail_id').notNullable().references('id').inTable('trails').onDelete('CASCADE');
    table.integer('runner_id').notNullable().references('id').inTable('runners').onDelete('CASCADE');
    table.text('condition').notNullable();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('conditions');
};
