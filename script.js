//  Hard Mode (Practice Command Line, recall Git )

//* Hamster
class Hamster {
    constructor(owner = "", name = "", price = 15){
    this.owner = owner; 
    this.name = name;
    this.price = price;

}

wheelRun() {
    console.log("squeak squeak");}

eatFood() {
    console.log("nibble nibble")
}

getPrice() {
    return this.price
}
}

class Person {
    constructor (name = "", age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamsters;
        this.bankAccount = bankAccount;
    }

    getName() {
        return this.name
    } 
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    } 
    greet() {
        console.log(`Hello ${this.name}`)
    } 

    eat() {
        console.log(this.weight++);
        console.log(this.mood++);
}
   
    exercise() {
        console.log(this.weight--);
}

    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
}

    buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();

}
}    
const Timmy = new Person('Timmy', 5);
const Gus = new Hamster('Timmy', 'Gus');

console.log(Timmy);

for (let i =1; i <= 5; i++) {
    Timmy.eat()
}
console.log(Timmy);

for (let j =1; j <= 5; j++) {
    Timmy.exercise()
}
console.log(Timmy);

Timmy.age = 9;
console.log(Timmy);

Timmy.buyHamster(Gus) 
console.log(Timmy);

Timmy.age += 15;
console.log(Timmy);

for (let y =1; y <= 2; y++) {
    Timmy.eat()
}
console.log(Timmy);

for (let x =1; x <= 2; x++) {
    Timmy.exercise()
}
console.log(Timmy);



//* Dinner
class Dinner {
    constructor (appetizer = "", entree = "", dessert = "") {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert
    }
}

class Chef {
    dinnerChoice(appetizer, entree, dessert) { 
        const newDinner = new Dinner (appetizer, entree, dessert)
        console.log(newDinner);
    }

} 
const chef1 = new Chef('appetizer', 'entree', 'dessert')
// console.log(Chef.dinnerChoice('Salad', 'Pasta', 'Icecream'))

chef1.dinnerChoice('Salad', 'Pasta', 'Icecream');
chef1.dinnerChoice('Fries', 'Filet', 'Tiramisu');
chef1.dinnerChoice('Soup', 'Roast', 'Apple Pie');
