const fs=require("fs");
const path=require("path");
const getFilesInDir=function(dir){
    // console.log(path.resolve(dir));   //D:\workspace\node\fs\txt
    let results=[path.resolve(dir)];
    const files=fs.readdirSync(dir,"utf8");
    // console.log(files); //[ 'a.txt', 'b.txt', 'sub' ]
    files.forEach(file=>{
        file=path.resolve(dir,file);   //用目录名+文件名生成文件的物理路径
        // console.log(file);
        const stats=fs.statSync(file);
        if(stats.isFile()){
            // console.log(file);
            results.push(file);
        }else if(stats.isDirectory()){
            results=results.concat(getFilesInDir(file));
            console.log(results);
        }
    })
    return results;
}
const files=getFilesInDir("./txt/");  //这是我们想要拿到的目录
