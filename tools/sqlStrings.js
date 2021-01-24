e = module.exports;

e.create_friend = `insert into friends (first_name, last_name, age , added) values($1,$2,$3,$4) `;
e.read_friend = `select * from friends where first_name = $1`;
e.update_friend = `update friends set age = $1 where first_name = $2`;
e.delete_friend = `delete from friends where first_name = $1`;