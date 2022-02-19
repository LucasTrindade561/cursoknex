/*
UPDATE users SET first_name = 'Otavio', last_name = 'Rodrigues' WHERE id = 29;

SELECT * FROM users WHERE id = 29;

*/ 
const knex = require('../config/database');

const select = knex.from('users').where({id: 29});
const update = knex('users').where({id: 29});

update.update({
    first_name: 'Hernandes',
    last_name: 'Pablito'
});

console.log(select.toString());
console.log(update.toString());

update.then(data => {
    console.log(data);
    select.then(data => {
        console.log(data);
    }).catch(e => {
        console.log('ERROR',e.message);
    });
}).catch(e => {
    console.log('ERROR',e.message);
}).finally(() => {
    knex.destroy();
});
