//!  121822.0826        FUNCTIONS

const init = function () {
	main();
};

window.onload = function () {
	init();
};

//!  123122.1839        MAIN================================================

const main = function () {
	//!  10123.1609  variables

	const canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	let defaultX = canvas.width / 2;
	let defaultY = canvas.height / 2;
	const DEFAULTWIDTH = 200;
	const DEFAULTHEIGHT = 200;
	const DEFAULTSTROKEWIDTH = 6;

	
	let defaultWidth = DEFAULTWIDTH;
	let defaultHeight = DEFAULTHEIGHT;
	let defaultStrokeWidth = DEFAULTSTROKEWIDTH;

	const c = canvas.getContext("2d");

	//!  10123.1609 functions

	const c_Circle = function (
		defaultX,
		defaultY,
		size,
		defaultHeight
	) {
		c.beginPath();
		c.arc(defaultX, defaultY, size, -1.45, 1.45 * Math.PI);
		c.stroke();
	};

	const c_Square = function (
		defaultX,
		defaultY,
		size,
	) {
		c.beginPath();
		c.fillRect(
			defaultX - size / 2,
			defaultY - size / 2,
			size,
			size
		);
		c.stroke();
	};

	const c_Stroke = function (color, size) {
		c.strokeStyle = "#fa343a";
		c.lineWidth = size;
		c.lineCap = "round";
	};

	//!  10123.161 0  main body=========================================

	//line
	c_Stroke("#fa343a", defaultStrokeWidth);
	c_Circle(defaultX, defaultY, 60);
	c_Square(defaultX, defaultY, 60);
};

//!  123122.1839  END
