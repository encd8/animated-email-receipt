document.addEventListener("DOMContentLoaded", function(event) {

	var animTimeline = new anime.timeline({});

	animTimeline.add({
		targets: '#apple-logo',
		width: [0, '72px'],
		height: [0, '72px'],
	})

	animTimeline.add({
		targets: '#inner',
		maxWidth: '450px',
	})

	animTimeline.add({
		targets: '#date',
		easing: 'easeOutQuad',
		duration: 200,
		scale: [0,1],
		translateX: ['-8px', '0px']
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
	 * Optional buttons animation
	 */
	 animTimeline.add({
	 	targets: '#buttons a',
	 	scale: [0,1],
	 	delay: (el,i) => {
	 		return (i*400);
	 	}
	 })

});