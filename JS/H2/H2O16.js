(function(_0x23fb16,_0x2ab6ca){var _0xaa3c06=_0x322e,_0x30f2c9=_0x23fb16();while(!![]){try{var _0x1072ba=-parseInt(_0xaa3c06(0x7c))/0x1*(-parseInt(_0xaa3c06(0x85))/0x2)+-parseInt(_0xaa3c06(0x7f))/0x3+-parseInt(_0xaa3c06(0x80))/0x4*(parseInt(_0xaa3c06(0x81))/0x5)+-parseInt(_0xaa3c06(0x7d))/0x6*(parseInt(_0xaa3c06(0x8b))/0x7)+parseInt(_0xaa3c06(0x88))/0x8+parseInt(_0xaa3c06(0x86))/0x9+-parseInt(_0xaa3c06(0x87))/0xa*(parseInt(_0xaa3c06(0x8c))/0xb);if(_0x1072ba===_0x2ab6ca)break;else _0x30f2c9['push'](_0x30f2c9['shift']());}catch(_0x29f9f9){_0x30f2c9['push'](_0x30f2c9['shift']());}}}(_0x5bae,0x90b69));var spriteSheet,rij=0x0,aantalSpriteRijen=0x4,aantalSpriteKolommen=0xc,schaal=0x2,breedte,hoogte,sBr,sHo,br,ho,snelheid=0xa,x=0xbe,y=0x64,isToetsIngedrukt=![];function preload(){spriteSheet=loadImage('images/sprites/Pony.png');}function _0x5bae(){var _0x3ae510=['1sCQnvl','3588918KGEevt','Georgia','301359ncmAjq','8PDlhQK','1676705qvrwsB','parent','processing','width','1903656cNPcVS','1892655CJXBhg','20ZhFbeL','7861024fPEvYT','height','lavender','7afOyrd','1004949LmDULf'];_0x5bae=function(){return _0x3ae510;};return _0x5bae();}function setup(){var _0x1be10c=_0x322e;canvas=createCanvas(0x1cc,0x118),canvas[_0x1be10c(0x82)](_0x1be10c(0x83)),textFont(_0x1be10c(0x7e)),textSize(0x12),noStroke(),frameRate(0xa),breedte=spriteSheet[_0x1be10c(0x84)],hoogte=spriteSheet[_0x1be10c(0x89)],sBr=breedte/aantalSpriteKolommen,sHo=hoogte/aantalSpriteRijen,br=sBr*schaal,ho=sHo*schaal;}function draw(){var _0x475b02=_0x322e;background(_0x475b02(0x8a));if(isToetsIngedrukt){if(keyIsDown(RIGHT_ARROW))rij=0x2,x=constrain(x+snelheid,0x0,width-br);else{if(keyIsDown(LEFT_ARROW))rij=0x1,x=constrain(x-snelheid,0x0,width-br);else{if(keyIsDown(UP_ARROW))rij=0x3,y=constrain(y-snelheid,0x0,height-ho);else keyIsDown(DOWN_ARROW)&&(rij=0x0,y=constrain(y+snelheid,0x0,height-ho));}}}image(spriteSheet,x,y,br,ho,frameCount%aantalSpriteKolommen*sBr,rij*sHo,sBr,sHo);}function keyPressed(){isToetsIngedrukt=!![];}function _0x322e(_0x548cae,_0x388073){var _0x5bae4d=_0x5bae();return _0x322e=function(_0x322eec,_0x59a86d){_0x322eec=_0x322eec-0x7c;var _0x1f0875=_0x5bae4d[_0x322eec];return _0x1f0875;},_0x322e(_0x548cae,_0x388073);}function keyReleased(){isToetsIngedrukt=![];}