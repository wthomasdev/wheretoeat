
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurant', function(table) {
    table.increments();
    table.string('name');
    table.string('food_type');
    table.text('description');
    table.integer('user_id').references('id').inTable('user').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('restaurant');
};
