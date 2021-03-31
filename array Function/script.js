function makeBeteenFunc(x, y){
    return function(num){
        return num >= x && num <= y;
    }
}

const isChild = makeBeteenFunc(0, 18);

console.log(isChild(12))