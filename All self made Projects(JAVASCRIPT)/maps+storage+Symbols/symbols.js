console.log("this")

let syml=Symbol('my identifier') //isme 'new' keyword ka use nai kr skte kyunki ye ek object nai hai, ye ek primitive type hai, ekdm string ki tarah
let sym2=Symbol('my identifier') 
//har ek symbol unique hota hai, isiliye bhale hi sym1 aur sym2 barabar lag rha ho, lekin dono ekdm alag hai...
console.log(`symbol is`, syml)
console.log(`symbol is`, typeof(syml))
console.log(sym2===syml)
let a="this is"
let b="this is"
console.log(a===b)
console.log(undefined==undefined)
console.log(null==null)
// console.log(a==b)

let k1=Symbol('identifier for k1')
let k2=Symbol('identifier for k1')
myobj={} //declaring an object
myobj[k1]="harry"
myobj[k2]="rohan"
myobj["name"]="good boy"

console.log(myobj)
console.log(myobj[k1])
console.log(myobj[k2])  //  .k2 use nai kr skte [] hi use krna pdega 

for (key in myobj){
    console.log(key, `,`, myobj[key])//symbols are ignored in for in loops
}

console.log(JSON.stringify(myobj))