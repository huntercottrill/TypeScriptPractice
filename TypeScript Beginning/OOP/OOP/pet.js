"use strict";
class Pet {
}
class Cat extends Pet {
    makeNoise() {
        return "MEOW!";
    }
}
class Dog extends Pet {
    makeNoise() {
        return "WOOF!";
    }
}
const myCat = new Cat();
const myDog = new Dog();
function main() {
    console.log(myCat.makeNoise());
    console.log(myDog.makeNoise());
}
main();
//# sourceMappingURL=pet.js.map