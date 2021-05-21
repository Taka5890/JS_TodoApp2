import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定のクリックした対象を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // div子要素にliを入れる
  div.appendChild(li);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);

  // 完了ボタンの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // 完了ボタンクリック時の処理
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグをを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODOの内容のテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化する
    addTarget.textContent = null;
    // 完了リスト用のliタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    //戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    backButton.addEventListener("click", () => {
      // 押された戻すボタンの対象を削除する
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // 戻るボタンが押された対象のテキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタンの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // 削除ボタンをクリックした時の処理
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグのDIVを削除する
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグに子ようそ追加
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
