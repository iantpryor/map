(function(window, document, undefined) {
  window.onload = init;
  function init() {
    var c = document.getElementById("mapCanvas");
    c.width = 960;
    c.height = 540;
    var ctx = c.getContext("2d");
    for(i=0; i<100; i+2){
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(i, 50, 50, 50);
    }
    
  }
})(window, document, undefined);
