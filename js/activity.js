var phone_detect = Boolean(false);
	/*if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		alert("目前行動版尚未支援，請使用電腦瀏覽，謝謝！！");
		window.location.href= 'phone/phone.html'
		
		phone_detect = true;
		document.write("<link href='../style.css' rel='stylesheet'>");
	}
	else {
		document.write("<link href='../style.css' rel='stylesheet'><link href='../leaf/leaf_style.css' media='screen and (min-device-width: 680px)' rel='stylesheet'><script src='../leaf/leaf_jquery.js' media='screen and (min-device-width: 680px)' type='text/javascript'></script>");
	}*/
$(document).ready(function(){
	
	//功能列icon----------------------------
	$('nav ul li').each(function(){
		$(this).mouseenter(function(){
				$(this).find('a').children('img').stop(true, true).animate({
					'top': -7 + 'px'
				}, 500);
			});
			$(this).mouseleave(function(){
				$(this).find('a').children('img').stop(true, true).animate({
					'top': 0
				}, 500);
			});
	});
	$('#window').click(function(){
		var ind1 = $('.carintro');
		$("#menu-toggle").css("background", "transparent");
		$("#bar > ul").slideUp(500);
		$('#window').animate({opacity: '0'}, 500, function(){$('#window').css("display", "none");});
		ind1.css({"left":"-2000px","animationName":"carintroOut","animationDuration":"1s", "-webkit-animation-timing-function":"ease"});
		
	});
	
	$(window).scroll(function(){
		var nav = $("#pic1").css("top");
		/*看卷軸位置-----------------------------*/
		$("span.qScrollTop").text(nav);
		//alert(nav);
	});
	//fB圖片更換--------------------------------------
	 window.onresize=WinOnResize
	 window.onload=WinOnResize
	var pic = $('#pic');
	pic.fadeIn(2000);
	var tv = $('#tv');
	tv.fadeIn(2000);
	var map = $('#map');
	map.fadeIn(2000);
	var schoolcar = $('#schoolcar');
	schoolcar.fadeIn(2000); 
	var goyuntech = $('#goyuntech');
	goyuntech.fadeIn(2000);
	var QA = $('#QA');
	QA.fadeIn(2000);
	var camra = $('#camra');
	camra.fadeIn(2000);	
	var fixing = $('#fixing');
	fixing.fadeIn(2000);
	var news = $('#news');
	news.fadeIn(2000);
	var six_group = $('#six_group');
	six_group.fadeIn(2000);
	var connect = $('#connect');
	connect.fadeIn(2000);
	var campsong = $('#campsong_container');
	campsong.fadeIn(2000)
	var workteam = $('#workteam_container');
	workteam.fadeIn(2000);
	var associations = $('#associations_container');
	associations.fadeIn(2000);
});
function getRandom(minNum, maxNum) {	//取得 minNum(最小值) ~ maxNum(最大值) 之間的亂數
	  return Math.floor( Math.random() * (maxNum - minNum + 1) ) + minNum;
}
function slothcall() {
	var sloth = document.getElementById('sound');
	sloth.play();
}
function slothout() {
	var sloth = document.getElementById('sound');
	sloth.load();
}
function highspeedjump() {
	var ind1 = $('#highspeedshow');
	$('#window').css("display","block");
	$('#window').animate({opacity: '0.7'}, 500);
	ind1.css({"display":"block", "left":"10%", "animationName":"carintroIn","animationDuration":"1s", "-webkit-animation-timing-function":"ease"});
}
function carjump() {
	var ind1 = $('#carshow');
	$('#window').css("display","block");
	$('#window').animate({opacity: '0.7'}, 500);
	ind1.css({"display":"block", "left":"10%", "animationName":"carintroIn","animationDuration":"1s", "-webkit-animation-timing-function":"ease"});
}
function freeyjump() {
	var ind1 = $('#freeyshow');
	$('#window').css("display","block");
	$('#window').animate({opacity: '0.7'}, 500);
	ind1.css({"display":"block", "left":"10%", "animationName":"carintroIn","animationDuration":"1s", "-webkit-animation-timing-function":"ease"});
}
function taxijump() {
	var ind1 = $('#taxishow');
	$('#window').css("display","block");
	$('#window').animate({opacity: '0.7'}, 500);
	ind1.css({"display":"block", "left":"10%", "animationName":"carintroIn","animationDuration":"1s", "-webkit-animation-timing-function":"ease"});
}
function changebtn() {
	var rightbtn = $('#rightbtn img');
	rightbtn.attr("src","rightbutton.png");
	
}
function btndown() {
	var rightbtn = $('#rightbtn img');
	rightbtn.attr("src","rightbutton_click.png");
	
}
function next() {
	var pic1 = $('#pic1'); var pic2 = $('#pic2'); var pic3 = $('#pic3'); var pic1top = $("#pic1").css("top"); var pic2top = $("#pic2").css("top"); var pic3top = $("#pic3").css("top");
	var pic1img = $('#pic1 img'); var pic2img = $('#pic2 img'); var pic3img = $('#pic3 img')
	var time = 0;
	var sound = document.getElementById('camrasound');

	if(pic1top == "-60px"){
		camrasound.play();
		pic1.css("zIndex","60");
		pic2.animate({top:'485px'}, 1500, "easeInExpo", function(){
				pic1.css({"top":"-491px", "zIndex":"90"});
				pic3img.attr("src", "pic/IMG"+ getRandom(1,14)+".jpg");		
				camrasound.load();
            }); 
	}else if(pic2top == "485px"){
		camrasound.play();
		pic2.css("zIndex","60");
		pic3.animate({top:'485px'}, 1500, "easeInExpo", function(){
				pic2.css({"top":"56px", "zIndex":"80"});			
				pic1img.attr("src", "pic/IMG"+ getRandom(1,14)+".jpg");
				camrasound.load();
            }); 
	}else if(pic3top == "485px"){
		camrasound.play();
		pic3.css("zIndex","60");
		pic1.animate({top:'-60px'}, 1500, "easeInExpo", function(){
				pic3.css({"top":"56px", "zIndex":"80"});
				pic2img.attr("src", "pic/IMG"+ getRandom(1,14)+".jpg");
				camrasound.load();
            }); 
	}else{
		return;
	}

}
function tinybar(){ 
	$("#menu-toggle").css("background", "white");	
	$("#bar > ul").slideDown(500);
	$('#window').css("display","block");
	$('#window').animate({opacity: '0.7'}, 500);

}
function tinybar_down(down){ 	
	switch (down.id){
		case "d1":
			$("#down1").slideDown(500);
			$("#down6").slideUp(500);
			$("#down2").slideUp(500);
			$("#down3").slideUp(500);
			$("#down4").slideUp(500);
			$("#down5").slideUp(500);
			break;
		case "d2":
			$("#down2").slideDown(500);
			$("#down6").slideUp(500);
			$("#down1").slideUp(500);
			$("#down3").slideUp(500);
			$("#down4").slideUp(500);
			$("#down5").slideUp(500);
			break;
		case "d3":
			$("#down3").slideDown(500);
			$("#down6").slideUp(500);
			$("#down2").slideUp(500);
			$("#down1").slideUp(500);
			$("#down4").slideUp(500);
			$("#down5").slideUp(500);
			break;
		case "d4":
			$("#down4").slideDown(500);
			$("#down6").slideUp(500);
			$("#down2").slideUp(500);
			$("#down3").slideUp(500);
			$("#down1").slideUp(500);
			$("#down5").slideUp(500);
			break;
		case "d5":
			$("#down5").slideDown(500);
			$("#down1").slideUp(500);
			$("#down2").slideUp(500);
			$("#down3").slideUp(500);
			$("#down4").slideUp(500);
			$("#down6").slideUp(500);
			break;
		case "d6":
			$("#down6").slideDown(500);
			$("#down1").slideUp(500);
			$("#down2").slideUp(500);
			$("#down3").slideUp(500);
			$("#down4").slideUp(500);
			$("#down5").slideUp(500);
			break;
		default:
			return;
	}
	
}
function WinOnResize(){ // 以 function 的方式來寫
		/*var bodyWidth = ($(window).width() <= 980) ? 980 : $(window).width();
		document.body.clientWidth = bodyWidth;*/
		if ( document.body.clientWidth < 680 ) // 當瀏覽器寬度 > 1500px 例如 Full-HD
		{
			document.getElementById("fb_icon").src="../FB_2.png" // 左
			document.getElementById("leftpic").src="../tree_left2.png" // 左
			document.getElementById("rightpic").src="../tree_right2.png" // 左
		}else{
			document.getElementById("fb_icon").src="../FB.png" // 左
			document.getElementById("leftpic").src="../tree_left.png" // 左
			document.getElementById("rightpic").src="../tree_right.png" // 左
		}
	 
}
function tagchange(tag) {
	switch (tag.id){
		case 'b_1':
			$('body').animate({scrollTop:$('#a').offset().top-120},800);
			break;
		case 'b_2':
			$('body').animate({scrollTop:$('#s').offset().top-120},800);
			break;
		case 'b_3':
			$('body').animate({scrollTop:$('#h').offset().top-120},800);
			break;
		case 'b_4':
			$('body').animate({scrollTop:$('#n').offset().top-120},800);
			break;
		case 'b_1_1':
			$('body').animate({scrollTop:$('#a01').offset().top-120},800);
			break;
		case 'b_1_2':
			$('body').animate({scrollTop:$('#a02').offset().top-120},800);
			break;
		case 'b_1_3':
			$('body').animate({scrollTop:$('#a03').offset().top-120},800);
			break;
		case 'b_2_1':
			$('body').animate({scrollTop:$('#s01').offset().top-120},800);
			break;
		case 'b_2_2':
			$('body').animate({scrollTop:$('#s02').offset().top-120},800);
			break;
		case 'b_2_3':
			$('body').animate({scrollTop:$('#s03').offset().top-120},800);
			break;
		case 'b_2_4':
			$('body').animate({scrollTop:$('#s04').offset().top-120},800);
			break;
		case 'b_2_5':
			$('body').animate({scrollTop:$('#s05').offset().top-120},800);
			break;
		case 'b_2_6':
			$('body').animate({scrollTop:$('#s06').offset().top-120},800);
			break;
		case 'b_2_7':
			$('body').animate({scrollTop:$('#s07').offset().top-120},800);
			break;
		case 'b_2_8':
			$('body').animate({scrollTop:$('#s08').offset().top-120},800);
			break;
		case 'b_2_9':
			$('body').animate({scrollTop:$('#s09').offset().top-120},800);
			break;
		case 'b_2_10':
			$('body').animate({scrollTop:$('#s10').offset().top-120},800);
			break;
		case 'b_2_11':
			$('body').animate({scrollTop:$('#s11').offset().top-120},800);
			break;
		case 'b_2_12':
			$('body').animate({scrollTop:$('#s12').offset().top-120},800);
			break;
		case 'b_2_13':
			$('body').animate({scrollTop:$('#s13').offset().top-120},800);
			break;
		case 'b_2_14':
			$('body').animate({scrollTop:$('#s14').offset().top-120},800);
			break;
		case 'b_2_15':
			$('body').animate({scrollTop:$('#s15').offset().top-120},800);
			break;
		case 'b_3_1':
			$('body').animate({scrollTop:$('#h01').offset().top-120},800);
			break;
		case 'b_3_2':
			$('body').animate({scrollTop:$('#h02').offset().top-120},800);
			break;
		case 'b_3_3':
			$('body').animate({scrollTop:$('#h03').offset().top-120},800);
			break;
		case 'b_3_4':
			$('body').animate({scrollTop:$('#h04').offset().top-120},800);
			break;
		case 'b_3_5':
			$('body').animate({scrollTop:$('#h05').offset().top-120},800);
			break;
		case 'b_3_6':
			$('body').animate({scrollTop:$('#h06').offset().top-120},800);
			break;
		case 'b_3_7':
			$('body').animate({scrollTop:$('#h07').offset().top-120},800);
			break;
		case 'b_3_8':
			$('body').animate({scrollTop:$('#h08').offset().top-120},800);
			break;
		case 'b_3_9':
			$('body').animate({scrollTop:$('#h09').offset().top-120},800);
			break;
		case 'b_3_10':
			$('body').animate({scrollTop:$('#h10').offset().top-120},800);
			break;
		case 'b_3_11':
			$('body').animate({scrollTop:$('#h11').offset().top-120},800);
			break;
		case 'b_3_12':
			$('body').animate({scrollTop:$('#h12').offset().top-120},800);
			break;
		case 'b_3_13':
			$('body').animate({scrollTop:$('#h13').offset().top-120},800);
			break;
		case 'b_3_14':
			$('body').animate({scrollTop:$('#h14').offset().top-120},800);
			break;
		case 'b_3_15':
			$('body').animate({scrollTop:$('#h15').offset().top-120},800);
			break;
		case 'b_3_16':
			$('body').animate({scrollTop:$('#h16').offset().top-120},800);
			break;
		case 'b_3_17':
			$('body').animate({scrollTop:$('#h17').offset().top-120},800);
			break;
		case 'b_3_18':
			$('body').animate({scrollTop:$('#h18').offset().top-120},800);
			break;
		case 'b_3_19':
			$('body').animate({scrollTop:$('#h19').offset().top-120},800);
			break;
		case 'b_3_20':
			$('body').animate({scrollTop:$('#h20').offset().top-120},800);
			break;
		case 'b_3_21':
			$('body').animate({scrollTop:$('#h21').offset().top-120},800);
			break;
		case 'b_3_22':
			$('body').animate({scrollTop:$('#h22').offset().top-120},800);
			break;
		case 'b_3_23':
			$('body').animate({scrollTop:$('#h23').offset().top-120},800);
			break;
		case 'b_3_24':
			$('body').animate({scrollTop:$('#h24').offset().top-120},800);
			break;
		case 'b_3_25':
			$('body').animate({scrollTop:$('#h25').offset().top-120},800);
			break;
		case 'b_3_26':
			$('body').animate({scrollTop:$('#h26').offset().top-120},800);
			break;
		case 'b_3_27':
			$('body').animate({scrollTop:$('#h27').offset().top-120},800);
			break;
		case 'b_3_28':
			$('body').animate({scrollTop:$('#h28').offset().top-120},800);
			break;
		case 'b_4_1':
			$('body').animate({scrollTop:$('#n01').offset().top-120},800);
			break;
		case 'b_4_2':
			$('body').animate({scrollTop:$('#n02').offset().top-120},800);
			break;
		case 'b_4_3':
			$('body').animate({scrollTop:$('#n03').offset().top-120},800);
			break;
		case 'b_4_4':
			$('body').animate({scrollTop:$('#n04').offset().top-120},800);
			break;
		case 'b_4_5':
			$('body').animate({scrollTop:$('#n05').offset().top-120},800);
			break;
		case 'b_4_6':
			$('body').animate({scrollTop:$('#n06').offset().top-120},800);
			break;
		case 'b_4_7':
			$('body').animate({scrollTop:$('#n07').offset().top-120},800);
			break;
		case 'b_4_8':
			$('body').animate({scrollTop:$('#n08').offset().top-120},800);
			break;
		default:
			return;
	}
	
	
}












	
