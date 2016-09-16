/* Author:

*/

 var ielt9 = false;
 var isiPad = false;
 var windowheight = '';
 var mtopagence = '';
 var mtopagence0 = '';
 var mtopreal = '' ;
 var mtopreal0 = '' ;
 var mtopref = '';
 var mtopref0 = '';
 var projet = 0;
 var map =  '';
 var ismobile = (/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase()));
	
	
 if (navigator.userAgent.match(/MSIE\s(?!9.0)/)) {
    ielt9 = true;
}
if (navigator.userAgent.match(/iPad/i)) {
  	isiPad = true;
}



$(window).bind("load resize", function(){

	 windowheight = $(window).height();
		Wheight = Math.round(windowheight + 1);
		
		$('.slide-contact').height(Wheight);
		$('.slide').height(Wheight);
		mtopagence = (Wheight - 376 - 135)/2 ;
		mtopreal = (windowheight- 500 - 135)/2 ;
		mtopref = (windowheight - 400 - 135)/2 ;
		mtopagence0 = mtopagence * 2;
		mtopreal0 = mtopreal * 2;
		mtopref0 = mtopref * 2;

			$('#agence #agence-content .inner').css('paddingTop', mtopagence+'px');
			if (ismobile){
					$('#realisations #real-content .inner').css('paddingTop', (mtopagence + 25)+'px');
				} else {
					$('#realisations #real-content .inner').css('paddingTop', mtopreal+'px');
				}
			$('#services #services-content .inner').css('paddingTop', (mtopagence - 10)+'px');
			if (ismobile){
					$('#references #references-content .inner').css('paddingTop', mtopagence+'px');
				} else {
					$('#references #references-content .inner').css('paddingTop', mtopref+'px');
				}

	});
	
$(document).ready(function(){

			var FullscreenrOptions = {  width: 1600, height: 1000, bgID: '.bg' };
				jQuery.fn.fullscreenr(FullscreenrOptions);
			
			var FullscreenrOptions = {  width: 1280, height: 882, bgID: '.bghome' };
				jQuery.fn.fullscreenr(FullscreenrOptions);	
			
			var FullscreenrOptions = {  width: 740, height: 996, bgID: '.bgphone' };
				jQuery.fn.fullscreenr(FullscreenrOptions);	
	
	var menuopen = false;
function init() {
//			var openmenu = $('.openmenu');
//			var menu = $('.navigation');
//			var menuli = $('.submenu');
//			var xc = 55;
//			var yo = 0;
//			var top1 = 100;
//			var op = 1;
//			var top0 = -30;
//			var yc = '22';
//			var none = 'none';
//			var tl = new TimelineMax();

/*MENU AU CLICK*/
//				tl.to(openmenu, .25, {css:{opacity:yo}}), -0.2 ;/*MENU devient transparent en mm tps*/
//				tl.to(openmenu, .1, {css:{display:none}}) ;/*MENU devient transparent en mm tps*/
//				tl.to(menu, .35, {css:{height:xc}, ease:Expo.easeOut}, 0.2);/*barre menu s'élargie du centre*/
//				tl.to(menuli, .35, {css:{opacity:op}}, 0.1);/*li visible*/
/*MENU HOVER*/
//				tl.to(openmenu, .15, {css:{opacity:yo}}), -0.2 ;/*MENU devient transparent en mm tps*/
//				tl.to(openmenu, .1, {css:{display:none}}) ;/*MENU devient transparent en mm tps*/
//				tl.to(menu, .2, {css:{height:xc}, ease:Expo.easeOut}, -0.1);/*barre menu s'élargie du centre*/
//				tl.to(menuli, .2, {css:{opacity:op}}, -0.1);/*li visible*/
//				setTimeout(function()
//        {
//			menuopen = true;
//			console.log('menuopen : '+menuopen);
//		}, 100);
}

function resetinit() {
//			var openmenu = $('.openmenu');
//			var menu = $('.navigation');
//			var menuli = $('.submenu');
//			var xo = 0;
//			var op = 1;
//			var top4 = 64;
//			var block ='block';
//			var yc = '100%';
//			var yc = '22';
//			var ntl = new TimelineMax();
/*MENU AU CLICK*/
//				ntl.to(menuli, .3, {css:{opacity:xo}});
//				ntl.to(menu, .45, {css:{height:xo}, ease:Expo.easeOutIn}, 0.2);
//				ntl.to(openmenu, .1, {css:{display:block}}) ;
//				ntl.to(openmenu, .15, {css:{opacity:op}}, 0.5);
/*MENU HOVER*/
//				ntl.to(menuli, .2, {css:{opacity:xo}});
//				ntl.to(menu, .2, {css:{height:xo}, ease:Expo.easeOutIn}, 0.2);
//				ntl.to(openmenu, .1, {css:{display:block}}) ;
//				ntl.to(openmenu, .1, {css:{opacity:op}}, 0.5);

			}


function openslider(){
  var top = 0;
  var none = "none";
  var ptop = '100%';
  var slider = $('#slider-realisations');
  var pslider = $('.countdown');
  var tl = new TimelineMax();
  tl.to(pslider, 1.4, {css:{marginTop:top}});//Chrome pb
  tl.to(slider, .2, {css:{marginTop:top}}, -0.2);//Chrome pb
  tl.to(pslider, .8, {css:{opacity:top}}, 0.4);
  tl.to(pslider, .1, {css:{display:none}}, -0.1);
   }
function closeslider(){
  var top = '-100%';
  var ptop = 0;
  var opcity = 1;
  var blck = "block";
  var slider = $('#slider-realisations');
  var pslider = $('.countdown');
  var tl = new TimelineMax();
  tl.to(slider, 0.9, {css:{marginTop:top}});
  tl.to(pslider, 0.9, {css:{marginTop:top}});
  tl.to(pslider, 0.1, {css:{opacity:opcity}}, 0.1);
  tl.to(pslider, 0.1, {css:{display:blck}}, -0.1);
}
$('.real a.projection').bind('click', function(e){
	e.preventDefault();
	openslider()
});
$('a.close-item').bind('click', function(e){
	e.preventDefault();
	closeslider();
	setTimeout( function(){
		$('.countdown').stop().css({opacity: 1});
	}, 800);
});

$('.paris').hover(
    function() {
        $('.wmap').stop().animate({
            backgroundPositionX:0 
        }, 300);
    }, function() {
        $('.wmap').stop().animate({
            backgroundPositionX: -445 
        }, 300);
    });
$('.montreal').hover(
    function() {
        $('.wmap').stop().animate({
            backgroundPositionX:-890 
        }, 300);
    }, function() {
        $('.wmap').stop().animate({
            backgroundPositionX: -445 
        }, 300);
    });
setTimeout( function(){
$(".logo").animate({ opacity: 0.8 }, 1200);
}, 800);

$(".logo").hover(function(){
    $(this).filter(':not(:animated)').animate({ opacity: 1 }, 200);
	//$(this).effect("scale", { percent: 150,origin:'center'}, 600);
}, function() {
	 $(this).animate({ opacity: 0.8 }, 800)
});

});

