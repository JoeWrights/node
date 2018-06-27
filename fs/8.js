const fs=require("fs");
//面试考题：遍历文件目录 
//遍历txt文件，把文件都读取出来？

const stats=fs.statSync("./c.txt");
console.log(stats.isFile());