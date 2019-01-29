console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
fs.appendFile('greetings.txt', `Hii ${user.username}!`, (err) => {
  if (err) throw err;
});
console.log(`Hello ${user.username}!`);