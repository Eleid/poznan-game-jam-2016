import shuffle from '../utils/shuffle';





export default class extends Phaser.State{
	preload() {
		this.game.load.image('success', 'assets/images/success.png');
	}

	init(index) {
		this.initChapters(index);
	}

	create() {

	}

	countDown(){
		this.game.global.time--;
		this.countDownText.text = this.game.global.time;
		// console.log('countDown: ', this.game.global.time);

		if(this.game.global.time <= 0){
			this.countDownText.text = '';
			this.stopCountDown();

			if(this.game.global.onTimeout){
				this.game.global.onTimeout();
			}
		}
	}

	startCountDown(){
		this.stopCountDown();
		this.game.global.time = this.game.global.timerMax = 15;

		this.game.global.timerInterval = setInterval(() => {
			this.countDown();
		}, 1000);

		// needs to be refactoring to callback instead setTimeout
		setTimeout(() => {
			this.GUI();
		}, 100);
	}

	stopCountDown(){
		clearInterval(this.game.global.timerInterval);
	}

	GUI(){
		let style = { font: "bold 72px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle", stroke: '2px #000' };

		if(this.countDownText){
			this.countDownText.text = '';
		}
		this.countDownText = this.game.add.text(0, 0, this.game.global.time, style);
		this.countDownText.setTextBounds(0, 50, this.game.width, 0);
		//this.showTimer();
	}

	hideTimer(){
		if (!this.countDownText) {
			return;
		}
		this.countDownText.alpha = 0;
	}

	showTimer(){
		if (!this.countDownText) {
			return;
		}
		this.countDownText.alpha = 1;
	}

	initChapters(index){
		if(!this.game.global) {
			this.game.global = {};
		}

		this.game.global.level = 1;
		this.game.global.chapter = index;

    	if(this.game.global.chapter < 0) {
			this.game.global.chapters = shuffle(['coffee-machine', 'cornflakes', 'toilet']);
			this.nextChapter();
    	}
	}

	nextChapter() {
		//this.hideTimer();

		let successText = this.game.add.sprite(this.game.world.width / 2, 100, 'success');
		successText.anchor.setTo(0.5, 0.5);
		successText.alpha = 0;
		let tween = this.game.add.tween(successText).to({alpha : 1}, 1500, "Quart.easeOut", false);

		tween.onComplete.add(() => {
			if(this.game.global.chapter + 1 < this.game.global.chapters.length) {
				this.game.global.chapter++;

				this.state.start(
					this.game.global.chapters[this.game.global.chapter],
					true,
					false,
					this.game.global.chapter
				);

				this.startCountDown();
			}

			else {
				this.lose();
			}
		}, this);
		tween.start();

	}

	lose() {
		this.initChapters(-1);
	}
}