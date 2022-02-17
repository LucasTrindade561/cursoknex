/*
select * from users
where 
created_at < '2020-12-15 23:33:41'
and first_name = 'test' 
and password_hash = 't_hash';
*/
const knex = require('../../knex/config/database');
// const select = knex('users').select('id', 'email', 'first_name').where({id: 7, first_name: 'Neymar'});
// const select = knex('users').select('id', 'email', 'first_name').where('id', '=', 7);
const select = knex('users').select('id', 'email', 'first_name')
    .where('id', '=', 3)
    .andWhere('first_name', '=', 'Davizera')
    .orWhere('id', '=', 7);

select.then(data => {
    for(const user of data) {
        console.log(user);
    }
}).catch(e => {
    console.log('ERROR',e.message);
}).finally(() => {
    knex.destroy();
});