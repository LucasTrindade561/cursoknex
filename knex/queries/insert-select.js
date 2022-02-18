/*
-- insert select
-- insere valores em uma tabela usando outra
insert into profiles
(bio, description, user_id)
select 
concat('Bio de ', first_name), 
concat('Description de', ' ', first_name), 
id 
from users;
*/
const knex = require('../config/database');

const insertSelect = knex(
    knex.raw(
        "?? (??, ??, ??)",
        ['profiles', 'bio', 'description', 'user_id']
        )
).insert((qb) => {
    qb.from('users').select(
        knex.raw(
            "concat('Bio de ', ??)",
            ['first_name']
        ), 
        knex.raw(
            "concat('Description de ' , ??)",
            ['last_name']
        ),
        'id');
});

console.log(insertSelect.toString());

insertSelect.then(data => {
    for(const user of data) {
        console.log(user);
    }
}).catch(e => {
    console.log('ERROR',e.message);
}).finally(() => {
    knex.destroy();
});
