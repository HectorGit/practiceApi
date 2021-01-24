


// e.create_friend = `insert into friends (first_name, last_name, age , added) values($1,$2,$3,$4) `;
// e.read_friend = `select * from friends where first_name = $1`;
// e.update_friend = `update friends set age = $1 where first_name = $2`;
// e.delete_friend = `delete from friends where first_name = $1`;

const qStrings = require(".././tools/sqlStrings");
const query = require(".././tools/queryDatabase");
const dbFail = require(".././tools/dbFailSafe");

module.exports = {

    //GET
    /* requires body such as
    { 
        first_name
    }
    */
    readFriend : async(req,res) => {
        b = req.body
        const text = qStrings.readFriend;
        const values = [b.first_name];
        query(text, values, (err, result) => {
            if (err) return dbFail.failSafe(err, res);
            console.log(result.rows)
            return res.status(200).send(result.rows);
        });
    },

    //POST
    /* requires body such as
    { 
        first_name,
        last_name,
        age
    }
    */
    createFriend : async(req,res) => {
        b = req.body
        const text = qStrings.createFriend;
        const values = [b.first_name, b.last_name, b.age, Date.now()];
        query(text, values, (err, result) => {
            if (err) return dbFail.failSafe(err, res);
            return res.status(200).send('successfully created friend');
        });
    },

    //PATCH
    /* requires body such as
    { 
        first_name
        age
    }
    */
    updateFriend : async(req,res) => {
        b = req.body
        const text = qStrings.updateFriend;
        const values = [b.first_name, b.age];
        query(text, values, (err, result) => {
            if (err) return dbFail.failSafe(err, res);
            //console.log(result.rows)
            return res.status(200).send('successfully updated friend');
        });
    },

    //DELETE
    /* requires body such as
    { 
        first_name
    }
    */
    deleteFriend : async(req,res) => {
        b = req.body
        const text = qStrings.deleteFriend;
        const values = [b.first_name];
        query(text, values, (err, result) => {
            if (err) return dbFail.failSafe(err, res);
            //console.log(result.rows)
            return res.status(200).send('successfully deleted friend');
        });
    },


}