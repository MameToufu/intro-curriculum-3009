'use strict';
const fs = require('fs');
const fileName = './test.txt';
// 挨拶を30回表示する
for (let count = 0; count < 30; count++) {
  fs.appendFileSync(fileName, 'こんにちは\n', 'utf8', () => { });
  fs.appendFileSync(fileName, 'こんばんは\n', 'utf8', () => { });
  fs.appendFileSync(fileName, 'おはようございます\n', 'utf8', () => { });
}
