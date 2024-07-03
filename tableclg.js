var mysql=require('mysql')
var con=mysql.createConnection(
 {
         host:'localhost',
         user:'root',
         password:'123456',
         database:'clg'
}
);
 con.connect(
       function(err){
        if(err)throw err;
 else
  console.log("connected .....");
  con.query("create table stud(rollno int, Name varchar(20), Age int)");
  if(err)throw err;
else
  console.log("Table created");
} 
)