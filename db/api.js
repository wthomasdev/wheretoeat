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
  getUserId: function () {
    return knex('user').select().where('user.id', 17);
  }
}
