
$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	$(".s-adw").waypoint(
		function() {
			$({blurRadius: 5}).animate({blurRadius: 0}, 
			{
				duration: 1000,
				easing: 'swing',
				step: function() 
				{
					$(".s-adw-item span").css(
					{
						"-webkit-filter": "blur("+this.blurRadius+"px)",
						"filter": "blur("+this.blurRadius+"px)"
					});
				}
			});
			
			$(".s-adw-item span").each(function()
			{
				var tcount = $(this).data("count");
				$(this).animateNumber(
					{
					number: tcount,
					easing: 'easeInQuad',
					"font-size": "50px"
					},
					1000);
			});
		},

		{offset: "280px"}
		
		);
	

	$(".btn-table").click(function() {
		$(".auto-info").slideToggle();
		return false;
		});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Отправлено!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(document).ready(function() {
	
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#applicationName',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#applicationName';
				}
			}
		}
	});
});