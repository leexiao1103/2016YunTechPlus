var phone_detect = Boolean(false);
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		alert("目前行動版尚未支援，請使用電腦瀏覽，謝謝！！");
		window.location.href= 'phone/phone.html'
		
		phone_detect = true;
		document.write("<link href='style_phone.css' rel='stylesheet'>");
	}
	else {
		document.write("<link href='style.css' rel='stylesheet'><link href='leaf/leaf_style.css' media='screen and (min-device-width: 680px)' rel='stylesheet'><script src='leaf/leaf_jquery.js' media='screen and (min-device-width: 680px)' type='text/javascript'></script>");
	}
$.preload( 'team/img/A.jpg','team/img/A1.jpg','team/img/A2.jpg','team/img/A3.jpg','team/img/A4.jpg',
'team/img/B.jpg','team/img/B2.jpg','team/img/B3.jpg','team/img/B4.jpg','team/img/C.jpg',
'team/img/C1.jpg','team/img/C2.jpg','team/img/C3.jpg','team/img/C4.jpg','team/img/D.jpg',
'team/img/D1.jpg','team/img/D2.jpg','team/img/D3.jpg','team/img/D4.jpg','team/img/D5.jpg',
'team/img/E.jpg','team/img/E1.jpg','team/img/E2.jpg','team/img/E3.jpg','team/img/E4.jpg',
'team/img/F.jpg','team/img/F1.jpg','team/img/F2.jpg','team/img/F3.jpg','team/img/F4.jpg',
'team/img/G.jpg','team/img/G1.jpg','team/img/G2.jpg','team/img/G3.jpg','team/img/G4.jpg',
'team/img/H.jpg','team/img/H1.jpg','team/img/H2.jpg','team/img/H3.jpg','team/img/H4.jpg',
'team/img/I.jpg','team/img/I1.jpg','team/img/I2.jpg','team/img/I3.jpg'
);
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

	//頂端影片-----------------------------------------
	var video = document.getElementById("top");	
	var video2 = document.getElementById("top2");
	video.play();video2.play();
	var now = new Boolean(false);
	video.onended = function(){
		video.style.display = 'none';
		video2.style.display = 'block';
	};
	//fB圖片更換--------------------------------------
	window.onresize=WinOnResize
	//滑到頂停---------------------------------------
	var nav = $('#mynavbar');
	var navTop = nav.offset().top+10;
	
	var contentHeight = $('#content').height();
	$(window).scroll(function(){
		var winTop = $(this).scrollTop();
		contentHeight = $('#content').height() -250;
		var winHeight = $(window).height();
		var winWidth = $(window).width();
		/*看卷軸位置-----------------------------*/
			$("span.qScrollTop").text(winWidth);
			$("span.qScrollTop2").text(winTop+winHeight);
			$("span.qScrollTop3").text(contentHeight + $('#top').height());
		if(phone_detect){
			$("#content").css("height","100%");
			$("#road").css({"padding-top":"250px", "opacity":"1"});
			$("#content > #elephant").fadeIn(1000);
			$("#content > #fox").fadeIn(1000);
			$("#content > #bird").fadeIn(1000);
			$("#content > #giraff").fadeIn(1000);
		}else if(winTop >= navTop){
			$("#content").css("height","100%");
			nav.addClass('fixed');
			$("#road").css({"padding-top":"250px", "opacity":"1"});
			nav.css("background-color", "rgba(232,233,234,0.75)");
			
			if(winTop+winHeight >= (contentHeight*0.4 + $('#top').height()+250)){
				$("#content > #elephant").fadeIn(1000);
			}else{
				$("#content > #elephant").fadeOut(500);
			}
			if(winTop+winHeight >= (contentHeight*0.6 + $('#top').height()+250)){
				$("#content > #fox").fadeIn(1000);
			}else{
				$("#content > #fox").fadeOut(500);
			}
			if(winTop+winHeight >= (contentHeight*0.75 + $('#top').height()+250)){
				$("#content > #bird").fadeIn(1000);
			}else{
				$("#content > #bird").fadeOut(500);
			}
			if(winTop+winHeight >= (contentHeight + $('#top').height()+250)){
				$("#content > #giraff").fadeIn(1000);
			}else{
				$("#content > #giraff").fadeOut(500);
			}
	
		} else if (winTop <= navTop){
			nav.removeClass('fixed');
			$("#content").css("height","100%+250px");
			$("#road").css({"padding-top":"0px", "opacity":"0"});
			nav.css("background-color", "rgba(232,233,234,1)");
			$("#content > #elephant").fadeOut(500);
			$("#content > #fox").fadeOut(500);
			$("#content > #bird").fadeOut(500);
			$("#content > #giraff").fadeOut(500);
		}
	});
	
	$('#window').click(function(){
		var ind1 = $('.introduction');
		$("#menu-toggle").css("background", "transparent");
		$("#bar > ul").slideUp(500);
		$('#window').animate({opacity: '0'}, 500, function(){$('#window').css("display", "none");});
		ind1.css({"right":"-2000px","animationName":"introOut","animationDuration":"1s", "-webkit-animation-timing-function":"ease"});
	});
	if(phone_detect){
		$('.fbicon').css("display","none");
		$('#sloth').css("display","none");
		$('#treeleft').css("display","none");
		$('#treeright').css("display","none");
	} 
   
});

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
		//window.location.reload();
		if ( document.body.clientWidth < 680 ) // 當瀏覽器寬度 > 1500px 例如 Full-HD
		{
			document.getElementById("fb_icon").src="FB_2.png" // 左
			document.getElementById("leftpic").src="tree_left2.png" // 左
			document.getElementById("rightpic").src="tree_right2.png" // 左
		}else{
			document.getElementById("fb_icon").src="FB.png" // 左
			document.getElementById("leftpic").src="tree_left.png" // 左
			document.getElementById("rightpic").src="tree_right.png" // 左
		}
}
function slothcall() {
	var sloth = document.getElementById('sound');
	sloth.play();
}
function slothout() {
	var sloth = document.getElementById('sound');
	sloth.load();
}
function elephantjump() {
	var ind1 = $('#intro_ele');
	$('#window').css("display","block");
	$('#window').animate({opacity: '0.7'}, 500);
	ind1.css({"display":"block", "right":"20%", "animationName":"introIn","animationDuration":"1s", "-webkit-animation-timing-function":"ease"});
}
function foxjump() {
	var ind1 = $('#intro_fox');
	$('#window').css("display","block");
	$('#window').animate({opacity: '0.7'}, 500);
	ind1.css({"display":"block", "right":"20%", "animationName":"introIn","animationDuration":"1s", "-webkit-animation-timing-function":"ease"});
}
function giraffjump() {
	var ind1 = $('#intro_giraff');
	$('#window').css("display","block");
	$('#window').animate({opacity: '0.7'}, 500);
	ind1.css({"display":"block", "right":"20%", "animationName":"introIn","animationDuration":"1s", "-webkit-animation-timing-function":"ease"});
}
function birdjump() {
	var ind1 = $('#intro_bird');
	$('#window').css("display","block");
	$('#window').animate({opacity: '0.7'}, 500);
	ind1.css({"display":"block", "right":"20%", "animationName":"introIn","animationDuration":"1s", "-webkit-animation-timing-function":"ease"});
}








