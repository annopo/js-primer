console.log("index.js: loaded");

// CSSセレクタを使ってDOMツリーの中のh2要素を取得する
const heading = document.querySelector("h2");
// h2要素に含まれるテキストコンテンツを取得する
const headingText = heading.textContent;

// button要素を作成する
const button = document.createElement("button");
button.textContent = "Push Me";
// body要素の子要素としてbuttonを挿入する
document.body.appendChild(button);

const userId = "js-primer-example";

function fetchUserInfo(userId) {
    fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
        .then(response => {
            console.log(response.status); // => 200

            //エラーレスポンスが返されたことを検知する
            if (!response.ok) {
                console.error("エラーレスポンス", response);
            } else {
                return response.json().then(userInfo => {
                    // JSONパースされたオブジェクトが渡される
                    console.log(userInfo); // => {...}
                });
            }
        }).catch(error => {
            console.error(error);
        });
}