export default function(_self, options) {
  const group = _self.add.group();

  group.x = options.x;
  group.y = options.y;

  const button = _self.add.button(
    0,
    0,
    options.sprite,
    options.callback,
  );

  const label = _self.add.text(
    0,
    0,
    options.label.toUpperCase(),
    {
      fill: '#fff',
      font: 'Arial',
      fontSize: options.height / 3,
      boundsAlignH: 'center',
      boundsAlignV: 'middle',
    }
  );

  label.setTextBounds(
    0,
    0,
    options.width,
    options.height + 10
  );

  group.add(button);
  group.add(label);

  return group;
}