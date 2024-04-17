

const userInputString = window.prompt("Enter Froyo Flavors", "", ",");

const stringArray = userInputString.split(",").map(str => str.trim());;

console.log(stringArray);

function counting(stringArray){
let map = {};
for(let i = 0; i < stringArray.length; i++){
    if(map[stringArray[i]]){
        map[stringArray[i]]++;
    }else {
        map[stringArray[i]] = 1;
    }
  }
  return map;
}
console.log(counting(stringArray));



