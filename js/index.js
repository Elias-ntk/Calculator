const display = document.querySelector('.display');
const buttonsNum = document.getElementsByClassName('numbers');
const buttonsOperator = document.getElementsByClassName('operador');



const buttonsNumArray = Array.from(buttonsNum);
const buttonsOperatorArray = Array.from(buttonsOperator);


buttonsNumArray.forEach((button) =>{
    button.addEventListener('click', ()=>{
        calculator(button, display);
    });
});
buttonsOperatorArray.forEach((button) =>{
    button.addEventListener('click', ()=>{
        calculator(button, display);
    });
});

