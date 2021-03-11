let fs = require('fs');
let data1 = ""
fs.readFile("input.txt","utf-8" ,(err, data)=>{
  data1=data
  if (err) {throw err}

  
})
console.log(data1[2])