var mysql = require('mysql');
var con = mysql.createConnection(
{
    host: 'localhost',
    user: 'root',
    password: '123456',
    database:'SGM'
}     
)
       con.connect(
          function(err) 
 {
    if (err) throw err;
else
    console.log("Connected.....");

     con.query("insert into Course values('c++', 2, 4000),('Java', 2, 30000),('CSS', 3,4000)" );
    if (err) throw err;
else
        console.log("Insert  Data...");

}
)
