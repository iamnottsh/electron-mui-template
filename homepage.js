const {readFileSync, writeFileSync} = require('fs')

writeFileSync('dist/index.html', readFileSync('dist/index.html', {encoding: 'utf8'}).replaceAll(/="\//g, '="./'))
