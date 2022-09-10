function changeColor() {
  document.querySelector('.box').style.color = 'purple';
}

function changePen() {
  document.querySelector('.box2').style.color = "brown";
}

//start of list code
let likes = ["shoes", "bags", "hairs", "cloths", "cars", "purses"];
let items = document.getElementById('myList');
likes.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  items.appendChild(li);
});
