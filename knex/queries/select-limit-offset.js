/*
-- limit limita a qtd de valores
-- offset desloca o cursor para exibir os resultados
select id, first_name, email as uemail 
from users
where id between 100 and 150
order by id asc
limit 9,3;
*/
const knex = require('../../knex/config/database');
const selectLimit = knex('users')
  .select('id',  'first_name')
  .orderBy('id', 'asc')
  .limit(5)
  .offset(15);

console.log(selectLimit.toString());

selectLimit.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERROR',e.message);
}).finally(() => {
    knex.destroy();
});
  