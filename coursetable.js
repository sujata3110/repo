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

     con.query("create  table Course(course varchar(10), Duration integer, fees integer)" );
    if (err) throw err;
else
        console.log("Table Created...");

}
)
