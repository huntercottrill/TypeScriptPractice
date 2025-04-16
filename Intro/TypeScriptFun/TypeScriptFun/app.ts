import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Hello world');
let num: number;

if (1 > 2) {
    num = 1;
} else if (1 < 2) {
    num = 0;
} else { 
    num = -1;
}

console.log(num);

enum Temperature {
    ReallyCold,
    Freezing = 32,
    JustAboveFreezing,
    Boiling = 212,
}

let currentTemp: Temperature;

rl.question('What temperature?', (answer) => {
    switch (currentTemp) {
        case Temperature.ReallyCold:
            break;
        case Temperature.Freezing:
            break;
        case Temperature.JustAboveFreezing:
            break;
        default:
            break;
    }
    rl.close();
})

// Ternary Expression

const isBig = true;
console.log("This is the " + (isBig ? "biggest" : "smallest") + " thing I have ever seen!");