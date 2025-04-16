abstract class Pet {
    public abstract makeNoise(): string;
}

class Cat extends Pet {
    public makeNoise(): string {
        return "MEOW!";
    }
}

class Dog extends Pet {
    public makeNoise(): string {
        return "WOOF!";
    }
}

const myCat: Cat = new Cat();
const myDog: Dog = new Dog();

function main() {
    console.log(myCat.makeNoise())
    console.log(myDog.makeNoise())
}

main();