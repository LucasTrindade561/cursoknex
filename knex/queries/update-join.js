/*
-- Atualiza registros com joins
select u.first_name, p.bio from users u
join profiles as p
on p.user_id = u.id
where u.first_name = 'Katelyn';

update users as u
join profiles as p
on p.user_id = u.id
set p.bio =  CONCAT(p.bio, ' atualizado') 
where u.first_name = 'Katelyn';
*/

const knex = require('../config/database');
const update = knex('users as u')
.innerJoin('profiles as p', 'u.id', 'p.user_id')
.update({
    'p.bio': knex.raw('CONCAT(??, " atualizado")', ['p.bio'])
})
.where({
    'u.first_name': 'Allen'
});


console.log(update.toString());    

update.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERROR',e.message);
}).finally(() => {
    knex.destroy();
});
