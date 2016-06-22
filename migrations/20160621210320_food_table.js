
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurant', function(table) {
    table.increments();
    table.string('name');
    table.string('food_type');
    table.string('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('restuarant');
};
