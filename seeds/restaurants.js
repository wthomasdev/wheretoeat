var find = require('../helper.js');


exports.seed = function(knex, Promise) {
  return knex('user').select().then(function(users) {
    return Promise.all([
      // Inserts seed entries
      knex('restaurant').insert(
        {name: 'Chipotle',
        food_type:'Mexican',
        description:'Bad for the guts, good for the soul.',
        user_id:find.findFromList("test", users)
      }),
      knex('restaurant').insert({
        name: 'Chik-Fil-A',
        food_type:'American',
        description:'Chicken burgers.. bigotry makes it taste better.',
        user_id:find.findFromList("test2", users)

      }),
      knex('restaurant').insert(
        {name: 'Smash Burger',
        food_type:'American',
        description:'Great burgers.. decent prices.',
        user_id:find.findFromList("test2", users)
      })
    ]);

  })
};
