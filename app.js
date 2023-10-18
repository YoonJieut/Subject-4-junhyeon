// console.log('hi');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
  console.log(req.method) // GET
  console.log(req.url) // "/""
  
  if(req.method !== "GET") {
    throw new Error("해당 서버는 GET요청만 받습니다!!")
  }
  if(req.url === "/"){
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
    
    fs.readFile('index.html',(err, data)=>{
      if(err){
        console.error('파일 읽기 에러');
      } else{
        res.end(data);
      }
    })
  }
  if(req.url === "/sub"){
    fs.readFile('sub.html',(err, data)=>{
      if(err){
        console.error('파일 읽기 에러');
      } else{
        res.end(data);
      }
    })
  }
});

server.listen(8080, ()=>{
  console.log('서버 구동 중~');
})햐