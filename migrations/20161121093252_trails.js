'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('trails', function(table){
    table.increments(); //Adds an auto incrementing column, in PostgreSQL this is a serial. This will be used as the primary key for the column.
    table.string('name') //Adds a string column; optional length defaulting to 255
      .notNullable() //Adds a not null on the current column being created.
      .defaultTo(''); //Sets the default value for the column on an insert.
    table.decimal('length', 5, 2); //precision & scale
    table.integer('elevation_gain');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trails');
};
