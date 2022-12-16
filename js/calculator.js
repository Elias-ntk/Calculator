
function calculator (button, display){
    switch(button.innerHTML){
        case 'C':
            removeAll(display);
            break;
        case '←':
            remove(display, button);
            break;
        case '=':
            calculate(display);
            break;
        default:
            print(display, button);
            break;
    }
}

function print (display, button){
    if (button.innerHTML === '/' || button.innerHTML === '+' || button.innerHTML === '-' || button.innerHTML === '*'){
        if (display.innerHTML == '0') {return }
    }
    
    if(button.innerHTML === '/' || button.innerHTML === '+' || button.innerHTML === '-' || button.innerHTML === '*' || button.innerHTML === '.'){
        if (display.innerHTML.slice(-1) === '/' || display.innerHTML.slice(-1) === '+' || display.innerHTML.slice(-1) === '-' || display.innerHTML.slice(-1) === '*' || display.innerHTML.slice(-1) === '.'){
            return
        }
    }


    if (display.innerHTML == '0'){
        display.innerHTML = '';
    }


    display.innerHTML = display.innerHTML.toString() + button.innerHTML.toString();
    
}

function calculate (display){

    display.innerHTML = eval(display.innerHTML);
}

function remove (display, button){
    if (button.innerHTML === '←' && display.innerHTML === '0') return
    
    display.innerHTML = display.innerHTML.slice(0, -1)

    if (display.innerHTML === '') display.innerHTML = '0'
}

function removeAll (display){
    display.innerHTML = '0';
}