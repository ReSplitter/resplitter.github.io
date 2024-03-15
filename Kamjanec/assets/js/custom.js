$(document).ready(function() {

    "use strict";

  // Select customization

  if ($('.js-select').length) {
    $('.js-select').selectpicker();
  }


  // Sliders

  if ($('[data-slick]').length) {
    $('[data-slick]').slick();
  }

  if ($('[data-slider-main]').length) {
    $('[data-slider-main]').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '[data-slider-nav]'
    });
    $('[data-slider-nav]').slick({
      asNavFor: '[data-slider-main]',
      arrows: false,
      focusOnSelect: true,
      variableWidth: true
    });
  }




  // Go to the top of the page

  $('[data-up]').on( 'click', function() {
    $('body,html').animate({scrollTop:0},800);
  });
  $(window).on('scroll', function () {
      let fromTop = $(this).scrollTop();
      if (fromTop > 200) {
          $('[data-up]').addClass('active');
      } else {
         $('[data-up]').removeClass('active');
       }
  });

  // Mobile menu

  $('[data-nav-trigger]').on('click', function() {
    $(this).toggleClass('show');
    $('.main-nav__inner').toggleClass('show');
    $('body').toggleClass('st-hidden');
  })


  // Mask input

  // if ($('input[type=tel]').length) {
  //   $("input[type=tel]").mask("+7 (999) 999-99-99");
  // };



  // Password display
  $('.js-viewPassw').on('click', function() {
    if ($(this).prev().attr('type') == 'password') {
      $(this).addClass('st-view');
      $(this).prev().attr('type', 'text');
    }
    else {
      $(this).prev().attr('type', 'password');
      $(this).removeClass('st-view');
    }
  });


  // Initialization of the slider on tabs
  $('[data-toggle="tab"]').on('shown.bs.tab', function (event) {
    $('[data-slick]').slick("unslick");
    $('[data-slick]').slick();
  })


  // search
  $("[data-open-search]").on("click", function(){
    $("this").toggleClass("active");
    $("[data-search-container]").fadeToggle();

    $("[data-open-search]").find("img").fadeToggle(0);
  })

  $("[data-close-search]").on("click", function(){
    $("[data-open-search]").removeClass("active");
    $("[data-search-container]").fadeOut();
  })
  // end


  // clear datepicker
  $("[data-remove-content-datepicker]").on("click", function(e){
    $(this).parent().siblings('[data-datepicker]').val(" ");
      $(this).parent().siblings('[data-datepicker]').datepicker().data('datepicker').clear();
      if($(this).parent().parent().hasClass("input-datepicker")){
      } else {
        $(this).parent().siblings('[data-datepicker]').mask("99.99.9999 - 99.99.9999").focus();
      }
  })
  // end


  // clear input value
  $("[data-remove-content-search]").on("click", function(e){
    $(this).parent().siblings('input').val("");
  })
  // end


  // clear content search
  $("[data-close-content-search]").on("click", function(){
    $("[data-content-search]").val("");
  })
  // end

  if ($('[data-datepicker]').length) {
      var $pickers = $('[data-datepicker]');

      $pickers.each(function (i, picker) {
          $(picker).datepicker({
              autoUpdateInput: false,
              position: 'bottom center',
              range: true,
              startDate: new Date(),
              toggleSelected: false,
              language: 'uk',
              onSelect: function onSelect(fd, date) {
                  $("[data-date-mask]").unmask();
              }
          });
          // .mask("99.99.9999 - 99.99.9999");

          $(picker).on("focusout", function (e) {
              $(document).on("click", function (e) {
                  var target = $(e.target);
                  // console.log(target);
                  if (!target.hasClass("datepicker-input")) {
                      if (target.closest(".datepickers-container").length == 0) {
                          var dateVal = $(picker).val(),
                              startDate = dateVal.split(" - ").pop(),
                              endDate = dateVal.split(" - ").shift();

                          startDateNum = startDate.replaceAll(".", "").replaceAll("-", "").replaceAll("_", "").replaceAll(" ", "");
                          endDateNum = endDate.replaceAll(".", "").replaceAll("-", "").replaceAll("_", "").replaceAll(" ", "");


                          if (startDateNum.length >= 8 & endDateNum.length >= 8) {

                              $(picker).datepicker().data("datepicker").selectDate(
                                  [new Date(
                                      startDateNum.substr(4, 4),
                                      startDateNum.substr(2, 2) - 1,
                                      startDateNum.substr(0, 2)
                                  ),
                                  new Date(
                                      endDateNum.substr(4, 4),
                                      endDateNum.substr(2, 2) - 1,
                                      endDateNum.substr(0, 2)
                                  )]
                              );
                          }
                      }
                  }
              })
          })

          $(picker).on('keypress', function (e) {
              e.preventDefault();
              if (e.which == 13) {
                  var dateVal = $(picker).val(),
                      startDate = dateVal.split(" - ").pop(),
                      endDate = dateVal.split(" - ").shift();

                  startDateNum = startDate.replaceAll(".", "").replaceAll("-", "").replaceAll("_", "").replaceAll(" ", "");
                  endDateNum = endDate.replaceAll(".", "").replaceAll("-", "").replaceAll("_", "").replaceAll(" ", "");


                  if (startDateNum.length >= 8 & endDateNum.length >= 8) {

                      $(picker).datepicker().data("datepicker").selectDate(
                          [new Date(
                              startDateNum.substr(4, 4),
                              startDateNum.substr(2, 2) - 1,
                              startDateNum.substr(0, 2)
                          ),
                          new Date(
                              endDateNum.substr(4, 4),
                              endDateNum.substr(2, 2) - 1,
                              endDateNum.substr(0, 2)
                          )]
                      );
                  }
              }
          });
      })
  }

  if($("[data-date-mask]").length) {
    $("[data-date-mask]").mask("99.99.9999 - 99.99.9999");
  }

 // setTimeout(function () {
 //    $('#successModal').modal();
 //  }, 700);


});

