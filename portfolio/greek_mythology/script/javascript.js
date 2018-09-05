$(function(){
/*	$("#aside_cover > #menu > ul > li > ul").hide();

	$("#aside_cover > #menu > ul > li").mouseover(function(){
		$(this).find("ul").stop().slideDown();
	});
	$("#aside_cover > #menu > ul > li").mouseleave(function(){
		$(this).find("ul").stop().slideUp();
	});

*/
$("#aside_cover > #menu > ul > li > ul").css("display","none");

$("#aside_cover > #menu > ul > li").click(function(){

	var k = $("#menu>ul>li>ul").css("display");

	if(k=="none"){
		$("#aside_cover > #menu > ul > li > ul").slideUp();
		$(this).children("ul").stop().slideDown();
	}else{

		$("#aside_cover > #menu > ul > li > ul").stop().slideUp();
	}
});


// .eq(k-1)
// 결과값을받음
});
