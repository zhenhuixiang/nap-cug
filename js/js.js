$(document).ready(function(){
	//事件
	$(".li_1 ,.li_1 a").click(function(){
		$(".marker-li").removeClass("active");
		$(".li_1").addClass("active");
		$(".block").removeClass("active");
		$(".login").addClass("active");

	});
	$(".li_2, .li_2 a").click(function(){
		$(".marker-li").removeClass("active");
		$(".li_2").addClass("active");
		$(".block").removeClass("active");
		$(".register").addClass("active");
	});
	$(".li_3, .li_3 a").click(function(){
		$(".marker-li").removeClass("active");
		$(".li_3").addClass("active");
		$(".block").removeClass("active");
		$(".links").addClass("active");
	});
});