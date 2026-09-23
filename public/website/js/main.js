//========== Sticky menu

$(window).on("scroll", function () {
  var heightFromTop = $(this).scrollTop();
  if (heightFromTop) {
    $(".header-area").addClass("stick");
  } else {
    $(".header-area").removeClass("stick");
  }
});

//========== MAIN MENU

$(".hamburger-menu").on("click", function (e) {
  e.preventDefault();

  var $menu = $("#overlay");
  var willOpen = !$menu.hasClass("open");

  if (willOpen) {
    $menu.css("transition-delay", "0s");
  } else {
    $menu.css("transition-delay", "0.5s");
  }

  $("html").toggleClass("nonoverflow");
  $(".header-area").toggleClass("menu-logobar");
  $menu.toggleClass("open", willOpen);
});

var wrapperMenu = document.querySelector(".wrapper-menu");

if (wrapperMenu) {
  wrapperMenu.addEventListener("click", function () {
    wrapperMenu.classList.toggle("open");
  });
}

//=========== banner
$(function () {
  const $slider = $(".home-slider");
  if (!$slider.length || $slider.hasClass("slick-initialized")) {
    return;
  }

  $slider.slick({
    dots: false,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    infinite: true,
    pauseOnHover: false,
    arrows: true,
    speed: 1500,
    cssEase: "ease",
    prevArrow:
      '<div class="arrow-left"><i class="fa-solid fa-arrow-left"></i></div>',
    nextArrow:
      '<div class="arrow-right"><i class="fa-solid fa-arrow-right"></i></div>',
  });
});

$(".home-slider").hover(
  function () {
    $(this).slick("slickPause");
  },
  function () {
    $(this).slick("slickPlay");
  },
);

//=========== destination-slider

$(".destination-slider").slick({
  dots: false,
  slidesToShow: 4,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  loop: true,
  pauseOnHover: false,
  arrows: true,
  speed: 1000,
  cssEase: "ease",
  prevArrow:
    '<div class="arrow-left"><i class="fa-solid fa-arrow-left"></i></div>',
  nextArrow:
    '<div class="arrow-right"><i class="fa-solid fa-arrow-right"></i></div>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//=========== testimonial

$(".testimonial-slider").slick({
  dots: false,
  slidesToShow: 1,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: false,
  arrows: true,
  speed: 1200,
  cssEase: "ease",
  prevArrow:
    '<div class="arrow-left"><i class="fa-solid fa-arrow-left"></i></div>',
  nextArrow:
    '<div class="arrow-right"><i class="fa-solid fa-arrow-right"></i></div>',
});

//=========== home impact

$(".impactmobile-slider").slick({
  dots: true,
  slidesToShow: 1,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  loop: true,
  pauseOnHover: false,
  arrows: false,
  speed: 1000,
  cssEase: "ease",
});

//=========== home team

$(".hometeam-slider").slick({
  dots: true,
  slidesToShow: 2,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  loop: true,
  pauseOnHover: false,
  arrows: false,
  speed: 1000,
  cssEase: "ease",
});

//=========== home blog

$(".homeblog-slider").slick({
  dots: true,
  slidesToShow: 2,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  loop: true,
  pauseOnHover: false,
  arrows: false,
  speed: 1000,
  cssEase: "ease",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        autoplay: true,
      },
    },
  ],
});

//=========== about portfolio

$(".about-portfolio-slider").slick({
  dots: false,
  slidesToShow: 4,
  infinite: true,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: false,
  arrows: false,
  cssEase: "linear",
  autoplaySpeed: 0,
  speed: 9000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        autoplay: true,
      },
    },
  ],
});

//=========== ui ux testi

$(".ux-testi-slider").slick({
  dots: true,
  slidesToShow: 1,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: false,
  arrows: false,
  speed: 1400,
  cssEase: "ease",
});

//=========== ux team

