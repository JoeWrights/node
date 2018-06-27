//面试：你会node的流操作吗？
const fs=require("fs");
const readStram=fs.createReadStream("./a.txt","utf8");
readStram.on("data",(chunk)=>{         //chunk一份数据
    console.log("读取到数据--------\n"+chunk);
}).on("error",(err)=>{          //链式调用
    console.log("出错了"+err.message);
}).on("end",()=>{
    console.log("读取完成");
}).on("close",()=>{
    console.log("已经关闭");
});
