//!  121822.0826        FUNCTIONS

const init = function () {
	main();
};

window.onload = function () {
	init();
};

//!  123122.1839        MAIN

const main = function () {
	//!  10123.1609  variables

	
	const canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const DEFAULTX = 200;
	const DEFAULTY = 200;
	const DEFAULTWIDTH = 200;
	const DEFAULTHEIGHT = 200;
	const DEFAULTSTROKEWIDTH = 6;

	let defaultX = canvas.width / 2;
	let defaultX = canvas.height / 2;
	let defaultY = DEFAULTY;
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
		c.arc(defaultX, defaultY, size, 0, 2 * Math.PI);
		c.stroke();
	};

	const c_Square = function (
		defaultX,
		defaultY,
		size,
		defaultHeight
	) {
		c.beginPath();
		c.arc(defaultX, defaultY, size, 0, 2 * Math.PI);
		c.stroke();
	};

	//!  10123.161 0  main body
	c.fillRect(200, 200, 44, 233);

	//line
	c.beginPath();
	c.moveTo(50, 300);
	c.lineTo(100, 300);
	c.strokeStyle = "#fa343a";
	c.stroke();
	c_Circle(60, 50, 60, 60);
};

//!  123122.1839  END
