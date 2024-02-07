//task3
// Необходимо создать страницу со списком статей.
// Каждая статья состоит из id, заголовка, текста статьи.
// id - будем брать из unix timestamp.
// Необходимо подготовить список статей в JSON-формате,
// которые будут выводиться на странице при первом ее 
// открытии.
// Необходимо реализовать возможность удаления статьи.
// Необходимо реализовать возможность добавления статьи.
// Необходимо реализовать возможность изменения статьи,
// ввод данных можно реализовать через prompt.
// Статьи должны сохраняться в локальное хранилище 
// браузера, и должны быть доступны после перезагрузки 
// страницы.
const localStorageKey = "articles";
const initialArticles = `[
    {
    "id": 1706896947721,
    "title": "header",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, veniam!"
    },
    {
    "id": 1706896948000, 
    "title": "superHEADER", 
    "text": "Lorem ipsum r sit ur adipisicing elit. Odit, veniam!"
    }
]`;
if (!localStorage.getItem(localStorageKey)) {
  localStorage.setItem(localStorageKey, initialArticles);
}
const articles = JSON.parse(localStorage.getItem(localStorageKey));
const listArticleEl = document.querySelector(".list-article");
const btnAddedArticleEl = document.querySelector(".btnAdd");

articles.forEach((item) => {
  addedArticle(item);
});
btnAddedArticleEl.addEventListener("click", () => {
  const title = prompt("Введите заголовок статьи");
  const text = prompt("Введите текст статьи");
  const newArticle = { id: Date.now(), title: title, text: text };
  addedArticle(newArticle);
  articles.push(newArticle);
  saveData(articles);
});
listArticleEl.addEventListener("click", ({ target }) => {
  if (target.matches(".btnDell")) {
    const fatherEl = target.closest(".article");
    fatherEl.remove();

    const indexEl = articles.findIndex((item) => {
      return item.id === +fatherEl.dataset.id;
    });
    articles.splice(indexEl, 1);
    saveData(articles);
  } else if (target.matches(".btnRef")) {
    const fatherEl = target.closest(".article");
    const titleEl = fatherEl.querySelector(".title");
    const textEl = fatherEl.querySelector(".text");
    const title = titleEl.textContent;
    const text = textEl.textContent;
    const newTitle = prompt("Введите заголовок статьи", title);
    const newText = prompt("Введите текст статьи", text);
    titleEl.textContent = newTitle;
    textEl.textContent = newText;

    const resArticle = articles.find((item) => {
      return item.id === +fatherEl.dataset.id;
    });
    resArticle.title = newTitle;
    resArticle.text = newText;
    saveData(articles);
  }
});
function addedArticle(item) {
  listArticleEl.insertAdjacentHTML(
    "beforeend",
    `
            <div class="article" data-id="${item.id}">
                <div class="title">${item.title}</div>
                <div class="text">${item.text}</div>
                <button class="btnDell">Удалить статью</button>
                <button class="btnRef">Изменение статьи</button>
            </div>
    `
  );
}
function saveData(array) {
  localStorage.setItem(localStorageKey, JSON.stringify(array));
}
