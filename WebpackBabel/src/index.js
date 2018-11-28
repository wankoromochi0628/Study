// import {hello} from "./sub.js";

let array = [1, 2, 3, 4, 5, 6, 7, 8];

let pGrp = [];
let grp1 = [];
let grp2 = [];

while (array.length !== 0) {
    pGrp.push(createGroup(array));
    pGrp.push(createGroup(array));
}

console.log("pGrp");
console.table(pGrp);
console.table(array);

export function createGroup(array) {
    
    let grp = [];

    while (grp.length < 4) {
        let num = Math.floor(Math.random() * array.length);
        // grp1 = array.splice(Math.floor(Math.random() * array.length, 1));
        grp.push(array.splice(num, 1));
    }
    return grp;
}

// console.log(array1.includes(2));