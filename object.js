const obj = {
    key: "value"
};

console.log(obj.key);
console.log(obj["key"]);

const languages = {
    ja: "日本語",
    en: "英語"
};
const myLang = "ja";
console.log(languages[myLang]);

const obj2 = {};
obj2.key = "value";
console.log(obj2.key);

const obj3 = {
    key1: "value1",
    key2: "value2"
};
delete obj3.key1;
console.log(obj3);
