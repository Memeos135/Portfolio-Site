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

var firstClick = true
var scrolledValue = 0
var counter = 0;
var list = ["<section class='first-section'><div class='row-1'><div class=\"inner-header-container\"><img src=\"https://www.dropbox.com/s/rpcd8vh7ecwruce/photo%20copy.PNG?raw=1\" class=\"pers-img\" alt=\"Avatar\"><div><p> Android Developer @ GAMA Ltd.</p><p style=\"height: 1px; background-color: white;\" id=\"line\"> </p><p style=\"font-size: 13px;\"> Android Development Enthusiast and Machine Learning Beginner </p></div></div></div><div class='row-2'><h1 style=\"font-family: courier;\" align=\"center\"> About Me </h1><p> I am Computer Science BSc graduate and an Android Developer currently living in Jeddah, KSA. Being passionate about the things I do, I was able to graduate from University of Jeddah with a second honors degree and successfully complete three Udacity nanodegree programs. </p><br><p> Currently, I am an Android Developer at Global Arabian for Modern Applications Ltd. I am responsible for maintaining current applications, as well as building new apps from scratch. This role includes: testing, feature enhancements, feature addition, optimization, bug fixing, improving current designs or coming up with entirely new designs, etc.</p><br><p> Sample applications I have personally worked on in my current job:</p><table><tr><th>Application Name</th><th>Platform</th><th>Language</th></tr><tr><td>G.Y.H Mutamer</td><td>Android</td><td>Java</td></tr><tr><td>G.Y.H Driver</td><td>Android</td><td>Java</td></tr><tr><td>G.Y.H Supervisor</td><td>Android</td><td>Java</td></tr><tr><td>G.Y.H Operator</td><td>Android</td><td>Java</td></tr><tr><td>Motabei Workshop</td><td>Android</td><td>Java</td></tr><tr><td>Motabei Driver</td><td>Android</td><td>Java</td></tr></table><br><p> Sample applications I have personally worked on outside of my current job:</p><table><tr><th>Application Name</th><th>Platform</th><th>Language</th></tr><tr><td>MacroCounterKotlin</td><td>Android</td><td>Kotlin</td></tr><tr><td>MacroCounterKotlinServer</td><td>Linux</td><td>Python/SQLite</td></tr><tr><td>ZEBRA_ZQ520_BLUETOOTH </td><td>Android</td><td>Java</td></tr><tr><td>BooKT</td><td>Android</td><td>Java</td></tr><tr><td>BooKT Webpage</td><td>Web</td><td>jQuery/HTML/CSS</td></tr><tr><td>Portfolio Page</td><td>Web</td><td>jQuery/HTML/CSS:selectors</td></tr></table></div></section>",
"<div class=\"timeline-header\"><h1 align=\"center\"> Timeline </h1></div><section class=\"timeline\"><ol><li><div><time>March 2018 - Programming Jam 4.0 (Virtual) </time> Topic: Virtual programming competition across all universities in Saudi Arabia. The competition required a team of three and a mentor. The competition lasted for a duration of 16 hours and was problem-solving-based (Hackerrank).</div></li><li><div><time>May 2018 - Globalink Research Internship</time> Topic: LoRaWAN Literature Review and Network Deployment using Dragino LoRa. The internship was held in Universite de Sherbrooke, Sherbrooke, Canada.</div></li><li><div><time>October 2018 - Third National Programming Competition</time> Topic: Programming problem-solving competition amongst universities kingdom-wide. Training duration was two weeks prior to competition date.</div></li><li><div><time>January 2019 - Computer Lab Teaching Assistant</time> Java programming-101 lab for Computer Science students at University of Jeddah. Concepts taught include: control statements, functions, variables, arrays, types, system input, arithmetics, and string manipulation.</div></li><li><div><time>June 2019 - Android Developer @ GAMA</time>Member of the mobile development team in the development department. Responsibilities include: testing, feature enhancements, feature addition, optimization, bug fixing, improving current designs or coming up with entirely new designs, etc.</div></li><li></li></ol></section>",
  "<div class=\"edu-container\"><div class=\"edu-section\" style=\"display: inline;\"><h1 align=\"center\" style=\"font-family: courier;\"> Education </h1><section class=\"timeline-edu\"><ol><li><div><time>May 2019 - BSc in Computer Science </time>Description: UoJ CS program is a five-year course beginning with a foundation year that covers basic sciences. The program focuses on equipping students with necessary practical skills to ready them for future jobs. <br><br>Primary focus areas include: software engineering, algorithm design and analysis, and data structures.</div></li><li></li></ol></section></div><div class=\"edu-section\" style=\"display: inline;\"><h1 style=\"font-family: courier;\" align=\"center\"> Courses </h1><section class=\"timeline-course\"><ol><li><div><time>September 2017 - Udacity Intro. to Programming </time> Description: Udacity nanodegree programs are project-based courses, particularly focusing on required technical concepts and best practices in the professional job market. <br><br> This program focused on learning HTML, CSS, JavaScript (jQuery) and Python to enable students to do front-end development.</div></li><li><div><time>March 2018 - Udacity Android Basics</time> Description: Udacity nanodegree programs are project-based courses, particularly focusing on required technical concepts and best practices in the professional job market. <br><br> This program focuses on learning Java for Android Development and getting students acquantained with Android Studio. <br><br>Learned skills include: ArrayAdapters, Fragments, Intents, RecyclerView/ListView, Cusom Layouts, and SQLite.</div></li><li><div><time>May 2019 - Udacity Android Developer</time> Description: Udacity nanodegree programs are project-based courses, particularly focusing on required technical concepts and best practices in the professional job market. <br><br> This program particularly focused on network operations, Android lifecycle, services, more fragments, external-library integration, material design, and widgets. <br><br>Learned skills include: Google Room, Firebase Storage/Authentication/Real-time Database, Gson, IntentServices, Broadcast Receivers, Instance States, Android lifecycle, and AsyncTasks.</div></li><li></li></ol></section></div></div>",
   "<div class=\"skills-container\"><h1 align=\"center\" style=\"font-family: courier;\"> Skills </h1><div class=\"skills-sub-container\" ><div class=\"pro-skills\" ><h1 align=\"center\"> Professional </h1><div class=\"pro-skills-list\"><p> Android Development Java </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 90%;\"></div></div><p> Android Development Kotlin </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 80%;\"></div></div><p> Front-End Development </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 80%;\"></div></div><p> jQuery </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 75%;\"></div></div><p> Python </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 80%;\"></div></div><p> Firebase </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 80%;\"></div></div><p> Git </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 85%;\"></div></div><p> AWS Lightsail - Servers </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 85%;\"></div></div><p> Room/Room Database </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 70%;\"></div></div><p> SQL </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 70%;\"></div></div></div></div><div class=\"pers-skills\" ><h1 align=\"center\"> Soft </h1><div class=\"pers-skills-list\"><p> Communication </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 85%;\"></div></div><p> Teamwork </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 80%;\"></div></div><p> Adaptability </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 80%;\"></div></div><p> Problem-Solving </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 75%;\"></div></div><p> Creativity </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 65%;\"></div></div><p> Time Management </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 90%;\"></div></div><p> Leadership </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 80%;\"></div></div></div></div><div class=\"lang-skills\" ><h1 align=\"center\"> Language </h1><div class=\"lang-skills-list\"><p> English </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 95%;\"></div></div><p> Arabic </p><div class=\"miniBar\"><div class=\"miniBarProgress\" style=\"width: 95%;\"></div></div></div></div></div> </div>",
    './prj_demo']


