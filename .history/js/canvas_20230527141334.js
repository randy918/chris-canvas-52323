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

	// establish canvas width / height
    const canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

// establish center default X Y
    let defaultX = canvas.width / 2;
	let defaultY = canvas.height / 2;

	// dx = velocity x
	let dx = 0.15;

	const OBJECTWIDTH = 200;
	const OBJECTHEIGHT = 200;
	const OBJECTSTROKEWIDTH = 6;
	const OBJECTSlZE = 40;

	let defaultWidth = OBJECTWIDTH;
	let defaultHeight = OBJECTHEIGHT;
    let defaultStrokeWidth = OBJECTSTROKEWIDTH;
    let objectSize = OBJ

	const c = canvas.getContext("2d");

	//!  10123.1609 functions

	//!  10123.1609 LIBRARY

    function Circle(x, y) {
        this.x = x;
        this.y = y;

        this.draw = function() {

	c.beginPath();
		c.arc(x, y, size, -1.45, 1.49 * Math.PI);
		c.stroke();

        }
    }

    const circle = new Circle(200, 200);
    circle.draw();

	const c_Animate = function () {
		requestAnimationFrame(c_Animate);
		c.clearRect(0, 0, innerWidth, innerHeight);

		c_Circle(defaultX, defaultY, 90);
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
		c.lineWidth = defaultStrokeWidth;
		c.lineCap = "round";
	};

	//!  10123.161 0  main body=========================================

	//line
	// c_Stroke("#ed1c2c");
	// c_Circle(defaultX, defaultY, 90);
	// c_Fill("#05b500");
	// c_Square(defaultX, defaultY, 90);
	// c_Animate();
};

//!  123122.1839  END
