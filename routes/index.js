var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var db = require('../db/api');
var auth = require('../auth')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('restaurant').then(function(restaurant) {
    res.render('index', { title: 'What would you like to eat?', restaurant:restaurant});
  })
});

router.get('/login', function(req, res, next){
  res.render('login')
})

router.get('/signup', function(req, res, next){
  res.render('signup')
})

router.get('/home', function(req, res, next){
  db.findUserById(req.session.userId)
  .then(function (user) {
    res.render('home', {user: user})
  })
})

router.get('/logout', function(req, res, next){
  req.session = null
  res.redirect('/')
})

router.post('/signup', function(req, res, next) {
  db.findUserByName(req.body.username).then(function(user) {
    if (user) {
      res.render('signup', {error:"Username already exists"});
    } else {
      auth.createUser(req.body).then(function(id) {
        req.session.userId = id;
        res.redirect('/home');
      })
    }
  }).catch(function(error){
    next(error)
  })
})


module.exports = router;
