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

     con.query("insert into Student values(1,'Sujata','c++', 21),(2,'Akanksha','Java', 20),(3,'Sanika','CSS', 20)" );
    if (err) throw err;
else
        console.log("Insert  Data...");

}
)
