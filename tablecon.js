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

     con.query("create  table Student(rollno integer, name varchar(20),course varchar(10),age integer)" );
    if (err) throw err;
else
        console.log("Table Created...");

}
)
