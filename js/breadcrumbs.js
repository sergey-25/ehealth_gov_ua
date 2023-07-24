function createBreadcrumbTrail() {
  var path = window.location.pathname.split('/').filter(function (crumb) {
    return crumb !== '';
  });

  var breadcrumbs = document.getElementById('breadcrumbs');
  breadcrumbs.innerHTML = '';

  var breadcrumbTrail = '';

  var breadcrumbMap = {
    'ehealth.html': 'Електронна охорона здоров`я',
    // 'systems.html': '<span><a href="./ehealth.html">Електронна охорона здоров`я</a> / Системи</span>',
    // 'registers.html': '<span><a href="./ehealth.html">Електронна охорона здоров`я</a> / Реєстри</span>',
    // 'data.html': '<span><a href="./ehealth.html">Електронна охорона здоров`я</a> / Дані</span>',
    // 'legislation.html': '<span><a href="./ehealth.html">Електронна охорона здоров`я</a> / Законодавство</span>',

    'systems.html': '<span>Електронна охорона здоров`я / Системи</span>',
    'registers.html': '<span>Електронна охорона здоров`я / Реєстри</span>',
    'data.html': '<span>Електронна охорона здоров`я / Дані</span>',
    'legislation.html': '<span>Електронна охорона здоров`я / Законодавство</span>',
    'service-providers.html': 'Надавачам послуг',
    'to-managers.html': '<span><a href="./service-providers.html">Надавачам послуг</a> / Керівникам ЗОЗ</span>',
    'to-doctors.html': '<span><a href="./service-providers.html">Надавачам послуг</a> / Лікарям</span>',
    'to-pharmacy.html': '<span><a href="./service-providers.html">Надавачам послуг</a> / Аптечним закладам</span>',
    // 'library.html': '<span><a href="./service-providers.html">Надавачам послуг</a> / Бібліотека знань</span>',
    'library.html': '<span>Надавачам послуг / Бібліотека знань</span>',
    'patients.html': 'Пацієнтам',
    'partners.html': 'Патнерам',
    'to_information_systems.html': 'Розробникам інформаційних систем',
    'news.html': 'Новини',
    'support.html': 'Підтримка',
    'esoz.html':'<span>Електронна охорона здоров`я / Системи / ЕОЗ</span>'
    // Add more paths and breadcrumb texts as needed
  };

  // Add Home breadcrumb
  breadcrumbTrail += '<span class="breadcrumb"><a href="/index.html">Головна</a></span>';
  breadcrumbTrail += '<span class="separator">/</span>';

  for (var i = 0; i < path.length; i++) {
    var crumb = path[i];
    var breadcrumbText = breadcrumbMap[crumb] || '';

    // Add the current page breadcrumb with the link
    breadcrumbTrail += '<span class="breadcrumb">';
    breadcrumbTrail += breadcrumbText;
    breadcrumbTrail += '</span>';
  }

  breadcrumbs.innerHTML = breadcrumbTrail;
}

window.onload = createBreadcrumbTrail;





// Active link


document.addEventListener('DOMContentLoaded', function () {
  var links = document.getElementsByClassName('item__link');
  var currentPath = decodeURIComponent(window.location.pathname);
  var initialPart = window.location.origin;

  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var linkPath = decodeURIComponent(link.href);
    linkPath = linkPath.replace(initialPart, '');

    // Click event listener for each link
    link.addEventListener('click', function (event) {
      var clickedLink = event.target;

      // Remove existing active class from all links
      for (var j = 0; j < links.length; j++) {
        links[j].classList.remove('active__link');
      }

      // Add active class to the clicked link
      clickedLink.classList.add('active__link');
    });

    // Add active class to the link matching the current path
    // if (linkPath !== currentPath) {
    //   link.classList.add('active__link');
    // }
  }
});

