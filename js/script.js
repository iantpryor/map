(function(window, document, undefined) {
  window.onload = init;
  function init() {
    var c = document.getElementById("mapCanvas");
    c.width = 960;
    c.height = 540;
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    for(x=0; x<100; x+2){
      for(y=0; y< 100; y+2){
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }
})(window, document, undefined);
