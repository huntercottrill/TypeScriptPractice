"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(make, model, color, year) {
        this.make = "";
        this.model = "";
        this.color = "";
        this.year = 0;
        this.isAutomaticTransmission = false;
        this._rpm = 0;
        this.make = make;
        this.model = model;
        this.color = color;
        this.year = year;
    }
    getRpm() {
        return this._rpm;
    }
    setRpm(value) {
        if (value >= 0) {
            this._rpm = value;
        }
    }
    drive(howManyMiles) {
        const newRpm = this.getRpm() + 1;
        this.setRpm(newRpm);
        let message = "I'm driving my " + this.color + " " + this.year;
        message += " " + this.make + " " + this.model;
        message += " for " + howManyMiles + " miles. So fun!";
        console.log(message);
    }
    burnGas() { }
    calculateCurrentSpeed() {
        return 0;
    }
    makeNoise() {
        console.log("BEEP BEEP!");
    }
}
exports.Car = Car;
class Hybrid extends Car {
    constructor() {
        super(...arguments);
        this._batterLevel = 0;
    }
    beFuelEfficient() {
        this.switchToBattery();
    }
    switchToBattery() {
        this.setRpm(0);
        this.calculateCurrentSpeed();
    }
}
class Person {
    listenTo(noiseMaker) {
        noiseMaker.makeNoise();
    }
}
const hunter = new Person();
const hunterCar = new Car("Mitsubishi", "Lancer", "White", 2001);
hunter.listenTo(hunterCar);
//# sourceMappingURL=car.js.map