function emptyAndAppend(index){
  $(".container").empty()
  $(".container").append(list[index]).hide().show("slow");
  $("html, body").animate({scrollTop : scrolledValue}, "fast");
  counter = index;
}

function setWidth(){
  if(counter == 1){
    $(".container").css("width", "90%");
  }else if(counter == 2){
    $(".container").css("width", "75%");
  }else{
    $(".container").css("width", "");
  }
}

function translateToContent(input){
  // if  this is first click, set firstClick flag to false
  if(firstClick){
    firstClick = false;
  }

  // scroll down to position
  var mq = window.matchMedia( "(max-width: 768px)" );
  if (mq.matches) {
    $("html, body").animate({scrollTop : 320}, "fast");
    scrolledValue = 320;
  }else{
    $("html, body").animate({scrollTop : 800}, "fast");
    scrolledValue = 800;
  }

  // inflate HTML
  if(input == "EXP"){
    counter = 1;
    setWidth()
    emptyAndAppend(counter)
  }else if(input == "EDU"){
    counter = 2;
    setWidth()
    emptyAndAppend(counter)
  }else if(input == "SKILLS"){
    counter = 3;
    setWidth()
    emptyAndAppend(counter)
  }else if(input == "PRJ_DEMO"){
    counter = 4;
    setWidth()
    emptyAndAppend(counter)
  }
}

