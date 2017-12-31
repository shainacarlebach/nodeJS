const mysql = require('mysql');
const fs = require('fs');

function getAll(query,callback) {
    // Step 2
    const con = mysql.createConnection(
        // connection details
        {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'northwind'
        }
    );

    // 3.cconnect
    con.connect(function (err) {
        if (err) {
            console.log('Error connecting to DB:' + err);
            return;
        }
        console.log('Connected');
    });

    // 4. crud : insert
    // use backtick `` for free text
    con.query(query, function (err, rows) {
        if (err) {
            // error log
            // fs.readFile()
            callback(err);
console.log(err)
        }
        // con.end();
        callback(null, rows);
        // console.log(JSON.stringify(rows,null,4));
/*        rows.forEach(function (row) {
            console.log(row.model);
        });*/

    });

   
}



module.exports.getAll = getAll;
