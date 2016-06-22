var db = require('./db/api')


module.exports = {
  createUser: function(body) {
    return db.addUser(body).then(function(id) {
      return id[0];
    })
  }
}
