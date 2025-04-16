for (let num: number = 1; num <= 100; num++) {
    let output = num + " ";

    if (num % 3 == 0) {
        output += "Fizz";
    }
    if (num % 5 == 0) {
        output += "Buzz";
    }
    console.log(output);
}