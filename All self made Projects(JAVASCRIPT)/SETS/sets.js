console.log("this ")

//set stores unique values 
let myset=new Set()
console.log("the set looks like", myset)
//adding values to this set 
myset.add('this')
myset.add('that')
myset.add('this')
myset.add('then')
myset.add('there')
myset.add(true)
console.log("set looks like this now", myset)

//ya fir set constructor v use kr skte hai..
// let myset1=new Set([1,45, 'this', false, {'a':'p', 'b':'q', 'c':'r'}])
// console.log(myset1)

console.log(myset.size)   // set k andar agr koi (same chij) ko repeat kr rhe hai, to wo uska size change nai krega 
console.log(myset.has('this'))
console.log(myset.has(54))
// console.log(myset.delete('this'))
console.log(myset)
 
console.log("---------------")

for (item of myset){
    console.log("item is", item)
}

console.log("------------")
myset.forEach((item)=>{
    console.log("item is ", item)
    // console.log("item is ", item)
})

console.log("--------------------")
Array.from(myset).forEach((item)=>{
    console.log("item is ", item)
})