export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "Game" });
  }

  preload() {
    this.load.image("see-tiles", "assets/img/map/water.png");
  }

  create() {

    var map = this.make.tilemap({
      width: 80,
      height: 40,
      tileWidth: 16,
      tileHeight: 16,
    });
    createSee();
    function createSee() {
      // add textture of map
      var tilesSee = map.addTilesetImage("see-tiles", null, 32, 32);

      // define see ground
      var see = map.createBlankLayer("see layer", tilesSee);
      // define border see
      var seeBorder = map.createBlankLayer("ground layer", tilesSee);

      // fill map border with water ground
      seeBorder.fill(17, 0, 0, 1, map.width);
      seeBorder.fill(17, 1, 0, map.width, 1);
      seeBorder.fill(17, 0, map.height - 1, map.width, 1);
      seeBorder.fill(17, map.width - 1, 0, 1, map.height);
      //
      seeBorder.putTileAt(2, 0, 0);
      seeBorder.putTileAt(0, map.width - 1, 0);
      seeBorder.putTileAt(0, map.width - 1, map.height - 1);
      seeBorder.putTileAt(0, 0, map.height - 1);
      // fill map with water ground
      see.weightedRandomize([
        { index: 0, weight: 0 }, // clear water randomer
      ]);
    }

    // randomize texture with 1 and 4 texture
    // ground.randomize(1, 1, map.width - 2, map.height - 2, [1, 4]);

    console.log(map);
  }

  render() {}
}
