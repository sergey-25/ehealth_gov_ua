// // Get all tab buttons and tab content elements
// const tabButtons = document.querySelectorAll('.main__list-item');
// const tabContents = document.querySelectorAll('.tab__content');

// // Add click event listeners to tab buttons
// tabButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     // Remove 'active' class from all buttons
//     tabButtons.forEach((btn) => btn.classList.remove('active-tab'));

//     // Hide all tab contents
//     tabContents.forEach((content) => (content.style.display = 'none'));

//     // Add 'active' class to the clicked button
//     button.classList.add('active-tab');

//     // Show the corresponding tab content based on the data-tab attribute
//     const tabId = button.getAttribute('data-tab');
//     const tabContent = document.getElementById(tabId);
//     tabContent.style.display = 'block';
//   });
// });

// // Set the first tab as active and show its content by default
// tabButtons[0].click();



// // Function to handle tab menu
// function setupTabMenu(menuId) {
//   // Get the tab menu and content elements
//   const tabMenu = document.getElementById(menuId);
//   const tabButtons = tabMenu.querySelectorAll('.main__list-item');
//   const tabContents = tabMenu.nextElementSibling.querySelectorAll('.tab__content');

//   // Add click event listeners to tab buttons
//   tabButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//       // Remove 'active' class from all buttons
//       tabButtons.forEach((btn) => btn.classList.remove('active-tab'));

//       // Hide all tab contents
//       tabContents.forEach((content) => (content.style.display = 'none'));

//       // Add 'active' class to the clicked button
//       button.classList.add('active-tab');

//       // Show the corresponding tab content based on the data-tab attribute
//       const tabId = button.getAttribute('data-tab');
//       const tabContent = document.getElementById(tabId);
//       tabContent.style.display = 'block';
//     });
//   });

//   // Set the first tab as active and show its content by default
//   tabButtons[0].click();
// }

// // Setup the first tab menu
// setupTabMenu('tab-menu1');

// Setup the second tab menu
// setupTabMenu('tab-menu3');




function setupTabMenu(menuId, activeTabId) {
  // Get the tab menu and content elements
  const tabMenu = document.getElementById(menuId);
  const tabButtons = tabMenu.querySelectorAll('.main__list-item');
  const tabContents = tabMenu.nextElementSibling.querySelectorAll('.tab__content');

  // Add click event listeners to tab buttons
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove('active-tab'));

      // Hide all tab contents
      tabContents.forEach((content) => (content.style.display = 'none'));

      // Add 'active' class to the clicked button
      button.classList.add('active-tab');

      // Show the corresponding tab content based on the data-tab attribute
      const tabId = button.getAttribute('data-tab');
      const tabContent = document.getElementById(tabId);
      tabContent.style.display = 'block';
    });
  });

  // Check if an active tab ID is provided
  if (activeTabId) {
    // Find the button with the provided ID
    const activeButton = tabMenu.querySelector(`[data-tab="${activeTabId}"]`);

    // Activate the button and show its content
    if (activeButton) {
      activeButton.classList.add('active-tab');
      const activeContent = document.getElementById(activeTabId);
      activeContent.style.display = 'block';
    } else {
      // If the active tab ID is not found, set the first tab as active
      tabButtons[0].classList.add('active-tab');
      tabContents[0].style.display = 'block';
    }
  } else {
    // Set the first tab as active and show its content by default
    tabButtons[0].classList.add('active-tab');
    tabContents[0].style.display = 'block';
  }
}

// Get the ID from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Setup the tab menu and show the corresponding tab based on the ID
setupTabMenu('tab-menu1', id);



var slsbt = document.querySelector(".tab__menu-btn");
const listItems = document.querySelector(".main__item-list");
const mainNavBox = document.querySelector('.patients__main-nav')

slsbt.addEventListener("click", function () {
  mainNavBox.classList.toggle("open-tab-menu");
  console.log("fsdfdsf");

});

window.addEventListener("resize", function () {
  if (window.innerWidth > 1050) {
    mainNavBox.classList.remove("open-tab-menu");
    listItems.style.maxHeight = "none";
    listItems.style.opacity = "1";
    slsbt.style.display = "none";
  } else {
    listItems.style.maxHeight = "0";
    listItems.style.opacity = "0";
    slsbt.style.display = "block";
  }
});