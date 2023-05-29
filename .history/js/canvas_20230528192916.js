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

	//* object x y = location X Y
	let x = centerX;
	let y = centerY;

	//* object size x y
	const SIZE = 30;
	size = SIZE;

	//* object dx dy = velocity X Y
	let dx = 0.05;
	let dy = 0.05;

	//* default stroke
	const STROKEWIDTH = 6;
	let strokeWidth = STROKEWIDTH;

	//!  10123.1609 LIBRARY OBJECT ORIENTED ========================================

	function Circle(x, y) {
		this.x = x;
		this.y = y;
		this.dx = dx;
        this.dy = dy;
        
        this.draw = function () {
            
            c.beginPath();
            c.arc(x, y, radius, 0, 2 * Math.PI, false);
            c.strokeStyle = 'blue';
            c.stroke();

        };

        this.update = function () {
            if (x + radius > innerWidth || x - radius < 0) {
                dx = -dx;
            }
            
            if (y + radius > innerWidth || y - radius < 0) {
                dy = -dy;
            }
            
    }
    
    let circle = new Circle(200, 200);


	//!  10123.1609 LIBRARY============================================================

	const c_Animate = function () {
		c.clearRect(0, 0, innerWidth, innerHeight);

		c_Circle(x, y, size);
		requestAnimationFrame(c_Animate);
	};

	const c_Circle = function (x, y, size) {
		c.strokeStyle = "#ed1c2c";
		c.lineWidth = strokeWidth;
		c.lineCap = "round";
		x += 4;
		y += dy;
		c.beginPath();
		c.arc(x, y, size, -1.45, 1.49 * Math.PI);
		c.stroke();
	};

	//!  BODY =========================================================================

	c_Animate();
};

