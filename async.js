
const fs = require("fs");
 const https = require("https");
console.log("hello");
var a =98;
var b= 9;
// synchronous
fs.readFileSync("./file.txt","utf-8");
console.log("this will execute after file read");
https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("fetched data succesfully");
});
setTimeout(()=>{
    console.log("set timeout called after a 5 sec");
},5000)

// asynchronous
fs.readFile("./file.txt","utf8",(err,data)=>{ console.log("file data:", data);});
 function multiplyfn(x,y){
     const result = a+b;
     return result;
}

 var c = multiplyfn(a,b);
  console.log("multiplication result is:" ,c);

