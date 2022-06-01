console.log("this")
console.log("this")

let divelem = document.createElement('div')
divelem.className = ('divclass')
divelem.id = ('divid')

let justext= document.createTextNode("edit over hre")

divelem.appendChild(justext)
divsave=divelem.textContent
divelem.contentEditable = 'true'

let selectarget = document.querySelector('#heading')
selectarget.appendChild(divelem)

localStorage.setItem('text', divsave)

document.querySelector('.container').addEventListener('click', function () {
    localStorage.setItem('text', 'do it ')
})