const texts = ["manual assembly|", "quality","training"];
const typping = document.querySelector(".typing")
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

typping.textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 300);
})();

const openNav = document.querySelector('.openNav')
const closeNav = document.querySelector('.closeNav')
const navCollapsed = document.querySelector('.nav-collapsed')
openNav.addEventListener('click',()=>{
  navCollapsed.classList.add('open')
})
closeNav.addEventListener('click',()=>{
  navCollapsed.classList.remove('open')
})

const closeSearch = document.querySelector(".closeSearch")
const openSearch = document.querySelector(".openSearch")
const search = document.querySelector('.seach-menu')
openSearch.addEventListener('click',()=>{
  search.classList.add('open-search')
})
closeSearch.addEventListener('click',()=>{
  search.classList.remove('open-search')
})