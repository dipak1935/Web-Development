let currentDisplayValue='1';

document.querySelector('#display').value=currentDisplayValue;



function onDigitClicked(digit){

    currentDisplayValue=currentDisplayValue+digit;
    document.querySelector('#display').value=currentDisplayValue;
}

