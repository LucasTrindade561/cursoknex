/*
SELECT 
u.email uemail, u.id uid, u.first_name ufirstname FROM users u;
*/
const knex = require('../config/database');

const select = knex('users as u')
    .select('u.email as uemail', 'u.id as uid', 'u.first_name as ufirstname');

select.then(data => {
    for(const user of data) {
        console.log(user);
    }
}).catch(e => {
    console.log('ERROR',e.message);
}).finally(() => {
    knex.destroy();
});