'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('trails', function(table) {
    //id
    table.increments();
    //name
    table.string('name');
    //length
    table.decimal('length' , 5 , 2);
    //elevation_gain
    table.integer('elevation_gain');
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trails');
};
