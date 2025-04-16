abstract class Vehicle {
    public move(howManyMiles: number): void {

    }

    public abstract start(): void;
}

class Car extends Vehicle {
    public start(): void {

    }
}

class Boat extends Vehicle {
    public start(): void {

    }
}

function startAndMove(conveyance: Vehicle, miles: number): void {
    conveyance.start();
    conveyance.move(miles);
}


const myCar: Car = new Car();
startAndMove(myCar, 30);

const knightBoat: Boat = new Boat();
startAndMove(knightBoat, 40);