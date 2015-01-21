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
        
        function ncount(i,j) {
            var i1 = i+1;
            var i2 = i-1;
            var j1 = j+1;
            var j2 = j-1;
            var neighbors = 0;
            if(map[i1][j1] == 1){
                neighbors++;
            }
            if(map[i][j1] == 1){
                neighbors++;
            }
            if(map[i2][j1] == 1){
                neighbors++;
            }
            if(map[i1][j] == 1){
                neighbors++;
            }
            if(map[i2][j] == 1){
                neighbors++;
            }
            if(map[i1][j2] == 1){
                neighbors++;
            }
            if(map[i][j2] == 1){
                neighbors++;
            }
            if(map[i2][j2] == 1){
                neighbors++;
            }
            return neighbors;
        }
        
        //when we click, assign values and then paint
        document.getElementById("startbtn").onclick = paint;
        var it = 1;
        function paint() {
            if(it == 1){
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
            } else {
                for(var i = 0; i< 960; i++) {
                    for(var j = 0; j < 540; j++){
                        var nc = ncount(i,j);
                        if(nc >= 4 && map[i][j] == 1){
                            map[i][j] == 1;
                        }
                        if(nc >= 5) {
                            map[i][j] == 1;
                        }
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
            it++;
        }
    }
})(window, document, undefined);
