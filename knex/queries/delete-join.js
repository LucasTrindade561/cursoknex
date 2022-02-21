/*
-- Apaga registros com joins
select u.first_name, p.bio from users u
left join profiles as p
on p.user_id = u.id
where u.first_name = 'Katelyn';

delete p, u from users u
left join profiles as p
on p.user_id = u.id
where u.first_name = 'Katelyn';
*/

const knex = require('../config/database');

// ? = quer dizer que o place roder vai tratar como valor e nao como um comando dentro do myqsl
// ?? = quer dizer que o place roder vai tratar como comando do myqsl 
const deleteSql = knex.raw(`
delete p, u from users u
inner join profiles as p
on p.user_id = u.id
where u.first_name = ? and p.bio LIKE ?;
`, ['Tatum', '%Tatum%']);

console.log(deleteSql.toString());

deleteSql.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERROR',e.message);
}).finally(() => {
    knex.destroy();
});