var wrapper = $('#agence-content, #real-content, #services-content, , #references-content');
	wrapper.kinetic({
		y : false
	});
	$('#left').mousedown(function(){
			wrapper.kinetic('start', { velocity: -40 });
	});
	$('#left').mouseup(function(){
			wrapper.kinetic('end');
	});
	$('#right').mousedown(function(){
			wrapper.kinetic('start', { velocity: 40 });
	});
	$('#right').mouseup(function(){
			wrapper.kinetic('end');
	}); 

$('a#nextslide').bind('click', function(e){
	e.preventDefault();
});
$('a#prevslide').bind('click', function(e){
	e.preventDefault();
});	


 /**/


/***MENU******/		
if (ismobile)  {
	$(".openmenu").toggle(function(){
						$('ul.navigation').animate({
	                        "opacity" : 1,
							"height" : 250
	                    }, 300);
				setTimeout(function(){
				$('ul.navigation').addClass('bodyon');
				},100);
		}, function(){
			$('ul.navigation').animate({
				"opacity" : 0,
				"height" : 0
			},100);
			$('ul.navigation').removeClass('bodyon');
		});
					
	$('body').bind('tap click', function() {
		if($('ul.navigation').hasClass('bodyon')) {
			$('ul.navigation').animate({
				"opacity" : 0,
				"height" : 0
			},100);
			$('ul.navigation').removeClass('bodyon');
		}
	});
	$('.kinetic-active').css({marginTop:'105px'});
	$('.inner').css({marginTop:'0'})
}
else {
	$("ul li").find('ul:first').stop().show().animate({
	                        "opacity" : 1,
							"height" : 55
	                    }, 300)
	$('.kinetic-active').css({marginTop:'135px'});
	$('.inner').css({marginTop:'0'})
}
/******GMAPS******/
	$("a.close").click(function(c){
		c.preventDefault();
			$("#contact_form").animate({"height": "85px"}, "slow");
			$("a.close").css('display', 'none');
			$("a.open").css('display', 'block');	
	});
var contfheight = '500px';	
if (ismobile)  {
	contfheight = '445px';	
}
	$("a.open").click(function(c){
		c.preventDefault();
			$("#contact_form").animate({"height": contfheight}, "slow");
			$("a.open").css('display', 'none');
			$("a.close").css('display', 'block');
	});
	if((ielt9 == false) || (isiPad == false)){
		var beepOne = $("#son-poussin")[0];
		$(".chicken")
			.hover(function() {
				beepOne.play();
			});	
		/*$(window).bind("load resize", function(){
			setTimeout(function(){
		 var bghomeheight = $('#video_video').height();
		 var bghomewidth = $('#video_video').width();
		 var bghometop = $('#video_video').position();
		   $('.bghome').css({height: bghomeheight, width: bghomewidth, top : bghometop.top , left : bghometop.left}) 
			},300);
		});*/
	}
/*************MAIL POST**************/
$(document).ready(function(){
	$("#sendmail").click(function(){
		var valid = '';
		var isr = ' doit être rempli.';
		var isrm = ' est requis.';
		var nom = $("#nom").val();
		var mail = $("#mail").val();
		var tel = $("#tel").val();
		var societe = $("#societe").val();
		var msg = $("#msg").val();
			if (nom.length<1) {
				valid += '<br />Le champ NOM PR&Eacute;NOM'+isr;
			}
			if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
				valid += '<br />Un Email valide'+isrm;
			}
			if (msg.length<1) {
				valid += '<br />Le champ MESSAGE'+isr;
			}
			if (valid!='') {
				$("#response").fadeIn("slow");
				$("#response").html("<span>Une erreur est survenue :</span>"+valid);
			}
			else {
			var datastr ='nom=' + nom + '&mail=' + mail + '&tel=' + tel + '&societe=' + societe + '&msg=' + msg;
				$("#response").css("display", "block");
				$("#response").html("Envoi du message…. ");
				$("#response").fadeIn("slow");
				setTimeout("send('"+datastr+"')",2000);
			}
		return false;
		});
	});
	function send(datastr){
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: datastr,
			cache: false,
			success: function(html){
				$("#response").fadeIn("slow");
				$("#response").html(html);
				setTimeout('$("#response").fadeOut("slow")',2000);
			}
	});
}


