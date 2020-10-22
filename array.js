const array = ["Java", "JavaScript", "Ruby"];
const indexOfJS = array.indexOf("JavaScript");
console.log(indexOfJS);
console.log(array[indexOfJS]);
console.log(array.indexOf("JS"));

const array2 = ["A", "B", "C"];
const newArray = array2.concat(["D", "E"]);
console.log(newArray);

const newArray2 = ["X", ...array2, "Z"];
console.log(newArray2);

const array3 = [[["A"], "B"], "C"];
console.log(array3.flat());
console.log(array3.flat(1));
console.log(array3.flat(2));
console.log(array3.flat(Infinity));

const array4 = ["a", "b", "c"];
array4.splice(1, 1);
console.log(array4);
console.log(array4.length);
console.log(array4[1]);
array4.splice(0, array4.length);
console.log(array4.length);

const array5 = [1, 2, 3];
array5.forEach((currentValue, index, array5) => {
    console.log(currentValue, index, array5);
});