function translateToHome(){
  if(firstClick){
    var mq = window.matchMedia( "(max-width: 768px)" );
    if (mq.matches) {
      $("html, body").animate({scrollTop : 320}, "fast");
      firstClick = false
      scrolledValue = 320;
      return;
    }else{
      $("html, body").animate({scrollTop : 800}, "fast");
      firstClick = false
      scrolledValue = 800;
      return;
    }
  }else{
    // first-section is inflated
    if($(".first-section").length > 0){
      $("html, body").animate({scrollTop : scrolledValue}, "fast");
      // first-section is not inflated
    }else{
      // empty the container, append about me HTML, reset counter
      counter = 0;
      setWidth()
      emptyAndAppend(counter)
    }
  }
}

function translateToContentMobile(input){
  // if  this is first click, set firstClick flag to false
  if(firstClick){
    firstClick = false;
  }

  // scroll down to position
  var mq = window.matchMedia( "(max-width: 768px)" );
  if (mq.matches) {
    $("html, body").animate({scrollTop : 320}, "fast");
    scrolledValue = 320;
  }else{
    $("html, body").animate({scrollTop : 800}, "fast");
    scrolledValue = 800;
  }

  // inflate HTML
  if(input == "EXP"){
    counter = 1;
    setWidth()
    emptyAndAppend(counter)
  }else if(input == "EDU"){
    counter = 2;
    setWidth()
    emptyAndAppend(counter)
  }else if(input == "SKILLS"){
    counter = 3;
    setWidth()
    emptyAndAppend(counter)
  }else if(input == "PRJ_DEMO"){
    counter = 4;
    setWidth()
    emptyAndAppend(counter)
  }
}

function translateToEnd(){
  $("html, body").animate({scrollTop : document.body.scrollHeight}, "fast");
}

function goPrevious(){
  if(firstClick){
    var mq = window.matchMedia( "(max-width: 768px)" );
    if (mq.matches) {
      $("html, body").animate({scrollTop : 320}, "fast");
      firstClick = false
      scrolledValue = 320;
      return;
    }else{
      $("html, body").animate({scrollTop : 800}, "fast");
      firstClick = false
      scrolledValue = 800;
      return;
    }
  }
  // perform action
  if(counter > 0 && !firstClick){
    counter--;
    $(".container").empty()

    setWidth()

    $(".container").append(list[counter]).hide().show('slow');
    $("html, body").animate({scrollTop : scrolledValue}, "fast");
  }else{
    $("html, body").animate({scrollTop : scrolledValue}, "fast");
  }
}

function goNext(){
  if(firstClick){
    var mq = window.matchMedia( "(max-width: 768px)" );
    if (mq.matches) {
      $("html, body").animate({scrollTop : 320}, "fast");
      firstClick = false
      scrolledValue = 320;
      return;
    }else{
      $("html, body").animate({scrollTop : 800}, "fast");
      firstClick = false
      scrolledValue = 800;
      return;
    }
  }
  // perform action
  if(counter < 4 && !firstClick){
    counter++;
    $(".container").empty()

    setWidth()

    $(".container").append(list[counter]).hide().show("slow");
    $("html, body").animate({scrollTop : scrolledValue}, "fast");
  }else{
    $("html, body").animate({scrollTop : scrolledValue}, "fast");
  }
}