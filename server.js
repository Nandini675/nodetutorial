 const http = require("http");
  const server = http.createServer( function( req, res){

 if( req.url==="/getsecretdata"){
     res.end("there is no secret data");
     return;
 }
 res.end(" hello brooooooooooooooo....");// end of the response

  });
  
  
  server.listen(5000);