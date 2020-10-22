function double(num) {
    return num * 2;
}

console.log(double(10));
console.log("\n");

function argumentsToArray(x, y) {
    return [x, y];
}

console.log(argumentsToArray(1, 2));
console.log(argumentsToArray(1));
console.log("\n");

function echo(x = "100") {
    return x;
}

console.log(echo(1));
console.log(echo());
console.log("\n");

function printUserId(user) {
    console.log(user.id);
}
const user = {
    id: 42
};
printUserId(user);
console.log("\n");

const factorial = function innerFact(n) {
    if (n === 0) {
        return 1;
    }

    return n * innerFact(n - 1);
};
console.log(factorial(5));
console.log("\n");