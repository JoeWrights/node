const fs=require("fs");
let data;


//readFileSync这种写法违背js的一些异步思想
// data=fs.readFileSync("./f2.txt","utf8");  //同步读取
// console.log("文件读取完成");
// console.log("文件内容是"+data);
try {
    data=fs.readFileSync("./f2.txt","utf8");  //同步读取
    console.log("文件读取完成");
    console.log("文件内容是"+data);
} catch (error) {
    console.log("读取文件出错："+error.message);
}