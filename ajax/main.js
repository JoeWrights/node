const http=require("http");  //引入http的内置模块
const fs=require("fs");
const indexFile=fs.createReadStream("./index.html");

//创建一个web服务器
const server=http.createServer((req,res)=>{     //get post都来自req:请求对象
    //怎么得到index.html?  index.html 在服务器上 
    //把文件读出来，再向外输出
    if(req.url=="/"){  //  "/"就是首页
        //http响应头
        res.writeHead(200,{
            "Content-Type":"text/html;charset=utf-8"
        });
        indexFile.pipe(res);
    }else if(req.url=="/info"){
        // api
        const info={    //以后数据是要放到数据库里的
            "name":"Joe",
            "desc":"骑白马"
        };
        //200 http状态码， content-type：文件格式 返回浏览器
        //如何去解析这一次请求的到达
        res.writeHead(200,{
            "Content-Type":"text/plain;charset=utf-8"
        });
        res.end(JSON.stringify(info));  //把json转换为文本
    }
    // console.log("那个家伙又来了");
    // res.end("hello world，你要的反正不是首页");
});  

server.listen(8081);

