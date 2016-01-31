import shuffle from '../utils/shuffle';





export default class extends Phaser.State{
	init(index) {
		this.initChapters(index);
	}

	countDown(){
		this.game.global.time--;
		this.countDownText.text = this.game.global.time;
		console.log('countDown: ', this.game.global.time);

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
		console.log('startCountDown');
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
		console.log('stopCountDown');
		clearInterval(this.game.global.timerInterval);
	}

	GUI(){
		console.log('GUI');
		let style = { font: "bold 72px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle", stroke: '2px #000' };

		if(this.countDownText){
			this.countDownText.text = '';
		}
		this.countDownText = this.game.add.text(0, 0, this.game.global.time, style);
		this.countDownText.setTextBounds(0, 50, this.game.width, 0);
	}

	initChapters(index){
		if(!this.game.global) {
			this.game.global = {};
		}

		this.game.global.level = 1;
		this.game.global.chapter = index;

    	if(this.game.global.chapter < 0) {
			this.game.global.chapters = shuffle(['CoffeeMachine', 'Cornflakes', 'Toilet']);
			this.nextChapter();
    	}
	}

	nextChapter() {
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
	}

	lose() {
		this.initChapters(-1);
	}
}