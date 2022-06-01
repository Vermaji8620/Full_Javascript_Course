console.log("this is a good way")

// document.getElementById('heading').addEventListener('mouseover', function(e){
//     // // in place of mouseover there can even be 'click'
//     // variable=e.target
//     // variable=e.target.className
//     // variable=e.target.classList
//     // variable=Array.from(e.target.classList)
//     // variable=e.target.id
//     // variable=e.offsetX
//     // variable=e.offsetY
//     variable=e.clientX
//     variable=e.clientY
//     console.log("you have clicked the heading")
//     console.log(variable)

// })


// let btn= document.getElementById('btn')
// btn.addEventListener('click', func1)
// btn.addEventListener('dblclick', func2)
// btn.addEventListener('mousedown', func3)

// function func1(e) {
//     console.log("thanks", e)
//     e.preventDefault()
// }
// function func2(e) {
//     console.log("thanks its a double click", e)
//     e.preventDefault()
// }
// function func3(e) {
//     console.log("thanks its a mouse down", e)
//     e.preventDefault()
// }

// document.querySelector('.no').addEventListener('mouseenter', function(){
//     console.log("you entered no")
// })



document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log("you entered mousemoveevent no")
    console.log(e.offsetX)
    console.log(e.offsetY)
    document.body.style.backgroundColor=`rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX+e.offsetY})`
})