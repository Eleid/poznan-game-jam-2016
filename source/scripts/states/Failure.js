export default class Failure extends Phaser.State{
	preload(){
		this.game.load.image('background', 'assets/images/failure/failbg.jpg');
		this.game.load.image('woodenInfo', 'assets/images/failure/failInfo.png');
		this.game.load.image('gwozdz', 'assets/images/failure/gwozdz.png');
	}

	create(){
		this.game.add.sprite(0, 0, 'background');
		this.infoGroup = this.game.add.group();

		this.woodenInfoTab = this.game.add.sprite(0, 0, 'woodenInfo');
		this.woodenInfoTab.anchor.setTo(0.5, 0);


		this.gwozdz = this.game.add.sprite(this.game.world.width / 2, 0, 'gwozdz');

		this.fontStyle = { font: "55px Arial", fill: "#ff0044", align: "center" };
		this.infoText = this.game.add.text(0, 0, "Loser!", this.fontStyle);
		this.infoText.anchor.set(0.5,  this.infoText.height / 4);

		this.infoGroup.add(this.woodenInfoTab);
		this.infoGroup.add(this.infoText);


		this.infoGroup.x = this.game.world.width / 2 + 27;
		this.infoGroup.y = 20;
	}
}