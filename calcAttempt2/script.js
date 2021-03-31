let clicked = {
    displayVal: '5',
    firstNum: null,
    operator: null,
    lastNum: null
}

let { displayVal, firstNum, operator, lastNum} = clicked;

let keys = document.querySelector('.keys');
console.log(keys)

keys.addEventListener('click', (e) => {
    e.preventDefault()
   let { className, value } = e.target;
   let { target } = e;
   if(!target.matches('button')){
       return;
   }
   switch(className){
    case 'digit':
        // updateDisplay(value);
        console.log(value);
        break;
    case 'operator':
        // updateDisplay(value);
        console.log(value);
        break;
    case 'decimal':
        // updateDisplay(value);
        console.log(value);
        break;
    case 'all-clear':
        // updateDisplay(value);
        console.log(value);
    case 'equal':
        // updateDisplay(value);
        console.log(value);
        break;
    default:
        break;
   }
   

});

let updateDisplay = (param) => {

    let calcDisp = document.querySelector('.display');
    displayVal = param;
    calcDisp.value = displayVal;
         
};


