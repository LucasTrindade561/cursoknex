/*
-- Seleciona users.id, profiles.id, profiles.bio
-- profiles.description, users.first_name
-- da tabela users
-- unindo com a tabela profiles
-- quando a condição u.id = p.user_id for satisfeita
-- onde users.first_name terminar com "a"
-- ordena por users.first_name decrescente
-- limita 5 registros
SELECT u.id as uid, p.id as pid,
p.bio, u.first_name
FROM users as u
INNER JOIN profiles p
ON u.id = p.user_id
WHERE u.first_name LIKE '%a'
ORDER BY u.first_name DESC
LIMIT 5;
*/

const knex = require('../config/database');

const leftJoin = knex('users as u')
    .select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
    .leftJoin('profiles as p', 'u.id', 'p.user_id')
    .where('u.first_name', 'LIKE', '%a')
    .where('u.id', '>', '10')
    .where('u.id', '<', '40')
    .orderBy('u.id', 'asc')
    .limit(5); 

console.log(leftJoin.toString());

leftJoin.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERROR',e.message);
}).finally(() => {
    knex.destroy();
});
