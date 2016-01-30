import translate from '../translate';

const _button = {
	width: 300,
	height: 60,
}

const _space = 40;

function createButton(settings) {
	const _button = settings.this.game.add.button(
		settings.x,
		settings.y,
		settings.sprite,
		settings.callback,
		this,
		1,
		2,
		3
	);

	const _textStyle = {
		fill: '#fff',
		font: 'Helvetica Neue',
		fontSize: settings.height / 2,
		// boundsAlignV: 'center',
		// boundsAlignH: 'middle',
	};

	const _text = settings.this.game.add.text(
		0,
		0,
		settings.label,
		_textStyle
	);

	_text.setTextBounds(
		settings.x,
		settings.y,
		settings.x + settings.width,
		settings.y + settings.height,
	);

	_button.addChild(_text);
}

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