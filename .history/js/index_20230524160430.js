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
    
    const c = canvas.getContext('2d');
    console.log(canvas);

	//!  10123.1609 functions

    const cc = function () {

	//!  10123.161 0  main body
    c.fillRect(200, 200, 44, 233);

    //line
    c.beginPath();
    c.moveTo(50, 300);
    c.lineTo(100, 300);
    c.strokeStyle = "#fa343a"
    c.stroke();
    
    c.arc(x: 56, y: 56, r: 56, startAngle: 44, endAngle: 44, drawCounterClockwise: Bool(false));
    





	//!  123122.1839  END

   
};