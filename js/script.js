(function(window, document, undefined) { 
    window.onload = init;
    function init() {
        
        //create an empty map
        var map = new Array(960);
        for(var i = 0; i < 960; i++) {
            map[i] = new Array(540);
        }
        
        //get the canvas
        var canvas = document.getElementById("mapcanvas");
        var c = canvas.getContext("2d");
        
        //when we click, assign values and then paint
        document.getElementById("startbtn").onclick = paint;
        function paint() {
            
            //fill the values
            for(var i = 0; i< 960; i++) {
                for(var j = 0; j < 540; j++) {
                    if(Math.random() < .45){
                        map[i][j] = 1;
                    } else {
                        map[i][j] = 0;
                    }
                }
            }
            
            //paint the map
            for(var i = 0; i < 960; i++) {
                for(var j = 0; j< 540; j++){
                    if(map[i][j] == 1){
                        c.fillStyle = '#87CEEB';
                        c.fillRect(i,j,1,1);
                    }
                }
            }
        }
    }
})(window, document, undefined);
