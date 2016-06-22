var knex = require('./knex');

module.exports = {
  findUserByName: function (username) {
    return knex('user').select().where({username: username}).first()
  },
  addUser: function (body) {
    knex('user').insert(body,'id');
  }
}
