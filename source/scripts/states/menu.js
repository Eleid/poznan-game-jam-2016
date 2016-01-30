import translate from '../translate';
import createButton from '../create_button';

const _button = {
	width: 300,
	height: 60,
}

const _space = 40;

export default class Menu extends Phaser.State {
	preload() {
		this.game.load.spritesheet('menu_button', 'assets/images/menu_button.png', _button.width, _button.height);
	}

	create() {
		createButton({
			x: this.game.world.centerX - _button.width / 2,
			y: this.game.world.centerY - _button.height - _space / 2,
			width: _button.width,
			height: _button.height,
			sprite: 'menu_button',
			callback: this.start,
			label: translate['START_GAME'].toUpperCase(),
			this: this,
		});

		createButton({
			x: this.game.world.centerX - _button.width / 2,
			y: this.game.world.centerY + _space / 2,
			width: _button.width,
			height: _button.height,
			sprite: 'menu_button',
			callback: this.options,
			label: translate['OPTIONS'].toUpperCase(),
			this: this,
		});
	}

	update() {

	}

	start() {
		console.log('starting game')
	}

	options() {
		console.log('opening settings');
	}
}