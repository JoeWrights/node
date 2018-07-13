const readline = require('readline');
const fs = require('fs');
//创建一个可交互的接口
//process 进程 stdin 输入
//readline 在哪里？
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('please input a word:',function(answer){
  console.log('Your has enter [%s]', answer.toUpperCase());
  rl.close();
});



