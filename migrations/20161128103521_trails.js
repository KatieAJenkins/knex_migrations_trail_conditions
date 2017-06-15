'use strict';

//knex migrate:latest
exports.up = function(knex, Promise) {
	return knex.schema.createTable('trails', function(table) {
    //id
    table.increments();
    //name
    table.string('name');
    //length
    table.decimal('length' , 5 , 2); //create decimal column (name, precision, scale)
    //precision = total length of #'s'
    //scale = numbers after the decimal
    //elevation_gain
    table.integer('elevation_gain');
	});
};

//knex migrate:rollback
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trails');
};
