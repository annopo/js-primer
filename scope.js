{
    const x = "outer";
    {
        const x = "inner";
        console.log(x);
    }
    console.log(x);
}

const glovalVariable = "グローバル";
{
    console.log(glovalVariable);
}
function fn() {
    console.log(glovalVariable);
}
fn();

var x;
console.log(x);
x = "varのx";
console.log(x);

// 匿名関数を宣言 + 実行を同時に行なっている  
(function () {
    // 関数のスコープ内でfoo変数を宣言
    var foo = "foo";
    console.log(foo);
})();
// foo変数うのスコープ外
console.log(typeof foo === "undefined");

