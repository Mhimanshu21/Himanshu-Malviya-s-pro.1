var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"Pg05WEBWcnmT7lGntjNzhi.VZevGVdzG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"vaOBvuyiiGnfsLs6JIkmoAvs0w9NBl1u","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"lYnEsWtW58pNOLWVvT5f0Ofzp.4OPn2C","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var deaths = 0;

var ball = createSprite(15,15,15,15);
ball.shapeColor = "blue";

var wall1 = createSprite(45,50,100,10);
var wall2 = createSprite(175,60,10,120);
var wall3 = createSprite(137.5,115,75,10);
var wall4 = createSprite(97.5,82.5,10,75);
var wall5 = createSprite(47.5,115,105,10);
var wall6 = createSprite(230,115,100,10);
var wall7 = createSprite(175,145,10,50);
var wall8 = createSprite(115,165,115,10);
var wall9 = createSprite(25,165,75,10);
var wall10 = createSprite(100,250,10,180);
var wall11 = createSprite(50,200,50,10);
var wall12 = createSprite(25,265,50,10);
var wall13 = createSprite(50,330,50,10);
var wall14 = createSprite(15,375,30,10);
var wall15 = createSprite(100,370,10,60);
var wall16 = createSprite(175,325,10,200);
var wall17 = createSprite(137.5,320,107.5,10);
var wall18 = createSprite(225,165,100,10);
var wall19 = createSprite(312.5,150,100,10);
var wall20 = createSprite(270,270,10,200);
var wall21 = createSprite(222.5,285,85,10);
var wall22 = createSprite(222.5,285,10,80);
var wall23 = createSprite(270,370,10,20);
var wall24 = createSprite(270,390,10,20);
var wall25 = createSprite(312.5,365,75,10);
var wall26 = createSprite(340,295,75,75);
var wall27 = createSprite(390,295,25,10);
var wall28 = createSprite(285,295,35,10);
var wall29 = createSprite(350,232.5,10,50);
var wall30 = createSprite(375,185,75,10);
var wall31 = createSprite(350,115,10,85);
var wall32 = createSprite(275,60,10,120);
var wall33 = createSprite(300,25,40,10);
var wall34 = createSprite(300,55,40,10);
var wall35 = createSprite(300,85,40,10);
var wall36 = createSprite(280,212.5,10,10);
var wall37 = createSprite(340,250,10,10);
wall36.velocityX = 2.5;
wall37.velocityX = -2.5;
wall19.rotation = 45;
wall17.rotation = 45;
wall1.shapeColor = "yellow";
wall2.shapeColor = "yellow";
wall3.shapeColor = "yellow";
wall4.shapeColor = "yellow";
wall5.shapeColor = "yellow";
wall6.shapeColor = "yellow";
wall7.shapeColor = "yellow";
wall8.shapeColor = "yellow";
wall9.shapeColor = "yellow";
wall10.shapeColor = "yellow";
wall11.shapeColor = "yellow";
wall12.shapeColor = "green";
wall13.shapeColor = "blue";
wall14.shapeColor = "yellow";
wall15.shapeColor = "yellow";
wall16.shapeColor = "yellow";
wall17.shapeColor = "blue";
wall18.shapeColor = "yellow";
wall19.shapeColor = "blue";
wall20.shapeColor = "yellow";
wall21.shapeColor = "brown";
wall22.shapeColor = "silver";
wall23.shapeColor = "yellow";
wall24.shapeColor = "yellow";
wall25.shapeColor = "yellow";
wall26.shapeColor = "blue";
wall27.shapeColor = "yellow";
wall28.shapeColor = "yellow";
wall29.shapeColor = "yellow";
wall30.shapeColor = "yellow";
wall31.shapeColor = "white";
wall32.shapeColor = "yellow";
wall33.shapeColor = "yellow";
wall34.shapeColor = "yellow";
wall35.shapeColor = "yellow";
wall36.shapeColor = "red";
wall37.shapeColor = "red";

var button1 = createSprite(165,15,10,20);
button1.shapeColor = "pink";
var button2 = createSprite(45,60,20,10);
button2.shapeColor = "green";
var button3 = createSprite(25,125,20,10);
button3.shapeColor = "yellow";
var button4 = createSprite(5,390,10,20);
button4.shapeColor = "orange";
var button5 = createSprite(165,375,10,20);
button5.shapeColor = "brown";
var button6 = createSprite(185,350,10,20);
button6.shapeColor = "grey";
var button7 = createSprite(185,375,10,20);
button7.shapeColor = "blue";
var button8 = createSprite(395,310,10,20);
button8.shapeColor = "purple";
var button9 = createSprite(220,125,20,10);
button9.shapeColor = "violet";
var button10 = createSprite(285,10,10,20);
button10.shapeColor = "indigo";
var button11 = createSprite(285,40,10,20);
button11.shapeColor = "lightgreen";
var button12 = createSprite(285,70,10,20);
button12.shapeColor = "darkorange";
var button13 = createSprite(285,100,10,20);
button13.shapeColor = "silver";

