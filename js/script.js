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
        
        var imgData = c.createImageData(1, 1);

        var i;
        for (i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i+0] = 255;
            imgData.data[i+1] = 0;
            imgData.data[i+2] = 0;
            imgData.data[i+3] = 255;
        }


        
        function ncount(i,j) {
            var i1 = i+1;
            var i2 = i-1;
            var j1 = j+1;
            var j2 = j-1;
            var neighbors = 0;
            if(i1 < 960 && i2 >=0 && j1 < 540 && j2 >=0){
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
                        switch(nc){
                            case 4:
                                break;
                            case 5:
                                map[i][j] = 1;
                                break;
                            case 6:
                                map[i][j] = 1;
                                break;
                            case 7:
                                map[i][j] = 1;
                                break;
                            case 8:
                                map[i][j] = 1;
                                break;
                            default:
                                map[i][j] = 0;
                        }
                    }
                }
            }
            
            
            
            //paint the map
            for(var i = 0; i < 960; i++) {
                for(var j = 0; j< 540; j++){
                    if(map[i][j] == 1){
                        c.putImageData(imgData, i, j);
                    }else {
                        
                    }
                }
            }
            it++;
            document.getElementById("iter").innerHTML = it;
        }
    }
})(window, document, undefined);
