function squares() {
  let aside = document.getElementsByTagName("aside")[0];
  let article;
  let section;
  for (let i = 0; i < 16; i++) {
    article = document.createElement("article");
    for (let j = 0; j < 4; j++) {
      section = document.createElement("section");
      article.appendChild(section);
    }
    aside.appendChild(article);
  }
  let seclist = document.getElementsByTagName("section");
  for (let k = 0; k < seclist.length; k++) {
    seclist[k].setAttribute("onclick", "changeColor(this)");
  }
}
function changeColor(square) {
  if (square.style.backgroundColor == "purple") {
    square.style.backgroundColor = "";
  } else square.style.backgroundColor = "purple";
}


const firstElem = document.createElement("img");
firstElem.src = "layouts/first.png";
const copy = firstElem.cloneNode();
const secElem = document.createElement("img");
secElem.src = "layouts/second.png";
const thirdElem = document.createElement("img");
thirdElem.src = "layouts/third.png";
const fourthElem = document.createElement("img");
fourthElem.src = "layouts/four.png";

var count = 0;
function myPlus() {
  let list = document.getElementsByTagName("section");

  if (count == 0) {
    egg(count, firstElem);
  }
  if (count == 1) {
    egg(count, secElem);
  }

  if (count == 2) {
    egg(count, thirdElem);
  }
  if (count == 3) {
    egg(count, fourthElem);
  }

  if (count == 4) {
    reset(count - 1, 1);
  }
  if (count == 5) {
    reset(count - 3, 0.75);
  }
  if (count == 6) {
    reset(count - 5, 0.5);
  }
  if (count == 7) {
    reset(count - 7, 0.25);
    count = -1;
  }

  function reset(i, opac) {
    for (i; i < list.length; i += 4) {
      list[i].style.opacity = opac;
      list[i].style.background = "";
      list[i].removeChild(list[i].firstChild);
    }
  }

  count++;
  function egg(i, numElem) {
    for (i; i < list.length; i += 4) {
      list[i].style.opacity = 1;
      list[i].style.background = "rgb(255, 255, 0)";
      list[i].appendChild(numElem.cloneNode());
    }
  }
}
