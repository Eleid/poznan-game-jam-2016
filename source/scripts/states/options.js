export default class extends Phaser.State {
	createBackground() {
		const background = this.add.sprite(
			0,
			0,
			'options-background',
		);
	}

	create() {
		this.createBackground();
	}
}