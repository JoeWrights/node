性能优化

http createServer (req res) => { callback }
web 一切皆资源

web server端的资源(html,css,json,img..) createReadStream(读):找到资源，并读出来
"传输"到客户端 client proxy

优化空间？优化什么呢？优化的是资源

传输的体积能减小，gzip   服务器发送给用户的东西是压缩的
服务器端是可以进行文件操作：读写、权限、压缩、解压缩

客户端
res.writeHead(200,{
    "Content-Type":"text/html;charset=utf-8"
})

带有压缩的字段，unzip

减少传输体积，快，省带宽


