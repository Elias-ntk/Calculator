
function calculator(button, display) {
    switch (button.innerHTML) {
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

function isMathOperationOrDot(sign) {
    return isMathOperation(sign) || sign === '.'
}

function isMathOperation(sign) {
    return sign === '/' || sign === '+' || sign === '-' || sign === '*'
}

function print(display, button) {
    let buttonContent = button.innerHTML
    let lastPositionDisplay = display.innerHTML.slice(-1)

    if (isMathOperation(buttonContent) && display.innerHTML == '0') return

    if (isMathOperationOrDot(buttonContent) && isMathOperationOrDot(lastPositionDisplay)) return

    if (buttonContent === '.' && display.innerHTML.includes('.')) return

    if (display.innerHTML == '0') display.innerHTML = '';

    display.innerHTML = display.innerHTML.toString() + buttonContent.toString();

}

function calculate(display) {

    if (display.innerHTML.includes('/0')) display.innerHTML = '0';
    else display.innerHTML = eval(display.innerHTML);

}

function remove(display, button) {
    if (button.innerHTML === '←' && display.innerHTML === '0') return

    display.innerHTML = display.innerHTML.slice(0, -1)

    if (display.innerHTML === '') display.innerHTML = '0';
}



function removeAll(display) {
    display.innerHTML = '0';
}