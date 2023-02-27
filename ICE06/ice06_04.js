"use strict";
function compareNums() {
    var firstNum = Number(document.getElementById("firstNum").value);
    var secondNum = Number(document.getElementById("secondNum").value);
      
    if(!(firstNum || secondNum)) return alert('Please enter two valid digits.')
    
    
    return firstNum > secondNum ? alert(`${firstNum} is the larger number`) : (firstNum === secondNum ? alert(`${firstNum} is equals to ${secondNum}`) : alert(`${secondNum} is the larger number`))
};

