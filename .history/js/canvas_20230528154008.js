//!  INIT

const init = function () {
	main();
};

window.onload = function () {
	init();
};

//!  MAIN================================================================================

const main = function () {
	//!  10123.1609  variables

    //* establish 2d canvas
    const canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
	const c = canvas.getContext("2d");

    //* center of screen X Y
	let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;

    //* dx = velocity X Y
    let dx = .05;

	const DEFAULTWIDTH = 200;
	const DEFAULTHEIGHT = 200;
	const DEFAULTSTROKEWIDTH = 6;

	let defaultWidth = DEFAULTWIDTH;
	let defaultHeight = DEFAULTHEIGHT;
	let defaultStrokeWidth = DEFAULTSTROKEWIDTH;


	//!  10123.1609 functions

	//!  10123.1609 LIBRARY

    const c_Animate = function () {
        c.strokeStyle = "#ed1c2c";
        c.lineWidth = defaultStrokeWidth;
		c.lineCap = "round";
        requestAnimationFrame(c_Animate);
        c.clearRect(0, 0, innerWidth, innerHeight);

        c_Circle(centerX, centerY, 90);
        centerX +=dx;
        

	};

	const c_Circle = function (
		centerX,
		centerY,
		size,
		defaultHeight
	) {
        
		c.beginPath();
		c.arc(centerX, centerY, size, -1.45, 1.49 * Math.PI);
		c.stroke();
	};

	const c_Fill = function (color, size) {
		c.fillStyle = color;
	};

	const c_Square = function (centerX, centerY, size) {
		c.beginPath();
		c.fillRect(
			centerX - size / 2,
			centerY - size / 2,
			size,
			size
        );
	c_Fill("#05b500");
        
		c.stroke();
	};

	const c_Stroke = function (color, size) {
		c.strokeStyle = color;
		c.lineWidth = defaultStrokeWidth;
        c.lineCap = "round";
        
	};

	//!  10123.161 0  main body=========================================

	//line
	// c_Circle(centerX, centerY, 90);
	c_Fill("#05b500");
	c_Square(centerX, centerY, 90);
	c_Animate();
};

//!  123122.1839  END
