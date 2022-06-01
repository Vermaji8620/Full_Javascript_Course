let screen = document.getElementById('screen')
let screenvalue = ''
let buttons = document.querySelectorAll('button')
for (item of buttons) {
    item.addEventListener('click', (e) => {
        let buttontext = e.target.innerText
        if (buttontext == '*') {
            screenvalue += buttontext
            screen.value = screenvalue
        }
        else if (buttontext == 'C') {
            screenvalue = ''
            screen.value = screenvalue
        }
        else if (buttontext == '=') {
            screen.value = eval(screenvalue)
        }
        else{
            screenvalue+=buttontext
            screen.value=screenvalue
        }
    })
}