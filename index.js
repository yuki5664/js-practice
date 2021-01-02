console.log('index.js: loaded');

// CSSセレクタを使ってDOMツリー中のh2要素を取得する
const heading = document.querySelector("h2");
// h2要素に含まれるテキストコンテンツを取得する
const headingText = heading.textContent;

// button要素を作成する
const button = document.createElement("button");
button.textContent = "Push Me";
// body要素の子要素としてbuttonを挿入する
document.body.appendChild(button);

// githubのapiを叩く
const userInfo = 'js-primer-example';
function fetchUserInfo(userId) {
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then(response => {
      console.log(response.status);
      if (!response.ok) {
        console.error('エラーレスポンス', response);
      } else {
        return response.json().then(userInfo => {
          // アバターの情報用
          const view = `
          <h4>${userInfo.name} (@${userInfo.login})</h4>
          <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
          <dl>
              <dt>Location</dt>
              <dd>${userInfo.location}</dd>
              <dt>Repositories</dt>
              <dd>${userInfo.public_repos}</dd>
          </dl>
          `;
          // HTMLの挿入
          const result = document.getElementById("result");
          result.innerHTML = view;
          console.log(userInfo);
        });
      }
    }).catch(error => {
      console.error(error);
    });
};

