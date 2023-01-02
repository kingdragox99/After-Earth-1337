import button from "../../img/sprite/button.png";
import earth from "../../img/sprite/earth.png";
import logo from "../../img/sprite/logo.png";
import space from "../../img/background/space.png";

export default class Title extends Phaser.Scene {
  constructor() {
    super({ key: "Title" });
  }

  preload() {
    this.load.spritesheet("button", button, {
      frameWidth: 128,
      frameHeight: 64,
    });
    this.load.spritesheet("earth", earth, {
      frameWidth: 128,
      frameHeight: 128,
    });
    this.load.spritesheet("logo", logo, {
      frameWidth: 512,
      frameHeight: 128,
    });
    this.load.image("space", space);
  }

  create() {
    // add background space
    const space = this.add.image(0, 0, "space").setScale(2);
    Phaser.Display.Align.In.Center(space, this.add.zone(640, 320, 1280, 640));

    this.anims.create({
      key: "rotate",
      frames: this.anims.generateFrameNumbers("earth", {
        frames: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
          37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        ],
      }),
      frameRate: 6,
      repeat: -1,
    });

    // add earth
    const earth = this.add.sprite(0, 0);
    earth.setScale(3.2);
    earth.play("rotate");
    Phaser.Display.Align.In.Center(earth, this.add.zone(640, 320, 1280, 640));

    // add logo
    this.anims.create({
      key: "blink",
      frames: this.anims.generateFrameNumbers("logo", {
        frames: [0, 1],
      }),
      frameRate: 0.9,
      repeat: -1,
    });

    const logo = this.add.sprite(0, 0);
    logo.setScale(1.5);
    logo.play("blink");
    Phaser.Display.Align.In.Center(logo, this.add.zone(640, 150, 1280, 640));

    // add button
    const button = this.add
      .sprite(0, 0, "button")
      .setScale(1.3)
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("Game");
      })
      .on("pointerover", () => button.setFrame(1))
      .on("pointerout", () => button.setFrame(0));
    Phaser.Display.Align.In.Center(button, this.add.zone(640, 320, 1280, 640));
  }

  render() {}
}
