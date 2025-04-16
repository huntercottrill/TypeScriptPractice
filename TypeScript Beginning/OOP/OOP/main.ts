import { Car } from "./car";

function main() {
    const herbie: Car = new Car("Plymouth", "Fury", "red", 1958);

    herbie.drive(350);
}

main();