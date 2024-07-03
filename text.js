var http=require('http')
 http.createServer(
function(req,res){
 res.write("<h1>Server Started successfully......</h1>")
}
).listen(2004)