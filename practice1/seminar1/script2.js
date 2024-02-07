//task2
// Необходимо создать страницу, в которой будут работать
// все три кнопки.
// - При нажатии на кнопку "Добавить элемент" на страницу
// добавляется новый квадратный элемент (<div>) с размерами
//     100x100 пикселей. Этот элемент должен иметь класс .box
//     и содержать текст, указывающий порядковый номер элемента
//     (1, 2, 3 и так далее).
//     - При нажатии на кнопку "Удалить элемент" удаляется
//     последний добавленный элемент, если таковой имеется.
//     - При нажатии на кнопку "Клонировать элемент" создается
//     копия последнего добавленного элемента и добавляется на
//     страницу. Если последнего добавленного элемента нет на
//     странице, необходимо вывести сообщение в alert, с надписью
//     о невозможности клонирования, так как клонировать нечего.
const btnAddEl = document.querySelector("#addButton");
const btnRemoveEl = document.querySelector("#removeButton");
const btnCloneEl = document.querySelector("#cloneButton");
const containerEl = document.querySelector("#container");

btnAddEl.addEventListener("click", () => {
  const nextNum = containerEl.children.length + 1;
  containerEl.insertAdjacentHTML(
    "beforeend",
    `<div class='box'>${nextNum}</div>`
  );
});

btnRemoveEl.addEventListener("click", () => {
  containerEl.lastChild?.remove();
});

btnCloneEl.addEventListener("click", () => {
  const newBox = containerEl.lastElementChild?.cloneNode(true);
  if (newBox) {
    containerEl.insertAdjacentElement("beforeend", newBox);
  } else {
    alert("Список квадратов пуст");
  }
  containerEl.insertAdjacentElement("beforeend", newBox);
});
