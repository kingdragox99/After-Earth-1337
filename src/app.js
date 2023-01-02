import "./assets/css/index.css";
import Phaser from "phaser";
import Title from "./assets/js/title/title";
import Game from "./assets/js/game/gameStart";

var config = {
  type: Phaser.AUTO,
  parent: "app",
  width: 1280,
  height: 640,
  scene: [Title, Game],
  render: {
    pixelArt: true,
  },
};

var game = new Phaser.Game(config);
