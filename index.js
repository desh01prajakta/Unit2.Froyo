const userInputString = window.prompt("Enter Froyo Flavors", "coffee, vanilla, strawberry");

const stringArray = userInputString.split(",");

const numbers = [];
for(let i = 0; i< stringArray.length; i++){
    const str = stringArray[i];
    const number = parseInt(str);
    numbers.push(number);
}
console.log(numbers);

const flavors = {
    vanilla: 3,
    coffee: 2,
    strawberry: 1,
}
console.log(flavors);