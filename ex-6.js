// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName;

// Start coding here
function reversedStr(str){
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    console.log(reversed);
    return reversed;
}
reversedCompanyName = reversedStr(companyName);
console.log(reversedCompanyName);