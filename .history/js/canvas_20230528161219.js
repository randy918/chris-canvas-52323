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

    //* object dx dy = velocity X Y
    let dx = 0.05;
    let dy = 0.05;

	//* default stroke
    const STROKEWIDTH = 6;
	let strokeWidth = STROKEWIDTH;


	//!  10123.1609 LIBRARY============================================================

    const c_Animate = function () {
        c.clearRect(0, 0, innerWidth, innerHeight);
        requestAnimationFrame(c_Animate);
        c_Circle(centerX, centerY, 90);
        c.strokeStyle = "#ed1c2c";
        c.lineWidth = strokeWidth;
		c.lineCap = "round";
        
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

	
	//!  BO=========================================================

	c_Animate();
};

//!  123122.1839  END
