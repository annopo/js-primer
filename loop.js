let x = 0;
console.log(`ループ開始前のxの値: ${x}`);
while (x < 10) {
    console.log(x);
    x += 1;
}
console.log(`ループ終了後のxの値: ${x}`);

let total = 0;
for (let i = 0; i < 10; i++) {
    total += i + 1;
}
console.log(total);

const array = [1, 2, 3];
array.forEach(currentValue => {
    console.log(currentValue);
});

function sum(numbers) {
    let total = 0;
    numbers.forEach(num => {
        total += num;
    });
    return total;
}

console.log(sum([1, 2, 3, 4, 5]));
console.log("\n");

const numbers = [1, 5, 10, 15, 20];
let isEvenIncluded = false;
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num % 2 === 0) {
        isEvenIncluded = true;
        break;
    }
}
console.log(isEvenIncluded);

function isEven(num) {
    return num % 2 === 0;
}

const array2 = [1, 5, 10, 15, 20];
console.log(array2.filter(isEven));