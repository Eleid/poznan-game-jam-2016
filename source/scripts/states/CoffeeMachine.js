import ChaptersManager from './chapters_manager';




export default class CoffeeMachine extends ChaptersManager{

	preload(){
		this.game.load.image('coffeeMachineBg', 'assets/images/coffeeMachine/bg.jpg');
		this.game.load.image('coffeeMachineBgHappy', 'assets/images/coffeeMachine/bg_happy.jpg');
		this.game.load.image('machine', 'assets/images/coffeeMachine/machine.png');
		this.game.load.image('machineTop', 'assets/images/coffeeMachine/machineTop.png');
		this.game.load.image('glass', 'assets/images/coffeeMachine/glass.png');
		this.game.load.image('boom', 'assets/images/coffeeMachine/boom.png');

		this.game.load.spritesheet('error', 'assets/images/coffeeMachine/error.png', 98, 49);
		this.game.load.spritesheet('light', 'assets/images/coffeeMachine/light.png', 21, 22);
		this.game.load.spritesheet('coffee', 'assets/images/coffeeMachine/coffee.png', 203, 203);

		this.game.load.spritesheet('explosion', 'assets/images/coffeeMachine/explosion.png', 438, 440.44444);
	}

	create(){
		this.bg = this.game.add.sprite(0, 0, 'coffeeMachineBg');

		this.coffeeMachine = this.game.add.group();

		this.boom = this.game.add.sprite(60, -130, 'boom');
		this.boom.anchor.setTo(0.5);
		this.boom.alpha = 0;

		this.coffeeMachine.add(this.boom);

		this.coffeeMachine.create(0, 0, 'machine');

		this.coffee = this.game.add.sprite(137, 224, 'coffee');
		this.coffeeMachine.add(this.coffee);
		this.coffee.anchor.setTo(0, 1);

		this.coffeeMachine.create(137, 0, 'glass');

		this.coffeeMachine.create(102, -155, 'machineTop');

		this.errorLeft = this.game.add.sprite(113, -81, 'error');
		this.coffeeMachine.add(this.errorLeft);
		this.errorLeft.frame = 0;

		this.errorRight = this.game.add.sprite(271, -81, 'error');
		this.coffeeMachine.add(this.errorRight);
		this.errorRight.frame = 0;

		this.light = this.game.add.sprite(228, -66, 'light');
		this.coffeeMachine.add(this.light);
		this.light.frame = 0;


		this.coffeeMachine.x = 300;
		this.coffeeMachine.y = 270;

		this.leftButtonRect = new Phaser.Rectangle(260, 150, 250, 150);
		this.rightButtonRect = new Phaser.Rectangle(580, 150, 250, 150);
		this.startButtonCircle = new Phaser.Circle(549, 225, 50);

		this.isHitting = false;
		this.isStarted = false;

		this.errorsTimeRange = new Phaser.Point(500, 1000);
		this.errorsAreRunning = false;
		this.isErrorLeft = false;
		this.isErrorRight = false;

		this.correctHits = 0;
		this.missedHits = 0;

		setTimeout(() => {
			this.isStarted = true;
			this.light.frame = 1;
		}, 200);

		this.game.global.onTimeout = () => {
			this.addExplosion();
		};

		this.happyEndBg = this.game.add.sprite(0, 0, 'coffeeMachineBgHappy');
		this.happyEndBg.alpha = 0;
	}

	update(){

		if(this.game.input.activePointer.isDown && !this.isHitting){
			let posX = this.game.input.activePointer.x;
			let posY = this.game.input.activePointer.y;
			// if(this.startButtonCircle.contains(posX, posY)){
			// 	this.isStarted = true;
			// 	this.light.frame = 1;
			// }

			if( this.leftButtonRect.contains(posX, posY) && this.isStarted ){
				this.hitLeft();
			} else if( this.rightButtonRect.contains(posX, posY) && this.isStarted ){
				this.hitRight();
			}

			this.isHitting = true;

		} else if( this.game.input.activePointer.isUp && this.isHitting ){
			this.isHitting = false;

			this.boom.alpha = 0;
		}

		if(this.isStarted){
			if( !this.errorsAreRunning ){
				this.errorsAreRunning = true;
				setTimeout(() => {
					this.errorsAreRunning = false;
					this.updateErrors();
				}, this.game.rnd.integerInRange(this.errorsTimeRange.x, this.errorsTimeRange.y));
			}
		}
	}

