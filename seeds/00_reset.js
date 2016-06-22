exports.seed = function(knex, Promise) {
  return knex('restaurant').del()
  .then(function() {
  return knex('user').del()
})
}
