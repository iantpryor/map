(function(window, document, undefined){
  window.onload = init;
  function init(){
    var c = document.getElementById("mapCanvas");
    var ctx = c.getContext("2d");
    var id = ctx.createImageData(1,1);
    var d = id.data;
    d[0] = r;
    d[1] = g;
    d[2] = b;
    d[3] = a;
    for(x=0; x<50; x++){
      for(y=0; y<50; y++){
        ctx.putImageData(id, x, y);
      }
    }
})(window, document, undefined);
