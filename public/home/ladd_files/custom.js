(function($) {
  'use strict';
  $(document).ready(function() {
      if ($(window).width() > 500) {
          $(".client-slider,.client-slider2").slick({
              autoplay: false,
              arrows: false,
              dots: false,
              slidesToShow: 5,
              centerPadding: "5px",
              draggable: false,
              infinite: true,
              pauseOnHover: false,
              pauseOnFocus: false,
              swipe: false,
              touchMove: false,
              vertical: false,
              speed: 3000,
              autoplaySpeed: 0,
              cssEase: "linear"
          });
          $(".client-slider1,.client-slider3").slick({
              autoplay: false,
              arrows: false,
              dots: false,
              slidesToShow: 5,
              centerPadding: "5px",
              draggable: false,
              infinite: true,
              pauseOnHover: false,
              pauseOnFocus: false,
              swipe: false,
              touchMove: false,
              vertical: false,
              speed: 3000,
              autoplaySpeed: 0,
              cssEase: "linear"
          });
          setInterval(function() {
              $(".client-slider,.client-slider2").slick("slickNext");
          }, 0);
          setInterval(function() {
              $(".client-slider1,.client-slider3").slick("slickPrev");
          }, 0);
      } else {
          $(".client-slider").slick({
              autoplay: true,
              arrows: false,
              dots: false,
              slidesToShow: 3,
              draggable: false,
              infinite: true,
              pauseOnHover: false,
              swipe: false,
              touchMove: false,
              speed: 2000,
              autoplaySpeed: 0,
              cssEase: "linear"
          });
          $(".client-slider1").slick({
              autoplay: true,
              arrows: false,
              dots: false,
              slidesToShow: 3,
              draggable: false,
              infinite: true,
              pauseOnHover: false,
              swipe: false,
              touchMove: false,
              speed: 2000,
              autoplaySpeed: 0,
              cssEase: "linear"
          });
      }

      $('#testimonials-slider.owl-carousel').owlCarousel({
          loop: true,
          nav: true,
          dots: false,
          items: 1,
          autoplay: false,
          smartSpeed: 450,
          autoplayHoverPause: true,
          navText: ["<i class='nav-prev-icon'></i>", "<i class='nav-next-icon'></i>"],
          onTranslate: function() {}
      });
      $('#testimonials-slider-23.owl-carousel').owlCarousel({
          loop: true,
          nav: true,
          dots: false,
          items: 3,
          autoplay: true,
          autoplayTimeout: 2000,
          margin: 20,
          smartSpeed: 450,
          autoplayHoverPause: true,
          navText: ["<i class='nav-prev-icon'></i>", "<i class='nav-next-icon'></i>"],
          responsive: {
              0: {
                  items: 1,
                  margin: 10,
                  autoWidth: false
              },
              480: {
                  items: 1,
                  autoWidth: false
              },
              768: {
                  items: 3
              }
          }
      });
      $('#testimonials-slider-24.testimonials-slider-single.owl-carousel').owlCarousel({
          items: 1,
          margin: 20
      });

      $('#client-slider.owl-carousel').owlCarousel({
          loop: true,
          margin: 0,
          nav: false,
          dots: true,
          responsive: {
              0: {
                  items: 1
              }
          }
      });
      $('#wide-slider.owl-carousel').owlCarousel({
          items: 4.5,
          loop: true,
          margin: 15,
          nav: true,
          dots: false,
          autoplay: true,
          autoplayTimeout: 1000,
          autoplayHoverPause: true,
          responsive: {
              0: {
                  items: 1,
                  margin: 10,
                  autoWidth: false
              },
              480: {
                  items: 1,
                  autoWidth: false
              },
              768: {
                  items: 4.5
              }
          }
      });
      $('#testimonials.owl-carousel').owlCarousel({
          loop: true,
          nav: true,
          dots: false,
          margin: 10,
          items: 1,
          responsiveClass: true,
          navText: ["<i class='left'></i>", "<i class='right'></i>"],
          responsive: {
              0: {
                  items: 1,
                  nav: true
              },
              600: {
                  items: 1,
                  nav: true
              },
              1000: {
                  items: 1,
                  nav: true
              }
          }
      });
      $('.testimonials.owl-carousel').owlCarousel({
          loop: true,
          nav: true,
          dots: false,
          margin: 30,
          items: 1,
          responsiveClass: true,
          responsive: {
              0: {
                  items: 1,
                  nav: true
              },
              600: {
                  items: 1,
                  nav: true
              },
              1000: {
                  items: 1,
                  nav: true
              }
          }
      });
      $('#process-carousel.owl-carousel').owlCarousel({
          loop: true,
          nav: false,
          dots: true,
          margin: 15,
          items: 4,
          autoplay: true,
          smartSpeed: 450,
          autoplayHoverPause: true,
          responsiveClass: true,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 1
              },
              1000: {
                  items: 4
              }
          }
      });
      $('#sfCloudCarousel.owl-carousel').owlCarousel({
          loop: true,
          nav: false,
          dots: true,
          margin: 15,
          items: 3,
          autoplay: true,
          smartSpeed: 450,
          autoplayHoverPause: true,
          responsiveClass: true,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 1
              },
              1000: {
                  items: 3
              }
          }
      });

      if ($(window).width() < 481) {
          $('.date-section-carousel').owlCarousel({
              loop: true,
              nav: true,
              dots: false,
              margin: 10,
              items: 1,
              responsiveClass: true,
              center: true,
              navText: ["<i class='left'></i>", "<i class='right'></i>"],
              responsive: {
                  0: {
                      items: 1,
                      nav: true,
                      center: false,
                      margin: 0
                  },
                  600: {
                      items: 1,
                      nav: true
                  },
                  1000: {
                      items: 1,
                      nav: true
                  }
              }
          });
      }
      $('#center-white-carousel.owl-carousel').owlCarousel({
          center: true,
          loop: true,
          margin: 70,
          dots: false,
          autoplay: false,
          responsive: {
              320: {
                  items: 1
              },
              480: {
                  items: 1
              },
              768: {
                  items: 2
              },
              992: {
                  items: 3
              },
              1200: {
                  items: 4
              }
          }
      });
      $('#tug-carousel.owl-carousel').owlCarousel({
          loop: true,
          nav: false,
          dots: true,
          margin: 0,
          items: 4,
          autoplay: false,
          smartSpeed: 450,
          autoplayHoverPause: true,
          responsiveClass: true,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 2
              },
              1000: {
                  items: 4
              }
          }
      });
      $('#tug-carousel-no-center.owl-carousel').owlCarousel({
          loop: true,
          nav: false,
          dots: true,
          margin: 15,
          items: 4,
          autoplay: true,
          smartSpeed: 450,
          autoplayHoverPause: true,
          responsiveClass: true,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 2
              },
              1000: {
                  items: 4
              }
          }
      });

      $(".video-testimonial-slider a").fancybox();

      $('.analytics-busi-slider').slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      infinite: true,
                      dots: true
                  }
              },
              {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }
          ]
      });

      $('.video-testimonial-slider').slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      infinite: true,
                      dots: true
                  }
              },
              {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }
          ]
      });

      $('.text-testimonial-slider').slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      infinite: true,
                      dots: true
                  }
              },
              {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }
          ]
      });

      $('.nav-item .nav-link').on('click', function() {
          $('.video-testimonial-slider').slick('refresh');
      });

      $('.nav-item .nav-link').on('click', function() {
          $('.text-testimonial-slider').slick('refresh');
      });
  });

  $('[data-toggle="popover"]').popover();
  var $popoverElements = $('[data-toggle="popover"]');
  $popoverElements.popover({
      placement: function(context, source) {
          var position = $(source).offset();
          var windowHeight = $(window).height();
          if (position.top > windowHeight / 2) {
              return "top";
          } else {
              return "bottom";
          }
      }
  });

  $(document).on('click', function(e) {
      $popoverElements.each(function() {
          var $popover = $(this);
          if (!$popover.is(e.target) && $popover.has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
              $popover.popover('hide');
          }
      });
  });
})(jQuery);
