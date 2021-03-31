let clicked = {
    dispVal: '',
    firstOperand: null,
    waitingForSecOp: false,
    operator: null,
}
let { dispVal } = clicked;
let updateDisplay = () => {
    const display = document.querySelector('.display');

    display.value = dispVal;
}