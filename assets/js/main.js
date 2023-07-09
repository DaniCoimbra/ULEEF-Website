
(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge:  [ '1281px',  '1680px' ],
		large:   [ '981px',   '1280px' ],
		medium:  [ '737px',   '980px'  ],
		small:   [ null,      '736px'  ]
	});

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		mode: 'fade',
		noOpenerFade: true,
		alignment: 'center',
		detach: false
	});

	// Nav.

	// Title Bar.
	$(
		'<div id="titleBar">' +
			'<a href="#navPanel" class="toggle"></a>' +
			'<span class="title">' + $('#logo h1').html() + '</span>' +
		'</div>'
	)
		.appendTo($body);

	// Panel.
	$(
		'<div id="navPanel">' +
			'<nav>' +
				$('#nav').navList() +
			'</nav>' +
		'</div>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});

		document.addEventListener("DOMContentLoaded", function() {
			const newsRows = document.querySelectorAll(".publications-row");
		  
			newsRows.forEach(function(row) {
			  const headline = row.querySelector(".headline");
			  const downArrow = row.querySelector(".down-arrow");
		  
			  headline.addEventListener("click", function() {
				row.classList.toggle("active");
				downArrow.classList.toggle("upside-down"); // Toggle the upside-down class on arrow
			  });
			});
		  });
		  
		window.addEventListener('DOMContentLoaded', function() {
			var rows = document.getElementsByClassName('news-row');
		  
			for (var i = 0; i < rows.length; i++) {
			  (function(index) {
				setTimeout(function() {
				  rows[index].style.opacity = '1';
				}, 500 * (index + 1)); // Delay is multiplied by (index + 1)
			  })(i);
			}
		  });
		  
		  window.addEventListener('DOMContentLoaded', function() {
			var rows = document.getElementsByClassName('publications-row');
			var delay = 500; // Delay between each row in milliseconds
			var duration = 500; // Transition duration in milliseconds
			
			for (var i = 0; i < rows.length; i++) {
			  (function(index) {
				setTimeout(function() {
				  rows[index].style.transition = 'opacity ' + duration + 'ms';
				  rows[index].style.opacity = '1';
				}, delay * (index + 1)); // Delay is multiplied by (index + 1)
			  })(i);
			}
		  });


	// Text appear on scroll.
	function reveal() {
		var reveals = document.querySelectorAll("#reveal");
		for (var i = 0; i < reveals.length; i++) {
		  var windowHeight = window.innerHeight;
		  var elementTop = reveals[i].getBoundingClientRect().top;
		  var elementVisible = 100;
	  
		  if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		  } else {
			reveals[i].classList.remove("active");
		  }
		}
	  }
	  window.addEventListener("scroll", reveal);
	  function slide() {
		var reveals = document.querySelectorAll(".publications img");
		var windowHeight = window.innerHeight;
	  
		reveals.forEach(function(image) {
		  var elementTop = image.getBoundingClientRect().top;
		  var elementVisible = 100;
	  
		  if (elementTop < windowHeight - elementVisible) {
			image.classList.add("active");
		  } else {
			image.classList.remove("active");
		  }
		});
	  }
	  
	  window.addEventListener("scroll", slide);

	  setTimeout(startPulse, 1000); // Adjust the delay time (in milliseconds) as needed

	function startPulse() {
	const arrow = document.querySelector('.arrow');
	arrow.classList.add('pulse');
	}

})(jQuery);
