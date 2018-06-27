const fs=require("fs");
const zlib=require("zlib");

const gzip=zlib.createGzip();    //创建压缩的上下文环境
// readFile 一边读，写入里一个文件
//Stream
const inFile=fs.createReadStream("./a.txt");  //读
const outFile=fs.createWriteStream("./a.txt.gz"); //写入到压缩文件
// inFile.pipe(outFile);  //文件没有压缩
inFile.pipe(gzip).pipe(outFile);  //把文件压缩并流出来