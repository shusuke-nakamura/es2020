import { MyClazz } from './MyLib.js';

let c = new MyClazz(12345);
console.log(c.checkSecret(12345));
// console.log(c[SECRET]);
console.log(Object.keys(c));

for (let k in c) {
    console.log(k);
}

console.log(JSON.stringify(c));