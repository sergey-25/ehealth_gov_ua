document.addEventListener("DOMContentLoaded", function () {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  updateScrollButtonVisibility();

  window.addEventListener("scroll", function () {
    updateScrollButtonVisibility();
  });
});

document.getElementById("scrollButton").addEventListener("click", function () {
  scrollToTopOrBottom();
});

function scrollToTopOrBottom() {
  const currentPosition = window.pageYOffset;
  const scrollHeight = document.body.scrollHeight;
  const windowHeight = window.innerHeight;
  const btnScroll = document.getElementById("scrollButton");

  if (currentPosition < scrollHeight - windowHeight) {
    // Scroll to bottom
    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
    btnScroll.classList.add("scroll__icon_bottom");
  } else {
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    btnScroll.classList.remove("scroll__icon_bottom");
  }
}

function updateScrollButtonVisibility() {
  const scrollLineVisible =
    window.innerHeight < document.documentElement.scrollHeight;
  const currentPosition = window.pageYOffset;
  const scrollHeight = document.body.scrollHeight;
  const windowHeight = window.innerHeight;
  const btnScroll = document.getElementById("scrollButton");

  if (scrollLineVisible) {
    document.getElementById("scrollButton").style.display = "block";
    if (currentPosition < scrollHeight - windowHeight) {
      btnScroll.classList.add("scroll__icon_bottom");
    } else {
      btnScroll.classList.remove("scroll__icon_bottom");
    }
  } else {
    document.getElementById("scrollButton").style.display = "none";
  }
}

