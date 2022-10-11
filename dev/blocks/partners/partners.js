let partners = document.querySelector(".partners__list");

if (partners) {
	var partnersCarousel = new Splide(partners, {
		type: "loop",
		focus: "center",
		pagination: false,
		arrows: false,
		autoWidth: true,
		easing: "linear",
		drag: false,
		autoScroll: {
			speed: 1,
			pauseOnHover: false,
		},
		rewindSpeed: 1,
	});

	partnersCarousel.mount(window.splide.Extensions);
}
