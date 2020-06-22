const http = require('http');

http.createServer((req,res)=>{
  if(req.url==='/favicon.ico'){
    return;
  }
  console.log('cookie',req.headers.cookie);

  res.setHeader('Set-Cookie','cookie=abc;');
  res.end('hello cookie');
}).listen(4000)