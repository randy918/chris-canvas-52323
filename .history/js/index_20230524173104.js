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

    const DEFAULTX = 200;
    const DEFAULTY = 200;
    const DEFAULTWIDTH = 200;
    const DEFAULTHEIGHT = 200;
    const DEFAULTSTROKEWIDTH = 6;
    
    const defaultX = DEFAULTX;
    const defaultY = DEFAULTY;
    const defaultWidth = DEFAULTWIDTH;
    const defaultHeight = DEFAULTHEIGHT;
    const defaultStrokeWidth = DEFAULTSTROKEWIDTH;

    defaultW

    console.log(defaultWidth);
    
    const canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const c = canvas.getContext('2d');
    console.log(canvas);

    //!  10123.1609 functions

    const cCircle = function () {
        
        console.log("hello");

    };



    //!  10123.161 0  main body
    c.fillRect(200, 200, 44, 233);

    //line
    c.beginPath();
    c.moveTo(50, 300);
    c.lineTo(100, 300);
    c.strokeStyle = "#fa343a"
    c.stroke();
    cCircle();
   
} 





	//!  123122.1839  END

   
