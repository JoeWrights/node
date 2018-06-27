const fs=require("fs");
//可写流场景：上传图片
const writeStream=fs.createWriteStream("./c.txt","utf8");
writeStream.on("close",()=>{   //注意一定要关闭
    console.log("已经关闭了");
});
writeStream.write("me");
writeStream.write("on");
writeStream.end("");