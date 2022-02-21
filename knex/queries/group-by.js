/*
-- Group by - Agrupa valores
SELECT first_name, COUNT(id) as total FROM users
GROUP BY first_name
ORDER BY total DESC;

select u.first_name, COUNT(u.id) as total from users u
left join profiles as p
on p.user_id = u.id
WHERE u.id IN (617, 539, 537, 611)
GROUP BY first_name
ORDER BY total DESC
LIMIT 5;
*/
const knex = require('../config/database');
const select = knex('users as u').select('u.first_name').count('u.id as total')
.groupBy('first_name').orderBy('total', 'desc');

const selectJoin = knex('users as u')
.select('u.first_name')
.leftJoin('profiles as p', 'p.user_id', 'u.id')
.whereIn('u.id', [64, 23, 78, 107, 102, 82, 17, 1, 92])
.count('u.id as total')
.groupBy('first_name')
.orderBy('total', 'desc')
.limit(5);

console.log(selectJoin.toString());
selectJoin.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERROR',e.message);
}).finally(() => {
    knex.destroy();
});