$(".uxpage-team-slider").slick({
  dots: false,
  slidesToShow: 7,
  infinite: true,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: false,
  arrows: false,
  cssEase: "linear",
  autoplaySpeed: 0,
  speed: 4500,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
      },
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
      },
    },

    {
      breakpoint: 606,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

//=========== ux growth

$(".uxgrowth-slider").slick({
  dots: true,
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  loop: true,
  pauseOnHover: false,
  arrows: false,
  speed: 1000,
  cssEase: "ease",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//=========== ux page logo slider

$(".logo-slider-left").slick({
  dots: false,
  slidesToShow: 6,
  infinite: true,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: false,
  arrows: false,
  cssEase: "linear",
  autoplaySpeed: 0,
  speed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".logo-slider-right").slick({
  dots: false,
  slidesToShow: 6,
  infinite: true,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: false,
  arrows: false,
  cssEase: "linear",
  autoplaySpeed: 0,
  speed: 5000,
  rtl: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

//=========== ux work

$(".uxwork-slider").slick({
  dots: true,
  slidesToShow: 2,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  loop: true,
  pauseOnHover: false,
  arrows: false,
  speed: 1200,
  cssEase: "ease",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//=========== pitch deck showoff

$(".pitchwork-slider").slick({
  dots: true,
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  loop: true,
  pauseOnHover: false,
  arrows: false,
  speed: 1200,
  cssEase: "ease",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//=========== pitch deck fund

$(".pitchfund-slider").slick({
  dots: true,
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  loop: true,
  pauseOnHover: false,
  arrows: false,
  speed: 1000,
  cssEase: "ease",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//=========== digital logo slider

$(".digital-slider-left").slick({
  dots: false,
  slidesToShow: 3,
  infinite: true,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: false,
  arrows: false,
  cssEase: "linear",
  autoplaySpeed: 0,
  speed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

$(".digital-slider-right").slick({
  dots: false,
  slidesToShow: 3,
  infinite: true,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: false,
  arrows: false,
  cssEase: "linear",
  autoplaySpeed: 0,
  speed: 5000,
  rtl: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

//=========== influencer Slider

$(".influencer-slider").slick({
  dots: true,
  slidesToShow: 3,
  infinite: true,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: false,
  arrows: false,
  cssEase: "ease",
  speed: 1000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        autoplay: true,
      },
    },
  ],
});

//=========== strategy consulting case study

$(".consult-casestudy-slider").slick({
  dots: false,
  slidesToShow: 2,
  infinite: true,
  autoplay: false,
  slidesToScroll: 1,
  pauseOnHover: false,
  arrows: true,
  cssEase: "ease",
  speed: 1000,
  prevArrow: $(".consultarrow-left"),
  nextArrow: $(".consultarrow-right"),
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//=========
const $infslider = $(".latest-inf-slider");
const PLAY_ICON = "https://cdn.88gravity.com/website/img/video-icon.png";
const PAUSE_ICON = "https://cdn.88gravity.com/website/img/pause_button.png";

$infslider.slick({
  dots: false,
  slidesToShow: 7,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 4500,
  cssEase: "linear",
  pauseOnHover: false,
  pauseOnFocus: false,
  arrows: false,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 5 } },
    { breakpoint: 767, settings: { slidesToShow: 4 } },
    { breakpoint: 606, settings: { slidesToShow: 2 } },
  ],
});

/* ---------- HOVER BRIDGE ---------- */
$infslider.on("mouseenter", ".video", function () {
  const $videoWrap = $(this);
  const video = $videoWrap.find("video").get(0);
  const $img = $videoWrap.find(".play-btn img");

  $videoWrap.addClass("is-hovered");

  if (video && !video.paused) {
    $img.attr("src", PAUSE_ICON);
  }
});

$infslider.on("mouseleave", ".video", function () {
  $(this).removeClass("is-hovered");
});

/* ---------- PLAY / PAUSE CLICK ---------- */
$infslider.on("click", ".play-btn", function (e) {
  e.preventDefault();

  const $videoWrap = $(this).closest(".video");
  const video = $videoWrap.find("video").get(0);
  const $img = $(this).find("img");
  if (!video) return;

  if (!video.paused) {
    // 👉 USER CLICKED PAUSE
    video.pause();
    $img.attr("src", PLAY_ICON);

    $videoWrap.removeClass("is-playing").addClass("is-stopped");

    // resume slick
    $infslider.slick("slickSetOption", "autoplay", true, true);
    $infslider.slick("slickPlay");
    $infslider.slick("slickSetOption", "swipe", true, true);
    $infslider.slick("slickSetOption", "draggable", true, true);
    return;
  }

  // 👉 USER CLICKED PLAY
  // pause other videos
  $infslider
    .find(".video")
    .not($videoWrap)
    .each(function () {
      const v = $(this).find("video").get(0);
      if (v) {
        v.pause();
        v.currentTime = 0;
      }
      $(this).removeClass("is-playing").addClass("is-stopped");
      $(this).find(".play-btn img").attr("src", PLAY_ICON);
    });

  // stop slick
  $infslider.slick("slickSetOption", "autoplay", false, true);
  $infslider.slick("slickPause");
  $infslider.slick("slickSetOption", "swipe", false, true);
  $infslider.slick("slickSetOption", "draggable", false, true);

  video.play();
  $videoWrap.addClass("is-playing").removeClass("is-stopped");
  $img.attr("src", PAUSE_ICON);
});

/* ---------- VIDEO AUTO END ---------- */
$infslider.on("ended", "video", function () {
  const $videoWrap = $(this).closest(".video");

  $videoWrap.removeClass("is-playing").addClass("is-stopped");
  $videoWrap.find(".play-btn img").attr("src", PLAY_ICON);

  // resume slick
  $infslider.slick("slickSetOption", "autoplay", true, true);
  $infslider.slick("slickPlay");
  $infslider.slick("slickSetOption", "swipe", true, true);
  $infslider.slick("slickSetOption", "draggable", true, true);
});

$(".social-reel-slider").slick({
  dots: true,
  slidesToShow: 4,
  infinite: true,
  autoplay: true,
  slidesToScroll: 4,
  infinite: true,
  pauseOnHover: true,
  arrows: false,
  cssEase: "ease",
  speed: 1000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 2,
        autoplay: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        autoplay: true,
      },
    },
  ],
});

$(".creatives-slider").slick({
  speed: 6000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: "linear",
  slidesToShow: 4,
  draggable: false,
  focusOnSelect: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  infinite: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
      },
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 5,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

// influencer swiper slider

var mySwiper = new Swiper(".swiper-container", {
  speed: 400,
  spaceBetween: 100,
  initialSlide: 0,
  autoHeight: false,
  direction: "horizontal",
  loop: true,
  autoplay: 5000,
  autoplayStopOnLast: false,
  pagination: ".swiper-pagination",
  paginationType: "bullets",
  effect: "slide",
  spaceBetween: 60,
  slidesPerView: 3,
  centeredSlides: true,
  slidesOffsetBefore: 0,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
});

//=========== new client testimonial

// var mySwiper = new Swiper ('.client-slider', {
//     loop: true,
//     slidesPerView : 3,
//     centeredSlides : true,
//     loop: true,
//     loopedSlides: 5,
//     effect : 'coverflow',
//     autoplay: 4000,
//     speed: 1500,
//     autoplayDisableOnInteraction: false,
//     coverflow: {
//         rotate: 0,
//         stretch: 0,
//         depth: 100,
//         modifier: 6,
//         slideShadows: false,
//     },
//     nextButton: '.arrow-right',
//     prevButton: '.arrow-left',
//     breakpoints: {
//         991: {
//             slidesPerView : 2,
//             coverflow: {
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 12,
//             slideShadows: false,
//             }
//         },
//         767: {
//             slidesPerView : 2,
//             coverflow: {
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 12,
//             slideShadows: false,
//             }
//         },
//         599: {
//             slidesPerView: 1,
//             effect: 'slide',
//             spaceBetween: 20,
//             }
//     },
// })

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: false,
  },
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left",
  },
  keyboard: {
    enabled: true,
  },
  // mousewheel: {
  //   thresholdDelta: 70
  // },
  speed: 1500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    599: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

//=========== ppc page result

$(".ppcresult-slider").slick({
  dots: false,
  slidesToShow: 2,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: false,
  arrows: true,
  speed: 1300,
  prevArrow: $(".resultarrow-left"),
  nextArrow: $(".resultarrow-right"),
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

var $slider = $(".ppcresult-slider");
if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement("div");
  sliderCounter.classList.add("slider__counter");

  var updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + "/" + slidesCount);
  };

  $slider.on("init", function (event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on("afterChange", function (event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick();
}

//=========== copywriter logo slider

$(".copylogo-slider").slick({
  dots: false,
  slidesToShow: 6,
  infinite: true,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: false,
  arrows: false,
  cssEase: "linear",
  autoplaySpeed: 0,
  speed: 4000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

//=========== video motion service Slider

$(".videoservice-slider").slick({
  dots: false,
  slidesToShow: 4,
  infinite: true,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: false,
  arrows: true,
  cssEase: "ease",
  speed: 1000,
  prevArrow:
    '<div class="theme2-arrow-left"><i class="fa-solid fa-arrow-left"></i></div>',
  nextArrow:
    '<div class="theme2-arrow-right"><i class="fa-solid fa-arrow-right"></i></div>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//=========== ecom work Slider

$(".ecommwork-slider").slick({
  dots: true,
  slidesToShow: 3,
  infinite: true,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: false,
  arrows: false,
  cssEase: "ease",
  speed: 1000,
  prevArrow:
    '<div class="theme2-arrow-left"><i class="fa-solid fa-arrow-left"></i></div>',
  nextArrow:
    '<div class="theme2-arrow-right"><i class="fa-solid fa-arrow-right"></i></div>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".ecommwork-slider").hover(
  function () {
    $(this).slick("slickPause");
  },
  function () {
    $(this).slick("slickPlay");
  },
);

//=========== ecommerce logo slider

$(".ecomlogo-slider").slick({
  dots: false,
  slidesToShow: 6,
  infinite: true,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: false,
  arrows: false,
  cssEase: "linear",
  autoplaySpeed: 0,
  speed: 4000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

//=========== webpage Slider

$(".webservice-slider").slick({
  dots: true,
  slidesToShow: 1,
  infinite: true,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: false,
  arrows: false,
  cssEase: "ease",
  speed: 1000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//=========== location page roi

$(".locateROI-slider").slick({
  dots: true,
  slidesToShow: 1,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: false,
  arrows: false,
  speed: 1400,
  cssEase: "ease",
});

//=========== DM page onhover change

$(".digitaltab-link .nav-link").mouseover(function () {
  $(this).tab("show");
});

$(".digitaltab-link .nav-link").on("show.bs.tab", function (e) {
  const tabPanelId = e.relatedTarget.getAttribute("href");
  $(tabPanelId).removeClass("active");
});

//========== faq accord

$(document).ready(function () {
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".faq-accord .card-header")
        .find(".faq-arrow")
        .removeClass("fa-angle-down")
        .addClass("fa-angle-up")
        .addClass("fas");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".faq-accord .card-header")
        .find(".faq-arrow")
        .removeClass("fa-angle-up")
        .addClass("fa-angle-down")
        .addClass("fas");
    });
});

//=========== blog loadmore

$(document).ready(function () {
  $("#seeLess").hide();

  $("#seeMore").click(function (e) {
    e.preventDefault();

    $(".blog-item:hidden").slice(0, 3).fadeIn("slow");

    if ($(".blog-item:hidden").length == 0) {
      $("#seeMore").hide();
      $("#seeLess").show();
    }
  });

  $("#seeLess").click(function (e) {
    $(".blog-item").hide();
    $(".blog-item").slice(0, 9).css("display", "block");
    $("#seeMore").show();
    $("#seeLess").hide();
  });
});

//=========== copywrite work loadmore

$(document).ready(function () {
  $("#workLess").hide();
  $(".copywork-item").slice(0, 8).show();

  $("#workMore").click(function (e) {
    e.preventDefault();

    $(".copywork-item:hidden").slice(0, 4).fadeIn("slow");

    if ($(".copywork-item:hidden").length == 0) {
      $("#workMore").hide();
      $("#workLess").show();
    }
  });

  $("#workLess").click(function (e) {
    $(".copywork-item").hide();
    $(".copywork-item").slice(0, 8).show();
    $("#workMore").show();
    $("#workLess").hide();
  });
});

//=========== marketing collatrals loadmore

$(document).ready(function () {
  $("#conceptLess").hide();
  $(".concept-item").slice(0, 6).show();

  $("#conceptMore").click(function (e) {
    e.preventDefault();

    $(".concept-item:hidden").slice(0, 6).fadeIn("slow");

    if ($(".concept-item:hidden").length == 0) {
      $("#conceptMore").hide();
      $("#conceptLess").show();
    }
  });

  $("#conceptLess").click(function (e) {
    $(".concept-item").hide();
    $(".concept-item").slice(0, 6).show();
    $("#conceptMore").show();
    $("#conceptLess").hide();
  });
});

//=========== case study loadmore

$(document).ready(function () {
  $("#studyLess").hide();

  $("#studyMore").click(function (e) {
    e.preventDefault();

    $(".studylist-item:hidden").slice(0, 3).fadeIn("slow");

    if ($(".studylist-item:hidden").length == 0) {
      $("#studyMore").hide();
      $("#studyLess").show();
    }
  });

  $("#studyLess").click(function (e) {
    $(".studylist-item").hide();
    $(".studylist-item").slice(0, 5).css("display", "block");
    $("#studyMore").show();
    $("#studyLess").hide();
  });
});

//=========== menu video popup

$(document).ready(function () {
  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });

  $("#videoModal").on("shown.bs.modal", function (e) {
    $("#popup-menuvideo source").attr("src", $videoSrc);
    $("#popup-menuvideo")[0].load();
    $("#popup-menuvideo")[0].play();
  });

  $("#videoModal").on("hide.bs.modal", function (e) {
    $("#popup-menuvideo")[0].pause();
    $("#popup-menuvideo source").attr("src", "");
  });
});

//==================== webpage autoplay tab

function tabChange() {
  var tabs = $(".weboffer-tabs .nav-tabs > li");
  var active = $(".weboffer-tabs .nav-tabs > li").find("a.active");
  var next = active.parent("li").next("li").find("a");
  if (next.length === 0) {
    next = $(".weboffer-tabs .nav-tabs > li").first().find("a");
  }

  // Remove 'active' class from all tabs
  $(".weboffer-tabs .nav-tabs > li").find("a").removeClass("active");
  // Add 'active' class to the next tab
  next.addClass("active");

  // Get the target tab pane and show it
  var targetPaneId = next.attr("href");
  $(".webtab-content")
    .find(targetPaneId)
    .addClass("active")
    .siblings()
    .removeClass("active");
}

var tabCycle = setInterval(tabChange, 5000);

//====================Animation Effect
if (typeof WOW === "function") {
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();
}

//=========== home video

window.addEventListener("load", videoScroll);
window.addEventListener("scroll", videoScroll);

function videoScroll() {
  if (document.querySelectorAll(".parallex-area video[loop]").length > 0) {
    var windowHeight = window.innerHeight,
      videoEl = document.querySelectorAll(".parallex-area video[loop]");

    for (var i = 0; i < videoEl.length; i++) {
      var thisVideoEl = videoEl[i],
        videoHeight = thisVideoEl.clientHeight,
        videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if (
        videoClientRect <= windowHeight - videoHeight * 0.5 &&
        videoClientRect >= 0 - videoHeight * 0.5
      ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }
    }
  }
}

//=========== scrol image effect

if (typeof ScrollOut === "function") {
  ScrollOut({});
}

// Defer Social Organic media until it is visible or explicitly played.
$(function () {
  const socialVideos = document.querySelectorAll(
    ".latest-influence video[data-poster], .influencer-head video[data-poster]"
  );

  const revealPoster = function (video) {
    if (video.dataset.poster && !video.poster) {
      video.poster = video.dataset.poster;
    }
  };

  const loadVideoSource = function (video) {
    revealPoster(video);
    if (video.dataset.src && !video.getAttribute("src")) {
      video.src = video.dataset.src;
      video.load();
    }
  };

  if ("IntersectionObserver" in window) {
    const posterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            revealPoster(entry.target);
            posterObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "500px 0px" }
    );

    socialVideos.forEach(function (video) {
      posterObserver.observe(video);
    });
  } else {
    socialVideos.forEach(revealPoster);
  }

  $(document).on("click", ".latest-influence .button img[data-video]", function (event) {
    event.preventDefault();
    const video = $(this).closest(".video").find("video").get(0);
    if (!video) return;

    if (!video.paused) {
      video.pause();
      $(this).closest(".video").removeClass("hover");
      return;
    }

    document.querySelectorAll(".latest-influence video").forEach(function (otherVideo) {
      if (otherVideo !== video) {
        otherVideo.pause();
        $(otherVideo).closest(".video").removeClass("hover");
      }
    });

    loadVideoSource(video);
    const playRequest = video.play();
    if (playRequest && typeof playRequest.catch === "function") {
      playRequest.catch(function () {});
    }
    $(this).closest(".video").addClass("hover");
  });

  const youtubeFrame = document.querySelector("#popupModal iframe[data-src]");
  if (youtubeFrame) {
    $("#popupModal").one("show.bs.modal", function () {
      youtubeFrame.src = youtubeFrame.dataset.src;
    });
  }
});

//=========== number counter

if ($.fn.counterUp) {
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
}

//=========== copywrite autotype

// Code to run only on /specific-page

var dataset = ["Blog Post", "Website Content", "Tutorials", "Email Copy"];
var datasetIndex = 0;
var data;
var pause = 100;
var addTime = 150;
var removeTime = 120;
var letterIndex = 0;
var currentInterval;

var autoType = document.getElementById("autoType");

function textRotation() {
  if (datasetIndex == dataset.length) {
    datasetIndex = 0;
  }

  data = dataset[datasetIndex];
  letterIndex = 0;
  autoType.className = "caretAnimation";
  currentInterval = window.setInterval(addLetter, addTime);
}

function addLetter() {
  autoType.innerHTML += data.charAt(letterIndex);
  letterIndex += 1;

  if (letterIndex > data.length) {
    autoType.className = "caretAnimation";
    window.clearInterval(currentInterval);
    window.setTimeout(startRemove, pause);
  }
}

function startRemove() {
  currentInterval = window.setInterval(removeLetter, removeTime);
}

function removeLetter() {
  var currentString = autoType.innerHTML;
  autoType.innerHTML = currentString.slice(0, -1);

  if (currentString.length < 1) {
    window.clearInterval(currentInterval);
    datasetIndex += 1;
    textRotation();
  }
}

if (autoType) {
  window.setTimeout(textRotation, 500);
}

// for video
// document.addEventListener("DOMContentLoaded", function() {
//     // Select all buttons (image tags)
//     var buttons = document.querySelectorAll(".button img");
//     buttons.forEach(button => {
//         button.addEventListener("click", playPause);
//     });

//     // Function to play/pause video and update button image
//     function playPause(event) {
//         var video = event.target.parentElement.nextElementSibling;

//         if (video.paused) {
//             video.play();
//             event.target.src = "website/img/pause_button.png"; // Change image source to pause button
//             event.target.parentElement.classList.add('hover');
//         } else {
//             video.pause();
//             event.target.src = "website/img/play_button.png"; // Change image source back to play button
//             event.target.parentElement.classList.remove('hover');
//         }

//         // Update button style based on video state
//         video.addEventListener('play', function() {
//             event.target.parentElement.classList.add('hover');
//         });

//         video.addEventListener('pause', function() {
//             event.target.parentElement.classList.remove('hover');
//         });

//         // Update button image and style when video ends
//         video.addEventListener('ended', function() {
//             event.target.src = "website/img/play_button.png";
//             event.target.parentElement.classList.remove('hover');
//         });

//         // Select all videos to create a new function to show progress bars
//         var videos = document.querySelectorAll('.videos');
//         videos.forEach(video => {
//             video.addEventListener('timeupdate', function(event) {
//                 var bars = event.target.nextElementSibling;
//                 var progressPos = event.target.currentTime / event.target.duration;
//                 bars.style.width = progressPos * 100 + '%';
//                 if (video.paused) {
//                     bars.classList.add('hover');
//                 }
//                 if (video.ended) {
//                     bars.style.width = 0;
//                     bars.classList.remove('hover');
//                 }
//             });
//         });
//     }
// });

$(document).ready(function () {});

//========== video page on scroll line

var isInViewport = function (elem) {
  var distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};
var findMe = document.querySelectorAll(".scroll-lines");

window.addEventListener(
  "scroll",
  function (event) {
    // add event on scroll
    findMe.forEach((element) => {
      //for each .thisisatest
      if (isInViewport(element)) {
        //if in Viewport
        element.classList.add("is-visible");
      }
    });
  },
  false,
);

//========== Stories auto tab

$(document).ready(function () {
  $(".casestudy-slide-1").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".casestudy-slide-1",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    cssEase: "ease",
    infinite: true,
    speed: 1800,
    autoplaySpeed: 1500,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    pauseOnHover: false,
    centerMode: true,
  });

  $(".casestudy-slide-2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    cssEase: "ease",
    speed: 1800,
    autoplaySpeed: 1500,
    asNavFor: ".casestudy-slide-1",
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    pauseOnHover: false,
  });

  $(".casestudy-slide-1, .casestudy-slide-2").hover(
    function () {
      $(".casestudy-slide-1, .casestudy-slide-2").slick("slickPause");
    },
    function () {
      $(".casestudy-slide-1, .casestudy-slide-2").slick("slickPlay");
    },
  );

  $(".casestudy-slide-1").on("click", ".slick-slide", function (e) {
    var index = $(this).data("slick-index");
    $(".casestudy-slide-2").slick("slickGoTo", index);
  });
});

//========== blog page dropdown

// $(function() {
//   $('.bloglist-filter .caption-filter').on('click', function() {
//     console.log('sssssssssssssssssss');

//     $(this).parent().toggleClass('open');
//   });

//   $('.bloglist-filter .list .item').on('click', function() {
//     console.log('aaaaaaaaaaaaaaaaaaaa');
//     $('.bloglist-filter .list .item').removeClass('selected');
//     $(this).addClass('selected').parent().parent().removeClass('open').children('.caption-filter').text( $(this).text() );
//   });

//   $(document).on('keyup', function(evt) {
//     if ( (evt.keyCode || evt.which) === 27 ) {
//       $('.bloglist-filter').removeClass('open');
//     }
//   });

//   $(document).on('click', function(evt) {
//     if ( $(evt.target).closest(".bloglist-filter > .caption-filter").length === 0 ) {
//       $('.bloglist-filter').removeClass('open');
//     }
//   });
// });

//=========== our-work slider

$(".work-slider").slick({
  dots: false,
  slidesToShow: 2,
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  centerMode: true,
  centerPadding: "250px",
  loop: true,
  pauseOnHover: false,
  arrows: false,
  speed: 1000,
  cssEase: "ease",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        centerPadding: "150px",
      },
    },

    {
      breakpoint: 601,
      settings: {
        slidesToShow: 2,
        centerPadding: "10px",
      },
    },
  ],
});
