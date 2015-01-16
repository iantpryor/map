(function(window, document, undefined){
  window.onload = init;
  function init(){
    var r = 255;
    var g = 255;
    var b = 255;
    var a = 255;
    var c = document.getElementById("mapCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 960, 540);
    
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
    for(x=0; x<100; x++){
      for(y=0; y<100: y++){
        ctx.fillRect(x,y,1,1);
      }
    }
})(window, document, undefined);
