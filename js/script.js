(function(window, document, undefined) { 
    window.onload = init;
    function init() {
    
        //get the canvas
        var canvas = document.getElementById("mapcanvas");
        var c = canvas.getContext("2d");
        var width = canvas.width;
        var height = canvas.height;
        
        //create an empty map
        var map = new Array(width);
        for(var i = 0; i < width; i++) {
            map[i] = new Array(height);
        }
        
        //function for finding if one point is a wall
        function iswall(i,j) {
            if(i >= width || i < 0 || j >= height || j < 0) {
                return 1;
            }else{
                return map[i][j];
            }
        }
       
       //functions for finding how many neighbors are walls
        function ncount(i,j) {
            var i1 = i+1;
            var i2 = i-1;
            var j1 = j+1;
            var j2 = j-1;
            var neighbors = 0;
            if(iswall(i1,j1) == 1) {
                neighbors++;
            }
            if(iswall(i,j1) == 1) {
                neighbors++;
            }
            if(iswall(i2,j1) == 1) {
                neighbors++;
            }
            if(iswall(i1,j) == 1) {
                neighbors++;
            }
            if(iswall(i2,j) == 1) {
                neighbors++;
            }
            if(iswall(i1,j2) == 1) {
                neighbors++;
            }
            if(iswall(i,j2) == 1) {
                neighbors++;
            }
            if(iswall(i2,j2) == 1) {
                neighbors++;
            }
            return neighbors;
        }
        
        //when we click, assign values and then paint
        document.getElementById("startbtn").onclick = paint;
        var it = 1;
        function paint() {
            //generation interations
            for(var it = 0; it < 8; it++) {
                if(it == 0) {
                    //fill random values for the first iteration
                    for(var i = 0; i < width; i++) {
                        for(var j = 0; j < height; j++) {
                            if(Math.random() < .40) {
                                map[i][j] = 1;
                            } else {
                                map[i][j] = 0;
                            }
                        }
                    }
                } else {
                    //on subsequent iterations, create
                    for(var i = 0; i < width; i++) {
                        for(var j = 0; j < height; j++) {
                            var nc = ncount(i,j);
                            if(it <= 4) {
                                if(nc >= 5 || nc <= 2) {
                                    map[i][j] = 1;
                                } else {
                                    map[i][j] = 0;
                                }
                            } else {
                                if(nc >=5) {
                                    map[i][j] = 1;
                                } else {
                                    map[i][j] = 0;
                                }
                            } 
                        }
                    }
                }
            }
            
            //paint the map
            for(var i = 0; i < width; i++) {
                for(var j = 0; j < height; j++) {
                    if(map[i][j] == 1) {
                        c.fillStyle = "#000000";
                        c.fillRect(i, j, 1, 1);
                    } else {
                        c.fillStyle = "#FFFFFF";
                        c.fillRect(i, j, 1, 1);
                    }
                }
            }
        }
    }
})(window, document, undefined);
