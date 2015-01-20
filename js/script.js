var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
(function(window, document, undefined) { 
    window.onload = init;
    function init() {
        var canvas = document.getElementById("mapcanvas");
        var c = canvas.getContext("2d");
        var myTimer;
    
        // set the dynamic outside the loop
        var dynamic = 10;
    
        //loop function
        function loop() {
    
            // change dynamic
            dynamic = dynamic * 1.1;
            x = dynamic;
            y = dynamic * 1.2;
        
            // stop the the animation if it runs out-of-canvas
            if (x > canvas.width || y > canvas.height) {
                c.clearRect(0, 0, canvas.width, canvas.height);
                clearInterval(myTimer);
            }
    
            // clear the canvas for this loop's animation
            //c.clearRect(0, 0, canvas.width, canvas.height);
            c.fillStyle = '#87CEEB';
    
            // draw
            c.beginPath();
            c.arc(x, y, 10, 0, Math.PI * 2, false);
            c.fill();
        }
    
        $("#startbtn").click(function(){ dynamic=10; myTimer=setInterval(loop,20); });
    }
})(window, document, undefined);
