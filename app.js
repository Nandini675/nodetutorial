
 require("./xyz");
//   const obj=  require("./calculate/sum.js");
// const {calculateproduct} = require("./calculate/multiply.js");
const {calculateproduct, calculatesum}=require("./calculate");
 var name = "nooby";
 var a=10; var b= 23;
 
 
 calculatesum(a,b);
 calculateproduct(a,b);


console.log(globalThis== global);