$(document).ready(function(){
	for(z=1; z<22; z++){
		document.getElementById("text"+z).addEventListener('animationend',function(){this.style.animationName = '';}, false);
	}
	
});

var nowGroup = ["AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","UU","TT"];
function AssShow(group){
	$('#Ass_logo').css({'display':'none'});
	for(c=0; c<21; c++){
		$('#'+nowGroup[c]+'group').fadeOut(1000);
	}
	$('#'+nowGroup[group.id]+'group').fadeIn(1000);	
	$('#'+nowGroup[group.id]+'group').fadeIn(1000);
}
function switchAss(item){
	for(z=1; z<22; z++){
		document.getElementById("text"+z).style.animationName = "slidein";		
	}
    switch (item.id) {
      case 'coinAss1': //機械系學會------------------------------
		//工人簡介-------------------------------		
		document.getElementById("text1").innerHTML = "機械系隊輔-王則翰";
		//----------------------------------------
		for(a=1; a<18; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<18; i++){
			$("#AA"+i).animate({opacity: '0'});
		}
		$('#AA1').animate({opacity: '1'});
        break;
	  case 'coinAss2': //總召秘書組
		//工人簡介-------------------------------		
		document.getElementById("text1").innerHTML = "機械系隊輔-劉晏行";
		//----------------------------------------
		for(a=1; a<18; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<18; i++){
			$("#AA"+i).animate({opacity: '0'});
		}
		$('#AA2').animate({opacity: '1'});
        break;
	  case 'coinAss3': //總召秘書組
		//工人簡介-------------------------------		
		document.getElementById("text1").innerHTML = "機械系隊輔-劉志宏";
		//----------------------------------------
		for(a=1; a<18; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<18; i++){
			$("#AA"+i).animate({opacity: '0'});
		}
		$('#AA3').animate({opacity: '1'});
        break;
	  case 'coinAss4': //總召秘書組
		//工人簡介-------------------------------		
		document.getElementById("text1").innerHTML = "機械系隊輔-黃偉勝";
		//----------------------------------------
		for(a=1; a<18; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<18; i++){
			$("#AA"+i).animate({opacity: '0'});
		}
		$('#AA4').animate({opacity: '1'});
        break;
	  case 'coinAss5': //總召秘書組
		//工人簡介-------------------------------		
		document.getElementById("text1").innerHTML = "機械系隊輔-高思穎";
		//----------------------------------------
		for(a=1; a<18; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<18; i++){
			$("#AA"+i).animate({opacity: '0'});
		}
		$('#AA5').animate({opacity: '1'});
        break;
	  case 'coinAss6': //總召秘書組
		//工人簡介-------------------------------		
		document.getElementById("text1").innerHTML = "機械系隊輔-李承憲";
		//----------------------------------------
		for(a=1; a<18; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<18; i++){
			$("#AA"+i).animate({opacity: '0'});
		}
		$('#AA6').animate({opacity: '1'});
        break;
	  case 'coinAss7': //總召秘書組
		//工人簡介-------------------------------		
		document.getElementById("text1").innerHTML = "機械系隊輔-吳品冠";
		//----------------------------------------
		for(a=1; a<18; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<18; i++){
			$("#AA"+i).animate({opacity: '0'});
		}
		$('#AA7').animate({opacity: '1'});
        break;
	  case 'coinAss8': //總召秘書組
		//工人簡介-------------------------------		
		document.getElementById("text1").innerHTML = "機械系隊輔-王譽翔";
		//----------------------------------------
		for(a=1; a<18; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<18; i++){
			$("#AA"+i).animate({opacity: '0'});
		}
		$('#AA8').animate({opacity: '1'});
        break;
	  case 'coinAss9': //總召秘書組
		//工人簡介-------------------------------		
		document.getElementById("text1").innerHTML = "機械系隊輔-謝佑笙";
		//----------------------------------------
		for(a=1; a<18; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<18; i++){
			$("#AA"+i).animate({opacity: '0'});
		}
		$('#AA9').animate({opacity: '1'});
        break;
	  case 'coinAss10': //總召秘書組
		//工人簡介-------------------------------		
		document.getElementById("text1").innerHTML = "機械系隊輔-楊寀吟";
		//----------------------------------------
		for(a=1; a<18; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<18; i++){
			$("#AA"+i).animate({opacity: '0'});
		}
		$('#AA10').animate({opacity: '1'});
        break;
	  case 'coinAss11': //總召秘書組
		//工人簡介-------------------------------		
		document.getElementById("text1").innerHTML = "機械系隊輔-黃琮荏";
		//----------------------------------------
		for(a=1; a<18; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<18; i++){
			$("#AA"+i).animate({opacity: '0'});
		}
		$('#AA11').animate({opacity: '1'});
        break;
	  case 'coinAss12': //總召秘書組
		//工人簡介-------------------------------		
		document.getElementById("text1").innerHTML = "機械系隊輔-游竣宇";
		//----------------------------------------
		for(a=1; a<18; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<18; i++){
			$("#AA"+i).animate({opacity: '0'});
		}
		$('#AA12').animate({opacity: '1'});
        break;
	  case 'coinAss13': //總召秘書組
		//工人簡介-------------------------------		
		document.getElementById("text1").innerHTML = "機械系隊輔-陳育賢";
		//----------------------------------------
		for(a=1; a<18; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<18; i++){
			$("#AA"+i).animate({opacity: '0'});
		}
		$('#AA13').animate({opacity: '1'});
        break;
	  case 'coinAss14': //總召秘書組
		//工人簡介-------------------------------		
		document.getElementById("text1").innerHTML = "機械系隊輔-洪晨祐";
		//----------------------------------------
		for(a=1; a<18; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<18; i++){
			$("#AA"+i).animate({opacity: '0'});
		}
		$('#AA14').animate({opacity: '1'});
        break;
	  case 'coinAss15': //總召秘書組
		//工人簡介-------------------------------		
		document.getElementById("text1").innerHTML = "機械系隊輔-王哲緯";
		//----------------------------------------
		for(a=1; a<18; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<18; i++){
			$("#AA"+i).animate({opacity: '0'});
		}
		$('#AA15').animate({opacity: '1'});
        break;
	  case 'coinAss16': //總召秘書組
		//工人簡介-------------------------------		
		document.getElementById("text1").innerHTML = "機械系隊輔-王昭元";
		//----------------------------------------
		for(a=1; a<18; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<18; i++){
			$("#AA"+i).animate({opacity: '0'});
		}
		$('#AA16').animate({opacity: '1'});
        break;
	  case 'coinAss17': //總召秘書組
		//工人簡介-------------------------------		
		document.getElementById("text1").innerHTML = "機械系隊輔-王政舜";
		//----------------------------------------
		for(a=1; a<18; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<18; i++){
			$("#AA"+i).animate({opacity: '0'});
		}
		$('#AA17').animate({opacity: '1'});
        break;
	  case 'coinAss18': //電機系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text2").innerHTML = "電機系隊輔-吳冠叡";
		//----------------------------------------
		for(a=18; a<30; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#BB"+i).animate({opacity: '0'});
		}
		$('#BB1').animate({opacity: '1'});
        break;
	  case 'coinAss19': //電機系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text2").innerHTML = "電機系隊輔-曹晉嘉";
		//----------------------------------------
		for(a=18; a<30; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#BB"+i).animate({opacity: '0'});
		}
		$('#BB2').animate({opacity: '1'});
        break;
	  case 'coinAss20': //電機系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text2").innerHTML = "電機系隊輔-黃家華";
		//----------------------------------------
		for(a=18; a<30; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#BB"+i).animate({opacity: '0'});
		}
		$('#BB3').animate({opacity: '1'});
        break;
	  case 'coinAss21': //電機系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text2").innerHTML = "電機系隊輔-劉宇聖";
		//----------------------------------------
		for(a=18; a<30; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#BB"+i).animate({opacity: '0'});
		}
		$('#BB4').animate({opacity: '1'});
        break;
	  case 'coinAss22': //電機系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text2").innerHTML = "電機系隊輔-盧政宏";
		//----------------------------------------
		for(a=18; a<30; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#BB"+i).animate({opacity: '0'});
		}
		$('#BB5').animate({opacity: '1'});
        break;
	  case 'coinAss23': //電機系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text2").innerHTML = "電機系隊輔-賴明緯";
		//----------------------------------------
		for(a=18; a<30; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#BB"+i).animate({opacity: '0'});
		}
		$('#BB6').animate({opacity: '1'});
        break;
	  case 'coinAss24': //電機系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text2").innerHTML = "電機系隊輔-謝東霖";
		//----------------------------------------
		for(a=18; a<30; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#BB"+i).animate({opacity: '0'});
		}
		$('#BB7').animate({opacity: '1'});
        break;
	  case 'coinAss25': //電機系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text2").innerHTML = "電機系隊輔-吳宗庭";
		//----------------------------------------
		for(a=18; a<30; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#BB"+i).animate({opacity: '0'});
		}
		$('#BB8').animate({opacity: '1'});
        break;
	  case 'coinAss26': //電機系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text2").innerHTML = "電機系隊輔-汪庭輝";
		//----------------------------------------
		for(a=18; a<30; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#BB"+i).animate({opacity: '0'});
		}
		$('#BB9').animate({opacity: '1'});
        break;
	  case 'coinAss27': //電機系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text2").innerHTML = "電機系隊輔-柯柏佑";
		//----------------------------------------
		for(a=18; a<30; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#BB"+i).animate({opacity: '0'});
		}
		$('#BB10').animate({opacity: '1'});
        break;
	  case 'coinAss28': //電機系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text2").innerHTML = "電機系隊輔-陳彥辰";
		//----------------------------------------
		for(a=18; a<30; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#BB"+i).animate({opacity: '0'});
		}
		$('#BB11').animate({opacity: '1'});
        break;
	  case 'coinAss29': //電機系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text2").innerHTML = "電機系隊輔-蔡奇紘";
		//----------------------------------------
		for(a=18; a<30; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#BB"+i).animate({opacity: '0'});
		}
		$('#BB12').animate({opacity: '1'});
        break;
	  case 'coinAss30': //電子系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text3").innerHTML = "電子系隊輔-林見名";
		//----------------------------------------
		for(a=30; a<43; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<14; i++){
			$("#CC"+i).animate({opacity: '0'});
		}
		$('#CC1').animate({opacity: '1'});
        break;
	  case 'coinAss31': //電子系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text3").innerHTML = "電子系隊輔-曾凱翔";
		//----------------------------------------
		for(a=30; a<43; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<14; i++){
			$("#CC"+i).animate({opacity: '0'});
		}
		$('#CC2').animate({opacity: '1'});
        break;
	  case 'coinAss32': //電子系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text3").innerHTML = "電子系隊輔-李昭憲";
		//----------------------------------------
		for(a=30; a<43; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<14; i++){
			$("#CC"+i).animate({opacity: '0'});
		}
		$('#CC3').animate({opacity: '1'});
        break;
	  case 'coinAss33': //電子系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text3").innerHTML = "電子系隊輔-邱博鍵";
		//----------------------------------------
		for(a=30; a<43; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<14; i++){
			$("#CC"+i).animate({opacity: '0'});
		}
		$('#CC4').animate({opacity: '1'});
        break;
	  case 'coinAss34': //電子系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text3").innerHTML = "電子系隊輔-潘冠雄";
		//----------------------------------------
		for(a=30; a<43; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<14; i++){
			$("#CC"+i).animate({opacity: '0'});
		}
		$('#CC5').animate({opacity: '1'});
        break;
	case 'coinAss35': //電子系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text3").innerHTML = "電子系隊輔-陳逸豪";
		//----------------------------------------
		for(a=30; a<43; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<14; i++){
			$("#CC"+i).animate({opacity: '0'});
		}
		$('#CC6').animate({opacity: '1'});
        break;
	case 'coinAss36': //電子系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text3").innerHTML = "電子系隊輔-陳偉哲";
		//----------------------------------------
		for(a=30; a<43; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<14; i++){
			$("#CC"+i).animate({opacity: '0'});
		}
		$('#CC7').animate({opacity: '1'});
        break;
	case 'coinAss37': //電子系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text3").innerHTML = "電子系隊輔-許鎵顗";
		//----------------------------------------
		for(a=30; a<43; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<14; i++){
			$("#CC"+i).animate({opacity: '0'});
		}
		$('#CC8').animate({opacity: '1'});
        break;
	case 'coinAss38': //電子系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text3").innerHTML = "電子系隊輔-張紘瑋";
		//----------------------------------------
		for(a=30; a<43; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<14; i++){
			$("#CC"+i).animate({opacity: '0'});
		}
		$('#CC9').animate({opacity: '1'});
        break;
	case 'coinAss39': //電子系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text3").innerHTML = "電子系隊輔-潘楷霖";
		//----------------------------------------
		for(a=30; a<43; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<14; i++){
			$("#CC"+i).animate({opacity: '0'});
		}
		$('#CC10').animate({opacity: '1'});
        break;
	case 'coinAss40': //電子系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text3").innerHTML = "電子系隊輔-李維軒";
		//----------------------------------------
		for(a=30; a<43; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<14; i++){
			$("#CC"+i).animate({opacity: '0'});
		}
		$('#CC11').animate({opacity: '1'});
        break;
	case 'coinAss41': //電子系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text3").innerHTML = "電子系隊輔-劉天宇";
		//----------------------------------------
		for(a=30; a<43; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<14; i++){
			$("#CC"+i).animate({opacity: '0'});
		}
		$('#CC12').animate({opacity: '1'});
        break;
	case 'coinAss42': //電子系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text3").innerHTML = "電子系隊輔-周學蓬";
		//----------------------------------------
		for(a=30; a<43; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<14; i++){
			$("#CC"+i).animate({opacity: '0'});
		}
		$('#CC13').animate({opacity: '1'});
        break;
	case 'coinAss43': //環安系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text4").innerHTML = "環安系隊輔-江明豪";
		//----------------------------------------
		for(a=43; a<55; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#DD"+i).animate({opacity: '0'});
		}
		$('#DD1').animate({opacity: '1'});
        break;
	case 'coinAss44': //環安系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text4").innerHTML = "環安系隊輔-利維珉";
		//----------------------------------------
		for(a=43; a<55; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#DD"+i).animate({opacity: '0'});
		}
		$('#DD2').animate({opacity: '1'});
        break;
	case 'coinAss45': //環安系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text4").innerHTML = "環安系隊輔-宋晨暠";
		//----------------------------------------
		for(a=43; a<55; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#DD"+i).animate({opacity: '0'});
		}
		$('#DD3').animate({opacity: '1'});
        break;
	case 'coinAss46': //環安系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text4").innerHTML = "環安系隊輔-李采誼";
		//----------------------------------------
		for(a=43; a<55; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#DD"+i).animate({opacity: '0'});
		}
		$('#DD4').animate({opacity: '1'});
        break;
	case 'coinAss47': //環安系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text4").innerHTML = "環安系隊輔-李家華";
		//----------------------------------------
		for(a=43; a<55; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#DD"+i).animate({opacity: '0'});
		}
		$('#DD5').animate({opacity: '1'});
        break;
	case 'coinAss48': //環安系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text4").innerHTML = "環安系隊輔-李翔誠";
		//----------------------------------------
		for(a=43; a<55; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#DD"+i).animate({opacity: '0'});
		}
		$('#DD6').animate({opacity: '1'});
        break;
	case 'coinAss49': //環安系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text4").innerHTML = "環安系隊輔-林育民";
		//----------------------------------------
		for(a=43; a<55; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#DD"+i).animate({opacity: '0'});
		}
		$('#DD7').animate({opacity: '1'});
        break;
	case 'coinAss50': //環安系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text4").innerHTML = "環安系隊輔-林芳伃";
		//----------------------------------------
		for(a=43; a<55; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#DD"+i).animate({opacity: '0'});
		}
		$('#DD8').animate({opacity: '1'});
        break;
	case 'coinAss51': //環安系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text4").innerHTML = "環安系隊輔-林冠呈";
		//----------------------------------------
		for(a=43; a<55; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#DD"+i).animate({opacity: '0'});
		}
		$('#DD9').animate({opacity: '1'});
        break;
	case 'coinAss52': //環安系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text4").innerHTML = "環安系隊輔-林邇倫";
		//----------------------------------------
		for(a=43; a<55; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#DD"+i).animate({opacity: '0'});
		}
		$('#DD10').animate({opacity: '1'});
        break;
	case 'coinAss53': //環安系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text4").innerHTML = "環安系隊輔-楊湘芸";
		//----------------------------------------
		for(a=43; a<55; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#DD"+i).animate({opacity: '0'});
		}
		$('#DD11').animate({opacity: '1'});
        break;
	case 'coinAss54': //環安系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text4").innerHTML = "環安系隊輔-鄭達鴻";
		//----------------------------------------
		for(a=43; a<55; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#DD"+i).animate({opacity: '0'});
		}
		$('#DD12').animate({opacity: '1'});
        break;
	case 'coinAss55': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-余承憲";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE1').animate({opacity: '1'});
        break;
	case 'coinAss56': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-林秉鴻";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE2').animate({opacity: '1'});
        break;
	case 'coinAss57': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-范毓家";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE3').animate({opacity: '1'});
        break;
	case 'coinAss58': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-張博智";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE4').animate({opacity: '1'});
        break;
	case 'coinAss59': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-陳咨茵";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE5').animate({opacity: '1'});
        break;
	case 'coinAss60': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-董嘉銘";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE6').animate({opacity: '1'});
        break;
	case 'coinAss61': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-詹凱雯";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE7').animate({opacity: '1'});
        break;
	case 'coinAss62': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-賴穎賢";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE8').animate({opacity: '1'});
        break;
	case 'coinAss63': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-羅云暄";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE9').animate({opacity: '1'});
        break;
	case 'coinAss64': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-童聆珈";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE10').animate({opacity: '1'});
        break;
	case 'coinAss65': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-李冠頡";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE11').animate({opacity: '1'});
        break;
	case 'coinAss66': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-邱莫凡";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE12').animate({opacity: '1'});
        break;
	case 'coinAss67': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-張啟彥";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE13').animate({opacity: '1'});
        break;
	case 'coinAss68': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-曾雪鳳";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE14').animate({opacity: '1'});
        break;
	case 'coinAss69': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-曾雅君";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE15').animate({opacity: '1'});
        break;
	case 'coinAss70': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-黃泓諭";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE16').animate({opacity: '1'});
        break;
	case 'coinAss71': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-楊智文";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE17').animate({opacity: '1'});
        break;
	case 'coinAss72': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-王威凱";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE18').animate({opacity: '1'});
        break;
	case 'coinAss73': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-康翠芸";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE19').animate({opacity: '1'});
        break;
	case 'coinAss74': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-萬宗杰";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE20').animate({opacity: '1'});
        break;
	case 'coinAss74': //化材系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text5").innerHTML = "化材系隊輔-萬宗杰";
		//----------------------------------------
		for(a=55; a<75; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#EE"+i).animate({opacity: '0'});
		}
		$('#EE20').animate({opacity: '1'});
        break;
	case 'coinAss75': //營建系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text6").innerHTML = "營建系隊輔-朱力威";
		//----------------------------------------
		for(a=75; a<87; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#FF"+i).animate({opacity: '0'});
		}
		$('#FF1').animate({opacity: '1'});
        break;
	case 'coinAss76': //營建系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text6").innerHTML = "營建系隊輔-許皓筑";
		//----------------------------------------
		for(a=75; a<87; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#FF"+i).animate({opacity: '0'});
		}
		$('#FF2').animate({opacity: '1'});
        break;
	case 'coinAss77': //營建系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text6").innerHTML = "營建系隊輔-陳語笙";
		//----------------------------------------
		for(a=75; a<87; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#FF"+i).animate({opacity: '0'});
		}
		$('#FF3').animate({opacity: '1'});
        break;
	case 'coinAss78': //營建系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text6").innerHTML = "營建系隊輔-何博凱";
		//----------------------------------------
		for(a=75; a<87; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#FF"+i).animate({opacity: '0'});
		}
		$('#FF4').animate({opacity: '1'});
        break;
	case 'coinAss79': //營建系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text6").innerHTML = "營建系隊輔-吳冠霖";
		//----------------------------------------
		for(a=75; a<87; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#FF"+i).animate({opacity: '0'});
		}
		$('#FF5').animate({opacity: '1'});
        break;
	case 'coinAss80': //營建系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text6").innerHTML = "營建系隊輔-唐澤宇";
		//----------------------------------------
		for(a=75; a<87; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#FF"+i).animate({opacity: '0'});
		}
		$('#FF6').animate({opacity: '1'});
        break;
	case 'coinAss81': //營建系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text6").innerHTML = "營建系隊輔-曹秉勳";
		//----------------------------------------
		for(a=75; a<87; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#FF"+i).animate({opacity: '0'});
		}
		$('#FF7').animate({opacity: '1'});
        break;
	case 'coinAss82': //營建系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text6").innerHTML = "營建系隊輔-黃佳純";
		//----------------------------------------
		for(a=75; a<87; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#FF"+i).animate({opacity: '0'});
		}
		$('#FF8').animate({opacity: '1'});
        break;
	case 'coinAss83': //營建系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text6").innerHTML = "營建系隊輔-徐鈺婷";
		//----------------------------------------
		for(a=75; a<87; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#FF"+i).animate({opacity: '0'});
		}
		$('#FF9').animate({opacity: '1'});
        break;
	case 'coinAss84': //營建系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text6").innerHTML = "營建系隊輔-許育菁";
		//----------------------------------------
		for(a=75; a<87; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#FF"+i).animate({opacity: '0'});
		}
		$('#FF10').animate({opacity: '1'});
        break;
	case 'coinAss85': //營建系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text6").innerHTML = "營建系隊輔-黃玟菁";
		//----------------------------------------
		for(a=75; a<87; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#FF"+i).animate({opacity: '0'});
		}
		$('#FF11').animate({opacity: '1'});
        break;
	case 'coinAss86': //營建系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text6").innerHTML = "營建系隊輔-廖至銘";
		//----------------------------------------
		for(a=75; a<87; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#FF"+i).animate({opacity: '0'});
		}
		$('#FF12').animate({opacity: '1'});
        break;
	case 'coinAss87': //資工系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text7").innerHTML = "資工系隊輔-游亞凌";
		//----------------------------------------
		for(a=87; a<95; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<9; i++){
			$("#GG"+i).animate({opacity: '0'});
		}
		$('#GG1').animate({opacity: '1'});
        break;
	case 'coinAss88': //資工系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text7").innerHTML = "資工系隊輔-黃楷";
		//----------------------------------------
		for(a=87; a<95; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<9; i++){
			$("#GG"+i).animate({opacity: '0'});
		}
		$('#GG2').animate({opacity: '1'});
        break;
	case 'coinAss89': //資工系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text7").innerHTML = "資工系隊輔-林宜玟";
		//----------------------------------------
		for(a=87; a<95; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<9; i++){
			$("#GG"+i).animate({opacity: '0'});
		}
		$('#GG3').animate({opacity: '1'});
        break;	
	case 'coinAss90': //資工系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text7").innerHTML = "資工系隊輔-孫博羿";
		//----------------------------------------
		for(a=87; a<95; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<9; i++){
			$("#GG"+i).animate({opacity: '0'});
		}
		$('#GG4').animate({opacity: '1'});
        break;
	case 'coinAss91': //資工系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text7").innerHTML = "資工系隊輔-蕭宇鑫";
		//----------------------------------------
		for(a=87; a<95; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<9; i++){
			$("#GG"+i).animate({opacity: '0'});
		}
		$('#GG5').animate({opacity: '1'});
        break;
	case 'coinAss92': //資工系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text7").innerHTML = "資工系隊輔-薛閔豪";
		//----------------------------------------
		for(a=87; a<95; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<9; i++){
			$("#GG"+i).animate({opacity: '0'});
		}
		$('#GG6').animate({opacity: '1'});
        break;
	case 'coinAss93': //資工系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text7").innerHTML = "資工系隊輔-潘冠廷";
		//----------------------------------------
		for(a=87; a<95; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<9; i++){
			$("#GG"+i).animate({opacity: '0'});
		}
		$('#GG7').animate({opacity: '1'});
        break;
	case 'coinAss94': //資工系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text7").innerHTML = "資工系隊輔-魏君祐";
		//----------------------------------------
		for(a=87; a<95; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<9; i++){
			$("#GG"+i).animate({opacity: '0'});
		}
		$('#GG8').animate({opacity: '1'});
        break;
	case 'coinAss95': //工程不分系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text8").innerHTML = "工程不分系隊輔-朱祥瑋";
		//----------------------------------------
		for(a=95; a<111; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#HH"+i).animate({opacity: '0'});
		}
		$('#HH1').animate({opacity: '1'});
        break;
	case 'coinAss96': //工程不分系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text8").innerHTML = "工程不分系隊輔-吳家秀";
		//----------------------------------------
		for(a=95; a<111; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#HH"+i).animate({opacity: '0'});
		}
		$('#HH2').animate({opacity: '1'});
        break;
	case 'coinAss97': //工程不分系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text8").innerHTML = "工程不分系隊輔-楊馨";
		//----------------------------------------
		for(a=95; a<111; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#HH"+i).animate({opacity: '0'});
		}
		$('#HH3').animate({opacity: '1'});
        break;
	case 'coinAss98': //工程不分系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text8").innerHTML = "工程不分系隊輔-楊宗哲";
		//----------------------------------------
		for(a=95; a<111; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#HH"+i).animate({opacity: '0'});
		}
		$('#HH4').animate({opacity: '1'});
        break;
	case 'coinAss99': //工程不分系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text8").innerHTML = "工程不分系隊輔-鄭雅勻";
		//----------------------------------------
		for(a=95; a<111; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#HH"+i).animate({opacity: '0'});
		}
		$('#HH5').animate({opacity: '1'});
        break;
	case 'coinAss100': //工程不分系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text8").innerHTML = "工程不分系隊輔-郭鎧碩";
		//----------------------------------------
		for(a=95; a<111; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#HH"+i).animate({opacity: '0'});
		}
		$('#HH6').animate({opacity: '1'});
        break;
	case 'coinAss101': //工程不分系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text8").innerHTML = "工程不分系隊輔-黃郁云";
		//----------------------------------------
		for(a=95; a<111; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#HH"+i).animate({opacity: '0'});
		}
		$('#HH7').animate({opacity: '1'});
        break;
	case 'coinAss102': //工程不分系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text8").innerHTML = "工程不分系隊輔-曾國軒";
		//----------------------------------------
		for(a=95; a<111; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#HH"+i).animate({opacity: '0'});
		}
		$('#HH8').animate({opacity: '1'});
        break;
	case 'coinAss103': //工程不分系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text8").innerHTML = "工程不分系隊輔-張丞賦";
		//----------------------------------------
		for(a=95; a<111; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#HH"+i).animate({opacity: '0'});
		}
		$('#HH9').animate({opacity: '1'});
        break;
	case 'coinAss104': //工程不分系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text8").innerHTML = "工程不分系隊輔-黃一釗";
		//----------------------------------------
		for(a=95; a<111; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#HH"+i).animate({opacity: '0'});
		}
		$('#HH10').animate({opacity: '1'});
        break;
	case 'coinAss105': //工程不分系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text8").innerHTML = "工程不分系隊輔-梁正佑";
		//----------------------------------------
		for(a=95; a<111; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#HH"+i).animate({opacity: '0'});
		}
		$('#HH11').animate({opacity: '1'});
        break;
	case 'coinAss106': //工程不分系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text8").innerHTML = "工程不分系隊輔-宮慶宇";
		//----------------------------------------
		for(a=95; a<111; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#HH"+i).animate({opacity: '0'});
		}
		$('#HH12').animate({opacity: '1'});
        break;
	case 'coinAss107': //工程不分系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text8").innerHTML = "工程不分系隊輔-鄭永昇";
		//----------------------------------------
		for(a=95; a<111; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#HH"+i).animate({opacity: '0'});
		}
		$('#HH13').animate({opacity: '1'});
        break;
	case 'coinAss108': //工程不分系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text8").innerHTML = "工程不分系隊輔-魏于舜";
		//----------------------------------------
		for(a=95; a<111; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#HH"+i).animate({opacity: '0'});
		}
		$('#HH14').animate({opacity: '1'});
        break;
	case 'coinAss109': //工程不分系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text8").innerHTML = "工程不分系隊輔-謝政吉";
		//----------------------------------------
		for(a=95; a<111; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#HH"+i).animate({opacity: '0'});
		}
		$('#HH15').animate({opacity: '1'});
        break;
	case 'coinAss110': //工程不分系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text8").innerHTML = "工程不分系隊輔-周宜玟";
		//----------------------------------------
		for(a=95; a<111; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#HH"+i).animate({opacity: '0'});
		}
		$('#HH16').animate({opacity: '1'});
        break;
	case 'coinAss111': //國館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text9").innerHTML = "國管系隊輔-王筠";
		//----------------------------------------
		for(a=111; a<119; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<9; i++){
			$("#II"+i).animate({opacity: '0'});
		}
		$('#II1').animate({opacity: '1'});
        break;
	case 'coinAss112': //國館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text9").innerHTML = "國管系隊輔-何育嫻";
		//----------------------------------------
		for(a=111; a<119; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<9; i++){
			$("#II"+i).animate({opacity: '0'});
		}
		$('#II2').animate({opacity: '1'});
        break;
	case 'coinAss113': //國館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text9").innerHTML = "國管系隊輔-徐婉庭";
		//----------------------------------------
		for(a=111; a<119; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<9; i++){
			$("#II"+i).animate({opacity: '0'});
		}
		$('#II3').animate({opacity: '1'});
        break;
	case 'coinAss114': //國館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text9").innerHTML = "國管系隊輔-彭文言";
		//----------------------------------------
		for(a=111; a<119; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<9; i++){
			$("#II"+i).animate({opacity: '0'});
		}
		$('#II4').animate({opacity: '1'});
        break;
	case 'coinAss115': //國館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text9").innerHTML = "國管系隊輔-詹琮裕";
		//----------------------------------------
		for(a=111; a<119; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<9; i++){
			$("#II"+i).animate({opacity: '0'});
		}
		$('#II5').animate({opacity: '1'});
        break;
	case 'coinAss116': //國館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text9").innerHTML = "國管系隊輔-趙云瑄";
		//----------------------------------------
		for(a=111; a<119; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<9; i++){
			$("#II"+i).animate({opacity: '0'});
		}
		$('#II6').animate({opacity: '1'});
        break;
	case 'coinAss117': //國館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text9").innerHTML = "國管系隊輔-魏小淇";
		//----------------------------------------
		for(a=111; a<119; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<9; i++){
			$("#II"+i).animate({opacity: '0'});
		}
		$('#II7').animate({opacity: '1'});
        break;
	case 'coinAss118': //國館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text9").innerHTML = "國管系隊輔-謝佳佑";
		//----------------------------------------
		for(a=111; a<119; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<9; i++){
			$("#II"+i).animate({opacity: '0'});
		}
		$('#II8').animate({opacity: '1'});
        break;
	case 'coinAss119': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-陳亦憲";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ1').animate({opacity: '1'});
        break;
	case 'coinAss120': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-劉世詠";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ2').animate({opacity: '1'});
        break;
	case 'coinAss121': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-鄭力誠";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ3').animate({opacity: '1'});
        break;
	case 'coinAss122': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-賴家雄";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ4').animate({opacity: '1'});
        break;
	case 'coinAss123': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-魏慶睿";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ5').animate({opacity: '1'});
        break;
	case 'coinAss124': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-蕭苾妤";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ6').animate({opacity: '1'});
        break;
	case 'coinAss125': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-謝欣庭";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ7').animate({opacity: '1'});
        break;
	case 'coinAss126': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-蔣佩君";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ8').animate({opacity: '1'});
        break;
	case 'coinAss127': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-蔡嬑萱";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ9').animate({opacity: '1'});
        break;
	case 'coinAss128': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-黃翊綾";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ10').animate({opacity: '1'});
        break;
	case 'coinAss129': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-曾資瑀";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ11').animate({opacity: '1'});
        break;
	case 'coinAss130': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-陳哲翔";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ12').animate({opacity: '1'});
        break;
	case 'coinAss131': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-陳姿靜";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ13').animate({opacity: '1'});
        break;
	case 'coinAss132': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-陳姿璇";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ14').animate({opacity: '1'});
        break;
	case 'coinAss133': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-張瑄真";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ15').animate({opacity: '1'});
        break;
	case 'coinAss134': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-洪孟澤";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ16').animate({opacity: '1'});
        break;
	case 'coinAss135': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-姚品安";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ17').animate({opacity: '1'});
        break;
	case 'coinAss136': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-李訓泓";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ18').animate({opacity: '1'});
        break;
	case 'coinAss137': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-吳英正";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ19').animate({opacity: '1'});
        break;
	case 'coinAss138': //公館系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text10").innerHTML = "工管系隊輔-王詠緹";
		//----------------------------------------
		for(a=119; a<139; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<21; i++){
			$("#JJ"+i).animate({opacity: '0'});
		}
		$('#JJ20').animate({opacity: '1'});
        break;
	case 'coinAss139': //企管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text11").innerHTML = "企管系隊輔-王建霖";
		//----------------------------------------
		for(a=139; a<151; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#KK"+i).animate({opacity: '0'});
		}
		$('#KK1').animate({opacity: '1'});
        break;	
	case 'coinAss140': //企管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text11").innerHTML = "企管系隊輔-王裕源";
		//----------------------------------------
		for(a=139; a<151; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#KK"+i).animate({opacity: '0'});
		}
		$('#KK2').animate({opacity: '1'});
        break;	
	case 'coinAss141': //企管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text11").innerHTML = "企管系隊輔-卓宸安";
		//----------------------------------------
		for(a=139; a<151; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#KK"+i).animate({opacity: '0'});
		}
		$('#KK3').animate({opacity: '1'});
        break;	
	case 'coinAss142': //企管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text11").innerHTML = "企管系隊輔-林佩玉";
		//----------------------------------------
		for(a=139; a<151; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#KK"+i).animate({opacity: '0'});
		}
		$('#KK4').animate({opacity: '1'});
        break;	
	case 'coinAss143': //企管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text11").innerHTML = "企管系隊輔-梁芩瑜";
		//----------------------------------------
		for(a=139; a<151; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#KK"+i).animate({opacity: '0'});
		}
		$('#KK5').animate({opacity: '1'});
        break;	
	case 'coinAss144': //企管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text11").innerHTML = "企管系隊輔-湯雅婷";
		//----------------------------------------
		for(a=139; a<151; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#KK"+i).animate({opacity: '0'});
		}
		$('#KK6').animate({opacity: '1'});
        break;	
	case 'coinAss145': //企管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text11").innerHTML = "企管系隊輔-吳婉寧";
		//----------------------------------------
		for(a=139; a<151; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#KK"+i).animate({opacity: '0'});
		}
		$('#KK7').animate({opacity: '1'});
        break;	
	case 'coinAss146': //企管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text11").innerHTML = "企管系隊輔-蕭奕辰";
		//----------------------------------------
		for(a=139; a<151; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#KK"+i).animate({opacity: '0'});
		}
		$('#KK8').animate({opacity: '1'});
        break;	
	case 'coinAss147': //企管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text11").innerHTML = "企管系隊輔-蕭俊文";
		//----------------------------------------
		for(a=139; a<151; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#KK"+i).animate({opacity: '0'});
		}
		$('#KK9').animate({opacity: '1'});
        break;	
	case 'coinAss148': //企管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text11").innerHTML = "企管系隊輔-鄭逸瑄";
		//----------------------------------------
		for(a=139; a<151; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#KK"+i).animate({opacity: '0'});
		}
		$('#KK10').animate({opacity: '1'});
        break;	
	case 'coinAss149': //企管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text11").innerHTML = "企管系隊輔-廖偉珊";
		//----------------------------------------
		for(a=139; a<151; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#KK"+i).animate({opacity: '0'});
		}
		$('#KK11').animate({opacity: '1'});
        break;	
	case 'coinAss150': //企管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text11").innerHTML = "企管系隊輔-黃安妮";
		//----------------------------------------
		for(a=139; a<151; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#KK"+i).animate({opacity: '0'});
		}
		$('#KK12').animate({opacity: '1'});
        break;	
	case 'coinAss151': //資管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text12").innerHTML = "資管系隊輔-王彥淇";
		//----------------------------------------
		for(a=151; a<163; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#LL"+i).animate({opacity: '0'});
		}
		$('#LL1').animate({opacity: '1'});
        break;	
	case 'coinAss152': //資管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text12").innerHTML = "資管系隊輔-任麗蓉";
		//----------------------------------------
		for(a=151; a<163; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#LL"+i).animate({opacity: '0'});
		}
		$('#LL2').animate({opacity: '1'});
        break;	
	case 'coinAss153': //資管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text12").innerHTML = "資管系隊輔-莊子賢";
		//----------------------------------------
		for(a=151; a<163; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#LL"+i).animate({opacity: '0'});
		}
		$('#LL3').animate({opacity: '1'});
        break;	
	case 'coinAss154': //資管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text12").innerHTML = "資管系隊輔-蕭哲瑋";
		//----------------------------------------
		for(a=151; a<163; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#LL"+i).animate({opacity: '0'});
		}
		$('#LL4').animate({opacity: '1'});
        break;	
	case 'coinAss155': //資管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text12").innerHTML = "資管系隊輔-劉正鈞";
		//----------------------------------------
		for(a=151; a<163; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#LL"+i).animate({opacity: '0'});
		}
		$('#LL5').animate({opacity: '1'});
        break;	
	case 'coinAss156': //資管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text12").innerHTML = "資管系隊輔-黃瑄琬";
		//----------------------------------------
		for(a=151; a<163; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#LL"+i).animate({opacity: '0'});
		}
		$('#LL6').animate({opacity: '1'});
        break;	
	case 'coinAss157': //資管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text12").innerHTML = "資管系隊輔-陳冠瑋";
		//----------------------------------------
		for(a=151; a<163; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#LL"+i).animate({opacity: '0'});
		}
		$('#LL7').animate({opacity: '1'});
        break;	
	case 'coinAss158': //資管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text12").innerHTML = "資管系隊輔-李治孝";
		//----------------------------------------
		for(a=151; a<163; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#LL"+i).animate({opacity: '0'});
		}
		$('#LL8').animate({opacity: '1'});
        break;	
	case 'coinAss159': //資管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text12").innerHTML = "資管系隊輔-吳佩璇";
		//----------------------------------------
		for(a=151; a<163; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#LL"+i).animate({opacity: '0'});
		}
		$('#LL9').animate({opacity: '1'});
        break;	
	case 'coinAss160': //資管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text12").innerHTML = "資管系隊輔-蔡瑋城";
		//----------------------------------------
		for(a=151; a<163; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#LL"+i).animate({opacity: '0'});
		}
		$('#LL10').animate({opacity: '1'});
        break;	
	case 'coinAss161': //資管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text12").innerHTML = "資管系隊輔-黃均珮";
		//----------------------------------------
		for(a=151; a<163; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#LL"+i).animate({opacity: '0'});
		}
		$('#LL11').animate({opacity: '1'});
        break;	
	case 'coinAss162': //資管系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text12").innerHTML = "資管系隊輔-周輝智";
		//----------------------------------------
		for(a=151; a<163; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#LL"+i).animate({opacity: '0'});
		}
		$('#LL12').animate({opacity: '1'});
        break;	
	case 'coinAss163': //財金系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text13").innerHTML = "財金系隊輔-高菀庭";
		//----------------------------------------
		for(a=163; a<177; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#MM"+i).animate({opacity: '0'});
		}
		$('#MM1').animate({opacity: '1'});
        break;
	case 'coinAss164': //財金系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text13").innerHTML = "財金系隊輔-魏韶瑩";
		//----------------------------------------
		for(a=163; a<177; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#MM"+i).animate({opacity: '0'});
		}
		$('#MM2').animate({opacity: '1'});
        break;
	case 'coinAss165': //財金系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text13").innerHTML = "財金系隊輔-白源鎰";
		//----------------------------------------
		for(a=163; a<177; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#MM"+i).animate({opacity: '0'});
		}
		$('#MM3').animate({opacity: '1'});
        break;
	case 'coinAss166': //財金系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text13").innerHTML = "財金系隊輔-賴靖宇";
		//----------------------------------------
		for(a=163; a<177; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#MM"+i).animate({opacity: '0'});
		}
		$('#MM4').animate({opacity: '1'});
        break;
	case 'coinAss167': //財金系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text13").innerHTML = "財金系隊輔-陳風鈴";
		//----------------------------------------
		for(a=163; a<177; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#MM"+i).animate({opacity: '0'});
		}
		$('#MM5').animate({opacity: '1'});
        break;
	case 'coinAss168': //財金系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text13").innerHTML = "財金系隊輔-粘惠怡";
		//----------------------------------------
		for(a=163; a<177; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#MM"+i).animate({opacity: '0'});
		}
		$('#MM6').animate({opacity: '1'});
        break;
	case 'coinAss169': //財金系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text13").innerHTML = "財金系隊輔-吳重佑";
		//----------------------------------------
		for(a=163; a<177; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#MM"+i).animate({opacity: '0'});
		}
		$('#MM7').animate({opacity: '1'});
        break;
	case 'coinAss170': //財金系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text13").innerHTML = "財金系隊輔-陳冠妤";
		//----------------------------------------
		for(a=163; a<177; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#MM"+i).animate({opacity: '0'});
		}
		$('#MM8').animate({opacity: '1'});
        break;
	case 'coinAss171': //財金系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text13").innerHTML = "財金系隊輔-何嘉容";
		//----------------------------------------
		for(a=163; a<177; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#MM"+i).animate({opacity: '0'});
		}
		$('#MM9').animate({opacity: '1'});
        break;
	case 'coinAss172': //財金系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text13").innerHTML = "財金系隊輔-林怡汝";
		//----------------------------------------
		for(a=163; a<177; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#MM"+i).animate({opacity: '0'});
		}
		$('#MM10').animate({opacity: '1'});
        break;
	case 'coinAss173': //財金系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text13").innerHTML = "財金系隊輔-王承萱";
		//----------------------------------------
		for(a=163; a<177; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#MM"+i).animate({opacity: '0'});
		}
		$('#MM11').animate({opacity: '1'});
        break;
	case 'coinAss174': //財金系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text13").innerHTML = "財金系隊輔-陳貴恆";
		//----------------------------------------
		for(a=163; a<177; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#MM"+i).animate({opacity: '0'});
		}
		$('#MM12').animate({opacity: '1'});
        break;
	case 'coinAss175': //財金系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text13").innerHTML = "財金系隊輔-竇甫";
		//----------------------------------------
		for(a=163; a<177; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#MM"+i).animate({opacity: '0'});
		}
		$('#MM13').animate({opacity: '1'});
        break;
	case 'coinAss176': //財金系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text13").innerHTML = "財金系隊輔-陳崑銘";
		//----------------------------------------
		for(a=163; a<177; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#MM"+i).animate({opacity: '0'});
		}
		$('#MM14').animate({opacity: '1'});
        break;
	case 'coinAss177': //會計系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text14").innerHTML = "會計系隊輔-何菀蓁";
		//----------------------------------------
		for(a=177; a<189; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#NN"+i).animate({opacity: '0'});
		}
		$('#NN1').animate({opacity: '1'});
        break;
	case 'coinAss178': //會計系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text14").innerHTML = "會計系隊輔-李品璇";
		//----------------------------------------
		for(a=177; a<189; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#NN"+i).animate({opacity: '0'});
		}
		$('#NN2').animate({opacity: '1'});
        break;
	case 'coinAss179': //會計系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text14").innerHTML = "會計系隊輔-周子坤";
		//----------------------------------------
		for(a=177; a<189; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#NN"+i).animate({opacity: '0'});
		}
		$('#NN3').animate({opacity: '1'});
        break;
	case 'coinAss180': //會計系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text14").innerHTML = "會計系隊輔-高珮淳";
		//----------------------------------------
		for(a=177; a<189; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#NN"+i).animate({opacity: '0'});
		}
		$('#NN4').animate({opacity: '1'});
        break;
	case 'coinAss181': //會計系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text14").innerHTML = "會計系隊輔-陳茜華";
		//----------------------------------------
		for(a=177; a<189; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#NN"+i).animate({opacity: '0'});
		}
		$('#NN5').animate({opacity: '1'});
        break;
	case 'coinAss182': //會計系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text14").innerHTML = "會計系隊輔-林婷佑";
		//----------------------------------------
		for(a=177; a<189; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#NN"+i).animate({opacity: '0'});
		}
		$('#NN6').animate({opacity: '1'});
        break;
	case 'coinAss183': //會計系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text14").innerHTML = "會計系隊輔-郭怡均";
		//----------------------------------------
		for(a=177; a<189; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#NN"+i).animate({opacity: '0'});
		}
		$('#NN7').animate({opacity: '1'});
        break;
	case 'coinAss184': //會計系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text14").innerHTML = "會計系隊輔-郭証暐";
		//----------------------------------------
		for(a=177; a<189; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#NN"+i).animate({opacity: '0'});
		}
		$('#NN8').animate({opacity: '1'});
        break;
	case 'coinAss185': //會計系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text14").innerHTML = "會計系隊輔-林宜玟";
		//----------------------------------------
		for(a=177; a<189; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#NN"+i).animate({opacity: '0'});
		}
		$('#NN9').animate({opacity: '1'});
        break;
	case 'coinAss186': //會計系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text14").innerHTML = "會計系隊輔-黃詩涵";
		//----------------------------------------
		for(a=177; a<189; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#NN"+i).animate({opacity: '0'});
		}
		$('#NN10').animate({opacity: '1'});
        break;
	case 'coinAss187': //會計系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text14").innerHTML = "會計系隊輔-賴以庭";
		//----------------------------------------
		for(a=177; a<189; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#NN"+i).animate({opacity: '0'});
		}
		$('#NN11').animate({opacity: '1'});
        break;
	case 'coinAss188': //會計系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text14").innerHTML = "會計系隊輔-林宇竑";
		//----------------------------------------
		for(a=177; a<189; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#NN"+i).animate({opacity: '0'});
		}
		$('#NN12').animate({opacity: '1'});
        break;
	case 'coinAss189': //公設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text15").innerHTML = "工設系隊輔-吳刻墾";
		//----------------------------------------
		for(a=188; a<203; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#OO"+i).animate({opacity: '0'});
		}
		$('#OO1').animate({opacity: '1'});
        break;
	case 'coinAss190': //公設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text15").innerHTML = "工設系隊輔-吳軒儒";
		//----------------------------------------
		for(a=188; a<203; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#OO"+i).animate({opacity: '0'});
		}
		$('#OO2').animate({opacity: '1'});
        break;
	case 'coinAss191': //公設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text15").innerHTML = "工設系隊輔-曾羿瑄";
		//----------------------------------------
		for(a=188; a<203; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#OO"+i).animate({opacity: '0'});
		}
		$('#OO3').animate({opacity: '1'});
        break;
	case 'coinAss192': //公設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text15").innerHTML = "工設系隊輔-許峻瑋";
		//----------------------------------------
		for(a=188; a<203; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#OO"+i).animate({opacity: '0'});
		}
		$('#OO4').animate({opacity: '1'});
        break;
	case 'coinAss193': //公設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text15").innerHTML = "工設系隊輔-林宜臻";
		//----------------------------------------
		for(a=188; a<203; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#OO"+i).animate({opacity: '0'});
		}
		$('#OO5').animate({opacity: '1'});
        break;
	case 'coinAss194': //公設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text15").innerHTML = "工設系隊輔-林宛蓉";
		//----------------------------------------
		for(a=188; a<203; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#OO"+i).animate({opacity: '0'});
		}
		$('#OO6').animate({opacity: '1'});
        break;
	case 'coinAss195': //公設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text15").innerHTML = "工設系隊輔-章家綺";
		//----------------------------------------
		for(a=188; a<203; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#OO"+i).animate({opacity: '0'});
		}
		$('#OO7').animate({opacity: '1'});
        break;
	case 'coinAss196': //公設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text15").innerHTML = "工設系隊輔-林宜淨";
		//----------------------------------------
		for(a=188; a<203; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#OO"+i).animate({opacity: '0'});
		}
		$('#OO8').animate({opacity: '1'});
        break;
	case 'coinAss197': //公設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text15").innerHTML = "工設系隊輔-李家翔";
		//----------------------------------------
		for(a=188; a<203; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#OO"+i).animate({opacity: '0'});
		}
		$('#OO9').animate({opacity: '1'});
        break;
	case 'coinAss198': //公設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text15").innerHTML = "工設系隊輔-陳識仲";
		//----------------------------------------
		for(a=188; a<203; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#OO"+i).animate({opacity: '0'});
		}
		$('#OO10').animate({opacity: '1'});
        break;
	case 'coinAss199': //公設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text15").innerHTML = "工設系隊輔-黃義評";
		//----------------------------------------
		for(a=188; a<203; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#OO"+i).animate({opacity: '0'});
		}
		$('#OO11').animate({opacity: '1'});
        break;
	case 'coinAss200': //公設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text15").innerHTML = "工設系隊輔-蔡詠宜";
		//----------------------------------------
		for(a=188; a<203; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#OO"+i).animate({opacity: '0'});
		}
		$('#OO12').animate({opacity: '1'});
        break;
	case 'coinAss201': //公設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text15").innerHTML = "工設系隊輔-羅晧華";
		//----------------------------------------
		for(a=188; a<203; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#OO"+i).animate({opacity: '0'});
		}
		$('#OO13').animate({opacity: '1'});
        break;
	case 'coinAss202': //公設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text15").innerHTML = "工設系隊輔-黃怡薔";
		//----------------------------------------
		for(a=188; a<203; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#OO"+i).animate({opacity: '0'});
		}
		$('#OO14').animate({opacity: '1'});
        break;
	case 'coinAss203': //建築系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text16").innerHTML = "建築系隊輔-李昀芳";
		//----------------------------------------
		for(a=203; a<215; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#PP"+i).animate({opacity: '0'});
		}
		$('#PP1').animate({opacity: '1'});
        break;
	case 'coinAss204': //建築系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text16").innerHTML = "建築系隊輔-林羿蓁";
		//----------------------------------------
		for(a=203; a<215; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#PP"+i).animate({opacity: '0'});
		}
		$('#PP2').animate({opacity: '1'});
        break;
	case 'coinAss205': //建築系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text16").innerHTML = "建築系隊輔-黃煒翔";
		//----------------------------------------
		for(a=203; a<215; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#PP"+i).animate({opacity: '0'});
		}
		$('#PP3').animate({opacity: '1'});
        break;
	case 'coinAss206': //建築系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text16").innerHTML = "建築系隊輔-吳亦居";
		//----------------------------------------
		for(a=203; a<215; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#PP"+i).animate({opacity: '0'});
		}
		$('#PP4').animate({opacity: '1'});
        break;
	case 'coinAss207': //建築系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text16").innerHTML = "建築系隊輔-吳品萱";
		//----------------------------------------
		for(a=203; a<215; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#PP"+i).animate({opacity: '0'});
		}
		$('#PP5').animate({opacity: '1'});
        break;
	case 'coinAss208': //建築系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text16").innerHTML = "建築系隊輔-唐如禎";
		//----------------------------------------
		for(a=203; a<215; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#PP"+i).animate({opacity: '0'});
		}
		$('#PP6').animate({opacity: '1'});
        break;
	case 'coinAss209': //建築系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text16").innerHTML = "建築系隊輔-林放勳";
		//----------------------------------------
		for(a=203; a<215; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#PP"+i).animate({opacity: '0'});
		}
		$('#PP7').animate({opacity: '1'});
        break;
	case 'coinAss210': //建築系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text16").innerHTML = "建築系隊輔-黃楀宸";
		//----------------------------------------
		for(a=203; a<215; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#PP"+i).animate({opacity: '0'});
		}
		$('#PP8').animate({opacity: '1'});
        break;
	case 'coinAss211': //建築系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text16").innerHTML = "建築系隊輔-曾思閔";
		//----------------------------------------
		for(a=203; a<215; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#PP"+i).animate({opacity: '0'});
		}
		$('#PP9').animate({opacity: '1'});
        break;
	case 'coinAss212': //建築系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text16").innerHTML = "建築系隊輔-曾子恩";
		//----------------------------------------
		for(a=203; a<215; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#PP"+i).animate({opacity: '0'});
		}
		$('#PP10').animate({opacity: '1'});
        break;
	case 'coinAss213': //建築系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text16").innerHTML = "建築系隊輔-楊哲維";
		//----------------------------------------
		for(a=203; a<215; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#PP"+i).animate({opacity: '0'});
		}
		$('#PP11').animate({opacity: '1'});
        break;
	case 'coinAss214': //建築系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text16").innerHTML = "建築系隊輔-洪辰諭";
		//----------------------------------------
		for(a=203; a<215; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<13; i++){
			$("#PP"+i).animate({opacity: '0'});
		}
		$('#PP12').animate({opacity: '1'});
        break;
	case 'coinAss215': //視傳系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text17").innerHTML = "視傳系隊輔-王楷竣";
		//----------------------------------------
		for(a=214; a<225; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#QQ"+i).animate({opacity: '0'});
		}
		$('#QQ1').animate({opacity: '1'});
        break;
	case 'coinAss216': //視傳系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text17").innerHTML = "視傳系隊輔-曹蘭";
		//----------------------------------------
		for(a=214; a<225; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#QQ"+i).animate({opacity: '0'});
		}
		$('#QQ2').animate({opacity: '1'});
        break;
	case 'coinAss217': //視傳系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text17").innerHTML = "視傳系隊輔-黃婭嵐";
		//----------------------------------------
		for(a=214; a<225; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#QQ"+i).animate({opacity: '0'});
		}
		$('#QQ3').animate({opacity: '1'});
        break;
	case 'coinAss218': //視傳系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text17").innerHTML = "視傳系隊輔-楊曙帆";
		//----------------------------------------
		for(a=214; a<225; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#QQ"+i).animate({opacity: '0'});
		}
		$('#QQ4').animate({opacity: '1'});
        break;
	case 'coinAss219': //視傳系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text17").innerHTML = "視傳系隊輔-廖祐頡";
		//----------------------------------------
		for(a=214; a<225; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#QQ"+i).animate({opacity: '0'});
		}
		$('#QQ5').animate({opacity: '1'});
        break;
	case 'coinAss220': //視傳系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text17").innerHTML = "視傳系隊輔-謝欣穎";
		//----------------------------------------
		for(a=214; a<225; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#QQ"+i).animate({opacity: '0'});
		}
		$('#QQ6').animate({opacity: '1'});
        break;
	case 'coinAss221': //視傳系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text17").innerHTML = "視傳系隊輔-陳思妤";
		//----------------------------------------
		for(a=214; a<225; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#QQ"+i).animate({opacity: '0'});
		}
		$('#QQ7').animate({opacity: '1'});
        break;
	case 'coinAss222': //視傳系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text17").innerHTML = "視傳系隊輔-許芳瑜";
		//----------------------------------------
		for(a=214; a<225; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#QQ"+i).animate({opacity: '0'});
		}
		$('#QQ8').animate({opacity: '1'});
        break;
	case 'coinAss223': //視傳系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text17").innerHTML = "視傳系隊輔-黃亭華";
		//----------------------------------------
		for(a=214; a<225; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#QQ"+i).animate({opacity: '0'});
		}
		$('#QQ9').animate({opacity: '1'});
        break;
	case 'coinAss224': //視傳系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text17").innerHTML = "視傳系隊輔-高瑜均";
		//----------------------------------------
		for(a=214; a<225; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#QQ"+i).animate({opacity: '0'});
		}
		$('#QQ10').animate({opacity: '1'});
        break;
	case 'coinAss225': //數媒系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text18").innerHTML = "數媒系隊輔-陳俊名";
		//----------------------------------------
		for(a=225; a<235; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#RR"+i).animate({opacity: '0'});
		}
		$('#RR1').animate({opacity: '1'});
        break;
	case 'coinAss226': //數媒系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text18").innerHTML = "數媒系隊輔-吳佩芸";
		//----------------------------------------
		for(a=225; a<235; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#RR"+i).animate({opacity: '0'});
		}
		$('#RR2').animate({opacity: '1'});
        break;
	case 'coinAss227': //數媒系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text18").innerHTML = "數媒系隊輔-陳若滔";
		//----------------------------------------
		for(a=225; a<235; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#RR"+i).animate({opacity: '0'});
		}
		$('#RR3').animate({opacity: '1'});
        break;
	case 'coinAss228': //數媒系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text18").innerHTML = "數媒系隊輔-張翊珊";
		//----------------------------------------
		for(a=225; a<235; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#RR"+i).animate({opacity: '0'});
		}
		$('#RR4').animate({opacity: '1'});
        break;
	case 'coinAss229': //數媒系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text18").innerHTML = "數媒系隊輔-張筠茌";
		//----------------------------------------
		for(a=225; a<235; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#RR"+i).animate({opacity: '0'});
		}
		$('#RR5').animate({opacity: '1'});
        break;
	case 'coinAss230': //數媒系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text18").innerHTML = "數媒系隊輔-林芸瑄";
		//----------------------------------------
		for(a=225; a<235; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#RR"+i).animate({opacity: '0'});
		}
		$('#RR6').animate({opacity: '1'});
        break;
	case 'coinAss231': //數媒系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text18").innerHTML = "數媒系隊輔-余宜庭";
		//----------------------------------------
		for(a=225; a<235; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#RR"+i).animate({opacity: '0'});
		}
		$('#RR7').animate({opacity: '1'});
        break;
	case 'coinAss232': //數媒系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text18").innerHTML = "數媒系隊輔-陸子淵";
		//----------------------------------------
		for(a=225; a<235; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#RR"+i).animate({opacity: '0'});
		}
		$('#RR8').animate({opacity: '1'});
        break;
	case 'coinAss233': //數媒系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text18").innerHTML = "數媒系隊輔-許博惟";
		//----------------------------------------
		for(a=225; a<235; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#RR"+i).animate({opacity: '0'});
		}
		$('#RR9').animate({opacity: '1'});
        break;
	case 'coinAss234': //數媒系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text18").innerHTML = "數媒系隊輔-蕭亦庭";
		//----------------------------------------
		for(a=225; a<235; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<11; i++){
			$("#RR"+i).animate({opacity: '0'});
		}
		$('#RR10').animate({opacity: '1'});
        break;
	case 'coinAss235': //創設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text19").innerHTML = "創設系隊輔-王柏元";
		//----------------------------------------
		for(a=235; a<251; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#SS"+i).animate({opacity: '0'});
		}
		$('#SS1').animate({opacity: '1'});
        break;
	case 'coinAss236': //創設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text19").innerHTML = "創設系隊輔-林靖雅";
		//----------------------------------------
		for(a=235; a<251; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#SS"+i).animate({opacity: '0'});
		}
		$('#SS2').animate({opacity: '1'});
        break;
	case 'coinAss237': //創設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text19").innerHTML = "創設系隊輔-杜憲妮";
		//----------------------------------------
		for(a=235; a<251; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#SS"+i).animate({opacity: '0'});
		}
		$('#SS3').animate({opacity: '1'});
        break;
	case 'coinAss238': //創設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text19").innerHTML = "創設系隊輔-林尹凡";
		//----------------------------------------
		for(a=235; a<251; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#SS"+i).animate({opacity: '0'});
		}
		$('#SS4').animate({opacity: '1'});
        break;
	case 'coinAss239': //創設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text19").innerHTML = "創設系隊輔-林恩廷";
		//----------------------------------------
		for(a=235; a<251; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#SS"+i).animate({opacity: '0'});
		}
		$('#SS5').animate({opacity: '1'});
        break;
	case 'coinAss240': //創設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text19").innerHTML = "創設系隊輔-林于珊";
		//----------------------------------------
		for(a=235; a<251; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#SS"+i).animate({opacity: '0'});
		}
		$('#SS6').animate({opacity: '1'});
        break;
	case 'coinAss241': //創設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text19").innerHTML = "創設系隊輔-侯姿宇";
		//----------------------------------------
		for(a=235; a<251; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#SS"+i).animate({opacity: '0'});
		}
		$('#SS7').animate({opacity: '1'});
        break;
	case 'coinAss242': //創設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text19").innerHTML = "創設系隊輔-黃崧溥";
		//----------------------------------------
		for(a=235; a<251; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#SS"+i).animate({opacity: '0'});
		}
		$('#SS8').animate({opacity: '1'});
        break;
	case 'coinAss243': //創設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text19").innerHTML = "創設系隊輔-王姿穎";
		//----------------------------------------
		for(a=235; a<251; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#SS"+i).animate({opacity: '0'});
		}
		$('#SS9').animate({opacity: '1'});
        break;
	case 'coinAss244': //創設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text19").innerHTML = "創設系隊輔-謝宗良";
		//----------------------------------------
		for(a=235; a<251; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#SS"+i).animate({opacity: '0'});
		}
		$('#SS10').animate({opacity: '1'});
        break;
	case 'coinAss245': //創設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text19").innerHTML = "創設系隊輔-陳姝卉";
		//----------------------------------------
		for(a=235; a<251; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#SS"+i).animate({opacity: '0'});
		}
		$('#SS11').animate({opacity: '1'});
        break;
	case 'coinAss246': //創設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text19").innerHTML = "創設系隊輔-陳弘旻";
		//----------------------------------------
		for(a=235; a<251; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#SS"+i).animate({opacity: '0'});
		}
		$('#SS12').animate({opacity: '1'});
        break;
	case 'coinAss247': //創設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text19").innerHTML = "創設系隊輔-謝琪貞";
		//----------------------------------------
		for(a=235; a<251; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#SS"+i).animate({opacity: '0'});
		}
		$('#SS13').animate({opacity: '1'});
        break;
	case 'coinAss248': //創設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text19").innerHTML = "創設系隊輔-陳宥竹";
		//----------------------------------------
		for(a=235; a<251; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#SS"+i).animate({opacity: '0'});
		}
		$('#SS14').animate({opacity: '1'});
        break;
	case 'coinAss249': //創設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text19").innerHTML = "創設系隊輔-李依諦";
		//----------------------------------------
		for(a=235; a<251; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#SS"+i).animate({opacity: '0'});
		}
		$('#SS15').animate({opacity: '1'});
        break;
	case 'coinAss250': //創設系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text19").innerHTML = "創設系隊輔-羅安";
		//----------------------------------------
		for(a=235; a<251; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<17; i++){
			$("#SS"+i).animate({opacity: '0'});
		}
		$('#SS16').animate({opacity: '1'});
        break;
	case 'coinAss251': //文資系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text20").innerHTML = "文資系隊輔-林依萱";
		//----------------------------------------
		for(a=251; a<265; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#UU"+i).animate({opacity: '0'});
		}
		$('#UU1').animate({opacity: '1'});
        break;
	case 'coinAss252': //文資系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text20").innerHTML = "文資系隊輔-柯佾岑";
		//----------------------------------------
		for(a=251; a<265; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#UU"+i).animate({opacity: '0'});
		}
		$('#UU2').animate({opacity: '1'});
        break;
	case 'coinAss253': //文資系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text20").innerHTML = "文資系隊輔-黃亦歆";
		//----------------------------------------
		for(a=251; a<265; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#UU"+i).animate({opacity: '0'});
		}
		$('#UU3').animate({opacity: '1'});
        break;
	case 'coinAss254': //文資系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text20").innerHTML = "文資系隊輔-楊涴筑";
		//----------------------------------------
		for(a=251; a<265; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#UU"+i).animate({opacity: '0'});
		}
		$('#UU4').animate({opacity: '1'});
        break;
	case 'coinAss255': //文資系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text20").innerHTML = "文資系隊輔-陳佳靖";
		//----------------------------------------
		for(a=251; a<265; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#UU"+i).animate({opacity: '0'});
		}
		$('#UU5').animate({opacity: '1'});
        break;
	case 'coinAss256': //文資系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text20").innerHTML = "文資系隊輔-徐立凡";
		//----------------------------------------
		for(a=251; a<265; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#UU"+i).animate({opacity: '0'});
		}
		$('#UU6').animate({opacity: '1'});
        break;
	case 'coinAss257': //文資系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text20").innerHTML = "文資系隊輔-楊千慧";
		//----------------------------------------
		for(a=251; a<265; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#UU"+i).animate({opacity: '0'});
		}
		$('#UU7').animate({opacity: '1'});
        break;
	case 'coinAss258': //文資系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text20").innerHTML = "文資系隊輔-蔡佳芸";
		//----------------------------------------
		for(a=251; a<265; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#UU"+i).animate({opacity: '0'});
		}
		$('#UU8').animate({opacity: '1'});
        break;
	case 'coinAss259': //文資系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text20").innerHTML = "文資系隊輔-陳郁佳";
		//----------------------------------------
		for(a=251; a<265; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#UU"+i).animate({opacity: '0'});
		}
		$('#UU9').animate({opacity: '1'});
        break;
	case 'coinAss260': //文資系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text20").innerHTML = "文資系隊輔-張嘉云";
		//----------------------------------------
		for(a=251; a<265; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#UU"+i).animate({opacity: '0'});
		}
		$('#UU10').animate({opacity: '1'});
        break;
	case 'coinAss261': //文資系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text20").innerHTML = "文資系隊輔-郭致豪";
		//----------------------------------------
		for(a=251; a<265; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#UU"+i).animate({opacity: '0'});
		}
		$('#UU11').animate({opacity: '1'});
        break;
	case 'coinAss262': //文資系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text20").innerHTML = "文資系隊輔-蔡育宗";
		//----------------------------------------
		for(a=251; a<265; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#UU"+i).animate({opacity: '0'});
		}
		$('#UU12').animate({opacity: '1'});
        break;
	case 'coinAss263': //文資系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text20").innerHTML = "文資系隊輔-羅靜雯";
		//----------------------------------------
		for(a=251; a<265; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#UU"+i).animate({opacity: '0'});
		}
		$('#UU13').animate({opacity: '1'});
        break;
	case 'coinAss264': //文資系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text20").innerHTML = "文資系隊輔-紀棣馨";
		//----------------------------------------
		for(a=251; a<265; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<15; i++){
			$("#UU"+i).animate({opacity: '0'});
		}
		$('#UU14').animate({opacity: '1'});
        break;
	case 'coinAss265': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-黃懷萱";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT1').animate({opacity: '1'});
        break;
	case 'coinAss266': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-石宇崴";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT2').animate({opacity: '1'});
        break;
	case 'coinAss267': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-陳瑀柔";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT3').animate({opacity: '1'});
        break;
	case 'coinAss268': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-洪浩倫";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT4').animate({opacity: '1'});
        break;
	case 'coinAss269': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-張淯婷";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT5').animate({opacity: '1'});
        break;
	case 'coinAss270': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-彭筠涓";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT6').animate({opacity: '1'});
        break;
	case 'coinAss271': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-陳尚辳";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT7').animate({opacity: '1'});
        break;
	case 'coinAss272': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-許鈴翎";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT8').animate({opacity: '1'});
        break;
	case 'coinAss273': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-楊沛渝";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT9').animate({opacity: '1'});
        break;
	case 'coinAss274': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-蔡庭菲";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT10').animate({opacity: '1'});
        break;
	case 'coinAss275': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-陳苡甄";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT11').animate({opacity: '1'});
        break;
	case 'coinAss276': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-粘宜婷";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT12').animate({opacity: '1'});
        break;
	case 'coinAss277': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-莊頻衣";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT13').animate({opacity: '1'});
        break;
	case 'coinAss278': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-張斐舒";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT14').animate({opacity: '1'});
        break;
	case 'coinAss279': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-黃映儒";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT15').animate({opacity: '1'});
        break;
	case 'coinAss280': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-劉宜蘋";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT16').animate({opacity: '1'});
        break;
	case 'coinAss281': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-胡凱欣";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT17').animate({opacity: '1'});
        break;
	case 'coinAss282': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-林季筠";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT18').animate({opacity: '1'});
        break;
	case 'coinAss283': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-蔡沛珊";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT19').animate({opacity: '1'});
        break;
	case 'coinAss284': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-陳姵妤";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT20').animate({opacity: '1'});
        break;
	case 'coinAss285': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-翁筠筑";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT21').animate({opacity: '1'});
        break;
	case 'coinAss286': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-陳榆芊";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT22').animate({opacity: '1'});
        break;
	case 'coinAss287': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-江怡璇";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT23').animate({opacity: '1'});
        break;
	case 'coinAss288': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-廖俊信";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT24').animate({opacity: '1'});
        break;
	case 'coinAss289': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-林彥豪";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT25').animate({opacity: '1'});
        break;
	case 'coinAss290': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-陳芊妤";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT26').animate({opacity: '1'});
        break;
	case 'coinAss291': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-涂嘉真";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT27').animate({opacity: '1'});
        break;
	case 'coinAss292': //應外系學會-----------------------
		//工人簡介-------------------------------		
		document.getElementById("text21").innerHTML = "應外系隊輔-黃嫀鈺";
		//----------------------------------------
		for(a=265; a<293; a++){
			document.getElementById("coinAss"+a).classList.remove('selected');
		}
		item.classList.add('selected');
		for(i=0; i<29; i++){
			$("#TT"+i).animate({opacity: '0'});
		}
		$('#TT28').animate({opacity: '1'});
        break;	
	}
	

	
}