
exports.seed = function(knex, Promise) {

      return Promise.all([
        // Inserts seed entries
        knex('user').insert(
          {
           username: 'test',
           password: '420'
         }),
        knex('user').insert({
         username: 'test2',
         password: '420'
        })
      ]);
};
