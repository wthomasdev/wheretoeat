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

router.get('/login', auth.isLoggedIn, function(req, res, next){
  res.render('login')
})

router.get('/signup', auth.isLoggedIn, function(req, res, next){
  res.render('signup')
})

router.get('/home', auth.isNotLoggedIn, function(req, res, next){
  db.findUserById(req.session.userId)
  .then(function (user) {
    res.render('home', {user: user})
  })
})

router.get('/logout', function(req, res, next){
  req.session = null
  res.redirect('/')
})

router.post('/login', function(req, res, next){
  auth.passport.authenticate('local', function(error, user, info){
    console.log('hitting log in')
    //test lucas 1234
    if(error){
      res.render('login', {error: error})
    } else if (user){
      req.session.userId = user.id
      console.log(req.session.userId)
      res.redirect('/home')
    }
  })(req, res, next)
})

router.post('/signup', auth.isLoggedIn,  function(req, res, next) {
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

router.get('/add', function(req, res, next) {
  db.getUserId(req.session.userId).then(function(user) {
    console.log(user);
    res.render('add', {user:user})
  })

});

router.post('/add', function(req, res, next) {
  db.addRestaurant(req.body).then(function() {
    console.log('added');
    res.redirect('/home');
  })
})

router.get('/myrestaurants', function(req, res, next) {
  db.getRestaurants(req.session.userId).then(function (restaurants) {
    res.render('myrestaurants', {restaurants:restaurants})
  })
})

module.exports = router;
