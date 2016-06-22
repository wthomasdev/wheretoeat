var db = require('./db/api')
var bcrypt = require('bcrypt');



module.exports = {
  createUser: function(body) {
    var hash = bcrypt.hashSync(body.password, 8)
    body.password = hash
    return db.addUser(body).then(function(id) {
      return id[0];
    })
  },
  isLoggedIn: function (req, res, next) {
    if (req.session.userId) {
      res.redirect('/home');
    } else {
      next();
    }
  },
  isNotLoggedIn: function (req, res, next) {
    if (!req.session.userId) {
      res.redirect('/');
    } else {
      next();
    }
  }
}
