 
/*============ Selectpicker Start ============*/
 $(document).ready( function() {
 	$('.selectpicker').selectpicker();	
})
/*============ Selectpicker End ============*/

$('.header-wapper .mobile-btn').click(function(){
  	$(this).toggleClass('open');
  	$('.header-wapper .navi').toggleClass('open');
  	$('.header-wapper .navi > ul > li > ul.sub-menu').slideUp();
  	$('.header-wapper .navi > ul > li > ul.sub-menu').removeClass('open');
	//$('.header-wapper .nav-bar .menu-bar > ul > li > a.open').removeClass('open');
});

$(function(){
    $('.header-wapper .navi > ul > li > a.at-drop-down > .fa').on('click', function(e){
        e.preventDefault();
		if($(window).width() <= 1199)
		{
			
			if(!$(this).parent().next('ul.sub-menu').hasClass('open')){	
				$('.header-wapper .navi > ul > li > ul.sub-menu').slideUp('slow');
				$('.header-wapper .navi > ul > li > ul.sub-menu').removeClass('open');
			}
            $(this).parent().next('ul.sub-menu').slideToggle('slow');
			$(this).parent().next('ul.sub-menu').toggleClass('open');
        }
    });
});

$(".header-wapper .searchbar .srch-btn").click(function(){
  $(".header-wapper .searchbar .input-form").toggleClass("active");
});

$(".header-wapper .mobile-btn").click(function(){
	$(this).toggleClass("change");
	$(".header-wapper .navi").toggleClass("active");
});
/*============ Sticky header Start ============*/
/*$(document).on("scroll", function(){
	if
	($(document).scrollTop() > 100){
		$("header").addClass("shrink");
	}
	else
	{
		$("header").removeClass("shrink");
	}
});*/
/*============ Sticky header End ============*/


/*============ About Slider Start ============*/
$('#abt-sld').owlCarousel({
	loop:true,
	margin:0,
	nav:false,
	dots:true,
	smartSpeed:450,
	autoplay:false,
	responsive:{
		0:{
			items:1
		},
		767:{
			items:1
		},
		1000:{
			items:1
		}
	}
});
/*============ About Slider End ============*/

/*============ Testimonial Slider Start ============*/

$('#test-top-slider').owlCarousel({
	loop:true,
	margin:0,
	nav:false,
	dots:true,
	smartSpeed:450,
	autoplay:false,
	autoHeight:true,
	responsive:{
		0:{
			items:1
		},
		767:{
			items:1
		},
		1000:{
			items:1
		}
	}
});


$('#testi-slider').owlCarousel({
	loop:true,
	margin:60,
	nav:true,
	dots:true,
	smartSpeed:450,
	autoplay:false,
	autoHeight:true,
	responsive:{
		0:{
			items:1
		},
		767:{
			items:2
		},
		1000:{
			items:3
		}
	}
});

$('#testi-slider-2').owlCarousel({
	loop:true,
	margin:60,
	nav:true,
	dots:true,
	smartSpeed:450,
	autoplay:false,
	autoHeight:true,
	responsive:{
		0:{
			items:1
		},
		767:{
			items:2
		},
		1000:{
			items:3
		}
	}
});
/*============ Testimonial Slider End ============*/

/*============ Client Slider Start ============*/
$('#client-sld').owlCarousel({
	loop:true,
	margin:64,
	nav:false,
	dots:false,
	smartSpeed:450,
	autoplay:true,
	responsive:{
		0:{
			items:1
		},
		767:{
			items:4
		},
		1000:{
			items:5
		}
	}
});
/*============ Client Slider End ============*/

$(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
        	$(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
        	$(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
    });