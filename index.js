

const userInputString = window.prompt("Enter Froyo Flavors", "coffee,vanilla,strawberry");

const stringArray = userInputString.split(",");

console.log(stringArray);

function counting(stringArray){
let flavors = {
    vanilla: 0,
    coffee: 0,
    strawberry: 0
    }
for(let i = 0; i < stringArray.length; i++){
    if(stringArray[i] == "vanilla"){
        flavors["vanilla"]+=1;
    }else if(stringArray[i] == "strawberry"){
        flavors["strawberry"]+=1;
    }else if(stringArray[i] == "coffee") {
        flavors["coffee"]+=1;
    }
} return flavors;
}
console.log(counting(stringArray));



