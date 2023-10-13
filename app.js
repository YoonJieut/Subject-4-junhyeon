console.log('hi');

const http = require('http');

const server = http.createServer((req, res)=>{
  console.log(req.method)
  console.log(req.url)

  if(req.method !== "GET") {
    throw new Error("해당 서버는 GET요청만 받습니다!!")
  }
  if(req.url === "/"){
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
    res.end("<h1>잘 작동중</h1>")
  }
});

server.listen(8080, ()=>{
  console.log('서버 구동 중~');
})