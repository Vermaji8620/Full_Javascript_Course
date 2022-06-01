console.log("this")

function fruitsiterator(values) {
    let nextindex = 0
    // we will return an object 
    return {
        next: function () {
            if (nextindex < values.length) {
                // we will return this Object
                return {
                    value: values[nextindex++], done:false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}

const myarray = ['apples', 'grapes', 'oranges', 'bhindi']

//using the iterator 
const fruits =fruitsiterator(myarray)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)