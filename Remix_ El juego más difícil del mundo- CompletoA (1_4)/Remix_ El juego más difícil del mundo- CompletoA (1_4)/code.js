var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var calle1= createSprite(190,120,420,3);
var calle2= createSprite(190,260,420,3);

var vane= createSprite(20,190,13,13);
vane.shapeColor="blue";

var car1= createSprite(100,130,10,10);
car1.shapeColor="lightgreen";

var car2= createSprite(215,130,10,10);
car2.shapeColor="lightgreen";

var car3= createSprite(165,250,10,10);
car3.shapeColor="lightgreen";

var car4= createSprite(270,250,10,10);
car4.shapeColor="lightgreen";

var vidas=0;

car1.velocity.y=7;
car2.velocity.y=7;
car3.velocity.y=-7;
car4.velocity.y=-7;






function draw(){
background("black");
textSize(15);
text("Vidas="+vidas, 290, 30);
noStroke();
fill("#F4AD4E");
rect(0, 120, 52, 140);

fill("#B7E51A");
rect(347, 120, 52, 140);




createEdgeSprites();

vane.bounceOff(calle1);
vane.bounceOff(calle2);

car1.bounceOff(calle1);
car1.bounceOff(calle2);

car2.bounceOff(calle1);
car2.bounceOff(calle2);

car3.bounceOff(calle1);
car3.bounceOff(calle2);

car4.bounceOff(calle1);
car4.bounceOff(calle2);


if (keyDown("left")) {
 vane.x=vane.x-2; 
}

if (keyDown("right")) {
 vane.x=vane.x+2; 
}


if (vane.isTouching(car1)||vane.isTouching(car2)||vane.isTouching(car3)||vane.isTouching(car4)){
  vane.x=20;
  vane.y=190;
 vidas=vidas+1; 

  
}






drawSprites();
  
  
  
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
