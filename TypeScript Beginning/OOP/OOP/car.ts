export class Car implements IMakesNoise {
    public make: string = "";
    public model: string = "";
    public color: string = "";
    public year: number = 0;
    public isAutomaticTransmission: boolean = false;
    private _rpm: number = 0;

    public constructor(make: string, model: string, color: string, year: number) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.year = year;
    }

    private getRpm(): number {
        return this._rpm;
    }

    protected setRpm(value: number): void {
        if (value >= 0) {
            this._rpm = value;
        }
    }

    public drive(howManyMiles: number): void {
        const newRpm = this.getRpm() + 1;
        this.setRpm(newRpm);

        let message = "I'm driving my " + this.color + " " + this.year;
        message += " " + this.make + " " + this.model;
        message += " for " + howManyMiles + " miles. So fun!";
        console.log(message);
    }
    public burnGas(): void { }
    public calculateCurrentSpeed(): number {
        return 0;
    }

    public makeNoise(): void {
        console.log("BEEP BEEP!");
    }
}

class Hybrid extends Car {
    private _batterLevel: number = 0;

    public beFuelEfficient(): void {
        this.switchToBattery();
    }

    private switchToBattery(): void {
        this.setRpm(0);
        this.calculateCurrentSpeed();
    }
}

class Person {
    public listenTo(noiseMaker: IMakesNoise) {
        noiseMaker.makeNoise();
    }
}

interface IMakesNoise {
    makeNoise(): void;
}

const hunter: Person = new Person();
const hunterCar: Car = new Car("Mitsubishi", "Lancer", "White", 2001);
hunter.listenTo(hunterCar);