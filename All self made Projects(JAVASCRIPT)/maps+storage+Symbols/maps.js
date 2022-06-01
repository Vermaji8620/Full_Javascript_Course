console.log("this")

let mymap=new Map()
console.log(mymap)

k1=["this"], 
k2=["then"], 
k3=["there"]

mymap.set(k1, "this is the first one")
mymap.set(k2, "this is getting the second one")
mymap.set(k3, "this is allowing the third one")

console.log(mymap.get(k1))
console.log(mymap.get(k2))
console.log(mymap.get(k3))

for([key, value] of mymap){
    console.log(key, value)
}

for(key of mymap.keys()){
    console.log(`key is`, key)
}

for(value of mymap.values()){
    console.log(`value is`, `,`, value)
}

console.log("-------------")
//using foreach

mymap.forEach((key, value)=>{
    console.log(`key is `, key)
    console.log(`value is `, value)
})

console.log("-------------")

Array.from(mymap).forEach((key, value)=>{
    console.log(`key is `, key)
    console.log(`value is `, value)
})