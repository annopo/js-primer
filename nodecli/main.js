// console.log(process.argv);

// my-module.jsモジュールをmyModuleオブジェクトとしてインポートする
// const myModule = require("./my-module");
// console.log(myModule.foo); // => "foo"

// commanderモジュールをprogramオブジェクトとしてインポートする
const program = require("commander");

// fsモジュールをfsオブジェクトとしてインポートする
const fs = require("fs");

// md2htmlモジュールをインポートする
const md2html = require("./md2html");

program.option("--gfm", "GFMを有効にする");
program.parse(process.argv);
const filePath = program.args[0];

// コマンドライン引数のオプションを取得し、デフォルトのオプションを上書きする
const cliOptions = {
    gfm: false,
    ...program.opts(),
};

// ファイルをUTF-8として非同期で読み込む
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
    if (err) {
        console.error(err.message);
        //終了ステータス 1(一般的なエラー)としてプロセスを終了する
        process.exit(1);
        return;
    }
    // MarkdownファイルをHTML文字列に変換する
    // gfmオプションを無効にする
    const html = marked(file, cliOptions);
    console.log(html);
});