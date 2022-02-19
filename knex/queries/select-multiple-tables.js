/*
SELECT u.id as uid, p.id as pid, p.bio as pbio, u.first_name 
FROM users u, profiles p WHERE u.id = p.user.id;
*/ 
const knex = require('../config/database');

const select = knex(
    knex.raw(
        '?? as ??, ?? as ??',
        ['users', 'u', 'profiles', 'p']
        )
    ).select('u.id as uid', 'p.id as pid', 'p.bio as pbio', 'u.first_name')
    .where('u.id', '=', knex.raw('??', ['p.user_id']));

console.log(select.toString());

select.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERROR',e.message);
}).finally(() => {
    knex.destroy();
});
