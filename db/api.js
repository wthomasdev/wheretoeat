var knex = require('./knex');

module.exports = {
  findUserByName: function (username) {
    return knex('user').select().where({username: username}).first()
  },
  addUser: function (body) {
    return knex('user').insert(body,'id');
  },
  findUserById: function (id) {
    return knex('user').select().where({id: id}).first()
  },
  getUserId: function (id) {
    return knex('user').select().where('user.id', id).first();
  },
  addRestaurant: function(body) {
    return knex('restaurant').insert(body);
  },
  getRestaurants: function(id) {
    return knex('restaurant').where('user_id', id)
  }
}
