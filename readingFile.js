var fs=require('fs');
bf=fs.readFileSync('README.md', 'utf8').split('\n');
console.log(bf);