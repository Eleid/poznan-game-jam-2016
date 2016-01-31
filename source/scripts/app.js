import Menu from './states/menu';
import Options from './states/options';
import ChaptersManager from './states/chapters_manager';
import CoffeeMachine from './states/CoffeeMachine';
import Cornflakes from './states/cornflakes';
import Toilet from './states/PooScene';

const settings = {
  width: 1024,
  height: 768,
};

class Init extends Phaser.Game {
  constructor() {
    super(settings.width, settings.height, Phaser.AUTO, 'game');

    this.state.add('boot', Boot, true);
    this.state.add('preloader', Preloader, false);

    this.state.add('menu', Menu, false);
    this.state.add('chapters-manager', ChaptersManager, false);
    this.state.add('CoffeeMachine', CoffeeMachine, false);
    this.state.add('cornflakes', Cornflakes, false);
    this.state.add('toilet', Toilet, false);
  }
}

class Boot extends Phaser.State {
  create() {
    this.scaleMode = this.scale.RESIZE;
    // this.scale.startFullScreen(true);

    this.scale.refresh();

    this.state.start('preloader', true, true);
  }
}

class Preloader extends Phaser.State{
  preload() {
    // preload all images in future

    this.load.audio('theme', 'assets/audio/theme.mp3');

    this.load.image('menu-background', 'assets/images/menu/background.jpg');
    this.load.image('options-background', 'assets/images/options/background.jpg');
    this.load.image('cornflakes-background', 'assets/images/cornflakes/background.jpg');
  }

  create() {
    if(!this.game.global) {
      this.game.global = {};
    }

    this.game.global.audio = this.add.audio('theme', 2, true, true);
    this.game.global.audio.play();

    this.game.global.audio.onDecoded.add(() => {
      this.game.global.audio.fadeIn(1000);
    }, this);

    this.game.state.start('menu', true);
  }
}

new Init();