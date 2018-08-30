document.addEventListener("DOMContentLoaded", function(event) {

	var animTimeline = new anime.timeline();

	animTimeline.add({
		targets: '#inner',
		scale: [0,1],
		easing: 'easeOutElastic',
	})

	animTimeline.add({
		targets: '#apple-logo',
		left: ['50%', 0],
		translateX: ['-50%', 0],
		elasticity:0,
		duration:200,
	})

	animTimeline.add({
		targets: '#date',
		easing: 'easeOutQuad',
		duration: 200,
		scale: [0,1],
		translateX: ['-8px', '0px'],
		offset: '+=0',
	})

	animTimeline.add({
		targets: '#details',
		rotateX: ["-90deg", "0deg"],
	})

	animTimeline.add({
		targets: '#barcode',
		rotateX: ['-90deg', '0deg']
	})

	animTimeline.add({
		targets: '.row-anim',
		opacity: [0,1],
		translateY: ['3px','0px'],
		delay: function(el, i) { return (i * 200); },
	})

	/*
	 * Optional animation for replay button and credits
	 */
	 animTimeline.add({
	 	targets: '#buttons a',
	 	scale: [0,1],
	 	delay: (el,i) => {
	 		return (i*400);
	 	}
	 });

	 /* Replay */
	 document.getElementById('replay-btn').onclick = () => {
		 animTimeline.restart();
		 return false;
	 }
});