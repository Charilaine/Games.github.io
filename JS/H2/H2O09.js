(function(_0x33378c,_0x3741fb){var _0xe95e4a=_0x181a,_0x2f4354=_0x33378c();while(!![]){try{var _0x58cffa=parseInt(_0xe95e4a(0x1a8))/0x1*(parseInt(_0xe95e4a(0x1b2))/0x2)+-parseInt(_0xe95e4a(0x1af))/0x3+-parseInt(_0xe95e4a(0x1b1))/0x4*(parseInt(_0xe95e4a(0x1ad))/0x5)+parseInt(_0xe95e4a(0x1aa))/0x6+parseInt(_0xe95e4a(0x1ae))/0x7*(-parseInt(_0xe95e4a(0x1a5))/0x8)+-parseInt(_0xe95e4a(0x1a6))/0x9+parseInt(_0xe95e4a(0x1b0))/0xa;if(_0x58cffa===_0x3741fb)break;else _0x2f4354['push'](_0x2f4354['shift']());}catch(_0x430c35){_0x2f4354['push'](_0x2f4354['shift']());}}}(_0x45a6,0x3a68d));var foto,pixelKleur,rood,groen,blauw;function preload(){foto=loadImage('images/brieck_klein.jpg');}function _0x181a(_0x2fcdc8,_0x493701){var _0x45a658=_0x45a6();return _0x181a=function(_0x181ac2,_0x3a38fc){_0x181ac2=_0x181ac2-0x1a4;var _0x1a893=_0x45a658[_0x181ac2];return _0x1a893;},_0x181a(_0x2fcdc8,_0x493701);}function _0x45a6(){var _0x1af113=['1733628XqHmPU','parent','white','10mNxDHc','147myDOZl','1204524gEQMJh','5190070yRDYiq','70672LEmwPq','130JZlIjk','\x20groen\x20=\x20','13304LqZuAS','2828052mJjZBc','processing','3343VcHwjo','\x20blauw\x20=\x20'];_0x45a6=function(){return _0x1af113;};return _0x45a6();}function setup(){var _0x3e3a1a=_0x181a;canvas=createCanvas(0x1c2,0x1c2),canvas[_0x3e3a1a(0x1ab)](_0x3e3a1a(0x1a7)),textFont('Georgia'),textSize(0x12),noStroke(),foto['loadPixels']();}function draw(){var _0x493ee5=_0x181a;background(foto),pixelKleur=foto['get'](mouseX,mouseY),rood=pixelKleur[0x0],groen=pixelKleur[0x1],blauw=pixelKleur[0x2],fill(pixelKleur),rect(0x0,0x19a,0x1c2,0x28),fill(_0x493ee5(0x1ac)),text('RGB-waarden:\x20rood\x20=\x20'+rood+_0x493ee5(0x1a4)+groen+_0x493ee5(0x1a9)+blauw,0xa,0x1b3);}