var mysql = require('mysql');
var con = mysql.createConnection(
{
    host: 'localhost',
    user: 'root',
    password: '123456',
    database:'clg'
}     
)
       con.connect(
          function(err) 
 {
    if (err) throw err;
else
    console.log("Connected.....");

     con.query("insert into Stud values(1,'Sujata', 21),(2,'Akanksha',20),(3,'Sanika', 20),(40,'Amaruta',21),(41,'Anita',19),(102, 'Sayali', 17)" );
    if (err) throw err;
else
        console.log("Insert  Data...");

}
)
