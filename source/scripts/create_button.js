export default function createButton(settings) {
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
		boundsAlignV: 'center',
		boundsAlignH: 'middle',
	};

	const _text = settings.this.game.add.text(
		0,
		0,
		settings.label,
		_textStyle
	);

	_text.setTextBounds(
		0,
		0,
		settings.width,
		settings.height,
	);

	_button.addChild(_text);
}