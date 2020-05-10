jQuery(document).ready(function () {

	"use strict";
	;(function($, win) {
		$.fn.inViewport = function(cb) {
		   return this.each(function(i,el) {
			 function visPx(){
			   var elH = $(el).outerHeight(),
				   H = $(win).height(),
				   r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
			   return cb.call(el, Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H)));  
			 }
			 visPx();
			 $(win).on("resize scroll", visPx);
		   });
		};
	  }(jQuery, window));

	function sleep(ms) {
		// console.log('sleeping');
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	async function change_heading_text() {
		await sleep(2500);
		$('#heading-text').fadeOut();
		await sleep(500);
		$('#heading-text').html("<span class='line'>I am Yash.</span>");
		await sleep(500);
		$('#heading-text').fadeIn();
	}

	change_heading_text();
	

	var scene = document.getElementById('scene');
	var parallaxInstance = new Parallax(scene);

	const s = window.screen;
	const w = (q.width = s.width);
	const h = (q.height = 300);

	const ctx = q.getContext("2d");

	const p = Array(Math.floor(w / 10) + 1).fill(0);

	const random = (items) => items[Math.floor(Math.random() * items.length)];

	const hex = "תשקצץיףסואןבגדהזחטךכלםמנעפר".split("");

	setInterval(() => {
		ctx.fillStyle = "rgba(0,0,0,.1)";
		ctx.fillRect(0, 0, w, h);
		ctx.fillStyle = "#22eaaa";
		p.map((v, i) => {
			ctx.fillText(random(hex), i * 10, v);
			p[i] = v >= h || v > 50 + 1000 * Math.random() ? 0 : v + 10;
		});
	}, 40);

	

	$(".skills-graph").inViewport(function(px){
		// console.log("skills in viewport");
		if(px) $(this).addClass("skills-active") ;
	});

});
