e = module.exports;

e.create_friend = `insert into friends (, , , ) values($1,$2,$3,$4) `;
e.read_friend = `select * from friends where property = $1`;
e.update_friend = `update set property = $1 where property2 = $2`;
e.delete_friend = `delete from friends where property $1`;