(function(_0x1f28ad,_0x20a023){var _0x36576e=_0x41d8,_0x26992a=_0x1f28ad();while(!![]){try{var _0x3571bd=parseInt(_0x36576e(0x13f))/0x1+parseInt(_0x36576e(0x140))/0x2*(parseInt(_0x36576e(0x14b))/0x3)+parseInt(_0x36576e(0x13c))/0x4+-parseInt(_0x36576e(0x14e))/0x5*(parseInt(_0x36576e(0x14c))/0x6)+parseInt(_0x36576e(0x14d))/0x7+parseInt(_0x36576e(0x148))/0x8*(-parseInt(_0x36576e(0x13b))/0x9)+parseInt(_0x36576e(0x143))/0xa*(-parseInt(_0x36576e(0x14a))/0xb);if(_0x3571bd===_0x20a023)break;else _0x26992a['push'](_0x26992a['shift']());}catch(_0x106eec){_0x26992a['push'](_0x26992a['shift']());}}}(_0x1614,0x85f6e));var animatie=[],aantalBeeldjes=0x1e,nummer=0x0,breedte,hoogte;function _0x1614(){var _0x3d8f8e=['frameCount=','parent','70MLbqei','nummer=','width','images/sprites/wizard/opdracht_11A/','processing','403624AcrpXD','push','367994fcLUiI','1037616MvPoYX','2163900ADqBDK','439810XkvOwM','5kfZiXI','117PUgoGO','2041212qNzWrb','height','Georgia','880430GcYbMo','2ZWxGyN'];_0x1614=function(){return _0x3d8f8e;};return _0x1614();}function preload(){var _0x371662=_0x41d8;for(var _0x21dd6d=0x0;_0x21dd6d<aantalBeeldjes;_0x21dd6d++){nieuw_beeldje=loadImage(_0x371662(0x146)+_0x21dd6d+'.png'),animatie[_0x371662(0x149)](nieuw_beeldje);}}function setup(){var _0x5120df=_0x41d8;canvas=createCanvas(0xfa,0x64),canvas[_0x5120df(0x142)](_0x5120df(0x147)),noStroke(),frameRate(0x5),textFont(_0x5120df(0x13e)),textSize(0x12),breedte=animatie[0x0][_0x5120df(0x145)],hoogte=animatie[0x0][_0x5120df(0x13d)];}function _0x41d8(_0x1050e4,_0x2fc951){var _0x1614e7=_0x1614();return _0x41d8=function(_0x41d80b,_0x4970d9){_0x41d80b=_0x41d80b-0x13b;var _0x3acb55=_0x1614e7[_0x41d80b];return _0x3acb55;},_0x41d8(_0x1050e4,_0x2fc951);}function draw(){var _0x139d44=_0x41d8;background('lavender'),nummer=frameCount%aantalBeeldjes,image(animatie[nummer],0x96,0x0,breedte,hoogte),text(_0x139d44(0x141)+frameCount,0x5,0x28),text(_0x139d44(0x144)+nummer,0x5,0x46);}