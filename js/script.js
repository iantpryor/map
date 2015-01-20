(function(window, document, undefined) {
  window.onload = init;
  function init() {
    var c = document.getElementById("mapCanvas");
    c.width = 960;
    c.height = 540;
    var ctx = c.getContext("2d");
    var b = document.getElementById("startbtn").onclick = function() {
      alert("button was clicked");
      for(i=0; i<100; i++){
        setTimeout(function(){
          ctx.fillStyle = "#FF0000";
          ctx.fillRect(i, 50, 50, 50);
        },100);
        
      }
    };
  }
})(window, document, undefined);
