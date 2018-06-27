// COMMONJS require NODE 内置支持的js模块化方案
// es6 module
//sea.js

//文件找到=>打开=>流出来
const fs=require("fs");
let data;

// fs.readFile("./f1.txt","utf-8",(err,data)=>{
//     console.log("真正的读取完成了");
//     console.log("文件内容："+data);
// });
// console.log("读取完成");

//promise实现
const promise=new Promise((resolve,reject)=>{
    fs.readFile("./f2.txt","utf8",(err,data)=>{
        if(err){
            reject(err);
            // console.log(err);
        }else{
            console.log("真正的读取完成了");
            console.log("文件内容："+data);
            resolve(data); //做完了就resolve
        }
    });
});
promise.then((data)=>{
    console.log("读取完成，做其他事情");
    // console.log("错误："+err);
}).catch(err=>{
    console.log("错误："+err);
});
