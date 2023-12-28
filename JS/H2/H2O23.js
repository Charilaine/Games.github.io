var speler = {
  getrokkenKaarten: [],

  trekKaart(spel) {
    if (this.getrokkenKaarten.length < 4) {
      do {
        volgNummer = floor(random(0, spel.length));
        nieuweKaart = spel[volgNummer];
      } while (this.getrokkenKaarten.includes(nieuweKaart));

      this.getrokkenKaarten.push(nieuweKaart);
    }
  },

  toonKaarten() {
    for (var i = 0; i < this.getrokkenKaarten.length; i++) {
      image(this.getrokkenKaarten[i], i * 226, 0);
    }
  }
}

var kaartSpel = [];
var kaartSoorten = new Array("S", "K", "H", "R");

var aantalKliks = 0;
var maxAantalKaartenBereikt = false;

function preload() {
  for (var s = 0; s < kaartSoorten.length; s++) {
    for (var k = 1; k <= 13; k++) {
      kaart = loadImage("images/speelkaarten/" + kaartSoorten[s] + k + ".png");
      kaartSpel.push(kaart);
    }
  }
}

function setup() {
  canvas = createCanvas(226 * 4, 315);
  canvas.parent('processing');
  textFont("Georgia");
  textSize(30);
  noStroke();
  frameRate(5);
}

function draw() {
  background('white');
  speler.toonKaarten();

  if (maxAantalKaartenBereikt) {
    fill('black');
    textAlign(CENTER, CENTER);
    text("Maximaal aantal kaarten bereikt!", width / 2, height / 2);
  }
}

function mousePressed() {
  if (aantalKliks < 5) {
    speler.trekKaart(kaartSpel);
    aantalKliks++;

    if (aantalKliks === 5) {
      maxAantalKaartenBereikt = true;
    }
  }
}
