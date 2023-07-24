const input = document.getElementById("field");
const iconSearch = document.querySelector(".search__icon");
const iconCross = document.querySelector(".cross__icon");

input.addEventListener("click", function () {
  input.classList.add("hover");
  iconSearch.style.color = "#000";
  iconCross.style.color = "#000";
});

input.addEventListener("blur", function () {
  if (!input.matches(":focus")) {
    input.classList.remove("hover");
    iconSearch.style.color = "#fff";
    iconCross.style.color = "#fff";
  }
});

const icon = document.getElementById('icon-cross');
const inputField = document.getElementById("field");
const searchIcon = document.getElementById('icon-search')

function toggleIcon() {
  if (inputField.value) {
    icon.style.display = "inline-block";
  } else {
    icon.style.display = "none";
  }
}

searchIcon.addEventListener('click', ()=>{
    console.log('Search...')
})

icon.addEventListener('click', function() {
    inputField.value = '';
    icon.style.display = 'none';
  });