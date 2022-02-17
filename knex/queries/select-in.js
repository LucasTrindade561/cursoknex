/*
SELECT * FROM users
WHERE id IN (10, 15, 20, 25, 30)
AND first_name IN ('Ferris', 'lona'); 
*/
const knex = require('../../knex/config/database');
const selectIn = knex('users')
    .select('id', 'first_name')
    .whereIn('id', [10, 15, 20, 25, 30])
    .whereIn('first_name', ['Ferris', 'Iona']);

console.log(selectIn.toString());

selectIn.then(data => {
console.log(data);
}).catch(e => {
console.log('ERROR',e.message);
}).finally(() => {
knex.destroy();
});