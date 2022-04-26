const { readFileSync, writeFileSync, write } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync (
    './content/result-snyc.txt',
    `Adding the Content: ${first}, ${second}`,
    {flag: 'a'}
)
