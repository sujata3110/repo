var mysql = require('mysql');
var con = mysql.createConnection(
{
    host: 'localhost',
    user: 'root',
    password: '123456'
}
);

con.connect( 
           function(err) 
 {
    if (err) throw err;
    console.log("Connected");

    con.query("Create Database SGM");
        if (err) throw err;
else
        console.log("Database Created...");
    }
)
