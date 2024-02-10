const btnPrevious = document.querySelector('.btn-previous');
const btnLast = document.querySelector('.btn-last');
const container1 = document.querySelector('.container');
const pointImg = document.querySelector('.point-img');

let index1 = 1;

btnLast.addEventListener("click", () => {
   if (index1 === container1.children.length) {
      index1 = 1;
   } else {
      index1++;
   }
   showImg(index1 - 1);
})

btnPrevious.addEventListener("click", () => {
   if (index1 === 1) {
      index1 = container1.children.length;
   } else {
      index1--;
   }
   showImg(index1 - 1);
})

const showImg = (indexImg) => {
   container1.children.item(indexImg).style.display = "block";
   for (let i = 0; i < container1.children.length; i++) {
      if (i !== indexImg) {
         container1.children.item(i).style.display = "none";
      }
   }
   showActivItem(pointImg.children.item(indexImg));
}

pointImg.addEventListener("click", (element) => {
   index1 = Number.parseInt(element.target.textContent);
   showImg(index1 - 1);
   showActivItem(element.target);
})

const showActivItem = (element) => {
   if (element.classList[0] !== "point-img") {
      element.classList.add("active");
      if (element.classList.contains('active')) {
         document.querySelectorAll('.active').forEach(item => item.classList.remove('active'));
         element.classList.add('active');
      }
   }
}

showActivItem(pointImg.children.item(index1 - 1));