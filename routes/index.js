var express = require('express');
var router = express.Router();
var knex = require('../db/knex')


/* GET home page. */
router.get('/', function(req, res, next) {
  knex('restaurant').then(function(restaurant) {
    res.render('index', { title: 'What would you like to eat?', restaurant:restaurant});
  })

});

module.exports = router;
