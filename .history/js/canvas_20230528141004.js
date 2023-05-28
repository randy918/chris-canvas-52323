//!  INIT

const init = function () {
	main();
};

window.onload = function () {
	init();
};

//!  MAIN

const main = function () {
	//!  global variables

	//*  canvas width & height
	const canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	//* x / y center
	let centerX = canvas.width / 2;
	let centerY = canvas.height / 2;

	//* dx / dy initial global velocity
	let dx = 0.005;
	let dy = 0.005;

	//* initial global fill / stroke
	let radius = 100;
	let fillHeight = 200;
	let strokeWidth = 6;

	//* context 2D = c
	const c = canvas.getContext("2d");

	//!  LIBRARY

	const c_Animate = function () {
		requestAnimationFrame(c_Animate);
		c.clearRect(0, 0, innerWidth, innerHeight);

		c_Circle(fill, fillHe 90);
		fill += dx;
	};

	const c_Circle = function (
		defaultX,
		defaultY,
		size,
		defaultHeight
	) {
		c.beginPath();
		c.arc(defaultX, defaultY, size, -1.45, 1.49 * Math.PI);
		c.stroke();
	};

	const c_Fill = function (color, size) {
		c.fillStyle = color;
	};

	const c_Square = function (defaultX, defaultY, size) {
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
		c.strokeStyle = color;
		c.lineWidth = strokeWidth;
		c.lineCap = "round";
	};

	//!  MAIN BODY==========================================================

	//line
	c_Stroke("#ed1c2c");
	c_Circle(fillWidth, fillHeight, 90);
	c_Fill("#05b500");
	c_Square(fillWidth, fillHeight, 90);
	c_Animate();
};

//!  123122.1839  END
