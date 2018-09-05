$(function() {
  $("ul.navigation li").click(function() {
    var ht = $(window).height();
    var i = $(this).index();
    var nowTop = i * ht;

    $("html,body").stop().animate({
      "scrollTop": nowTop
    }, 300);

  $("ul.navigation li").removeClass("on");
  $(this).addClass("on");

});

  $(".slide").on("mousewheel", function(event, d) {
    if (d < 0) {
      var next = $(this).next().offset().top;
      $("html,body").stop().animate({
        "scrollTop": next
      }, 300);
    } else if (d > 0) {
      var prev = $(this).prev().offset().top;
      $("html,body").stop().animate({
        "scrollTop": prev
      }, 300);
    }
  });


  $(window).scroll(function() {
    var ht = $(window).height();
    var st = $(window).scrollTop();

    if (st >= 0 * ht && st < 1 * ht) {
      $("ul.navigation li").removeClass();
      $("ul.navigation li").eq(0).addClass("on");
    } else if (st >= 1 * ht && st < 2 * ht) {
      $("ul.navigation li").removeClass();
      $("ul.navigation li").eq(1).addClass("on");
    } else if (st >= 2 * ht && st < 3 * ht) {
      $("ul.navigation li").removeClass();
      $("ul.navigation li").eq(2).addClass("on");
    } else if (st >= 3 * ht && st < 4 * ht) {
      $("ul.navigation li").removeClass();
      $("ul.navigation li").eq(3).addClass("on");
    } else if (st >= 4 * ht && st < 5 * ht) {
      $("ul.navigation li").removeClass();
      $("ul.navigation li").eq(4).addClass("on");
    } else if (st >= 5 * ht && st < 6 * ht) {
      $("ul.navigation li").removeClass();
      $("ul.navigation li").eq(5).addClass("on");
    } else if (st >= 6 * ht && st < 7 * ht) {
      $("ul.navigation li").removeClass();
      $("ul.navigation li").eq(6).addClass("on");
    }

  });
});

// console.log(ht);
