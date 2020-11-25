// console.log(process.argv);

// my-module.jsモジュールをmyModuleオブジェクトとしてインポートする
// const myModule = require("./my-module");
// console.log(myModule.foo); // => "foo"


// commanderモジュールをprogramオブジェクトとしてインポートする
const program = require("commander");

// fsモジュールをfsオブジェクトとしてインポートする
const fs = require("fs");

// コマンドライン引数からファイルパスを取得する
program.parse(process.argv);
const filePath = program.args[0];

// ファイルをUTF-8として非同期で読み込む
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
    if (err) {
        console.error(err.message);
        //終了ステータス 1(一般的なエラー)としてプロセスを終了する
        process.exit(1);
        return;
    }
    console.log(file);
});