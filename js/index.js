(function() {
  window.addEventListener('scroll', function(event) {
    var depth, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i];
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  });

}).call(this);

function translateToContent(input){
  $("html, body").animate({scrollTop : 800}, "fast");
  if(input == "EXP"){
    console.log("LOAD EXP")
  }else if(input == "EDU"){
    console.log("LOAD EDU")
  }else if(input == "SKILLS"){
    console.log("LOAD SKILLS")
  }else if(input == "PRJ_DEMO"){
    console.log("LOAD PRJ DEMO")
  }else if(input == "CERTS"){
    console.log("LOAD CERTS")
  }
}

function translateToHome(){
  $("html, body").animate({scrollTop : 0}, "fast");
}

function translateToContentMobile(input){
  $("html, body").animate({scrollTop : 320}, "fast");
  if(input == "EXP"){
    console.log("LOAD EXP")
  }else if(input == "EDU"){
    console.log("LOAD EDU")
  }else if(input == "SKILLS"){
    console.log("LOAD SKILLS")
  }else if(input == "PRJ_DEMO"){
    console.log("LOAD PRJ DEMO")
  }else if(input == "CERTS"){
    console.log("LOAD CERTS")
  }
}

function translateToEnd(){
  $("html, body").animate({scrollTop : document.body.scrollHeight}, "fast");
}

function goPrevious(){
  // detect if screen is mobile or pc and scroll accordingly
  var mq = window.matchMedia( "(max-width: 768px)" );
  if (mq.matches) {
    $("html, body").animate({scrollTop : 320}, "fast");
  }
  else {
    $("html, body").animate({scrollTop : 800}, "fast");
  }
  // perform action
  console.log("PREVIOUS")
}

function goNext(){
  // detect if screen is mobile or pc and scroll accordingly
  var mq = window.matchMedia( "(max-width: 768px)" );
  if (mq.matches) {
    $("html, body").animate({scrollTop : 320}, "fast");
  }
  else {
    $("html, body").animate({scrollTop : 800}, "fast");
  }
  // perform action
  console.log("NEXT")
}