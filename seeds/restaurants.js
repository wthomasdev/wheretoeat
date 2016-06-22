
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurant').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('restaurant').insert(
          {name: 'Chipotle',
          food_type:'Mexican',
          description:'Bad for the guts, good for the soul.'
          }),
        knex('restaurant').insert({
          name: 'Chik-Fil-A',
          food_type:'American',
          description:'Chicken burgers.. bigotry makes it taste better.'
        }),
        knex('restaurant').insert(
          {name: 'Smash Burger',
          food_type:'American',
          description:'Great burgers.. decent prices.'
        })
      ]);
    });
};
