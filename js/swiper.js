const imageUrls = [
    "../../assets/images/mis/3i.jpg",
    "../../assets/images/mis/Clinica Web.PNG",
    "../../assets/images/mis/DocDream.png",
    "../../assets/images/mis/eApteka.png",
    "../../assets/images/mis/EvoMIS.png",
    "../../assets/images/mis/Health24.jpg",
    "../../assets/images/mis/HealthTech.png",
    "../../assets/images/mis/Helsi.jpg",
    "../../assets/images/mis/iClinic.jpg",
    "../../assets/images/mis/Lakmus.png",
    "../../assets/images/mis/logo.svg",
    "../../assets/images/mis/nHealth.jpg",
    "../../assets/images/mis/PharmaSpace.png",
    "../../assets/images/mis/SimplexMed.png",
    "../../assets/images/mis/SimplexMis.png",
    "../../assets/images/mis/TerraLab.PNG",
    "../../assets/images/mis/АПТЕКА 911.PNG",
    "../../assets/images/mis/Аскеп.jpg",
    "../../assets/images/mis/ВІСА.jpg",
    "../../assets/images/mis/Дніпро-МТ.png",
    "../../assets/images/mis/Доктор Елекс.png",
    "../../assets/images/mis/Дорадо.png",
    "../../assets/images/mis/Електронна лікарня 2.0.png",
    "../../assets/images/mis/Емсімед.PNG",
    "../../assets/images/mis/Каштан.png",
    "../../assets/images/mis/МедЕйр.PNG",
    "../../assets/images/mis/Медстар.png",
    "../../assets/images/mis/Медікс.jpg",
    "../../assets/images/mis/Медікіт.png",
    "../../assets/images/mis/Медінфосервіс.PNG",
    "../../assets/images/mis/МІА_здоров_я.PNG",
    "../../assets/images/mis/Подорожник.png",
    "../../assets/images/mis/Скарб.PNG",
    "../../assets/images/mis/Таблеткі.png",
    "../../assets/images/mis/Укрмедсофт.png",
    "../../assets/images/mis/ІС СЗХ.ico"
  ];

  const swiper = new Swiper('#swiper-container', {
    slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 4,
        grabCursor: true,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    on: {
      init: function () {
        var swiperContainer = this;
        imageUrls.forEach(function (imageUrl) {
          swiperContainer.addSlide(0, '<div class="swiper-slide card"><div class="card-content"><div class="image"><img src="' + imageUrl + '" class="swiper-image"></div></div></div>');
        });
      }
    }
  });


  const imageGrid = document.getElementById("imageGrid");

  // Iterate over the image URLs and create HTML elements for each image
  imageUrls.forEach((imageUrl) => {
    // Create an image element
    const image = document.createElement("img");
    image.src = imageUrl;
  
    // Create a container div for each image
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    imageContainer.appendChild(image);
  
    // Append the image container to the image grid
    imageGrid.appendChild(imageContainer);
  });