var win = createSprite(200,15,20,20);
win.shapeColor = "blue";

function draw() {
  background("black");

drawSprites();

 createEdgeSprites();
 
 if(ball.isTouching(button1)){

    wall4.y = 32.5;   
    ball.shapeColor = "pink";
   
 }
  if(ball.isTouching(button2)){

    wall3.x = 32.5;   
    ball.shapeColor = "green";
   
 }
 if(ball.isTouching(button3)){
   
   wall9.x = 115;
   ball.shapeColor = "yellow";
   
 }
 if (ball.isTouching(button4)){
   
   wall15.y = 250;
   ball.shapeColor = "orange";
   
 }
 if(ball.isTouching(button5)){

   wall17.x = 100;
   wall17.y = 250;
   wall17.rotation = 90;
   ball.shapeColor = "brown";
   
 }
if(ball.isTouching(button6)){
  
  ball.shapeColor = "grey";
  wall24.y = 270;
  
}
if(ball.isTouching(button7)){
  
  ball.shapeColor = "blue";
  wall23.y = 270;
  
}
if(ball.isTouching(button8)){
  
  ball.shapeColor = "purple";
  wall28.x = 350;
  
}
if(ball.isTouching(button9)){
  
  ball.shapeColor = "violet";
  wall30.y = 295;
  
}
if(ball.isTouching(button10)){
  
  ball.shapeColor = "indigo";
  wall32.y = 90; 
  
}
if(ball.isTouching(button11)){
  
  ball.shapeColor = "lightgreen";
  wall32.y = 120;
  
}
if(ball.isTouching(button12)){
  
  ball.shapeColor = "darkorange";
  wall32.y = 150;
  
}
if(ball.isTouching(button13)){
  
  ball.shapeColor = "silver";
  wall32.y = 180;
  
}
 
 if(ball.isTouching(wall1)||ball.isTouching(wall2)||ball.isTouching(wall3)||ball.isTouching(wall4)||ball.isTouching(wall5)||ball.isTouching(wall6)||ball.isTouching(wall7)||ball.isTouching(wall8)||ball.isTouching(wall9)||ball.isTouching(wall10)||ball.isTouching(wall11)||ball.isTouching(wall12)||ball.isTouching(wall13)||ball.isTouching(wall14)||ball.isTouching(wall15)||ball.isTouching(wall16)||ball.isTouching(wall17)||ball.isTouching(wall18)||ball.isTouching(wall19)||ball.isTouching(wall20)||ball.isTouching(wall21)||ball.isTouching(wall22)||ball.isTouching(wall23)||ball.isTouching(wall24)||ball.isTouching(wall25)||ball.isTouching(wall26)||ball.isTouching(wall27)||ball.isTouching(wall28)||ball.isTouching(wall29)||ball.isTouching(wall30)||ball.isTouching(wall31)||ball.isTouching(wall32)||ball.isTouching(wall33)||ball.isTouching(wall34)||ball.isTouching(wall35)||ball.isTouching(wall36)||ball.isTouching(wall37)){
   
   deaths = deaths + 1;
   ball.x = 15;
   ball.y = 15;
   wall4.y = 82.5;
   wall3.x = 137.5;
   wall9.x = 25;
   wall15.y = 370;
   wall17.y = 320;
   wall17.x = 137.5;
   wall17.rotation = 45;
   ball.shapeColor = "blue";
   wall23.y = 370;
   wall24.y = 390;
   wall28.x = 285;
   wall30.y = 185;
   wall32.y = 60;
 }
 fill("orange");
 text("DEATHS:"+deaths,2.25,10);
 
 if(ball.isTouching(win)){
  
  var thumbs = createSprite(135,255,50,50);
  fill("orange");
  textSize(50);
  text("YOU WON",110,205);
  ball.velocityX = 0;
  ball.velocityY = 0;
  playSound(b)
}
  
  if(keyDown("up")){
    ball.y = ball.y - 2.5;
  }
  
   if(keyDown("down")){
    ball.y = ball.y + 2.5;
  }
  
   if(keyDown("right")){
    ball.x = ball.x + 2.5;
  }
  
   if(keyDown("left")){
    ball.x = ball.x - 2.5;
  }
    ball.bounceOff(edges);
    
    wall36.bounceOff(wall29);
    wall36.bounceOff(wall20);
    
    wall37.bounceOff(wall29);
    wall37.bounceOff(wall20);
    
    wall11.rotation = wall11.rotation + 2.5;
    wall12.rotation = wall12.rotation - 10.5;
    wall13.rotation = wall13.rotation + 2.5;
    wall21.rotation = wall21.rotation + 0.5;
    wall22.rotation = wall22.rotation + 0.5;
    wall31.rotation = wall31.rotation - 2.5;
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
