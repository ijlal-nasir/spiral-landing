import * as bootstrap from "bootstrap";
import $ from "jquery";
import "slick-carousel";

// const carouselContainer = document.getElementsByClassName("slick-carousel")[0];
// console.log("carouselContainer", carouselContainer);

// carouselContainer.slick({});

$(".slick-carousel").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  adaptiveHeight: true,
});
