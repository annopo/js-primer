// console.log(process.argv);

// my-module.jsモジュールをmyModuleオブジェクトとしてインポートする
// const myModule = require("./my-module");
// console.log(myModule.foo); // => "foo"

// commanderモジュールをprogramオブジェクトとしてインポートする
const program = require("commander");
// コマンドライン引数をパースする
program.parse(process.argv);

// ファイルパスをprogram.args配列から取り出す
const filePath = program.args[0];
console.log(filePath);
