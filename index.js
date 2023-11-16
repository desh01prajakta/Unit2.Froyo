const userInputString = window.prompt("Enter Froyo Flavors", "coffee, vanilla, strawberry, chocolate");

const stringArray = userInputString.split(",");

const numbers = [];
for(let i = 0; i< stringArray.length; i++){
    const str = stringArray[i];
    const number = parseInt(str);
    numbers.push(number);
}
console.log(numbers);


function getFlavors(flavors){
    const totalFlavors = 0;
    for(let i = 0; i <flavors.length; i++){
    totalFlavors = flavors[i]};
    return totalFlavors;

}
console.log(totalFlavors(numbers));

function getLength(numbers){
    return numbers.length
}

