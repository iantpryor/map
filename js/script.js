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
        var blockSize = 2;
    
        // set the dynamic outside the loop
        var it1 = -1;
        var it2 = -1;
    
        //loop function
        function loop() {
            it1 = it1+1;
            if(it1 % 96 == 0){
                it1 = 0;
                it2 = it2+1;
            }
    
            // change dynamic
            //dynamic = dynamic * 1.1;
            x = it1*blockSize;
            y = it2*blockSize;
            
            //if we've reached the end, change direction
            
        
            // stop the the animation if it runs out-of-canvas
            if (it2 > 54) {
                //c.clearRect(0, 0, canvas.width, canvas.height);
                clearInterval(myTimer);
                alert("done");
            }
    
            // clear the canvas for this loop's animation
            //c.clearRect(0, 0, canvas.width, canvas.height);
            c.fillStyle = '#87CEEB';
    
            // draw
            c.beginPath();
            c.fillRect(x, y, 1, 1);
            c.fill();
        }
    
        $("#startbtn").click(function(){ dynamic=10; myTimer=setInterval(loop,1); });
    }
})(window, document, undefined);
