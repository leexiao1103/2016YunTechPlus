$(document).ready(function(){
  var coin1 = document.getElementById("coin1");
  var coin2 = document.getElementById("coin2");
  var coin3 = document.getElementById("coin3");
  var coin4 = document.getElementById("coin4");
  coin1.classList.remove('selected');
  coin2.classList.remove('selected');
  coin3.classList.remove('selected');
  coin4.classList.remove('selected');

  
	var name = document.getElementById("nameA");
	var nameB = document.getElementById("nameB");
	var nameC = document.getElementById("nameC");
	var nameD = document.getElementById("nameD");
	var nameE = document.getElementById("nameE");
	var pictext1 = document.getElementById("text1");
	var pictext2 = document.getElementById("text2");
	var pictext3 = document.getElementById("text3");
	var pictext4 = document.getElementById("text4");
	var pictext5 = document.getElementById("text5");
	var pictext6 = document.getElementById("text6");
	var pictext7 = document.getElementById("text7");
	var pictext8 = document.getElementById("text8");
	var pictext9 = document.getElementById("text9");
	var pictext10 = document.getElementById("text10");
	var pictext11 = document.getElementById("text11");
	var pictext12 = document.getElementById("text12");
	var pictext13 = document.getElementById("text13");
	var pictext14 = document.getElementById("text14");
	var pictext15 = document.getElementById("text15");
	var pictext16 = document.getElementById("text16");
	var pictext17 = document.getElementById("text17");
	var pictext18 = document.getElementById("text18");
	var pictext19 = document.getElementById("text19");
	var pictext20 = document.getElementById("text20");
	var pictext21 = document.getElementById("text21");
	var pictext22 = document.getElementById("text22");
	var pictext23 = document.getElementById("text23");
	var pictext24 = document.getElementById("text24");
	var pictext25 = document.getElementById("text25");
	var pictext26 = document.getElementById("text26");
	var pictext27 = document.getElementById("text27");
	
	name.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext1.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext2.addEventListener('animationend',function(){this.style.animationName = '';}, false);	
	pictext3.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	nameB.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext4.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext5.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext6.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	nameC.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext7.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext8.addEventListener('animationend',function(){this.style.animationName = '';}, false);	
	pictext9.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	nameD.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext10.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext11.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext12.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	nameE.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext13.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext14.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext15.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	nameF.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext16.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext17.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext18.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	nameG.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext19.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext20.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext21.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	nameH.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext22.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext23.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext24.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	nameI.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext25.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext26.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	pictext27.addEventListener('animationend',function(){this.style.animationName = '';}, false);
	name.style.animationName = "slidein";		
	pictext1.style.animationName = "slidein";
	pictext2.style.animationName = "slidein";
	pictext3.style.animationName = "slidein";
	nameB.style.animationName = "slidein";		
	pictext4.style.animationName = "slidein";
	pictext5.style.animationName = "slidein";
	pictext6.style.animationName = "slidein";
	nameC.style.animationName = "slidein";		
	pictext7.style.animationName = "slidein";
	pictext8.style.animationName = "slidein";
	pictext9.style.animationName = "slidein";
	nameD.style.animationName = "slidein";		
	pictext10.style.animationName = "slidein";
	pictext11.style.animationName = "slidein";
	pictext12.style.animationName = "slidein";
	nameE.style.animationName = "slidein";		
	pictext13.style.animationName = "slidein";
	pictext14.style.animationName = "slidein";
	pictext15.style.animationName = "slidein";
	nameF.style.animationName = "slidein";		
	pictext16.style.animationName = "slidein";
	pictext17.style.animationName = "slidein";
	pictext18.style.animationName = "slidein";
	nameG.style.animationName = "slidein";		
	pictext19.style.animationName = "slidein";
	pictext20.style.animationName = "slidein";
	pictext21.style.animationName = "slidein";
	nameH.style.animationName = "slidein";		
	pictext22.style.animationName = "slidein";
	pictext23.style.animationName = "slidein";
	pictext24.style.animationName = "slidein";
	nameI.style.animationName = "slidein";		
	pictext25.style.animationName = "slidein";
	pictext26.style.animationName = "slidein";
	pictext27.style.animationName = "slidein";
});
var Agroup_bol = Boolean(true);
var Bgroup_bol = Boolean(true);
var Cgroup_bol = Boolean(true);
var Dgroup_bol = Boolean(true);
var Egroup_bol = Boolean(true);
var Fgroup_bol = Boolean(true);
var Ggroup_bol = Boolean(true);
var Hgroup_bol = Boolean(true);
var Igroup_bol = Boolean(true);
var now = 0;
function goGroup(tag){
	switch (tag.id){
		case 'A':
			if(Agroup_bol){
				$('.Text').css('top','50%');
				
				$('#A').css({'color':'#fff', 'backgroundColor':'#fa6d75'});
				$('#B').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#C').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#D').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#E').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#F').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#G').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#H').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#I').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				
				document.getElementById("nameA").innerHTML="總召/秘書組";
				document.getElementById("text1").innerHTML="";
				document.getElementById("text2").innerHTML="";
				document.getElementById("text3").innerHTML="";
				document.getElementById("coin1").classList.remove('selected');
				document.getElementById("coin2").classList.remove('selected');
				document.getElementById("coin3").classList.remove('selected');
				document.getElementById("coin4").classList.remove('selected');
				$("#A_0").css({'opacity':'1'});
				for(i=1; i<5; i++){
					$("#A_"+i).css({'opacity':'0'});
					
				}
							
				$('#workteam_logo').css({'display':'none'});
				$('#Agroup').fadeIn(1000);
				$('#Bgroup').fadeOut(1000);
				$('#Cgroup').fadeOut(1000);
				$('#Dgroup').fadeOut(1000);
				$('#Egroup').fadeOut(1000);
				$('#Fgroup').fadeOut(1000);
				$('#Ggroup').fadeOut(1000);
				$('#Hgroup').fadeOut(1000);
				$('#Igroup').fadeOut(1000);	
				
				Agroup_bol = false;
				Bgroup_bol = true;
				Cgroup_bol = true;
				Dgroup_bol = true;
				Egroup_bol = true;
				Fgroup_bol = true;
				Ggroup_bol = true;
				Hgroup_bol = true;
				Igroup_bol = true;
			}else{
				break;
			}
			
			break;
		case 'B':
			if(Bgroup_bol){
				$('.Text').css('top','50%');
				$('#B').css({'color':'#fff', 'backgroundColor':'#fa6d75'});
				$('#A').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#C').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#D').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#E').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#F').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#G').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#H').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#I').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				
				document.getElementById("nameB").innerHTML="行政組";
				document.getElementById("text4").innerHTML="";
				document.getElementById("text5").innerHTML="";
				document.getElementById("text6").innerHTML="";
				document.getElementById("coin5").classList.remove('selected');
				document.getElementById("coin6").classList.remove('selected');
				document.getElementById("coin7").classList.remove('selected');
				document.getElementById("coin8").classList.remove('selected');
				$("#B_0").css({'opacity':'1'});
				for(i=1; i<5; i++){
					$("#B"+i).css({'opacity':'0'});
					
				}
				$('#Agroup').fadeOut(1000);
				$('#Bgroup').fadeIn(1000);
				$('#Cgroup').fadeOut(1000);
				$('#Dgroup').fadeOut(1000);
				$('#Egroup').fadeOut(1000);
				$('#Fgroup').fadeOut(1000);
				$('#Ggroup').fadeOut(1000);
				$('#Hgroup').fadeOut(1000);
				$('#Igroup').fadeOut(1000);			
				$('#workteam_logo').css({'display':'none'});
				Agroup_bol = true;
				Bgroup_bol = false;
				Cgroup_bol = true;
				Dgroup_bol = true;
				Egroup_bol = true;
				Fgroup_bol = true;
				Ggroup_bol = true;
				Hgroup_bol = true;
				Igroup_bol = true;
			}else{
				break;
			}
			break;
		case 'C':
			if(Cgroup_bol){
				$('.Text').css('top','50%');
				$('#C').css({'color':'#fff', 'backgroundColor':'#fa6d75'});
				$('#B').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#A').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#D').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#E').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#F').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#G').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#H').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#I').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				
				document.getElementById("nameC").innerHTML="研修組";
				document.getElementById("text7").innerHTML="";
				document.getElementById("text8").innerHTML="";
				document.getElementById("text9").innerHTML="";
				document.getElementById("coin9").classList.remove('selected');
				document.getElementById("coin10").classList.remove('selected');
				document.getElementById("coin11").classList.remove('selected');
				document.getElementById("coin12").classList.remove('selected');
				$("#C_0").css({'opacity':'1'});
				for(i=1; i<5; i++){
					$("#C"+i).css({'opacity':'0'});
					
				}
				$('#Agroup').fadeOut(1000);
				$('#Bgroup').fadeOut(1000);
				$('#Cgroup').fadeIn(1000);
				$('#Dgroup').fadeOut(1000);
				$('#Egroup').fadeOut(1000);
				$('#Fgroup').fadeOut(1000);
				$('#Ggroup').fadeOut(1000);
				$('#Hgroup').fadeOut(1000);
				$('#Igroup').fadeOut(1000);			
				$('#workteam_logo').css({'display':'none'});
				Agroup_bol = true;
				Bgroup_bol = true;
				Cgroup_bol = false;
				Dgroup_bol = true;
				Egroup_bol = true;
				Fgroup_bol = true;
				Ggroup_bol = true;
				Hgroup_bol = true;
				Igroup_bol = true;
			}else{
				break;
			}
			break;
		case 'D':
			if(Dgroup_bol){
				$('.Text').css('top','50%');
				$('#D').css({'color':'#fff', 'backgroundColor':'#fa6d75'});
				$('#B').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#C').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#A').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#E').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#F').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#G').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#H').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#I').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				
				document.getElementById("nameD").innerHTML="活動組";
				document.getElementById("text10").innerHTML="";
				document.getElementById("text11").innerHTML="";
				document.getElementById("text12").innerHTML="";
				document.getElementById("coin13").classList.remove('selected');
				document.getElementById("coin14").classList.remove('selected');
				document.getElementById("coin15").classList.remove('selected');
				document.getElementById("coin16").classList.remove('selected');
				document.getElementById("coin17").classList.remove('selected');
				$("#D_0").css({'opacity':'1'});
				for(i=1; i<6; i++){
					$("#D"+i).css({'opacity':'0'});
					
				}
				$('#Agroup').fadeOut(1000);
				$('#Bgroup').fadeOut(1000);
				$('#Cgroup').fadeOut(1000);
				$('#Dgroup').fadeIn(1000);
				$('#Egroup').fadeOut(1000);
				$('#Fgroup').fadeOut(1000);
				$('#Ggroup').fadeOut(1000);
				$('#Hgroup').fadeOut(1000);
				$('#Igroup').fadeOut(1000);			
				$('#workteam_logo').css({'display':'none'});
				Agroup_bol = true;
				Bgroup_bol = true;
				Cgroup_bol = true;
				Dgroup_bol = false;
				Egroup_bol = true;
				Fgroup_bol = true;
				Ggroup_bol = true;
				Hgroup_bol = true;
				Igroup_bol = true;
			}else{
				break;
			}
			break;
		case 'E':
			if(Egroup_bol){
				$('.Text').css('top','50%');
				$('#E').css({'color':'#fff', 'backgroundColor':'#fa6d75'});
				$('#B').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#C').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#D').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#A').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#F').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#G').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#H').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#I').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				
				document.getElementById("nameE").innerHTML="隊輔組";
				document.getElementById("text13").innerHTML="";
				document.getElementById("text14").innerHTML="";
				document.getElementById("text15").innerHTML="";
				document.getElementById("coin18").classList.remove('selected');
				document.getElementById("coin19").classList.remove('selected');
				document.getElementById("coin20").classList.remove('selected');
				document.getElementById("coin21").classList.remove('selected');
				$("#E_0").css({'opacity':'1'});
				for(i=1; i<5; i++){
					$("#E"+i).css({'opacity':'0'});
					
				}
				$('#Agroup').fadeOut(1000);
				$('#Bgroup').fadeOut(1000);
				$('#Cgroup').fadeOut(1000);
				$('#Dgroup').fadeOut(1000);
				$('#Egroup').fadeIn(1000);
				$('#Fgroup').fadeOut(1000);
				$('#Ggroup').fadeOut(1000);
				$('#Hgroup').fadeOut(1000);
				$('#Igroup').fadeOut(1000);			
				$('#workteam_logo').css({'display':'none'});
				Agroup_bol = true;
				Bgroup_bol = true;
				Cgroup_bol = true;
				Dgroup_bol = true;
				Egroup_bol = false;
				Fgroup_bol = true;
				Ggroup_bol = true;
				Hgroup_bol = true;
				Igroup_bol = true;
			}else{
				break;
			}
			break;
		case 'F':
			if(Fgroup_bol){
				$('.Text').css('top','50%');
				$('#F').css({'color':'#fff', 'backgroundColor':'#fa6d75'});
				$('#B').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#C').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#D').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#E').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#A').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#G').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#H').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#I').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				
				document.getElementById("nameF").innerHTML="美宣組";
				document.getElementById("text16").innerHTML="";
				document.getElementById("text17").innerHTML="";
				document.getElementById("text18").innerHTML="";
				document.getElementById("coin22").classList.remove('selected');
				document.getElementById("coin23").classList.remove('selected');
				document.getElementById("coin24").classList.remove('selected');
				document.getElementById("coin25").classList.remove('selected');
				$("#F_0").css({'opacity':'1'});
				for(i=1; i<5; i++){
					$("#F"+i).css({'opacity':'0'});
					
				}
				$('#Agroup').fadeOut(1000);
				$('#Bgroup').fadeOut(1000);
				$('#Cgroup').fadeOut(1000);
				$('#Dgroup').fadeOut(1000);
				$('#Egroup').fadeOut(1000);
				$('#Fgroup').fadeIn(1000);
				$('#Ggroup').fadeOut(1000);
				$('#Hgroup').fadeOut(1000);
				$('#Igroup').fadeOut(1000);			
				$('#workteam_logo').css({'display':'none'});
				Agroup_bol = true;
				Bgroup_bol = true;
				Cgroup_bol = true;
				Dgroup_bol = true;
				Egroup_bol = true;
				Fgroup_bol = false;
				Ggroup_bol = true;
				Hgroup_bol = true;
				Igroup_bol = true;
			}else{
				break;
			}
			break;
		case 'G':
			if(Ggroup_bol){
				$('.Text').css('top','50%');
				$('#G').css({'color':'#fff', 'backgroundColor':'#fa6d75'});
				$('#B').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#C').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#D').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#E').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#F').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#A').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#H').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#I').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				
				document.getElementById("nameG").innerHTML="資訊組";
				document.getElementById("text19").innerHTML="";
				document.getElementById("text20").innerHTML="";
				document.getElementById("text21").innerHTML="";
				document.getElementById("coin26").classList.remove('selected');
				document.getElementById("coin27").classList.remove('selected');
				document.getElementById("coin28").classList.remove('selected');
				document.getElementById("coin29").classList.remove('selected');
				$("#G_0").css({'opacity':'1'});
				for(i=1; i<5; i++){
					$("#G"+i).css({'opacity':'0'});
					
				}
				$('#Agroup').fadeOut(1000);
				$('#Bgroup').fadeOut(1000);
				$('#Cgroup').fadeOut(1000);
				$('#Dgroup').fadeOut(1000);
				$('#Egroup').fadeOut(1000);
				$('#Fgroup').fadeOut(1000);
				$('#Ggroup').fadeIn(1000);
				$('#Hgroup').fadeOut(1000);
				$('#Igroup').fadeOut(1000);			
				$('#workteam_logo').css({'display':'none'});
				Agroup_bol = true;
				Bgroup_bol = true;
				Cgroup_bol = true;
				Dgroup_bol = true;
				Egroup_bol = true;
				Fgroup_bol = true;
				Ggroup_bol = false;
				Hgroup_bol = true;
				Igroup_bol = true;
			}else{
				break;
			}
			break;
		case 'H':
			if(Hgroup_bol){
				$('.Text').css('top','50%');
				$('#H').css({'color':'#fff', 'backgroundColor':'#fa6d75'});
				$('#B').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#C').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#D').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#E').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#F').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#G').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#A').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#I').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				
				document.getElementById("nameH").innerHTML="攝錄組";
				document.getElementById("text22").innerHTML="";
				document.getElementById("text23").innerHTML="";
				document.getElementById("text24").innerHTML="";
				document.getElementById("coin30").classList.remove('selected');
				document.getElementById("coin31").classList.remove('selected');
				document.getElementById("coin32").classList.remove('selected');
				document.getElementById("coin33").classList.remove('selected');
				$("#H_0").css({'opacity':'1'});
				for(i=1; i<5; i++){
					$("#H"+i).css({'opacity':'0'});
					
				}
				$('#Agroup').fadeOut(1000);
				$('#Bgroup').fadeOut(1000);
				$('#Cgroup').fadeOut(1000);
				$('#Dgroup').fadeOut(1000);
				$('#Egroup').fadeOut(1000);
				$('#Fgroup').fadeOut(1000);
				$('#Ggroup').fadeOut(1000);
				$('#Hgroup').fadeIn(1000);
				$('#Igroup').fadeOut(1000);			
				$('#workteam_logo').css({'display':'none'});
				Agroup_bol = true;
				Bgroup_bol = true;
				Cgroup_bol = true;
				Dgroup_bol = true;
				Egroup_bol = true;
				Fgroup_bol = true;
				Ggroup_bol = true;
				Hgroup_bol = false;
				Igroup_bol = true;
			}else{
				break;
			}
			break;
		case 'I':
			if(Igroup_bol){
				$('.Text').css('top','50%');
				$('#I').css({'color':'#fff', 'backgroundColor':'#fa6d75'});
				$('#B').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#C').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#D').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#E').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#F').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#G').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#H').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				$('#A').css({'color':'#e6b225', 'backgroundColor':'transparent'});
				
				document.getElementById("nameI").innerHTML="器材組";
				document.getElementById("text25").innerHTML="";
				document.getElementById("text26").innerHTML="";
				document.getElementById("text27").innerHTML="";
				document.getElementById("coin34").classList.remove('selected');
				document.getElementById("coin35").classList.remove('selected');
				document.getElementById("coin36").classList.remove('selected');
				$("#I_0").css({'opacity':'1'});
				for(i=1; i<4; i++){
					$("#I"+i).css({'opacity':'0'});
					
				}
				$('#Agroup').fadeOut(1000);
				$('#Bgroup').fadeOut(1000);
				$('#Cgroup').fadeOut(1000);
				$('#Dgroup').fadeOut(1000);
				$('#Egroup').fadeOut(1000);
				$('#Fgroup').fadeOut(1000);
				$('#Ggroup').fadeOut(1000);
				$('#Hgroup').fadeOut(1000);
				$('#Igroup').fadeIn(1000);			
				$('#workteam_logo').css({'display':'none'});
				Agroup_bol = true;
				Bgroup_bol = true;
				Cgroup_bol = true;
				Dgroup_bol = true;
				Egroup_bol = true;
				Fgroup_bol = true;
				Ggroup_bol = true;
				Hgroup_bol = true;
				Igroup_bol = false;
			}else{
				break;
			}
			break;
	}
		
}
function switchPicContext(item){
    var coin1 = document.getElementById("coin1");
    var coin2 = document.getElementById("coin2");
    var coin3 = document.getElementById("coin3");
    var coin4 = document.getElementById("coin4");
	var name = document.getElementById("nameA");
	var pictext1 = document.getElementById("text1");
	var pictext2 = document.getElementById("text2");
	var pictext3 = document.getElementById("text3");
	$('.Text').css('top','30%');
    switch (item.id) {
      case 'coin1': //總召秘書組
		//工人簡介-------------------------------
		name.innerHTML = "秘書組員-巫璇鳳";
		pictext1.innerHTML = "四應外三A";
		pictext2.innerHTML = "-104級應用外語系系學會 副會長";
		pictext3.innerHTML = "-2015應外x營建聯合派對 活動組長";
		name.style.animationName = "slidein";		
		pictext1.style.animationName = "slidein";
		pictext2.style.animationName = "slidein";
		pictext3.style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        coin2.classList.remove('selected');
        coin3.classList.remove('selected');
        coin4.classList.remove('selected');
		$("#A_1").animate({opacity: '1'});
		$("#A_2").animate({opacity: '0'});
		$("#A_3").animate({opacity: '0'});
		$("#A_4").animate({opacity: '0'});
		$("#A_0").animate({opacity: '0'});
        break;
      case 'coin2':
        //工人簡介-------------------------------
		name.innerHTML = "秘書組長-鄭詠駿";
		pictext1.innerHTML = "四財金四A";
		pictext2.innerHTML = "-104級熱門舞蹈社 副社長";
		pictext3.innerHTML = "-2014電子x國管x財金三系聯合迎新【全國電子金甘心】副總召兼生輔組 組長";
		name.style.animationName = "slidein";		
		pictext1.style.animationName = "slidein";
		pictext2.style.animationName = "slidein";
		pictext3.style.animationName = "slidein";
		//----------------------------------------
		item.classList.add('selected');
        coin1.classList.remove('selected');
        coin3.classList.remove('selected');
        coin4.classList.remove('selected');
		$("#A_1").animate({opacity: '0'});
		$("#A_2").animate({opacity: '1'});
		$("#A_3").animate({opacity: '0'});
		$("#A_4").animate({opacity: '0'});
		$("#A_0").animate({opacity: '0'});
        break;
      case 'coin3':
		//工人簡介-------------------------------
		name.innerHTML = "總召-賴冠文";
		pictext1.innerHTML = "四財金四A";
		pictext2.innerHTML = "-103級財務金融系系學會 器材長";
		pictext3.innerHTML = "-2016第二屆系學會培訓課程-砥石工作坊-執行團隊";
		name.style.animationName = "slidein";		
		pictext1.style.animationName = "slidein";
		pictext2.style.animationName = "slidein";
		pictext3.style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        coin1.classList.remove('selected');
        coin2.classList.remove('selected');
        coin4.classList.remove('selected');
		$("#A_1").animate({opacity: '0'});
		$("#A_2").animate({opacity: '0'});
		$("#A_3").animate({opacity: '1'});
		$("#A_4").animate({opacity: '0'});
		$("#A_0").animate({opacity: '0'});
        break;
      case 'coin4':
		//工人簡介-------------------------------
		name.innerHTML = "總召-莊尚儒";
		pictext1.innerHTML = "資工碩一";
		pictext2.innerHTML = "-103級資訊工程系系學會 會長";
		pictext3.innerHTML = "-2015YunTech CEO TIME 菁英領袖培訓營 課研組員";
		name.style.animationName = "slidein";		
		pictext1.style.animationName = "slidein";
		pictext2.style.animationName = "slidein";
		pictext3.style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        coin1.classList.remove('selected');
        coin2.classList.remove('selected');
        coin3.classList.remove('selected');
        $("#A_1").animate({opacity: '0'});
		$("#A_2").animate({opacity: '0'});
		$("#A_3").animate({opacity: '0'});
		$("#A_4").animate({opacity: '1'});
		$("#A_0").animate({opacity: '0'});
        break;
	  case 'coin5': //行政組
		//工人簡介-------------------------------
		document.getElementById("nameB").innerHTML = "行政組員-陳典煜";
		document.getElementById("text4").innerHTML = "四財金三A";
		document.getElementById("text5").innerHTML = "-104級財務金融系系學會 活動長";
		document.getElementById("text6").innerHTML = "-2015年新生學涯開展營 財金系負責人";
		document.getElementById("nameB").style.animationName = "slidein";		
		document.getElementById("text4").style.animationName = "slidein";
		document.getElementById("text5").style.animationName = "slidein";
		document.getElementById("text6").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin6").classList.remove('selected');
        document.getElementById("coin7").classList.remove('selected');
        document.getElementById("coin8").classList.remove('selected');
        $("#B1").animate({opacity: '1'});
		$("#B2").animate({opacity: '0'});
		$("#B3").animate({opacity: '0'});
		$("#B4").animate({opacity: '0'});
		$("#B_0").animate({opacity: '0'});
        break;
	  case 'coin6':
		//工人簡介-------------------------------
		document.getElementById("nameB").innerHTML = "行政組員-黃偉傑";
		document.getElementById("text4").innerHTML = "四資工四A";
		document.getElementById("text5").innerHTML = "-104級資訊工程系系學會 公關長";
		document.getElementById("text6").innerHTML = "-2015超級資優生 公關長";
		document.getElementById("nameB").style.animationName = "slidein";		
		document.getElementById("text4").style.animationName = "slidein";
		document.getElementById("text5").style.animationName = "slidein";
		document.getElementById("text6").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin5").classList.remove('selected');
        document.getElementById("coin7").classList.remove('selected');
        document.getElementById("coin8").classList.remove('selected');
        $("#B1").animate({opacity: '0'});
		$("#B2").animate({opacity: '1'});
		$("#B3").animate({opacity: '0'});
		$("#B4").animate({opacity: ''});
		$("#B_0").animate({opacity: '0'});
        break;
	  case 'coin7':
		//工人簡介-------------------------------
		document.getElementById("nameB").innerHTML = "行政組長-葉芳妤";
		document.getElementById("text4").innerHTML = "四企管四A";
		document.getElementById("text5").innerHTML = "-104級企業管理系系學會 會長";
		document.getElementById("text6").innerHTML = "-2016YunTech CEO Inspire 實踐領袖培訓營 課研組員";
		document.getElementById("nameB").style.animationName = "slidein";		
		document.getElementById("text4").style.animationName = "slidein";
		document.getElementById("text5").style.animationName = "slidein";
		document.getElementById("text6").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');        
        document.getElementById("coin6").classList.remove('selected');
        document.getElementById("coin5").classList.remove('selected');
        document.getElementById("coin8").classList.remove('selected');
        $("#B1").animate({opacity: '0'});
		$("#B2").animate({opacity: '0'});
		$("#B3").animate({opacity: '1'});
		$("#B4").animate({opacity: '0'});
		$("#B_0").animate({opacity: '0'});
        break;
	  case 'coin8':
		//工人簡介-------------------------------
		document.getElementById("nameB").innerHTML = "行政組員-譚采文";
		document.getElementById("text4").innerHTML = "四創設三A";
		document.getElementById("text5").innerHTML = "-104級創意生活設計系學會 副會長";
		document.getElementById("text6").innerHTML = "-第十屆創意生活設計營 總召";
		document.getElementById("nameB").style.animationName = "slidein";		
		document.getElementById("text4").style.animationName = "slidein";
		document.getElementById("text5").style.animationName = "slidein";
		document.getElementById("text6").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin6").classList.remove('selected');
        document.getElementById("coin7").classList.remove('selected');
        document.getElementById("coin5").classList.remove('selected');
        $("#B1").animate({opacity: '0'});
		$("#B2").animate({opacity: '0'});
		$("#B3").animate({opacity: '0'});
		$("#B4").animate({opacity: '1'});
		$("#B_0").animate({opacity: '0'});
        break;
	  case 'coin9': //行政組
		//工人簡介-------------------------------
		document.getElementById("nameC").innerHTML = "研修組長-許鈺苓";
		document.getElementById("text7").innerHTML = "四會計三A";
		document.getElementById("text8").innerHTML = "-104級會計系系學會 會長";
		document.getElementById("text9").innerHTML = "-2016五月會計月【魔計夢遊】副召";
		document.getElementById("nameC").style.animationName = "slidein";		
		document.getElementById("text7").style.animationName = "slidein";
		document.getElementById("text8").style.animationName = "slidein";
		document.getElementById("text9").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin10").classList.remove('selected');
        document.getElementById("coin11").classList.remove('selected');
        document.getElementById("coin12").classList.remove('selected');
        $("#C1").animate({opacity: '1'});
		$("#C2").animate({opacity: '0'});
		$("#C3").animate({opacity: '0'});
		$("#C4").animate({opacity: '0'});
		$("#C_0").animate({opacity: '0'});
        break;
	  case 'coin10':
		//工人簡介-------------------------------
		document.getElementById("nameC").innerHTML = "研修組員-林沛倫";
		document.getElementById("text7").innerHTML = "四營建三A";
		document.getElementById("text8").innerHTML = "-104級學生自治會 活動部長";
		document.getElementById("text9").innerHTML = "-2016YunTech CEO Inspire 實踐領袖培訓營 活動組員";
		document.getElementById("nameC").style.animationName = "slidein";		
		document.getElementById("text7").style.animationName = "slidein";
		document.getElementById("text8").style.animationName = "slidein";
		document.getElementById("text9").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin9").classList.remove('selected');
        document.getElementById("coin11").classList.remove('selected');
        document.getElementById("coin12").classList.remove('selected');
        $("#C1").animate({opacity: '0'});
		$("#C2").animate({opacity: '1'});
		$("#C3").animate({opacity: '0'});
		$("#C4").animate({opacity: ''});
		$("#C_0").animate({opacity: '0'});
        break;
	  case 'coin11':
		//工人簡介-------------------------------
		document.getElementById("nameC").innerHTML = "研修組員-薛昭苒";
		document.getElementById("text7").innerHTML = "四環安三A";
		document.getElementById("text8").innerHTML = "-104級荒野保育社 社長";
		document.getElementById("text9").innerHTML = "-第一屆荒野保育社寒假營隊 總召";
		document.getElementById("nameC").style.animationName = "slidein";		
		document.getElementById("text7").style.animationName = "slidein";
		document.getElementById("text8").style.animationName = "slidein";
		document.getElementById("text9").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');        
        document.getElementById("coin9").classList.remove('selected');
        document.getElementById("coin10").classList.remove('selected');
        document.getElementById("coin12").classList.remove('selected');
        $("#C1").animate({opacity: '0'});
		$("#C2").animate({opacity: '0'});
		$("#C3").animate({opacity: '1'});
		$("#C4").animate({opacity: '0'});
		$("#C_0").animate({opacity: '0'});
        break;
	  case 'coin12':
		//工人簡介-------------------------------
		document.getElementById("nameC").innerHTML = "研修組員-陳郁涵";
		document.getElementById("text7").innerHTML = "四文資四A";
		document.getElementById("text8").innerHTML = "-103級原住民青年社 副社長";
		document.getElementById("text9").innerHTML = "-2016YunTech CEO Inspire 實踐領袖培訓營 隊輔組員";
		document.getElementById("nameC").style.animationName = "slidein";		
		document.getElementById("text7").style.animationName = "slidein";
		document.getElementById("text8").style.animationName = "slidein";
		document.getElementById("text9").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin9").classList.remove('selected');
        document.getElementById("coin10").classList.remove('selected');
        document.getElementById("coin11").classList.remove('selected');
        $("#C1").animate({opacity: '0'});
		$("#C2").animate({opacity: '0'});
		$("#C3").animate({opacity: '0'});
		$("#C4").animate({opacity: '1'});
		$("#C_0").animate({opacity: '0'});
        break;
	  case 'coin13':
		//工人簡介-------------------------------
		document.getElementById("nameD").innerHTML = "活動組員-霍郁安";
		document.getElementById("text10").innerHTML = "四應外三A";
		document.getElementById("text11").innerHTML = "-104級學生自治會 活動次長";
		document.getElementById("text12").innerHTML = "-2015社團博覽會 總召";
		document.getElementById("nameD").style.animationName = "slidein";		
		document.getElementById("text10").style.animationName = "slidein";
		document.getElementById("text11").style.animationName = "slidein";
		document.getElementById("text12").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin14").classList.remove('selected');
        document.getElementById("coin15").classList.remove('selected');
        document.getElementById("coin16").classList.remove('selected');		
        document.getElementById("coin17").classList.remove('selected');
        $("#D1").animate({opacity: '1'});
		$("#D2").animate({opacity: '0'});
		$("#D3").animate({opacity: '0'});
		$("#D4").animate({opacity: '0'});
		$("#D5").animate({opacity: '0'});
		$("#D_0").animate({opacity: '0'});
        break;
	  case 'coin14':
		//工人簡介-------------------------------
		document.getElementById("nameD").innerHTML = "活動組員-林益仲";
		document.getElementById("text10").innerHTML = "四營建三A";
		document.getElementById("text11").innerHTML = "-第24屆校慶園遊會主持人";
		document.getElementById("text12").innerHTML = "-【R.E.D】五社聖誕派對 副召";
		document.getElementById("nameD").style.animationName = "slidein";		
		document.getElementById("text10").style.animationName = "slidein";
		document.getElementById("text11").style.animationName = "slidein";
		document.getElementById("text12").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin13").classList.remove('selected');
        document.getElementById("coin15").classList.remove('selected');
        document.getElementById("coin16").classList.remove('selected');		
        document.getElementById("coin17").classList.remove('selected');
        $("#D1").animate({opacity: '0'});
		$("#D2").animate({opacity: '1'});
		$("#D3").animate({opacity: '0'});
		$("#D4").animate({opacity: '0'});
		$("#D5").animate({opacity: '0'});
		$("#D_0").animate({opacity: '0'});
        break;
	  case 'coin15':
		//工人簡介-------------------------------
		document.getElementById("nameD").innerHTML = "活動組員-蔡松佑";
		document.getElementById("text10").innerHTML = "四電子三A";
		document.getElementById("text11").innerHTML = "-105級電子工程系系學會 副會長";
		document.getElementById("text12").innerHTML = "-電子系班際盃 總召";
		document.getElementById("nameD").style.animationName = "slidein";		
		document.getElementById("text10").style.animationName = "slidein";
		document.getElementById("text11").style.animationName = "slidein";
		document.getElementById("text12").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin14").classList.remove('selected');
        document.getElementById("coin13").classList.remove('selected');
        document.getElementById("coin16").classList.remove('selected');		
        document.getElementById("coin17").classList.remove('selected');
        $("#D1").animate({opacity: '0'});
		$("#D2").animate({opacity: '0'});
		$("#D3").animate({opacity: '1'});
		$("#D4").animate({opacity: '0'});
		$("#D5").animate({opacity: '0'});
		$("#D_0").animate({opacity: '0'});
        break;
	case 'coin16':
		//工人簡介-------------------------------
		document.getElementById("nameD").innerHTML = "活動組員-鄒采軒";
		document.getElementById("text10").innerHTML = "四財金三A";
		document.getElementById("text11").innerHTML = "-104級射箭社 副社長";
		document.getElementById("text12").innerHTML = "-2016YunTech CEO Inspire 實踐領袖培訓營 課研組員";
		document.getElementById("nameD").style.animationName = "slidein";		
		document.getElementById("text10").style.animationName = "slidein";
		document.getElementById("text11").style.animationName = "slidein";
		document.getElementById("text12").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin14").classList.remove('selected');
        document.getElementById("coin15").classList.remove('selected');
        document.getElementById("coin13").classList.remove('selected');		
        document.getElementById("coin17").classList.remove('selected');
        $("#D1").animate({opacity: '0'});
		$("#D2").animate({opacity: '0'});
		$("#D3").animate({opacity: '0'});
		$("#D4").animate({opacity: '1'});
		$("#D5").animate({opacity: '0'});
		$("#D_0").animate({opacity: '0'});
        break;
	case 'coin17':
		//工人簡介-------------------------------
		document.getElementById("nameD").innerHTML = "活動組長-許晉瑋";
		document.getElementById("text10").innerHTML = "四電子四A";
		document.getElementById("text11").innerHTML = "-103級電子工程系系學會 活動長";
		document.getElementById("text12").innerHTML = "-2015Yuntech+ 新生學涯開展營 活動組員";
		document.getElementById("nameD").style.animationName = "slidein";		
		document.getElementById("text10").style.animationName = "slidein";
		document.getElementById("text11").style.animationName = "slidein";
		document.getElementById("text12").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin14").classList.remove('selected');
        document.getElementById("coin15").classList.remove('selected');
        document.getElementById("coin16").classList.remove('selected');		
        document.getElementById("coin13").classList.remove('selected');
        $("#D1").animate({opacity: '0'});
		$("#D2").animate({opacity: '0'});
		$("#D3").animate({opacity: '0'});
		$("#D4").animate({opacity: '0'});
		$("#D5").animate({opacity: '1'});
		$("#D_0").animate({opacity: '0'});
        break;
	case 'coin18':
		//工人簡介-------------------------------
		document.getElementById("nameE").innerHTML = "隊輔組長-陳家進";
		document.getElementById("text13").innerHTML = "四電子四A";
		document.getElementById("text14").innerHTML = "-104級電子工程系系學會 會長";
		document.getElementById("text15").innerHTML = "-103級選舉委員會 主委";
		document.getElementById("nameE").style.animationName = "slidein";		
		document.getElementById("text13").style.animationName = "slidein";
		document.getElementById("text14").style.animationName = "slidein";
		document.getElementById("text15").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin19").classList.remove('selected');
        document.getElementById("coin20").classList.remove('selected');		
        document.getElementById("coin21").classList.remove('selected');
        $("#E1").animate({opacity: '1'});
		$("#E2").animate({opacity: '0'});
		$("#E3").animate({opacity: '0'});
		$("#E4").animate({opacity: '0'});
		$("#E_0").animate({opacity: '0'});
        break;
	case 'coin19':
		//工人簡介-------------------------------
		document.getElementById("nameE").innerHTML = "隊輔組員-簡淨華";
		document.getElementById("text13").innerHTML = "國企碩一";
		document.getElementById("text14").innerHTML = "-102級國管學程學會 會長";
		document.getElementById("text15").innerHTML = "-2015YunTech CEO Time 領袖培訓營 課研組員";
		document.getElementById("nameE").style.animationName = "slidein";		
		document.getElementById("text13").style.animationName = "slidein";
		document.getElementById("text14").style.animationName = "slidein";
		document.getElementById("text15").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin18").classList.remove('selected');
        document.getElementById("coin20").classList.remove('selected');		
        document.getElementById("coin21").classList.remove('selected');
        $("#E1").animate({opacity: '0'});
		$("#E2").animate({opacity: '1'});
		$("#E3").animate({opacity: '0'});
		$("#E4").animate({opacity: '0'});
		$("#E_0").animate({opacity: '0'});
        break;
	case 'coin20':
		//工人簡介-------------------------------
		document.getElementById("nameE").innerHTML = "隊輔組員-林俊銘";
		document.getElementById("text13").innerHTML = "四電機四A";
		document.getElementById("text14").innerHTML = "-103級電機工程系系學會 總務長";
		document.getElementById("text15").innerHTML = "-104級電機工程系系學會 會長";
		document.getElementById("nameE").style.animationName = "slidein";		
		document.getElementById("text13").style.animationName = "slidein";
		document.getElementById("text14").style.animationName = "slidein";
		document.getElementById("text15").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin18").classList.remove('selected');
        document.getElementById("coin19").classList.remove('selected');
        document.getElementById("coin21").classList.remove('selected');	
        $("#E1").animate({opacity: '0'});
		$("#E2").animate({opacity: '0'});
		$("#E3").animate({opacity: '1'});
		$("#E4").animate({opacity: '0'});
		$("#E_0").animate({opacity: '0'});
        break;
	case 'coin21':
		//工人簡介-------------------------------
		document.getElementById("nameE").innerHTML = "隊輔組員-林俞萍";
		document.getElementById("text13").innerHTML = "四數媒三A";
		document.getElementById("text14").innerHTML = "-104級數位媒體設計系系學會 會長";
		document.getElementById("text15").innerHTML = "-2016數媒×電子 螢光派對-Aurora歐洛拉 美宣部長";
		document.getElementById("nameE").style.animationName = "slidein";		
		document.getElementById("text13").style.animationName = "slidein";
		document.getElementById("text14").style.animationName = "slidein";
		document.getElementById("text15").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin18").classList.remove('selected');
        document.getElementById("coin19").classList.remove('selected');
        document.getElementById("coin20").classList.remove('selected');
        $("#E1").animate({opacity: '0'});
		$("#E2").animate({opacity: '0'});
		$("#E3").animate({opacity: '0'});
		$("#E4").animate({opacity: '1'});
		$("#E_0").animate({opacity: '0'});
        break;
	case 'coin22':
		//工人簡介-------------------------------
		document.getElementById("nameF").innerHTML = "美宣組員-馬千雯";
		document.getElementById("text16").innerHTML = "四創設三A";
		document.getElementById("text17").innerHTML = "-第十五屆熱門舞蹈社 美宣組員";
		document.getElementById("text18").innerHTML = "-第十五屆熱門舞蹈社成果發表 美宣長";
		document.getElementById("nameF").style.animationName = "slidein";		
		document.getElementById("text16").style.animationName = "slidein";
		document.getElementById("text17").style.animationName = "slidein";
		document.getElementById("text18").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin23").classList.remove('selected');
        document.getElementById("coin24").classList.remove('selected');
        document.getElementById("coin25").classList.remove('selected');
        $("#F1").animate({opacity: '1'});
		$("#F2").animate({opacity: '0'});
		$("#F3").animate({opacity: '0'});
		$("#F4").animate({opacity: '0'});
		$("#F_0").animate({opacity: '0'});
        break;
	case 'coin23':
		//工人簡介-------------------------------
		document.getElementById("nameF").innerHTML = "美宣組員-陳意晴";
		document.getElementById("text16").innerHTML = "四創設三A";
		document.getElementById("text17").innerHTML = "-第二十五屆吉他社美宣長";
		document.getElementById("text18").innerHTML = "-第1屆《640雲林縣斗六市大學路三段123號之民謠吉他大賽》美宣長";
		document.getElementById("nameF").style.animationName = "slidein";		
		document.getElementById("text16").style.animationName = "slidein";
		document.getElementById("text17").style.animationName = "slidein";
		document.getElementById("text18").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin22").classList.remove('selected');
        document.getElementById("coin24").classList.remove('selected');
        document.getElementById("coin25").classList.remove('selected');
        $("#F1").animate({opacity: '0'});
		$("#F2").animate({opacity: '1'});
		$("#F3").animate({opacity: '0'});
		$("#F4").animate({opacity: '0'});
		$("#F_0").animate({opacity: '0'});
        break;
	case 'coin24':
		//工人簡介-------------------------------
		document.getElementById("nameF").innerHTML = "美宣組長-董柏廷";
		document.getElementById("text16").innerHTML = "四創設三A";
		document.getElementById("text17").innerHTML = "-104級創意生活設計系學會 設計組組員";
		document.getElementById("text18").innerHTML = "-2016創設派對 Neverland海盜之夜 美宣長";
		document.getElementById("nameF").style.animationName = "slidein";		
		document.getElementById("text16").style.animationName = "slidein";
		document.getElementById("text17").style.animationName = "slidein";
		document.getElementById("text18").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin23").classList.remove('selected');
        document.getElementById("coin22").classList.remove('selected');
        document.getElementById("coin25").classList.remove('selected');
        $("#F1").animate({opacity: '0'});
		$("#F2").animate({opacity: '0'});
		$("#F3").animate({opacity: '1'});
		$("#F4").animate({opacity: '0'});
		$("#F_0").animate({opacity: '0'});
        break;
	case 'coin25':
		//工人簡介-------------------------------
		document.getElementById("nameF").innerHTML = "美宣組員-葉子豪";
		document.getElementById("text16").innerHTML = "四創設三A";
		document.getElementById("text17").innerHTML = "-104級創意生活設計系學會 總務長";
		document.getElementById("text18").innerHTML = "-2016創設派對 Neverland海盜之夜 副召";
		document.getElementById("nameF").style.animationName = "slidein";		
		document.getElementById("text16").style.animationName = "slidein";
		document.getElementById("text17").style.animationName = "slidein";
		document.getElementById("text18").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin23").classList.remove('selected');
        document.getElementById("coin22").classList.remove('selected');
        document.getElementById("coin24").classList.remove('selected');
        $("#F1").animate({opacity: '0'});
		$("#F2").animate({opacity: '0'});
		$("#F3").animate({opacity: '0'});
		$("#F4").animate({opacity: '1'});
		$("#F_0").animate({opacity: '0'});
        break;
	case 'coin26':
		//工人簡介-------------------------------
		document.getElementById("nameG").innerHTML = "資訊組員-蘇家德";
		document.getElementById("text19").innerHTML = "資工碩一";
		document.getElementById("text20").innerHTML = "-102級劍道社 社長";
		document.getElementById("text21").innerHTML = "-103級資訊工程系系學會 公關長";
		document.getElementById("nameG").style.animationName = "slidein";		
		document.getElementById("text19").style.animationName = "slidein";
		document.getElementById("text20").style.animationName = "slidein";
		document.getElementById("text21").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin29").classList.remove('selected');
        document.getElementById("coin27").classList.remove('selected');
        document.getElementById("coin28").classList.remove('selected');
        $("#G1").animate({opacity: '1'});
		$("#G2").animate({opacity: '0'});
		$("#G3").animate({opacity: '0'});
		$("#G4").animate({opacity: '0'});
		$("#G_0").animate({opacity: '0'});
        break;
	case 'coin27':
		//工人簡介-------------------------------
		document.getElementById("nameG").innerHTML = "資訊組長-李冠霆";
		document.getElementById("text19").innerHTML = "四資工四A";
		document.getElementById("text20").innerHTML = "-104級資訊工程系系學會 會長";
		document.getElementById("text21").innerHTML = "-2016YunTech CEO Inspire 實踐領袖培訓營 隊輔組員";
		document.getElementById("nameG").style.animationName = "slidein";		
		document.getElementById("text19").style.animationName = "slidein";
		document.getElementById("text20").style.animationName = "slidein";
		document.getElementById("text21").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin25").classList.remove('selected');
        document.getElementById("coin26").classList.remove('selected');
        document.getElementById("coin28").classList.remove('selected');
        $("#G1").animate({opacity: '0'});
		$("#G2").animate({opacity: '1'});
		$("#G3").animate({opacity: '0'});
		$("#G4").animate({opacity: '0'});
		$("#G_0").animate({opacity: '0'});
        break;
	case 'coin28':
		//工人簡介-------------------------------
		document.getElementById("nameG").innerHTML = "資訊組員-蔡傑翰";
		document.getElementById("text19").innerHTML = "四資工四A";
		document.getElementById("text20").innerHTML = "-104級資訊工程系系學會 美宣長";
		document.getElementById("text21").innerHTML = "-第九屆學生議會 財務委員";
		document.getElementById("nameG").style.animationName = "slidein";		
		document.getElementById("text19").style.animationName = "slidein";
		document.getElementById("text20").style.animationName = "slidein";
		document.getElementById("text21").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin26").classList.remove('selected');
        document.getElementById("coin25").classList.remove('selected');
        document.getElementById("coin29").classList.remove('selected');
        $("#G1").animate({opacity: '0'});
		$("#G2").animate({opacity: '0'});
		$("#G3").animate({opacity: '1'});
		$("#G4").animate({opacity: '0'});
		$("#G_0").animate({opacity: '0'});
        break;
	case 'coin29':
		//工人簡介-------------------------------
		document.getElementById("nameG").innerHTML = "資訊組員-吳致蓁";
		document.getElementById("text19").innerHTML = "四創設四A";
		document.getElementById("text20").innerHTML = "-103級創意生活設計系 攝影長";
		document.getElementById("text21").innerHTML = "-2015創設派對 醉金年代 副召";
		document.getElementById("nameG").style.animationName = "slidein";		
		document.getElementById("text19").style.animationName = "slidein";
		document.getElementById("text20").style.animationName = "slidein";
		document.getElementById("text21").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin26").classList.remove('selected');
        document.getElementById("coin27").classList.remove('selected');
        document.getElementById("coin28").classList.remove('selected');
        $("#G1").animate({opacity: '0'});
		$("#G2").animate({opacity: '0'});
		$("#G3").animate({opacity: '0'});
		$("#G4").animate({opacity: '1'});
		$("#G_0").animate({opacity: '0'});
        break;
	case 'coin30':
		//工人簡介-------------------------------
		document.getElementById("nameH").innerHTML = "攝錄組員-陳婉庭";
		document.getElementById("text22").innerHTML = "四數媒三A";
		document.getElementById("text23").innerHTML = "-第八屆數媒系暑期營隊 媒力超人 副召";
		document.getElementById("text24").innerHTML = "-2016數媒X電子螢光派對 歐洛拉 公關組長";
		document.getElementById("nameH").style.animationName = "slidein";		
		document.getElementById("text22").style.animationName = "slidein";
		document.getElementById("text23").style.animationName = "slidein";
		document.getElementById("text24").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin31").classList.remove('selected');
        document.getElementById("coin32").classList.remove('selected');
        document.getElementById("coin33").classList.remove('selected');
        $("#H1").animate({opacity: '1'});
		$("#H2").animate({opacity: '0'});
		$("#H3").animate({opacity: '0'});
		$("#H4").animate({opacity: '0'});
		$("#H_0").animate({opacity: '0'});
        break;
	case 'coin31':
		//工人簡介-------------------------------
		document.getElementById("nameH").innerHTML = "攝錄組長-王敦楷";
		document.getElementById("text22").innerHTML = "四機械三A";
		document.getElementById("text23").innerHTML = "-104級攝影社 社長";
		document.getElementById("text24").innerHTML = "-2016全國大專社團評鑑攝影組組長";
		document.getElementById("nameH").style.animationName = "slidein";		
		document.getElementById("text22").style.animationName = "slidein";
		document.getElementById("text23").style.animationName = "slidein";
		document.getElementById("text24").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin30").classList.remove('selected');
        document.getElementById("coin32").classList.remove('selected');
        document.getElementById("coin33").classList.remove('selected');
        $("#H1").animate({opacity: '0'});
		$("#H2").animate({opacity: '1'});
		$("#H3").animate({opacity: '0'});
		$("#H4").animate({opacity: '0'});
		$("#H_0").animate({opacity: '0'});
        break;
	case 'coin32':
		//工人簡介-------------------------------
		document.getElementById("nameH").innerHTML = "攝錄組員-顏嘉稜";
		document.getElementById("text22").innerHTML = "四數媒二A";
		document.getElementById("text23").innerHTML = "-105級鋼琴社 攝影長";
		document.getElementById("text24").innerHTML = "-第四屆數位媒體設計系偶像計劃 攝影組";
		document.getElementById("nameH").style.animationName = "slidein";		
		document.getElementById("text22").style.animationName = "slidein";
		document.getElementById("text23").style.animationName = "slidein";
		document.getElementById("text24").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin31").classList.remove('selected');
        document.getElementById("coin30").classList.remove('selected');
        document.getElementById("coin33").classList.remove('selected');
        $("#H1").animate({opacity: '0'});
		$("#H2").animate({opacity: '0'});
		$("#H3").animate({opacity: '1'});
		$("#H4").animate({opacity: '0'});
		$("#H_0").animate({opacity: '0'});
        break;
	case 'coin33':
		//工人簡介-------------------------------
		document.getElementById("nameH").innerHTML = "攝錄組員-周立杰";
		document.getElementById("text22").innerHTML = "四化材三B";
		document.getElementById("text23").innerHTML = "-104級攝影社 副社長";
		document.getElementById("text24").innerHTML = "-2016全國大專社團評鑑攝影組 組長";
		document.getElementById("nameH").style.animationName = "slidein";		
		document.getElementById("text22").style.animationName = "slidein";
		document.getElementById("text23").style.animationName = "slidein";
		document.getElementById("text24").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin31").classList.remove('selected');
        document.getElementById("coin32").classList.remove('selected');
        document.getElementById("coin30").classList.remove('selected');
        $("#H1").animate({opacity: '0'});
		$("#H2").animate({opacity: '0'});
		$("#H3").animate({opacity: '0'});
		$("#H4").animate({opacity: '1'});
		$("#H_0").animate({opacity: '0'});
        break;
	
	case 'coin34':
		//工人簡介-------------------------------
		document.getElementById("nameI").innerHTML = "器材組長-翁嘉佑";
		document.getElementById("text25").innerHTML = "四營建四A";
		document.getElementById("text26").innerHTML = "-103級聆韻社 器材長";
		document.getElementById("text27").innerHTML = "-105年金雲獎器材組 組員";
		document.getElementById("nameI").style.animationName = "slidein";		
		document.getElementById("text25").style.animationName = "slidein";
		document.getElementById("text26").style.animationName = "slidein";
		document.getElementById("text27").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin35").classList.remove('selected');
        document.getElementById("coin36").classList.remove('selected');
        $("#I1").animate({opacity: '1'});
		$("#I2").animate({opacity: '0'});
		$("#I3").animate({opacity: '0'});
		$("#I_0").animate({opacity: '0'});
        break;
	case 'coin35':
		//工人簡介-------------------------------
		document.getElementById("nameI").innerHTML = "器材組員-王冠博";
		document.getElementById("text25").innerHTML = "四化材三A";
		document.getElementById("text26").innerHTML = "-104級射箭社 器材長";
		document.getElementById("text27").innerHTML = "-2016全國大專社團評鑑 器材組";
		document.getElementById("nameI").style.animationName = "slidein";		
		document.getElementById("text25").style.animationName = "slidein";
		document.getElementById("text26").style.animationName = "slidein";
		document.getElementById("text27").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin34").classList.remove('selected');
        document.getElementById("coin36").classList.remove('selected');
        $("#I1").animate({opacity: '0'});
		$("#I2").animate({opacity: '1'});
		$("#I3").animate({opacity: '0'});
		$("#I_0").animate({opacity: '0'});
        break;
	case 'coin36':
		//工人簡介-------------------------------
		document.getElementById("nameI").innerHTML = "器材組員-白昕";
		document.getElementById("text25").innerHTML = "四電子三A";
		document.getElementById("text26").innerHTML = "-104級社區服務團 器材長";
		document.getElementById("text27").innerHTML = "-2016YunTech CEO Inspire 實踐領袖培訓營 器材組員";
		document.getElementById("nameI").style.animationName = "slidein";		
		document.getElementById("text25").style.animationName = "slidein";
		document.getElementById("text26").style.animationName = "slidein";
		document.getElementById("text27").style.animationName = "slidein";
		//----------------------------------------
        item.classList.add('selected');
        document.getElementById("coin35").classList.remove('selected');
        document.getElementById("coin34").classList.remove('selected');
        $("#I1").animate({opacity: '0'});
		$("#I2").animate({opacity: '0'});
		$("#I3").animate({opacity: '1'});
		$("#I_0").animate({opacity: '0'});
        break;
	}
  }
