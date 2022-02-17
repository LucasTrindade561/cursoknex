const knex = require('../config/database');

// SELECT * FROM users;
knex('users').then(data => {
    console.log(data);
}).catch(e => {}).finally(() => {
    knex.destroy();
});