// toggle burger menu

const fullscreenNav = document.querySelector(".fullscreen-nav");
const btnOpen = document.getElementById("btnOpen");
const menuBtnBox = document.querySelector(".menu__btn-box");

menuBtnBox.addEventListener("click", () => {
  btnOpen.classList.toggle("is-active");
  fullscreenNav.classList.toggle("active");
});

// --------------------------------------------------------------------------------

// Sticky header

function handleScroll() {
  const header = document.querySelector(".header");
  const title = document.querySelector(".visual__title");
  const hideShowBlock = document.querySelector(".visual__block");
  const searchBoxTop = document.querySelector(".search__box");
  const titleBoxTop = document.querySelector(".title__box");
  const menuButton = document.querySelector('.menu__btn-box');
  const headerHeight = header.offsetHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition > headerHeight && window.innerWidth > 1050) {
    header.classList.add("sticky");
    title.classList.add("hide-title");
    hideShowBlock.classList.add("visual-block");
   searchBoxTop.style.padding = "10px 0";
   menuButton.style.top= '8px';
    titleBoxTop.style.display = "none";
  } else {
    header.classList.remove("sticky");
    title.classList.remove("hide-title");
    hideShowBlock.classList.remove("visual-block");
    searchBoxTop.style.padding = "30px 0";
    titleBoxTop.style.display = "flex";
    header.style.padding = "0px";
    menuButton.style.top= '30px';
  }
}

// Add event listener for scroll
window.addEventListener("scroll", handleScroll);

// Call the handleScroll() function on page load
handleScroll();

// ---------------------------------------------------------------------------

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll(".dropdwn__item");

// 1. Select each dropdown item
dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector(".dropdown__btn");

  // 2. Select each button click
  dropdownButton.addEventListener("click", () => {
    // 7. Select the current show-dropdown class
    const showDropdown = document.querySelector(".show-dropdown");

    // 5. Call the toggleItem function
    toggleItem(item);

    // 8. Remove the show-dropdown class from other items
    if (showDropdown && showDropdown !== item) {
      toggleItem(showDropdown);
    }
  });
});

// 3. Create a function to display the dropdown
const toggleItem = (item) => {
  // 3.1. Select each dropdown content
  const dropdownContainer = item.querySelector(".dordwn__container");

  // 6. If the same item contains the show-dropdown class, remove
  if (item.classList.contains("show-dropdown")) {
    dropdownContainer.removeAttribute("style");
    item.classList.remove("show-dropdown");
  } else {
    // 4. Add the maximum height to the dropdown content and add the show-dropdown class
    dropdownContainer.style.height = dropdownContainer.scrollHeight + "px";
    item.classList.add("show-dropdown");
  }
};
