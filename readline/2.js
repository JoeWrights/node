const readline = require('readline');
const fs = require('fs');

// 逐行打印日志文件（时间，访问地址）
const rl1 = readline.createInterface({
  input: fs.createReadStream('./access.log')
});
rl1.on('line', (line) => {
  const arr = line.split('');
  console.log('访问时间:%s %s,访问地址:%s', arr[0], arr[1], arr[13]);
})