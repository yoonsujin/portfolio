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
	// 3번째 화면으로 스크롤 옮기면 나타나는 애니메이션
	$(window).scroll(function() {
		var scl = $(window).scrollLeft();
		var contents = $(".section");
		$(".scroll span").text(scl);
		if (scl >= contents.eq(1).offset().left && scl < contents.eq(2).offset().left) {
			$("#pr3_right .star").stop().animate({
				'top': '5%',
				'left': '50%'
			}, function() {
				$("#pr3_right .star #star_center").stop().animate({
					'height': '1600%'
				}, function() {
					$(".career_cover").stop().animate({
						'width': '300px',
						'height': '1px'
					},function(){
						$(".career_cover .Career").stop().animate({
							'opacity':'1',
							'height':'100px'
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
	$("#pr3_right #star_1").css("transform", "scale(1." + imgNum1 + ")");
	var imgNum1_1 = $("#pr3_right #star_1").css("transform", "scale(1." + imgNum1 + ")");
	$("#pr3_right #star_2").css("transform", "scale(1." + imgNum2 + ")");
	var imgNum1_2 = $("#pr3_right #star_1").css("transform", "scale(1." + imgNum1 + ")");
	$("#pr3_right #star_3").css("transform", "scale(1." + imgNum3 + ")");
	var imgNum1_3 = $("#pr3_right #star_1").css("transform", "scale(1." + imgNum1 + ")");
	$("#pr3_right #star_4").css("transform", "scale(1." + imgNum4 + ")");
	var imgNum1_4 = $("#pr3_right #star_1").css("transform", "scale(1." + imgNum1 + ")");
	$("#pr3_right #star_5").css("transform", "scale(1." + imgNum5 + ")");
	var imgNum1_5 = $("#pr3_right #star_1").css("transform", "scale(1." + imgNum1 + ")");
	$("#pr3_right #star_6").css("transform", "scale(1." + imgNum6 + ")");
	var imgNum1_6 = $("#pr3_right #star_1").css("transform", "scale(1." + imgNum1 + ")");

	$(function() {
		function swing() {
			$('#pr3_right #star_1').animate({
				'width': '10px',
				'height': '10px'
			}, 900).animate({
				'width': '8.' + imgNum1_1 + 'px',
				'height': '8.' + imgNum1_1 + 'px'
			}, 1000, swing);
		}
		swing();
	});

	$(function() {
		function swing() {
			$('#pr3_right #star_2').animate({
				'width': '10px',
				'height': '10px'
			}, 800).animate({
				'width': '8.' + imgNum1_2 + 'px',
				'height': '8.' + imgNum1_3 + 'px'
			}, 900, swing);
		}
		swing();
	});


	$(function() {
		function swing() {
			$('#pr3_right #star_3').animate({
				'width': '10px',
				'height': '10px'
			}, 400).animate({
				'width': '8.' + imgNum1_3 + 'px',
				'height': '8.' + imgNum1_3 + 'px'
			}, 500, swing);
		}
		swing();
	});


	$(function() {
		function swing() {
			$('#pr3_right #star_4').animate({
				'width': '10px',
				'height': '10px'
			}, 600).animate({
				'width': '8.' + imgNum1_4 + 'px',
				'height': '8.' + imgNum1_4 + 'px'
			}, 650, swing);
		}
		swing();
	});


	$(function() {
		function swing() {
			$('#pr3_right #star_5').animate({
				'width': '10px',
				'height': '10px'
			}, 500).animate({
				'width': '8.' + imgNum1_5 + 'px',
				'height': '8.' + imgNum1_5 + 'px'
			}, 550, swing);
		}
		swing();
	});


	$(function() {
		function swing() {
			$('#pr3_right #star_6').animate({
				'width': '10px',
				'height': '10px'
			}, 700).animate({
				'width': '8.' + imgNum1_6 + 'px',
				'height': '8.' + imgNum1_6 + 'px'
			}, 750, swing);
		}
		swing();
	});


	$(".bxslider").bxSlider({
		pager:true,
		speed:1000
	});

	});
