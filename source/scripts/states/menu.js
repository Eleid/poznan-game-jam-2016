import button from '../utils/button';
import shake from '../utils/shake';





const _button = {
	width: 220,
	height: 60,
};

const _clockFace = {
	width: 250,
	height: 250,
}

const _clockHand = {
	width: 150,
	height: 8,
};





export default class extends Phaser.State {
	preload() {
		this.load.image('menu-button', 'assets/images/menu/button.png');
		this.load.image('menu-clock-face', 'assets/images/menu/clock_face.png');

		this.load.spritesheet('menu-clock-hand', 'assets/images/menu/clock_hand.png', _clockHand.width, _clockHand.height);
	}

	createBackground() {
		const background = this.add.sprite(
			0,
			0,
			'menu-background',
		);
	}

	createButtons(space) {
		const group = this.add.group();

		group.x = space;
		group.y = space;

		const start = button(this, {
			x: 0,
			y: 0,
			width: _button.width,
			height: _button.height,
			label: 'Start',
			sprite: 'menu-button',
			callback: this.start.bind(this),
		});

		const options = button(this, {
			x: space + _button.width,
			y: 0,
			width: _button.width,
			height: _button.height,
			label: 'Options',
			sprite: 'menu-button',
			callback: this.options.bind(this),
		});

		group.add(start);
		group.add(options);
	}

	createClock() {
		const group = this.add.group();

		group.x = this.game.width / 2 - 350 - _clockFace.width / 2;
		group.y = this.game.height / 2 - 50 - _clockFace.height / 2;

		const face = this.add.sprite(
			_clockFace.width / 2,
			_clockFace.height / 2,
			'menu-clock-face'
		);

		const hourHand = this.add.sprite(
			_clockFace.width - 3,
			_clockFace.height + 12,
			'menu-clock-hand',
			0
		);

		const minuteHand = this.add.sprite(
			_clockFace.width - 3,
			_clockFace.height + 12,
			'menu-clock-hand',
			1
		);

		hourHand.anchor.setTo(0.5);
		minuteHand.anchor.setTo(0.5);

		group.add(face);
		group.add(hourHand);
		group.add(minuteHand);

		this.objects.clock = group;
	}

	create() {
		this.objects = {};

		this.createBackground();
		this.createButtons(30);
		this.createClock();
	}

	start() {
		this.game.state.start('chapters-manager', true, false, -1);
	}

	options() {
		// for now nothing happens
	}
}