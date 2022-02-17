// INSERT INTO users (first_name, last_name, email, password_hash, salary) 
// VALUES ("Davizera", "Esquiso", "davisao@email.com", "d.hash", 10000000);
const knex = require('../config/database');

const data = [
    {
        first_name: 'Pedro',
        last_name: 'Ernesto',
        email: 'pedro@email.com',
        password_hash: 'p.hash',
        salary: 4000
    },
    {
        first_name: 'Felipa',
        last_name: 'Maores',
        email: 'felipa@email.com',
        password_hash: 'f.hash',
        salary: 4000
    },
    {
        first_name: 'Edson',
        last_name: 'Costa',
        email: 'dison@email.com',
        password_hash: 'e.hash',
        salary: 40000
    },
    {
        first_name: 'Neymar',
        last_name: 'Junior',
        email: 'ney@email.com',
        password_hash: 'n.hash',
        salary: 4000000
    }
];

const insert = knex('users').insert(data);

insert.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERROR',e.message);
}).finally(() => {
    knex.destroy();
});

// console.log(insert.toString());
// console.log(insert.toSQL().toNative());

