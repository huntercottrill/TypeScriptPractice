"use strict";
class Vehicle {
    move(howManyMiles) {
    }
}
class Car extends Vehicle {
    start() {
    }
}
class Boat extends Vehicle {
    start() {
    }
}
function startAndMove(conveyance, miles) {
    conveyance.start();
    conveyance.move(miles);
}
const myCar = new Car();
startAndMove(myCar, 30);
const knightBoat = new Boat();
startAndMove(knightBoat, 40);
//# sourceMappingURL=vehicle.js.map