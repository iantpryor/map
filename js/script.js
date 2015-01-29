(function(window, document, undefined) { 
    window.onload = init;
    function init() {
        //get the canvas
        var canvas = document.getElementById("mapcanvas");
        var c = canvas.getContext("2d");
        var width = 640;
        var height = 360;
        var blockSize = 4;
        
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
            var i1 = i+blockSize;
            var i2 = i-blockSize;
            var j1 = j+blockSize;
            var j2 = j-blockSize;
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
        
        //paint the map
        function paint() {
            for(var i = 0; i < width; i++) {
                for(var j = 0; j < height; j++) {
                    if(map[i][j] == 1) {
                        c.fillStyle = "#000000";
                        c.fillRect(i*4, j*4, 4, 4);
                    } else {
                        c.fillStyle = "#FFFFFF";
                        c.fillRect(i*4, j*4, 4, 4);
                    }
                }
            }
        }
        
        //make a block using a point as upper left
        function block(i, j, type) {
            for(var b1 = 0; b1 < blockSize; b1++) {
                for(var b2 = 0; b2 < blockSize; b2++) {
                    map[i + b2][j + b2] = type;
                }
            }
        }
        
        //when we click, assign values and then paint
        document.getElementById("startbtn").onclick = gen1;
        var it = 1;
        function gen1() {
            //generation interations
            for(var it = 0; it < 7; it++) {
                if(it == 0) {
                    //fill random values for the first iteration
                    for(var i = 0; i < width; i+= blockSize) {
                        for(var j = 0; j < height; j+= blockSize) {
                            if(Math.random() < .40) {
                                block(i, j, 1);
                                }
                            } else {
                                block(i, j, 0);
                            }
                        }
                    }
                } else {
                    //on subsequent iterations, create
                    for(var i = 0; i < width; i+=blockSize) {
                        for(var j = 0; j < height; j+=blockSize) {
                            var nc = ncount(i,j);
                            if(it <= 4) {
                                if(nc >= 5 || nc <= 2) {
                                    block(i, j, 1);
                                } else {
                                    block(i, j, 0);
                                }
                            } else {
                                if(nc <= 3){
                                    block(i, j, 0);
                                }
                            } 
                        }
                    }
                }
            }
            paint();
        }
    }
})(window, document, undefined);
