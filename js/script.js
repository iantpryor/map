(function(window, document, undefined) { 
    window.onload = init;
    function init() {
        //create the map of values
        var map = new Array(960);
        for(var i = 0; i < 960; i++) {
            map[i] = new Array(540);
        }
        
        //fill the values
        for(var i = 0; i< 960; i++) {
            for(var j = 0; j < 540; j++) {
                map[i][j] = 1;
            }
        }
        
        var canvas = document.getElementById("mapcanvas");
        var c = canvas.getContext("2d");
        var myTimer;
        var blockSize = 2;
    
        // set the dynamic outside the loop
        var it1 = -1;
        var it2 = -1;
        
        document.getElementById("startbtn").onclick = paint;
    
        //paint the map
        function paint() {
            for(var i = 0; i < 960; i++) {
                for(var j = 0; j< 540; j++){
                    if(map[i][j] == 1){
                        c.fillStyle = '#87CEEB';
                        c.beginPath();
                        c.fillRect(i,j,1,1);
                        c.fill();
                    }
                }
            }
        }
    }
})(window, document, undefined);
