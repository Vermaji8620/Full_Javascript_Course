// console.log("tyhi")

// let a,b,c,fruits

// [a,b, c]=[34, 561, 5041]
// console.log(a, b, c)

// let p,q,r,s
// [p,q,r,...s]=[1,2,3,4,5,6,7,8,9,10]
// console.log(p,q,r,s)

// ({a,b,c, ...d}={a:34, b:345, c:45, d:35, e:100})
// console.log(a,b,c,d)

// fruits=['apple', 'banana', 'mango'];
// [a,b,c]=fruits
// console.log(a,b,c)

//object destruction


const laptop = {
    model: 'hp',
    age: '23',
    gender: 'male',
    net: 65,
    start: function () {
        console.log("started");
    }
}

let { model, age, gender, net, start } = laptop
console.log(model, age, gender)
start()