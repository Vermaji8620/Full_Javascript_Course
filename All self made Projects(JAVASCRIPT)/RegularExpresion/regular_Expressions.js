console.log("thjid")

//BASIC FUNCTIONS

let reg = /harry/    //this is a regular expression literal in js

reg = /harry/g   //g means global
reg = /harry/i  //g means case insensitive 

console.log(reg)
console.log(reg.source)

let s = "this is great code with Harry and also harry bhai"
// Functions to match expressions

// 1. exec()--this function will return an array for match or null for no match
let result1 = reg.exec(s)
console.log(result1)

// 2.---test()--returns true or false
let result2 = reg.test(s)
console.log(result2)

//3. match()---it will return an array of results or null
let result3 = s.match(reg)
console.log(result3)


//4. search()---returns the index of first match else -1
let result4 = s.search(reg)
console.log(result4)

//5. replace()---returns new replaced dtirng with all the replacements
let result5 = s.replace(reg, "shubham")
console.log(result5)

//METACHARACTER SYMBOLS

let regex = /^hvbnvhar/  //^ means startswith
regex = /^harr/
regex = /ry$/  //$ at the end means endswith
regex = /h.rry/  // ' . ' k jagah pe koi dusra charcter a skta hai
regex = /h*rry/  // ' * ' k jagah pe ek v nahi ya fir koi dusra kitna v charcter aa skta hai
regex = /ha?rryi?/  // ' ? ' ka matlb ki 'a' optional hai..ho to achha baat hai, na ho to v koi dikkat nai hai, print ho jayega.(i ka liye v same chiz)
regex = /h\*rry/  // ' * ' ka matlb hai ki wo khud apne ko hi bol rha hai, yani kai, regex ka jaisa pur a pura hona chhaiye..


let str = "harry is harry"
if (regex.test(str)) {
    console.log(`the string ${str}  matches the expression ${regex.source}`)
}
else {
    console.log(`the string ${str} does not match the expression ${regex.source}`)
}

// CHARACTER SET 

str = "harry is harry"

regex= /h[a-z]rry/    //can be any character from a to z
regex=/h[ryu]rry/     //can be r or y or u
regex=/h[^ryu]rry/    //can not be r or y or u
regex=/h[a-zA-Z]rr[0-9]/
regex=/har{2}y/       // r  should occur exactly two times
regex=/har{0-2}y/     //r can occur any number of times between 0 to 2
regex=/(har){2}([0-9]r){3}/
regex=/\war/          // \w ka mtlb word-character or alphabet or numbers
regex=/\w+d1r/        // + ka mtlb ki ek ya ek se jada baar \w(word-character or alphabet or numbers) aa skta hai
regex=/\Wis/          //capital (W) ka matlb non-word character (eg.-space)
regex=/is \d+/        //  \d ka mtlab digits
regex=/is \D+/        //  \D ka mtlab non-digits
regex=/\sharry/       // \s k matlb space(whitespace character)
regex=/\s+harry/      // \s k matlb one or more than one space(whitespace character)
regex=/\S+harry/     // \S k matlb one or more than one non-space(whitespace character)
regex=/rry\b/        //word boundary...matlb 'rry' k baad ek word shuru hota hai

// ASSERTIONS
regex=/h(?=y)/       //h k baad y hi hona chhiye  aur kch na ho...nai to match nai hoga
regex=/h(?!a)/       //h k baad a nai hona chahiye aur kch v chalega


if (regex.test(str)) {
    console.log(`the string ${str}  matches the expression ${regex.source}`)
}
else {
    console.log(`the string ${str} does not match the expression ${regex.source}`)
}