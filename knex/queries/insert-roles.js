const knex = require('../config/database');
const insert = knex('roles').insert([
    { name: 'POST'},
    { name: 'PUT'},
    { name: 'DELETE'},
    { name: 'GET'},
]);

console.log(insert.toString());

insert.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERROR',e.message);
}).finally(() => {
    knex.destroy();
});