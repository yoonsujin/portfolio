$(function() {

  $(".section").on("mousewheel", function(event, d) {
    if (d < 0) {
      var min = $("#wrap").offset().left;
      var offset = $(this).next().offset().left;
      var next = offset - min;
      $("html,body").stop().animate({
        "scrollLeft": next
      }, 600);
    } else if (d > 0) {
      var min = $("#wrap").offset().left;
      var offset = $(this).prev().offset().left;
      var prev = offset - min;
      $("html,body").stop().animate({
        "scrollLeft": prev
      }, 600);
    }
  });


  $(".gnb > li").click(function() {
    var i = $(this).index();
    var wd = $(".section").width();
    var now = i * wd;

    $("html,body").stop().animate({
      "scrollLeft": now
    }, 600);
  });


  $(window).trigger("scroll");
  $(window).scroll(function() {
    var scl = $(window).scrollLeft();
    var contents = $(".section");
    $(".scrioll span").text(scl);
    if (scl >= contents.eq(0).offset().left && scl < contents.eq(1).offset().left) {
      $(".skill_img").stop().animate({
        'opacity': '1',
        'width': '12.2%'
      });
    }
  });

  // 3번째 화면으로 스크롤 옮기면 나타나는 애니메이션
  $(window).scroll(function() {
    var scl = $(window).scrollLeft();
    var contents = $(".section");
    $(".scroll span").text(scl);
    if (scl >= contents.eq(1).offset().left && scl < contents.eq(2).offset().left) {
      $("#pr3_right .star").stop().animate({
        'top': '5%',
        'left': '48%'
      }, function() {
        $("#pr3_right .star #star_center").stop().animate({
          'height': '1500%'
        }, function() {
          $(".career_cover").stop().animate({
            'width': '13826%',
            'height': '1px'
          }, function() {
            $(".career_cover .Career").stop().animate({
              'opacity': '1',
              'height': '100px'
            });
          });
        });
      });
    };
  });






  $("#click_input1").click(function() {
    var str = "hello world!";
    var c = 0;
    var text_len = str.length;
    setInterval(function() {
      if (c < text_len)
        $('#click1_output').append(str[c]);
      c++;
    }, 60);
    $("#click_input1").hide();
  });






  $("#wrap .section #skill_comen #skill_name h2").hide();

  $("#skill .skii_1").mouseover(function() {
    $("#wrap .section #skill_comen #skill_name h2").eq(0).slideDown("200");
    $("#wrap .section #skill_comen #skill_name").addClass("on");
    $("#wrap .section #skill_comen #skill_ex .skill_point").css("width", "80%");
    $("#wrap .section #skill_comen #skill_ex .skill_point").text("80%")
    $("#wrap .section div#skill .skill_img img").eq(0).css("transform", "rotate(-10deg)");
    var str1 = "html을 능숙하게 이용할 수 있습니다."
    var cc = 0;
    var text_len = str1.length;
    setInterval(function() {
      if (cc < text_len)
        $('#siill_comment').append(str1[cc]).stop();
      cc++;
    }, 1);
    $("#siill_comment").text();
  });


  $("#skill .skii_1").mouseleave(function() {
    $("#wrap .section #skill_comen #skill_name h2").eq(0).hide("200");
    $("#wrap .section #skill_comen #skill_name").removeClass("on");
    $("#wrap .section #skill_comen #skill_ex .skill_point").css("width", "00%");
    $("#wrap .section div#skill .skill_img img").eq(0).css("transform", "rotate(0deg)");
    $("#siill_comment").empty();
  });

  $("#skill .skii_2").mouseover(function() {
    $("#wrap .section #skill_comen #skill_name h2").eq(1).slideDown()
    $("#wrap .section #skill_comen #skill_name").addClass("on");
    $("#wrap .section #skill_comen #skill_ex .skill_point").css("width", "70%");
    $("#wrap .section #skill_comen #skill_ex .skill_point").text("70%")
    $("#wrap .section div#skill .skill_img img").eq(1).css("transform", "rotate(-10deg)");
    var str1 = "css를 능숙하게 이용할 수 있습니다."
    var cc = 0;
    var text_len = str1.length;
    setInterval(function() {
      if (cc < text_len)
        $('#siill_comment').append(str1[cc]).stop();
      cc++;
    }, 1);
    $("#siill_comment").empty();
  });

  $("#skill .skii_2").mouseleave(function() {
    $("#wrap .section #skill_comen #skill_name h2").eq(1).hide("200");
    $("#wrap .section #skill_comen #skill_name").removeClass("on");
    $("#wrap .section #skill_comen #skill_ex .skill_point").css("width", "0%");
    $("#wrap .section div#skill .skill_img img").eq(1).css("transform", "rotate(0deg)");
    $("#siill_comment").empty()

  });

  $("#skill .skii_3").mouseover(function() {
    $("#wrap .section #skill_comen #skill_name h2").eq(2).slideDown()
    $("#wrap .section #skill_comen #skill_name").addClass("on");
    $("#wrap .section #skill_comen #skill_ex .skill_point").css("width", "40%");
    $("#wrap .section #skill_comen #skill_ex .skill_point").text("40%")
    $("#wrap .section div#skill .skill_img img").eq(2).css("transform", "rotate(-10deg)");
    var str1 = "javaScript 능숙하게 이용할 수 있습니다."
    var cc = 0;
    var text_len = str1.length;
    setInterval(function() {
      if (cc < text_len)
        $('#siill_comment').append(str1[cc]).stop();
      cc++;
    }, 1);
    $("#siill_comment").empty();

  });

  $("#skill .skii_3").mouseleave(function() {
    $("#wrap .section #skill_comen #skill_name h2").eq(2).hide("200");
    $("#wrap .section #skill_comen #skill_name").removeClass("on");
    $("#wrap .section #skill_comen #skill_ex .skill_point").css("width", "0%");
    $("#wrap .section div#skill .skill_img img").eq(2).css("transform", "rotate(0deg)");
    $("#siill_comment").empty()
  });

  $("#skill .skii_4").mouseover(function() {
    $("#wrap .section #skill_comen #skill_name h2").eq(3).slideDown()
    $("#wrap .section #skill_comen #skill_name").addClass("on");
    $("#wrap .section #skill_comen #skill_ex .skill_point").css("width", "90%");
    $("#wrap .section #skill_comen #skill_ex .skill_point").text("90%");
    $("#wrap .section div#skill .skill_img img").eq(3).css("transform", "rotate(-10deg)");
    var str1 = "photoshop 능숙하게 이용할 수 있습니다."
    var cc = 0;
    var text_len = str1.length;
    setInterval(function() {
      if (cc < text_len)
        $('#siill_comment').append(str1[cc]).stop();
      cc++;
    }, 1);
    $("#siill_comment").empty();
  });

  $("#skill .skii_4").mouseleave(function() {
    $("#wrap .section #skill_comen #skill_name h2").eq(3).hide("200");
    $("#wrap .section #skill_comen #skill_name").removeClass("on");
    $("#wrap .section #skill_comen #skill_ex .skill_point").css("width", "00%");
    $("#wrap .section div#skill .skill_img img").eq(3).css("transform", "rotate(0deg)");
    $("#siill_comment").empty()
  });

  $("#skill .skii_5").mouseover(function() {
    $("#wrap .section #skill_comen #skill_name h2").eq(4).slideDown()
    $("#wrap .section #skill_comen #skill_name").addClass("on");
    $("#wrap .section #skill_comen #skill_ex .skill_point").css("width", "80%");
    $("#wrap .section #skill_comen #skill_ex .skill_point").text("80%")
    $("#wrap .section div#skill .skill_img img").eq(4).css("transform", "rotate(-10deg)");
    var str1 = "Illustrator를 능숙하게 이용할 수 있습니다."
    var cc = 0;
    var text_len = str1.length;
    setInterval(function() {
      if (cc < text_len)
        $('#siill_comment').append(str1[cc]).stop();
      cc++;
    }, 1);
    $("#siill_comment").empty();
  });

  $("#skill .skii_5").mouseleave(function() {
    $("#wrap .section #skill_comen #skill_name h2").eq(4).hide("200");
    $("#wrap .section #skill_comen #skill_name").removeClass("on");
    $("#wrap .section #skill_comen #skill_ex .skill_point").css("width", "00%");
    $("#wrap .section div#skill .skill_img img").eq(4).css("transform", "rotate(0deg)");
    $("#siill_comment").empty()
  });

  var imgNum1 = Math.floor(Math.random() * 9) + 1
  var imgNum2 = Math.floor(Math.random() * 9) + 1
  var imgNum3 = Math.floor(Math.random() * 9) + 1
  var imgNum4 = Math.floor(Math.random() * 9) + 1
  var imgNum5 = Math.floor(Math.random() * 9) + 1
  var imgNum6 = Math.floor(Math.random() * 9) + 1
  $(function() {
    function swing() {
      $('#star_1').animate({
        'width': '10px',
        'height': '10px'
      }, 600).animate({
        'width': '15.' + imgNum1 + 'px',
        'height': '15.' + imgNum1 + 'px'
      }, 600, swing);
    }
    swing();
  });
  $(function() {
    function swing() {
      $('#star_2').animate({
        'width': '10px',
        'height': '10px'
      }, 600).animate({
        'width': '15.' + imgNum2 + 'px',
        'height': '15.' + imgNum2 + 'px'
      }, 600, swing);
    }
    swing();
  });
  $(function() {
    function swing() {
      $('#star_3').animate({
        'width': '10px',
        'height': '10px'
      }, 600).animate({
        'width': '15.' + imgNum3 + 'px',
        'height': '15.' + imgNum3 + 'px'
      }, 600, swing);
    }
    swing();
  });
  $(function() {
    function swing() {
      $('#star_4').animate({
        'width': '10px',
        'height': '10px'
      }, 600).animate({
        'width': '15.' + imgNum4 + 'px',
        'height': '15.' + imgNum4 + 'px'
      }, 600, swing);
    }
    swing();
  });
  $(function() {
    function swing() {
      $('#star_5').animate({
        'width': '10px',
        'height': '10px'
      }, 600).animate({
        'width': '15.' + imgNum5 + 'px',
        'height': '15.' + imgNum5 + 'px'
      }, 600, swing);
    }
    swing();
  });
  $(function() {
    function swing() {
      $('#star_6').animate({
        'width': '10px',
        'height': '10px'
      }, 600).animate({
        'width': '15.' + imgNum6 + 'px',
        'height': '15.' + imgNum6 + 'px'
      }, 600, swing);
    }
    swing();
  });







  //슬라이드 플러그인
  $(".bxslider").bxSlider({
    pager: true,
    speed: 1000
  });

  //gitgo 마우스 오버
  $("#gitgo_cover").hide();
  $("#gitgo").mouseover(function() {
    $("#gitgo_cover").css("display", "block");

  });

  $("#gitgo").mouseleave(function() {
    $("#gitgo_cover").css("display", "none");
    $("#gitgo_cover").hide();
  })


  // 파일열리는경로
  $("#desktop_in_1").click(function() {
    window.open("./GREEK_MYTHOLOGY/index.html");
  });
  $("#view_go_1").click(function() {
    window.open("./GREEK_MYTHOLOGY/index.html");
  });
  $("#desktop_in_2").click(function() {
    window.open("./kb_bank/index0.html");
  });

  $("#view_go_2").click(function() {
    window.open("./kb_bank/index0.html");
});

$("#page4 article #page4_top_cover .slide1 .desktop a #desktop_in_3").click(function() {
  window.open("./hiphaper/main.html");
});
$(".desktop_comm .destktop_comm_right a #view_go_3").click(function() {
  window.open("./hiphaper/main.html");
});


  // 파일열리는경로 끝
  $("#gitgo").click(function() {
    window.open("https://github.com/yoonsujin/portfolio");
  })

  //jquery 미디어 쿼리
  if (window.matchMedia("(max-width: 600px)").matches) {
    $(window).trigger("scroll");
    // 3번째 화면으로 스크롤 옮기면 나타나는 애니메이션
    $(window).scroll(function() {
      var scl = $(window).scrollLeft();
      var contents = $(".section");
      $(".scroll span").text(scl);
      if (scl >= contents.eq(1).offset().left && scl < contents.eq(2).offset().left) {
        $("#pr3_right .star").stop().animate({
          'top': '5%',
          'left': '46.5%'
        }, function() {
          $("#pr3_right .star #star_center").stop().animate({
            'height': '1500%'
          }, function() {
            $(".career_cover").stop().animate({
              'width': '13826%',
              'height': '1px'
            }, function() {
              $(".career_cover .Career").stop().animate({
                'opacity': '1',
                'height': '100px'
              });
            });
          });
        });
      };
    });
  }
  if (window.matchMedia("(max-width: 575px)").matches) {
    $(window).trigger("scroll");
    // 3번째 화면으로 스크롤 옮기면 나타나는 애니메이션
    $(window).scroll(function() {
      var scl = $(window).scrollLeft();
      var contents = $(".section");
      $(".scroll span").text(scl);
      if (scl >= contents.eq(1).offset().left && scl < contents.eq(2).offset().left) {
        $("#pr3_right .star").stop().animate({
          'top': '5%',
          'left': '18.5%'
        }, function() {
          $("#pr3_right .star #star_center").stop().animate({
            'height': '1500%'
          }, function() {
            $(".career_cover").stop().animate({
              'width': '13826%',
              'height': '1px',
              'left': '100%'
            }, function() {
              $(".career_cover .Career").stop().animate({
                'opacity': '1',
                'height': '100px'
              });
            });
          });
        });
      };
    });
  }
  if (window.matchMedia("(max-width: 420px)").matches) {
    $(window).trigger("scroll");
    // 3번째 화면으로 스크롤 옮기면 나타나는 애니메이션
    $(window).scroll(function() {
      var scl = $(window).scrollLeft();
      var contents = $(".section");
      $(".scroll span").text(scl);
      if (scl >= contents.eq(1).offset().left && scl < contents.eq(2).offset().left) {
        $("#pr3_right .star").stop().animate({
          'top': '4%',
          'left': '5.5%'
        }, function() {
          $("#pr3_right .star #star_center").stop().animate({
            'height': '1500%'
          }, function() {
            $(".career_cover").stop().animate({
              'width': '11000%',
              'height': '1px',
              'left': '100%'
            }, function() {
              $(".career_cover .Career").stop().animate({
                'opacity': '1',
                'height': '109px'
              });
            });
          });
        });
      };
    });
  }
  if (window.matchMedia("(max-height: 681px)").matches) {
    $(window).trigger("scroll");
    // 3번째 화면으로 스크롤 옮기면 나타나는 애니메이션
    $(window).scroll(function() {
      var scl = $(window).scrollLeft();
      var contents = $(".section");
      $(".scroll span").text(scl);
      if (scl >= contents.eq(1).offset().left && scl < contents.eq(2).offset().left) {
        $("#pr3_right .star").stop().animate({
          'top': '-1%',
          'left': '48%'
        }, function() {
          $("#pr3_right .star #star_center").stop().animate({
            'height': '1500%'
          }, function() {
            $(".career_cover").stop().animate({
              'width': '13826%',
              'height': '1px'
            }, function() {
              $(".career_cover .Career").stop().animate({
                'opacity': '1',
                'height': '100px'
              });
            });
          });
        });
      };
    });
  }
  if (window.matchMedia("(max-height: 668px)").matches) {
    $(window).trigger("scroll");
    // 3번째 화면으로 스크롤 옮기면 나타나는 애니메이션
    $(window).scroll(function() {
      var scl = $(window).scrollLeft();
      var contents = $(".section");
      $(".scroll span").text(scl);
      if (scl >= contents.eq(1).offset().left && scl < contents.eq(2).offset().left) {
        $("#pr3_right .star").stop().animate({
          'top': '5%',
          'left': '48%'
        }, function() {
          $("#pr3_right .star #star_center").stop().animate({
            'height': '1356%'
          }, function() {
            $(".career_cover").stop().animate({
              'width': '13826%',
              'height': '1px'
            }, function() {
              $(".career_cover .Career").stop().animate({
                'opacity': '1',
                'height': '100px'
              });
            });
          });
        });
      };
    });
  }
  if (window.matchMedia("(max-height: 620px)").matches) {
    $(window).trigger("scroll");
    // 3번째 화면으로 스크롤 옮기면 나타나는 애니메이션
    $(window).scroll(function() {
      var scl = $(window).scrollLeft();
      var contents = $(".section");
      $(".scroll span").text(scl);
      if (scl >= contents.eq(1).offset().left && scl < contents.eq(2).offset().left) {
        $("#pr3_right .star").stop().animate({
          'top': '3%',
          'left': '48%'
        }, function() {
          $("#pr3_right .star #star_center").stop().animate({
            'height': '1356%'
          }, function() {
            $(".career_cover").stop().animate({
              'width': '13826%',
              'height': '1px'
            }, function() {
              $(".career_cover .Career").stop().animate({
                'opacity': '1',
                'height': '100px'
              });
            });
          });
        });
      };
    });
  }
  if (window.matchMedia("(max-height: 590px)").matches) {
    $(window).trigger("scroll");
    // 3번째 화면으로 스크롤 옮기면 나타나는 애니메이션
    $(window).scroll(function() {
      var scl = $(window).scrollLeft();
      var contents = $(".section");
      $(".scroll span").text(scl);
      if (scl >= contents.eq(1).offset().left && scl < contents.eq(2).offset().left) {
        $("#pr3_right .star").stop().animate({
          'top': '3%',
          'left': '48%'
        }, function() {
          $("#pr3_right .star #star_center").stop().animate({
            'height': '1269%'
          }, function() {
            $(".career_cover").stop().animate({
              'width': '13826%',
              'height': '1px'
            }, function() {
              $(".career_cover .Career").stop().animate({
                'opacity': '1',
                'height': '95px'
              });
            });
          });
        });
      };
    });
  }
  if (window.matchMedia("(max-height: 570px)").matches) {
    $(window).trigger("scroll");
    // 3번째 화면으로 스크롤 옮기면 나타나는 애니메이션
    $(window).scroll(function() {
      var scl = $(window).scrollLeft();
      var contents = $(".section");
      $(".scroll span").text(scl);
      if (scl >= contents.eq(1).offset().left && scl < contents.eq(2).offset().left) {
        $("#pr3_right .star").stop().animate({
          'top': '3%',
          'left': '48%'
        }, function() {
          $("#pr3_right .star #star_center").stop().animate({
            'height': '1198%'
          }, function() {
            $(".career_cover").stop().animate({
              'width': '13826%',
              'height': '1px'
            }, function() {
              $(".career_cover .Career").stop().animate({
                'opacity': '1',
                'height': '95px'
              });
            });
          });
        });
      };
    });
  }

});
