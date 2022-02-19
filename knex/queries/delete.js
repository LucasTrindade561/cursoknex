/*
DELETE FROM users WHERE id = 115;

SELECT * FROM users WHERE id BETWEEN 110 AND 115;

*/ 
const knex = require('../config/database');

const select = knex('users').select('id', 'first_name');
const deleteSql = knex('users').delete().whereBetween('id', [15, 19]);

console.log(deleteSql.toString());
console.log(select.toString());

deleteSql.then(data => {
    console.log(data);
    select.then(data => {
        console.log(data);
    }).catch(e => {
        console.log('ERROR',e.message);
    }).finally(() => {
        knex.destroy();
    });
}).catch(e => {
    console.log('ERROR',e.message);
}).finally(() => {
    knex.destroy();
});
