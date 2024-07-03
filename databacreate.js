var mysql=require('mysql')
var con=mysql.createConnection(
	{
            host:'localhost',
            user:'root',
            password:'123456'
}
);
 con.connect(
          function(err){
 if(err)throw err;
 else 
 console.log("connected....");
con.query("create Database clg");
      if(err)throw err;
 else
  console.log("database Created successfully...");
}
)