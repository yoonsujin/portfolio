$(function(){
	$("header > #header_right > ul >  li > ul").hide();
	$("header > #header_right > ul > li").mouseover(function(){
		$(this).children("ul").stop().slideDown();
	});
	$("header > #header_right > ul > li").mouseleave(function(){
		$(this).children("ul").stop().slideUp();
	});

		$(function(){
		var n = 0;

		setInterval(function(){
		//setInterval = 자동으로 반복실행. 3000ms(3s)에 한번씩 자동으로 반복실행.
			n++; //n이 1씩 증가
			if(n==3){
				n=0;
				//n이 3이 될 경우 다시 0으로
			}
			$("#img_slide input").eq(n).trigger("click");

			//n값에 맞는 input의 인덱스번호를 강제로 클릭
		},3000);
	});


	$("#login_setting").hide();
	$(".ar_button").click(function(){
		$("#login_setting").show()


	});

	$("#btn-close").click(function(){
		$("#login_setting").hide();
	});

	$(".wwrap").hide();
	$(".ar_button").click(function(){
	$(".wwrap").show();
	});

	$("#btn-close").click(function(){
		$(".wwrap").hide();
	});
});
