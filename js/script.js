(function(window, document, undefined) {
  window.onload = init;
  function init() {
    var c = document.getElementById("mapCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,50,50);
  }
})(window, document, undefined);
