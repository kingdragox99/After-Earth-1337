import "./asset/css/index.css";
import Phaser from "phaser";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    render: render,
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("tiles", "src/asset/img/map/tiles-map-16-1.jpg");
}

function create() {
  let style = {
    fill: "#FDC200",
    fontSize: "64px",
    stroke: "#000",
    strokeThickness: 5,
  };

  var map = this.make.tilemap({
    width: 64,
    height: 38,
    tileWidth: 16,
    tileHeight: 16,
  });
  var tiles = map.addTilesetImage("tiles", null, 16, 16);
  var layer = map.createBlankLayer("layer1", tiles);
  layer.randomize(0, 0, map.width, map.height, [0, 1, 2, 3, 4]);

  var text = this.add.text(0, 0, "After World 1337", style);
  Phaser.Display.Align.In.Center(text, this.add.zone(400, 300, 800, 600));
}

function render() {}
