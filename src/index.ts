var prompt = require("prompt-sync")();
let n1 = parseInt(prompt('Please Enter First Number:'))
let n2 = parseInt(prompt('Please Enter Second Number:'))
let opt = prompt('Please Enter Your Operator(+, -, *, /):')
if(opt == '+'){
    console.log(`The answer of ${n1} ${opt} ${n2} = ${n1+n2}`)
}
else if(opt == '-'){
    console.log(`The answer of ${n1} ${opt} ${n2} = ${n1-n2}`)
}
else if(opt == '*'){
    console.log(`The answer of ${n1} ${opt} ${n2} = ${n1*n2}`)
}
else if(opt == '/'){
    console.log(`The answer of ${n1} ${opt} ${n2} = ${n1/n2}`)
}
else {
    console.log('Please Enter correct operator')
}
export {};