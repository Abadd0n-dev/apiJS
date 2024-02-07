//task1
// 1. Необходимо выводить на страницу текущую ширину
// и высоту окна браузера, при изменении значений, вывод
// также должен меняться.
// 2. При закрытии страницы (вкладки), необходимо выводить
// всплывающее окно или диалоговое окно браузера и
// спросить, уверен ли пользователь, что хочет покинуть страницу?
// 3. Используйте объект history для управления историей
// переходов на веб-странице. Создайте кнопки "Назад" и
// "Вперед" для перемещения по истории.

//1
PrintDesktopSize();

window.addEventListener("resize", PrintDesktopSize);

function PrintDesktopSize() {
  const width = window.outerWidth;
  const height = window.outerHeight;
  const sizeDesktopEl = document.querySelector(".size-desktop");

  sizeDesktopEl.innerHTML = `
    <p>ширина экрана: ${width}</p> 
    <p>длина экрана: ${height}</p>
`
};

//2
window.addEventListener("beforeunload", (event) => {
    event.preventDefault()
    confirm("Вы уверены, что хотите выйти?");
})

//3
history.back();
history.forward();

