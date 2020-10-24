class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }
}
const counterA = new Counter();
const counterB = new Counter();

counterA.increment();

console.log(counterA.count);
console.log(counterB.count);

console.log(counterA.increment === counterB.increment);



class NumberWrapper {
    constructor(value) {
        this._value = value;
    }

    get value() {
        console.log("getter");
        return this._value;
    }

    set value(newValue) {
        console.log("setter");
        this._value = newValue;
    }
}

const numberWrapper = new NumberWrapper(1);
console.log(numberWrapper.value);
numberWrapper.value = 42;
console.log(numberWrapper.value);



class ArrayWrapper {
    constructor(array = []) {
        this.array = array;
    }

    static of(...items) {
        return new ArrayWrapper(items);
    }

    get length() {
        return this.array.length;
    }
}

// 配列を引数として渡している
const arrayWrapperA = new ArrayWrapper([1, 2, 3]);
// 要素を引数として渡している
const arrayWrapperB = ArrayWrapper.of(1, 2, 3);
console.log(arrayWrapperA.length);
console.log(arrayWrapperB.length);