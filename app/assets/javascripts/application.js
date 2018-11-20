// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery3
//= require jquery-ui
//= require popper
//= require bootstrap

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getCode(){
  var code = "";
  for(i=0; i<6; i++){
    code += $("#codeBox"+(i+1)).val();
  }
  return code;
}

function getCodeBoxElement(index) {
  return document.getElementById('codeBox' + index);
}

function onKeyUpEvent(index, event) {
  const eventCode = event.which || event.keyCode;
  if (getCodeBoxElement(index).value.length === 1) {
    if (index !== 6) {
      getCodeBoxElement(index+ 1).focus();
    } else {
      getCodeBoxElement(index).blur();
    }
  }
  if (eventCode === 8 && index !== 1) {
    getCodeBoxElement(index - 1).focus();
  }
}

function onFocusEvent(index) {
  for (item = 1; item < index; item++) {
    const currentElement = getCodeBoxElement(item);
    if (!currentElement.value) {
      currentElement.focus();
      break;
    }
  }
}

function validateResponse(resp) {
  if (resp) {
    console.log("Correct Code!");
  }else{
    $(':input').val('');
    $("#codeModal").effect("shake");
  }
}

function initMatrix(){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var t = text();
  var lines = [];
  window.setInterval(draw, 100);

  function draw() {
    if (Math.floor(Math.random() * 2) === 0 && lines.length < 100) {
      lines.push(new textLine());
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lines.forEach(function(tl) {
      ctx.drawImage(tl.text, tl.posX, tl.animate(), 40, 1000);
    });
  }

  function textLine() {
    this.text = t;
    this.posX = (function() {
      return Math.floor(Math.random() * canvas.width);
    })();
    this.offsetY = -1000;
    this.animate = function() {
    if (this.offsetY >= 0) {
      this.offsetY = -1000;
    }
    this.offsetY += 20;
      return this.offsetY;
    };
  }

  function text() {
    var offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = "30";
    offscreenCanvas.height = "1000";
    offscreenCanvas.style.display = "none";
    document.body.appendChild(offscreenCanvas);
    var octx = offscreenCanvas.getContext('2d');
    octx.textAlign = "center";
    octx.shadowColor = "lightgreen";
    octx.shadowOffsetX = 2;
    octx.shadowOffsetY = -5;
    // octx.shadowBlur = 1;
    octx.fillStyle = 'darkgreen';
    octx.textAlign = "left";
    var step = 20;
    for (i = 0; i < 100; i++) {
      var charCode = 0;
      while (charCode < 60) {
        charCode = Math.floor(Math.random() * 100);
      }
      octx.fillText(getRandom(0,1), 0, step);
      step += 20;
    }
    return offscreenCanvas;
  }
}
