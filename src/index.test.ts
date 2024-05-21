import shike from './index'

console.log(shike(new Date(), 'YYYY-MM-DD HH:mm:ss'))
console.log(shike('2020.09.12 18:30', 'YYYY-MM-DD HH:mm:ss:SSS'))
console.log(shike('2020/09/12 18:30:13', 'YYYY-MM-DD HH:mm:ss:SSS'))
