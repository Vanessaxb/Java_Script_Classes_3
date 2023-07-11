//  Hard Mode (Practice Command Line, recall Git )

//* Hamster
class Hamster {
    constructor(owner, name = "", price = 15){
    this.owner; 
    this.name; 
    this.price

}

wheelRun() {
    console.log("squeak squeak");}

eatFood() {
    console.log("nibble nibble")
}

getPrice() {
    console.log(this.price)
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
        this.bankAcount = bankAccount
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
        console.log(`${this.name}`)
    } 

    eat() {
    console.log(this.weight++);
    console.log(this.mood++);
}
    eatMoreTimes(num) {
    return this.eat *= num
}

    exercise() {
    weight--;
}

    ageUp() {
    age++;
    height++;
    weight++;
    mood--;
    bankAccount += 10;
}

    buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAcount += this.hamster.getPrice();

}
}    
const Timmy = new Person('Timmy', 5);
const Gus = new Hamster('owner', 'hamster');


Timmy.eat()
console.log(this.eat);
Timmy.exercise()






// buyHamster (hamster) {
//     this.hamsters.push(this.hamster);
//     this.mood += 10;
//     this.bankAccount += this.hamster.getPrice();
// }