	updateErrors(){
		if(this.isStarted){
			if( this.game.rnd.integerInRange(0, 1) ){
				if(this.isErrorLeft){
					this.loseLeftError();
				} else {
					this.showLeftError();
				}
			} else {
				if(this.isErrorRight){
					this.loseRightError();
				} else {
					this.showRightError();
				}
			}
		}
	}

	hitLeft(){
		this.boom.alpha = 1;
		this.boom.position = new Phaser.Point(60, -130);
		this.boom.scale.setTo(1, 1);

		if(this.isErrorLeft){
			this.hideLeftError();
			this.updateScore(1);
		} else {
			this.updateScore(-1);
		}
	}

	hitRight(){
		this.boom.alpha = 1;
		this.boom.position = new Phaser.Point(420, -130);
		this.boom.scale.setTo(-1, 1);

		if(this.isErrorRight){
			this.hideRightError();
			this.updateScore(1);
		} else {
			this.updateScore(-1);
		}
	}

	showHappyEnd() {
		var tween = this.game.add.tween(this.happyEndBg).to({alpha : 1}, 750, "Linear", false);
		tween.onComplete.add(this.nextChapter, this);
		tween.start();
	};

	updateScore(value){
		if(value > 0){
			this.light.frame = 1;
			this.correctHits++;

			if( !(this.correctHits % 2) ) {
				this.coffee.frame++;
			}

			if(this.correctHits > 9){
				console.log(this.game.global);

				var tween = this.game.add.tween(this.coffeeMachine).to({x : this.game.width + this.coffeeMachine.width / 2}, 750, "Linear", false);
				tween.onComplete.add(this.showHappyEnd, this);
				tween.start();
			}
		} else {
			this.light.frame = 2;
			this.missedHits++;
			console.log('missedHits: ', this.missedHits);
			if(this.missedHits > 2){
				this.isStarted = false;
				this.addExplosion();
			}
		}
	}

	addExplosion(){
		this.hideLeftError();
		this.hideRightError();
		var explosion = this.game.add.sprite(this.coffeeMachine.x + 250, this.coffeeMachine.y + 90, 'explosion');
		explosion.anchor.setTo(0.5);
		explosion.scale.setTo(5);
		var anim = explosion.animations.add('explode');
		anim.onComplete.add(function () { this.lose(); }, this);
		anim.play(17, false);

		this.game.add.tween(this.bg).to({ alpha: 0.01 }, 400, Phaser.Easing.Out, true);
		this.game.add.tween(this.coffeeMachine).to({ alpha: 0.01 }, 400, 'Linear', true);
	}

	loseLeftError(){
		this.hideLeftError();
		this.updateScore(-1);
	}

	loseRightError(){
		this.hideRightError();
		this.updateScore(-1);
	}

	hideLeftError(){
		this.isErrorLeft = false;
		this.errorLeft.frame = 0;
	}

	hideRightError(){
		this.isErrorRight = false;
		this.errorRight.frame = 0;
	}

	showLeftError(){
		this.isErrorLeft = true;
		this.errorLeft.frame = 1;
	}

	showRightError(){
		this.isErrorRight = true;
		this.errorRight.frame = 1;
	}

	render(){
		// this.game.debug.geom(this.leftButtonRect, 'rgba(255,0,0,0.1');
		// this.game.debug.geom(this.rightButtonRect, 'rgba(255,0,0,0.1');
		// this.game.debug.geom(this.startButtonCircle, 'rgba(0,255,0,0.5');
	}
}