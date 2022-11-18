const fruits = ["Apple", "Banana", "Lemon"];

function myFunction(){
    fruits.push(prompt("Add you favorite fruit: "));
}

const cats = ["Lion", "Jacal", "Leopard"];

function toUpper(str) {
    return str.toUpperCase();
}

const upperCats = cats.map(toUpper);

console.log(upperCats);