$(document).ready(function () {
  let imageNumberTopRow = $(".topRow div").length;
  let imageNumberBotRow = $(".topRow div").length;

  $(".rightArrow").click(function () {
    let bufferTrFirstImage = $(".topRow div:first-child").html();
    let bufferTrLastImage = $(".topRow div:last-child").html();
    let bufferBrFirstImage = $(".botRow div:first-child").html();
    let bufferBrLastImage = $(".botRow div:last-child").html();
    let bufferTrNextImage, bufferTrCurrentImage,
      bufferBrNextImage, bufferBrCurrentImage;

    $(".leftArrow").prop('disabled', true);
    $(".rightArrow").prop('disabled', true);

    /* Top row */

    $.each($(".topRow div"), function (index, value) {
      if (index === 0) {
        bufferTrFirstImage = $(this).html();
        $(this).html(bufferTrLastImage).hide()
          .animate({right: "-=40px"}, 600)
          .animate({right: "0"}, 600)
          .fadeIn({duration: 500, queue: false});
      }
      if (index === 1) {
        bufferTrCurrentImage = $(this).html();
        $(this).html(bufferTrFirstImage)
          .animate({right: "-=40px"}, 600)
          .animate({right: "0"}, 600);
      }
      if (index > 2) {
        bufferTrCurrentImage = bufferTrNextImage;
      }
      if (index > 1 && index <= imageNumberTopRow) {
        bufferTrNextImage = $(this).html();
        $(this).html(bufferTrCurrentImage)
          .animate({right: "-=40px"}, 600)
          .animate({right: "0"}, 600);
      }

    });

    /* Bottom row */

    $.each($(".botRow div"), function (index, value) {

      if (index === 0) {
        bufferBrFirstImage = $(this).html();
        $(this).html(bufferBrLastImage).hide()
          .animate({right: "-=40px"}, 600)
          .animate({right: "0"}, 600)
          .fadeIn({duration: 500, queue: false});
      }
      if (index === 1) {
        bufferBrCurrentImage = $(this).html();
        $(this).html(bufferBrFirstImage)
          .animate({right: "-=40px"}, 600)
          .animate({right: "0"}, 600);
      }
      if (index > 2) {
        bufferBrCurrentImage = bufferBrNextImage;
      }
      if (index > 1 && index <= imageNumberBotRow) {
        bufferBrNextImage = $(this).html(); /* buffer */
        $(this).html(bufferBrCurrentImage)
          .animate({right: "-=40px"}, 600)
          .animate({right: "0"}, {
            duration: 600, complete: function () {
              $(".leftArrow").prop('disabled', false);
              $(".rightArrow").prop('disabled', false);
            }
          });
      }
    });
  });

  $(".leftArrow").click(function () {
    let bufferTrFirstImg = $(".topRow div:first-child").html();
    let bufferBrFirstImg = $(".botRow div:first-child").html();
    let bufferTrNextImg, bufferBrNextImg;

    $(".leftArrow").prop('disabled', true);
    $(".rightArrow").prop('disabled', true);

    /* Top row */

    $.each($(".topRow div"), function (index, value) {

      if (index == 0) {
        bufferTrFirstImg = $(this).html();
        bufferTrNextImg = $(this).next().html();
        $(this).html(bufferTrNextImg)
          .animate({left: "-=80px"}, 700)
          .animate({left: "0"}, 700);
      }
      if (index > 0 && index < imageNumberTopRow) {
        bufferTrNextImg = $(this).next().html();
        $(this).html(bufferTrNextImg)
          .animate({left: "-=80px"}, 700)
          .animate({left: "0"}, 700);
      }
      if (index == imageNumberTopRow - 1) {
        $(this).html(bufferTrFirstImg).hide()
          .fadeIn({duration: 500, queue: false});
      }
    });

    /* Bottom row */

    $.each($(".botRow div"), function (index, value) {

      if (index === 0) {
        bufferBrFirstImg = $(this).html();
        bufferBrNextImg = $(this).next().html();
        $(this).html(bufferBrNextImg)
          .animate({left: "-=80px"}, 700)
          .animate({left: "0"}, 700);
      }
      if (index > 0 && index < imageNumberBotRow) {
        bufferBrNextImg = $(this).next().html();
        $(this).html(bufferBrNextImg)
          .animate({left: "-=80px"}, 700)
          .animate({left: "0"}, {
            duration: 700,
            complete: function () {
              $(".leftArrow").prop('disabled', false);
              $(".rightArrow").prop('disabled', false);
            }
          });
      }
      if (index == imageNumberBotRow - 2) {
        $(this).html(bufferBrFirstImg).hide()
          .fadeIn({duration: 500, queue: false});
      }
    });
  });
});
