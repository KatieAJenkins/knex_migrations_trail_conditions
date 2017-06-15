'use strict';

//knex migrate:latest
exports.up = function(knex, Promise) {
	return knex.schema.createTable('runners', function(table) {
    //id
    table.increments();
    //name
    table.string('first_name');
    table.string('last_name');
	});
};

//knex migrate:rollback
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('runners');
};
