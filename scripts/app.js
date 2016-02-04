(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _statesMenu = require('./states/menu');

var _statesMenu2 = _interopRequireDefault(_statesMenu);

var _statesOptions = require('./states/options');

var _statesOptions2 = _interopRequireDefault(_statesOptions);

var _statesChapters_manager = require('./states/chapters_manager');

var _statesChapters_manager2 = _interopRequireDefault(_statesChapters_manager);

var _statesCoffeeMachine = require('./states/CoffeeMachine');

var _statesCoffeeMachine2 = _interopRequireDefault(_statesCoffeeMachine);

var _statesCornflakes = require('./states/cornflakes');

var _statesCornflakes2 = _interopRequireDefault(_statesCornflakes);

var _statesPooScene = require('./states/PooScene');

var _statesPooScene2 = _interopRequireDefault(_statesPooScene);

var settings = {
  width: 1024,
  height: 768
};

var Init = (function (_Phaser$Game) {
  _inherits(Init, _Phaser$Game);

  function Init() {
    _classCallCheck(this, Init);

    _get(Object.getPrototypeOf(Init.prototype), 'constructor', this).call(this, settings.width, settings.height, Phaser.AUTO, 'game');

    this.state.add('boot', Boot, true);
    this.state.add('preloader', Preloader, false);

    this.state.add('menu', _statesMenu2['default'], false);
    this.state.add('options', _statesOptions2['default'], false);

    this.state.add('chapters-manager', _statesChapters_manager2['default'], false);
    this.state.add('coffee-machine', _statesCoffeeMachine2['default'], false);
    this.state.add('cornflakes', _statesCornflakes2['default'], false);
    this.state.add('toilet', _statesPooScene2['default'], false);
  }

  return Init;
})(Phaser.Game);

var Boot = (function (_Phaser$State) {
  _inherits(Boot, _Phaser$State);

  function Boot() {
    _classCallCheck(this, Boot);

    _get(Object.getPrototypeOf(Boot.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Boot, [{
    key: 'create',
    value: function create() {
      this.scaleMode = this.scale.RESIZE;
      // this.scale.startFullScreen(true);

      this.scale.refresh();

      this.state.start('preloader', true, true);
    }
  }]);

  return Boot;
})(Phaser.State);

var Preloader = (function (_Phaser$State2) {
  _inherits(Preloader, _Phaser$State2);

  function Preloader() {
    _classCallCheck(this, Preloader);

    _get(Object.getPrototypeOf(Preloader.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Preloader, [{
    key: 'preload',
    value: function preload() {
      // preload all images in future

      this.load.audio('theme', 'assets/audio/theme.mp3');

      this.load.image('menu-background', 'assets/images/menu/background.jpg');
      this.load.image('options-background', 'assets/images/options/background.jpg');
      this.load.image('cornflakes-background', 'assets/images/cornflakes/background.jpg');
    }
  }, {
    key: 'create',
    value: function create() {
      var _this = this;

      if (!this.game.global) {
        this.game.global = {};
      }

      this.game.global.audio = this.add.audio('theme', 2, true, true);

      this.game.global.audio.onDecoded.add(function () {
        _this.game.global.audio.fadeIn(1000);
      }, this);

      this.state.start('menu', true);
    }
  }]);

  return Preloader;
})(Phaser.State);

new Init();

},{"./states/CoffeeMachine":2,"./states/PooScene":3,"./states/chapters_manager":4,"./states/cornflakes":5,"./states/menu":6,"./states/options":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _chapters_manager = require('./chapters_manager');

var _chapters_manager2 = _interopRequireDefault(_chapters_manager);

var CoffeeMachine = (function (_ChaptersManager) {
	_inherits(CoffeeMachine, _ChaptersManager);

	function CoffeeMachine() {
		_classCallCheck(this, CoffeeMachine);

		_get(Object.getPrototypeOf(CoffeeMachine.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(CoffeeMachine, [{
		key: 'preload',
		value: function preload() {
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
	}, {
		key: 'create',
		value: function create() {
			var _this = this;

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

			setTimeout(function () {
				_this.isStarted = true;
				_this.light.frame = 1;
			}, 200);

			this.game.global.onTimeout = function () {
				_this.addExplosion();
			};

			this.happyEndBg = this.game.add.sprite(0, 0, 'coffeeMachineBgHappy');
			this.happyEndBg.alpha = 0;
		}
	}, {
		key: 'update',
		value: function update() {
			var _this2 = this;

			if (this.game.input.activePointer.isDown && !this.isHitting) {
				var posX = this.game.input.activePointer.x;
				var posY = this.game.input.activePointer.y;
				// if(this.startButtonCircle.contains(posX, posY)){
				// 	this.isStarted = true;
				// 	this.light.frame = 1;
				// }

				if (this.leftButtonRect.contains(posX, posY) && this.isStarted) {
					this.hitLeft();
				} else if (this.rightButtonRect.contains(posX, posY) && this.isStarted) {
					this.hitRight();
				}

				this.isHitting = true;
			} else if (this.game.input.activePointer.isUp && this.isHitting) {
				this.isHitting = false;

				this.boom.alpha = 0;
			}

			if (this.isStarted) {
				if (!this.errorsAreRunning) {
					this.errorsAreRunning = true;
					setTimeout(function () {
						_this2.errorsAreRunning = false;
						_this2.updateErrors();
					}, this.game.rnd.integerInRange(this.errorsTimeRange.x, this.errorsTimeRange.y));
				}
			}
		}
	}, {
		key: 'updateErrors',
		value: function updateErrors() {
			if (this.isStarted) {
				if (this.game.rnd.integerInRange(0, 1)) {
					if (this.isErrorLeft) {
						this.loseLeftError();
					} else {
						this.showLeftError();
					}
				} else {
					if (this.isErrorRight) {
						this.loseRightError();
					} else {
						this.showRightError();
					}
				}
			}
		}
	}, {
		key: 'hitLeft',
		value: function hitLeft() {
			this.boom.alpha = 1;
			this.boom.position = new Phaser.Point(60, -130);
			this.boom.scale.setTo(1, 1);

			if (this.isErrorLeft) {
				this.hideLeftError();
				this.updateScore(1);
			} else {
				this.updateScore(-1);
			}
		}
	}, {
		key: 'hitRight',
		value: function hitRight() {
			this.boom.alpha = 1;
			this.boom.position = new Phaser.Point(420, -130);
			this.boom.scale.setTo(-1, 1);

			if (this.isErrorRight) {
				this.hideRightError();
				this.updateScore(1);
			} else {
				this.updateScore(-1);
			}
		}
	}, {
		key: 'showHappyEnd',
		value: function showHappyEnd() {
			var tween = this.game.add.tween(this.happyEndBg).to({ alpha: 1 }, 750, "Linear", false);
			tween.onComplete.add(this.nextChapter, this);
			tween.start();
		}
	}, {
		key: 'updateScore',
		value: function updateScore(value) {
			if (value > 0) {
				this.light.frame = 1;
				this.correctHits++;

				if (!(this.correctHits % 2)) {
					this.coffee.frame++;
				}

				if (this.correctHits > 9) {
					console.log(this.game.global);

					var tween = this.game.add.tween(this.coffeeMachine).to({ x: this.game.width + this.coffeeMachine.width / 2 }, 750, "Linear", false);
					tween.onComplete.add(this.showHappyEnd, this);
					tween.start();
				}
			} else {
				this.light.frame = 2;
				this.missedHits++;
				console.log('missedHits: ', this.missedHits);
				if (this.missedHits > 2) {
					this.isStarted = false;
					this.addExplosion();
				}
			}
		}
	}, {
		key: 'addExplosion',
		value: function addExplosion() {
			this.hideLeftError();
			this.hideRightError();
			var explosion = this.game.add.sprite(this.coffeeMachine.x + 250, this.coffeeMachine.y + 90, 'explosion');
			explosion.anchor.setTo(0.5);
			explosion.scale.setTo(5);
			var anim = explosion.animations.add('explode');
			anim.onComplete.add(function () {
				this.lose();
			}, this);
			anim.play(17, false);

			this.game.add.tween(this.bg).to({ alpha: 0.01 }, 400, Phaser.Easing.Out, true);
			this.game.add.tween(this.coffeeMachine).to({ alpha: 0.01 }, 400, 'Linear', true);
		}
	}, {
		key: 'loseLeftError',
		value: function loseLeftError() {
			this.hideLeftError();
			this.updateScore(-1);
		}
	}, {
		key: 'loseRightError',
		value: function loseRightError() {
			this.hideRightError();
			this.updateScore(-1);
		}
	}, {
		key: 'hideLeftError',
		value: function hideLeftError() {
			this.isErrorLeft = false;
			this.errorLeft.frame = 0;
		}
	}, {
		key: 'hideRightError',
		value: function hideRightError() {
			this.isErrorRight = false;
			this.errorRight.frame = 0;
		}
	}, {
		key: 'showLeftError',
		value: function showLeftError() {
			this.isErrorLeft = true;
			this.errorLeft.frame = 1;
		}
	}, {
		key: 'showRightError',
		value: function showRightError() {
			this.isErrorRight = true;
			this.errorRight.frame = 1;
		}
	}, {
		key: 'render',
		value: function render() {
			// this.game.debug.geom(this.leftButtonRect, 'rgba(255,0,0,0.1');
			// this.game.debug.geom(this.rightButtonRect, 'rgba(255,0,0,0.1');
			// this.game.debug.geom(this.startButtonCircle, 'rgba(0,255,0,0.5');
		}
	}]);

	return CoffeeMachine;
})(_chapters_manager2['default']);

exports['default'] = CoffeeMachine;
module.exports = exports['default'];

},{"./chapters_manager":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _chapters_manager = require('./chapters_manager');

var _chapters_manager2 = _interopRequireDefault(_chapters_manager);

var PooScene = (function (_ChaptersManager) {
    _inherits(PooScene, _ChaptersManager);

    function PooScene() {
        _classCallCheck(this, PooScene);

        _get(Object.getPrototypeOf(PooScene.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(PooScene, [{
        key: 'preload',
        value: function preload() {
            this.game.load.image('background', 'assets/images/pooMan/lazienka.jpg');
            this.game.load.image('pooMan', 'assets/images/pooMan/01.png');
            this.game.load.image('toiletBarCorrect', 'assets/images/pooMan/toiletBarCorrect.png');
            this.game.load.image('toiletBarBad', 'assets/images/pooMan/toiletBarBad.png');
            this.game.load.image('toiletMarker', 'assets/images/pooMan/toiletMarker.png');
            this.game.load.spritesheet('head', 'assets/images/pooMan/head.png', 165, 210);
            this.game.load.image('januszPart1', 'assets/images/pooMan/boom/01.png');
            this.game.load.image('januszPart2', 'assets/images/pooMan/boom/02.png');
            this.game.load.image('januszPart3', 'assets/images/pooMan/boom/03.png');
            this.game.load.image('januszPart4', 'assets/images/pooMan/boom/04.png');
            this.game.load.image('januszPart5', 'assets/images/pooMan/boom/05.png');
            this.game.load.image('januszPart6', 'assets/images/pooMan/boom/06.png');
            this.game.load.image('januszPart7', 'assets/images/pooMan/boom/07.png');
            this.game.load.image('januszPart8', 'assets/images/pooMan/boom/08.png');
            this.game.load.image('januszPart9', 'assets/images/pooMan/boom/09.png');
            this.game.load.image('januszPart10', 'assets/images/pooMan/boom/10.png');
            this.game.load.image('januszPart11', 'assets/images/pooMan/boom/11.png');
            this.game.load.image('frameBar', 'assets/images/pooMan/ramka.png');
        }
    }, {
        key: 'create',
        value: function create() {
            this.setSceneParameters();
            this.setPooMan();
            this.setBar();
            //this.explosion = this.game.add.sprite(0, 0, 'explosion');
            //this.explosion.animations.add('explode');
            //this.explosion.play('explode', 60, true);
        }
    }, {
        key: 'setPooMan',
        value: function setPooMan() {
            this.game.add.sprite(0, 0, 'background');
            this.pooManGroup = this.game.add.group();
            this.pooMan = this.game.add.sprite(0, 150, 'pooMan');
            this.pooManGroup.add(this.pooMan);

            this.setNormalHead();
            //this.setRedHead();

            this.pooManGroup.add(this.pooManHeadNormal);
            this.pooManGroup.add(this.januszGroup);
            //this.pooManGroup.add(this.pooManHeadRed);

            this.pooManHeadNormal.x = 155;
            this.pooManHeadNormal.y = 180;
            this.januszGroup.x = 155;
            this.januszGroup.y = 180;

            var headHeightAboveBody = this.pooManHeadNormal.y - this.pooMan.y;
            var groupHeight = headHeightAboveBody + this.pooMan.height;

            this.pooManGroup.x = this.game.world.width / 2 - this.pooMan.width / 2;
            this.pooManGroup.y = this.game.world.height / 2 - groupHeight / 2;
        }
    }, {
        key: 'setRedHead',
        value: function setRedHead() {
            //this.pooManHeadRed = this.game.add.group();
            //this.pooManHeadRed.alpha = 0;

            var allHair = this.game.add.sprite(0, 0, 'head', 1);
            allHair = this.setHeadSprites(allHair, false);
            //this.pooManHeadRed.add(allHair);
        }
    }, {
        key: 'setNormalHead',
        value: function setNormalHead() {
            this.pooManHeadNormal = this.game.add.group();

            var faceOnly = this.game.add.sprite( /*this.pooMan.width / 2*/0, 0, 'head', 0);
            faceOnly = this.setHeadSprites(faceOnly, false);
            this.pooManHeadNormal.add(faceOnly);
            this.faceOnlyRed = this.game.add.sprite(0, 0, 'head', 0);

            this.faceOnlyRed = this.setHeadSprites(this.faceOnlyRed, true);
            this.faceOnlyRed.alpha = 0;
            this.pooManHeadNormal.add(this.faceOnlyRed);

            var allHair = this.game.add.sprite( /*this.pooMan.width / 2*/0, 0, 'head', 1);

            allHair = this.setHeadSprites(allHair, false);
            this.pooManHeadNormal.add(allHair);

            this.januszGroup = this.game.add.group();
            this.janusz1 = this.game.add.sprite(0, 0, 'januszPart1');
            this.janusz1 = this.setHeadSprites(this.janusz1, false);
            this.janusz2 = this.game.add.sprite(0, 0, 'januszPart2');
            this.janusz2 = this.setHeadSprites(this.janusz2, false);
            this.janusz3 = this.game.add.sprite(0, 0, 'januszPart3');
            this.janusz3 = this.setHeadSprites(this.janusz3, false);
            this.janusz4 = this.game.add.sprite(0, 0, 'januszPart4');
            this.janusz4 = this.setHeadSprites(this.janusz4, false);
            this.janusz5 = this.game.add.sprite(0, 0, 'januszPart5');
            this.janusz5 = this.setHeadSprites(this.janusz5, false);
            this.janusz6 = this.game.add.sprite(0, 0, 'januszPart6');
            this.janusz6 = this.setHeadSprites(this.janusz6, false);
            this.janusz7 = this.game.add.sprite(0, 0, 'januszPart7');
            this.janusz7 = this.setHeadSprites(this.janusz7, false);
            this.janusz8 = this.game.add.sprite(0, 0, 'januszPart8');
            this.janusz8 = this.setHeadSprites(this.janusz8, false);
            this.janusz9 = this.game.add.sprite(0, 0, 'januszPart9');
            this.janusz9 = this.setHeadSprites(this.janusz9, false);
            this.janusz10 = this.game.add.sprite(0, 0, 'januszPart10');
            this.janusz10 = this.setHeadSprites(this.janusz10, false);
            this.janusz11 = this.game.add.sprite(0, 0, 'januszPart11');
            this.janusz11 = this.setHeadSprites(this.janusz11, false);

            this.januszGroup.add(this.janusz1);
            this.januszGroup.add(this.janusz2);
            this.januszGroup.add(this.janusz3);
            this.januszGroup.add(this.janusz4);
            this.januszGroup.add(this.janusz5);
            this.januszGroup.add(this.janusz6);
            this.januszGroup.add(this.janusz7);
            this.januszGroup.add(this.janusz8);
            this.januszGroup.add(this.janusz9);
            this.januszGroup.add(this.janusz10);
            this.januszGroup.add(this.janusz11);

            this.januszGroup.alpha = 0;
        }
    }, {
        key: 'setHeadSprites',
        value: function setHeadSprites(sprite, shouldBeRed) {
            if (shouldBeRed) {
                sprite.tint = 0xFF0000;
            }

            sprite. /*scale.*/anchor.x = 0.5;
            sprite. /*scale.*/anchor.y = 0.5;
            return sprite;
        }
    }, {
        key: 'setSceneParameters',
        value: function setSceneParameters() {
            this.startBadProgressWidth = 200;
            this.minMagneticPowerToCalculate = 10;
            this.minMagneticPower = 12;
            this.maxMagneticPower = 23;
            this.maxMagneticRandomPower = this.maxMagneticPower / 2;
            this.maxPlayerPower = 25;
            this.whenUpdateMinPower = 120;
            this.countFromUpdateMinPower = this.whenUpdateMinPower;
            this.timeInCorrectArea = 0;
            this.enteredIntoCorrectAreaTime = new Date().getTime();
            this.shouldSetEnetringTime = true;
            this.timeInCorrectAreToWin = 3000;
            this.totalTimeForScene = 8000;
            this.startTotalTime = new Date().getTime();
            this.test = true;
            this.maxHeadScale = 1.5;
            this.maxAlpha = 0.5;
            this.killed = false;
        }
    }, {
        key: 'setBar',
        value: function setBar() {
            var barCenterY = this.game.height - 100;
            var hardnessBarMultiplier = this.game.global.level * this.game.width / 20;
            this.toiletBarMargin = 70;
            this.toiletBarBadLeft = this.game.add.sprite(0, barCenterY, 'toiletBarBad');
            this.toiletBarBadLeft.x = this.toiletBarMargin;
            var maxX = this.game.width / 2 - this.toiletBarMargin;
            var badBarScale = this.startBadProgressWidth + Math.min(hardnessBarMultiplier, maxX);
            this.toiletBarBadLeft.scale.x = badBarScale;
            var endBarX = this.game.width - this.toiletBarMargin;
            this.toiletBarBadRight = this.game.add.sprite(0, barCenterY, 'toiletBarBad');
            this.toiletBarBadRight.x = endBarX - this.toiletBarBadLeft.width;
            this.toiletBarBadRight.scale.x = badBarScale;
            this.toiletBarCorrect = this.game.add.sprite(0, barCenterY, 'toiletBarCorrect');
            this.toiletBarCorrect.x = this.toiletBarMargin + this.toiletBarBadLeft.scale.x;
            this.toiletBarCorrect.scale.x = (this.game.width / 2 - this.toiletBarMargin - this.toiletBarBadRight.width) * 2;

            this.barFrame = this.game.add.sprite(0, barCenterY + 2, 'frameBar');
            this.barFrame.anchor.setTo(0.5, 0.29);
            this.barFrame.x = this.game.world.width / 2;
            this.barFrame.scale.setTo(2, 1);

            this.toiletMarker = this.game.add.sprite(0, 0, 'toiletMarker');
            this.toiletMarker.y = barCenterY - (this.toiletMarker.height - this.toiletBarCorrect.height) / 2; //barCenterY;
            this.toiletMarker.x = this.game.width / 2 - this.toiletMarker.width / 2;
        }
    }, {
        key: 'update',
        value: function update() {
            if (this.killed) {
                return;
            }
            if (this.timeInCorrectAreToWin < this.timeInCorrectArea) {
                this.nextChapter();
            }
            var markerCenter = new Phaser.Point(this.toiletMarker.x + this.toiletMarker.width / 2, this.toiletMarker.y + this.toiletMarker.height / 2);
            if (Phaser.Rectangle.containsPoint(this.toiletBarCorrect, markerCenter)) {
                if (this.shouldSetEnetringTime) {
                    this.shouldSetEnetringTime = false;
                    this.enteredIntoCorrectAreaTime = new Date().getTime();
                }
                this.timeInCorrectArea = new Date().getTime() - this.enteredIntoCorrectAreaTime;
            } else {
                this.timeInCorrectArea = 0;
                this.shouldSetEnetringTime = true;
                this.setHeadAnimation(markerCenter);
            }
            var halfGameWidth = this.game.width / 2;
            var markerPower = this.getMarkerPower(halfGameWidth);
            markerPower += this.getPlayerPower(halfGameWidth);

            this.toiletMarker.x += markerPower;
            if (this.isPlayerLoser()) {
                this.boomJanusz();
                //this.gameOver();
            }
        }
    }, {
        key: 'setHeadAnimation',
        value: function setHeadAnimation(markerCenter) {
            var distanceToEdge;
            if (Phaser.Rectangle.containsPoint(this.toiletBarBadLeft, markerCenter)) {
                distanceToEdge = this.toiletBarBadLeft.x + this.toiletBarBadLeft.width - markerCenter.x;
            } else {
                distanceToEdge = markerCenter.x - this.toiletBarBadRight.x;
            }
            var scaleValue = distanceToEdge / this.toiletBarBadLeft.width * (this.maxHeadScale - 1) + 1;

            this.pooManHeadNormal.scale = new Phaser.Point(scaleValue, scaleValue);
            //this.januszGroup.scale = new Phaser.Point(scaleValue, scaleValue);
            //this.pooManHeadRed.scale = new Phaser.Point(scaleValue, scaleValue);
            this.faceOnlyRed.alpha = distanceToEdge / this.toiletBarBadLeft.width * this.maxAlpha;
        }
    }, {
        key: 'isPlayerLoser',
        value: function isPlayerLoser() {
            return (this.toiletMarker.x <= this.toiletBarBadLeft.x || this.toiletMarker.x >= this.toiletBarBadRight.x + this.toiletBarBadRight.scale.x || new Date().getTime() - this.startTotalTime > this.totalTimeForScene) && this.timeInCorrectArea == 0;
        }
    }, {
        key: 'getMarkerPower',
        value: function getMarkerPower(halfGameWidth) {
            var distanceMarkerToCenter = (halfGameWidth - (this.toiletMarker.x + this.toiletMarker.width / 2)) * -1;
            var markerPower = distanceMarkerToCenter / (halfGameWidth - this.toiletBarMargin) * this.maxMagneticPower;
            if (Math.abs(markerPower) < this.minMagneticPowerToCalculate && ++this.countFromUpdateMinPower > this.whenUpdateMinPower) {
                this.countFromUpdateMinPower = 0;
                markerPower = this.getRandom(this.minMagneticPower, this.maxMagneticRandomPower);
                if (this.getRandomInt(0, 10000) % 2 == 0) {
                    markerPower *= -1;
                }
            }
            return markerPower;
        }
    }, {
        key: 'getPlayerPower',
        value: function getPlayerPower(halfGameWidth) {
            if (!this.game.input.activePointer.isDown) {
                return 0;
            }
            var mouseDistanceToCenter = (halfGameWidth - this.game.input.x) * -1;
            return mouseDistanceToCenter / halfGameWidth * this.maxPlayerPower;
        }
    }, {
        key: 'getRandom',
        value: function getRandom(min, max) {
            return Math.random() * (max - min) + min;
        }
    }, {
        key: 'getRandomInt',
        value: function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min));
        }
    }, {
        key: 'boomJanusz',
        value: function boomJanusz() {

            if (this.killed) {
                return;
            }
            this.killed = true;

            this.januszGroup.scale.x = 0.75; //this.pooManHeadNormal.width / this.januszGroup.width;
            this.januszGroup.scale.y = 0.75; //this.pooManHeadNormal.height / this.januszGroup.height;

            var showingJanusz = this.game.add.tween(this.januszGroup).to({ alpha: 1 }, 100, "Quart.easeOut", false);
            showingJanusz.onComplete.add(this.januszShowed, this);
            showingJanusz.start();
        }
    }, {
        key: 'januszShowed',
        value: function januszShowed() {
            this.game.add.tween(this.pooManHeadNormal).to({ alpha: 0 }, 100, "Quart.easeOut", true);

            var animTime = 1500;

            var tween1 = this.game.add.tween(this.janusz1);
            tween1.to({ x: this.janusz1.x - 150, y: this.janusz1.y - 270, angle: -45 }, animTime, "Quart.easeOut", false);

            var tween2 = this.game.add.tween(this.janusz2);
            tween2.to({ y: this.janusz2.y - 270, angle: 15 }, animTime, "Quart.easeOut", false);

            var tween3 = this.game.add.tween(this.janusz3);
            tween3.to({ x: this.janusz3.x + 200, y: this.janusz3.y - 270, angle: 40 }, animTime, "Quart.easeOut", false);

            var tween4 = this.game.add.tween(this.janusz4);
            tween4.to({ x: this.janusz4.x - 200, y: this.janusz4.y - 180, angle: -15 }, animTime, "Quart.easeOut", false);

            var tween5 = this.game.add.tween(this.janusz5);
            tween5.to({ y: this.janusz5.y + 270, angle: -20 }, animTime, "Quart.easeOut", false);

            var tween6 = this.game.add.tween(this.janusz6);
            tween6.to({ x: this.janusz6.x + 150, y: this.janusz6.y + 150, angle: 5 }, animTime, "Quart.easeOut", false);

            var tween7 = this.game.add.tween(this.janusz7);
            tween7.to({ x: this.janusz7.x + 250, angle: 15 }, animTime, "Quart.easeOut", false);

            var tween8 = this.game.add.tween(this.janusz8);
            tween8.to({ x: this.janusz8.x - 250, angle: -15 }, animTime, "Quart.easeOut", false);

            var tween9 = this.game.add.tween(this.janusz9);
            tween9.to({ x: this.janusz9.x - 130, y: this.janusz9.y + 120, angle: -60 }, animTime, "Quart.easeOut", false);

            var tween10 = this.game.add.tween(this.janusz10);
            tween10.to({ x: this.janusz10.x - 110, y: this.janusz10.y - 90, angle: 40 }, animTime, "Quart.easeOut", false);

            var tween11 = this.game.add.tween(this.janusz11);
            tween11.to({ x: this.janusz11.x - 130, y: this.janusz11.y - 110, angle: 20 }, animTime, "Quart.easeOut", false);

            tween11.onComplete.add(this.lose, this);

            tween1.start();
            tween2.start();
            tween3.start();
            tween4.start();
            tween5.start();
            tween6.start();
            tween7.start();
            tween8.start();
            tween9.start();
            tween10.start();
            tween11.start();
        }
    }]);

    return PooScene;
})(_chapters_manager2['default']);

exports['default'] = PooScene;
module.exports = exports['default'];

},{"./chapters_manager":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _utilsShuffle = require('../utils/shuffle');

var _utilsShuffle2 = _interopRequireDefault(_utilsShuffle);

var _default = (function (_Phaser$State) {
	_inherits(_default, _Phaser$State);

	function _default() {
		_classCallCheck(this, _default);

		_get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(_default, [{
		key: 'preload',
		value: function preload() {
			this.game.load.image('success', 'assets/images/success.png');
		}
	}, {
		key: 'init',
		value: function init(index) {
			this.initChapters(index);
		}
	}, {
		key: 'create',
		value: function create() {}
	}, {
		key: 'countDown',
		value: function countDown() {
			this.game.global.time--;
			this.countDownText.text = this.game.global.time;
			// console.log('countDown: ', this.game.global.time);

			if (this.game.global.time <= 0) {
				this.countDownText.text = '';
				this.stopCountDown();

				if (this.game.global.onTimeout) {
					this.game.global.onTimeout();
				}
			}
		}
	}, {
		key: 'startCountDown',
		value: function startCountDown() {
			var _this = this;

			this.stopCountDown();
			this.game.global.time = this.game.global.timerMax = 15;

			this.game.global.timerInterval = setInterval(function () {
				_this.countDown();
			}, 1000);

			// needs to be refactoring to callback instead setTimeout
			setTimeout(function () {
				_this.GUI();
			}, 100);
		}
	}, {
		key: 'stopCountDown',
		value: function stopCountDown() {
			clearInterval(this.game.global.timerInterval);
		}
	}, {
		key: 'GUI',
		value: function GUI() {
			var style = { font: "bold 72px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle", stroke: '2px #000' };

			if (this.countDownText) {
				this.countDownText.text = '';
			}
			this.countDownText = this.game.add.text(0, 0, this.game.global.time, style);
			this.countDownText.setTextBounds(0, 50, this.game.width, 0);
			//this.showTimer();
		}
	}, {
		key: 'hideTimer',
		value: function hideTimer() {
			if (!this.countDownText) {
				return;
			}
			this.countDownText.alpha = 0;
		}
	}, {
		key: 'showTimer',
		value: function showTimer() {
			if (!this.countDownText) {
				return;
			}
			this.countDownText.alpha = 1;
		}
	}, {
		key: 'initChapters',
		value: function initChapters(index) {
			if (!this.game.global) {
				this.game.global = {};
			}

			this.game.global.level = 1;
			this.game.global.chapter = index;

			if (this.game.global.chapter < 0) {
				this.game.global.chapters = (0, _utilsShuffle2['default'])(['coffee-machine', 'cornflakes', 'toilet']);
				this.nextChapter();
			}
		}
	}, {
		key: 'nextChapter',
		value: function nextChapter() {
			var _this2 = this;

			//this.hideTimer();

			var successText = this.game.add.sprite(this.game.world.width / 2, 100, 'success');
			successText.anchor.setTo(0.5, 0.5);
			successText.alpha = 0;
			var tween = this.game.add.tween(successText).to({ alpha: 1 }, 1500, "Quart.easeOut", false);

			tween.onComplete.add(function () {
				if (_this2.game.global.chapter + 1 < _this2.game.global.chapters.length) {
					_this2.game.global.chapter++;

					_this2.state.start(_this2.game.global.chapters[_this2.game.global.chapter], true, false, _this2.game.global.chapter);

					_this2.startCountDown();
				} else {
					_this2.lose();
				}
			}, this);
			tween.start();
		}
	}, {
		key: 'lose',
		value: function lose() {
			this.initChapters(-1);
		}
	}]);

	return _default;
})(Phaser.State);

exports['default'] = _default;
module.exports = exports['default'];

},{"../utils/shuffle":12}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _chapters_manager = require('./chapters_manager');

var _chapters_manager2 = _interopRequireDefault(_chapters_manager);

var _utilsShuffle = require('../utils/shuffle');

var _utilsShuffle2 = _interopRequireDefault(_utilsShuffle);

var _utilsRandom = require('../utils/random');

var _utilsRandom2 = _interopRequireDefault(_utilsRandom);

var _utilsContains = require('../utils/contains');

var _utilsContains2 = _interopRequireDefault(_utilsContains);

var _utilsShake = require('../utils/shake');

var _utilsShake2 = _interopRequireDefault(_utilsShake);

var _cornflake = {
	width: 75,
	height: 75
};

var _box = {
	width: 230,
	height: 235
};

var _bowl = {
	width: 135,
	height: 105
};

var _default = (function (_ChaptersManager) {
	_inherits(_default, _ChaptersManager);

	function _default() {
		_classCallCheck(this, _default);

		_get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(_default, [{
		key: 'preload',
		value: function preload() {
			this.load.spritesheet('cornflakes-cornflake', 'assets/images/cornflakes/cornflake.png', _cornflake.width, _cornflake.height);
			this.load.spritesheet('cornflakes-box', 'assets/images/cornflakes/box.png', _box.width, _box.height);
			this.load.spritesheet('cornflakes-label', 'assets/images/cornflakes/label.png', _box.width, _box.height);
			this.load.spritesheet('cornflakes-bowl', 'assets/images/cornflakes/bowl.png', _bowl.width, _bowl.height);
			this.load.spritesheet('explosion', 'assets/images/cornflakes/boom.png', 291, 412, 6);
		}
	}, {
		key: 'createBackground',
		value: function createBackground() {
			var background = this.add.sprite(0, 0, 'cornflakes-background');
		}
	}, {
		key: 'createOrder',
		value: function createOrder(order) {
			var _this = this;

			var group = this.add.group();

			var background1 = this.add.graphics().beginFill(0xedd2a6, 1).drawRect(0, 0, _cornflake.width + 20 * 2, this.game.height);

			var background2 = this.add.graphics().beginFill(0xa0918d, 1).drawRect(10, 10, _cornflake.width + 20, this.game.height - 20);

			group.add(background1);
			group.add(background2);

			order.forEach(function (type, index) {
				var cornflake = _this.add.sprite(20, 20 + index * _cornflake.height, 'cornflakes-cornflake', type);

				group.add(cornflake);
			}, this);
		}
	}, {
		key: 'createBox',
		value: function createBox(position, cornflake) {
			var group = this.add.group();

			group.x = _box.width / 2 + _box.width * position;
			group.y = _box.height / 2;

			var box = this.add.sprite(_box.width / -2, _box.height / -2, 'cornflakes-box', position);

			var label = this.add.sprite(_box.width / -2 + (position < 1 ? 15 : position > 1 ? -15 : 0), _box.height / -2, 'cornflakes-label', cornflake);

			box.inputEnabled = true;
			box.events.onInputDown.add(this.addToBowl.bind(this, group, position, cornflake));

			group.add(box);
			group.add(label);

			return group;
		}
	}, {
		key: 'createBowl',
		value: function createBowl() {
			var bowl = this.add.sprite(_box.width * 1.5, _box.height + _bowl.height / 2, 'cornflakes-bowl');

			bowl.anchor.setTo(0.5);

			this.objects.bowl = bowl;

			return bowl;
		}
	}, {
		key: 'create',
		value: function create() {
			var _this2 = this;

			this.objects = {};
			this.vars = {
				order: (0, _utilsRandom2['default'])([0, 1, 2], 6),
				bowl: []
			};

			this.createBackground();
			this.createOrder(this.vars.order);

			var group = this.add.group();

			group.x = this.game.width / 2 - 310;
			group.y = this.game.height / 2 - 45;

			(0, _utilsShuffle2['default'])([0, 1, 2]).forEach(function (cornflake, position) {
				group.add(_this2.createBox(position, cornflake));
			}, this);

			group.add(this.createBowl());
			this.exploaded = false;
		}
	}, {
		key: 'addToBowl',
		value: function addToBowl(box, position, cornflake) {
			(0, _utilsShake2['default'])(this, box, position < 1 ? 1 : -1);

			this.vars.bowl.push(cornflake);

			this.objects.bowl.frame = this.vars.bowl.length;

			var bowlContains = (0, _utilsContains2['default'])(this.vars.bowl, cornflake);
			var orderContains = (0, _utilsContains2['default'])(this.vars.order, cornflake);

			if (bowlContains === orderContains && this.vars.bowl.length === this.vars.order.length) {
				this.nextChapter();
			} else {
				if (bowlContains > orderContains) {
					if (this.exploaded) {
						return;
					}
					this.exploaded = true;
					var explosion = this.game.add.sprite(this.objects.bowl.x + this.objects.bowl.width / 2, this.objects.bowl.y, 'explosion');
					explosion.scale.x = 1;
					explosion.scale.y = 1;
					var anim = explosion.animations.add('explode');
					anim.onComplete.add(function () {
						this.lose();
					}, this);
					anim.play(10, false);
				}
			}
		}
	}]);

	return _default;
})(_chapters_manager2['default']);

exports['default'] = _default;
module.exports = exports['default'];

},{"../utils/contains":9,"../utils/random":10,"../utils/shake":11,"../utils/shuffle":12,"./chapters_manager":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _utilsButton = require('../utils/button');

var _utilsButton2 = _interopRequireDefault(_utilsButton);

var _utilsShake = require('../utils/shake');

var _utilsShake2 = _interopRequireDefault(_utilsShake);

var _button = {
	width: 220,
	height: 60
};

var _clockFace = {
	width: 250,
	height: 250
};

var _clockHand = {
	width: 150,
	height: 8
};

var _default = (function (_Phaser$State) {
	_inherits(_default, _Phaser$State);

	function _default() {
		_classCallCheck(this, _default);

		_get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(_default, [{
		key: 'preload',
		value: function preload() {
			this.load.image('menu-button', 'assets/images/menu/button.png');
			this.load.image('menu-clock-face', 'assets/images/menu/clock_face.png');

			this.load.spritesheet('menu-clock-hand', 'assets/images/menu/clock_hand.png', _clockHand.width, _clockHand.height);
		}
	}, {
		key: 'createBackground',
		value: function createBackground() {
			var background = this.add.sprite(0, 0, 'menu-background');
		}
	}, {
		key: 'createButtons',
		value: function createButtons(space) {
			var group = this.add.group();

			group.x = space;
			group.y = space;

			var start = (0, _utilsButton2['default'])(this, {
				x: 0,
				y: 0,
				width: _button.width,
				height: _button.height,
				label: 'Start',
				sprite: 'menu-button',
				callback: this.start.bind(this)
			});

			var options = (0, _utilsButton2['default'])(this, {
				x: space + _button.width,
				y: 0,
				width: _button.width,
				height: _button.height,
				label: 'Options',
				sprite: 'menu-button',
				callback: this.options.bind(this)
			});

			group.add(start);
			group.add(options);
		}
	}, {
		key: 'createClock',
		value: function createClock() {
			var group = this.add.group();

			group.x = this.game.width / 2 - 350 - _clockFace.width / 2;
			group.y = this.game.height / 2 - 50 - _clockFace.height / 2;

			var face = this.add.sprite(_clockFace.width / 2, _clockFace.height / 2, 'menu-clock-face');

			var hourHand = this.add.sprite(_clockFace.width - 3, _clockFace.height + 12, 'menu-clock-hand', 0);

			var minuteHand = this.add.sprite(_clockFace.width - 3, _clockFace.height + 12, 'menu-clock-hand', 1);

			hourHand.anchor.setTo(0.5);
			minuteHand.anchor.setTo(0.5);

			group.add(face);
			group.add(hourHand);
			group.add(minuteHand);

			this.objects.clock = group;
		}
	}, {
		key: 'create',
		value: function create() {
			this.objects = {};

			this.createBackground();
			this.createButtons(30);
			this.createClock();
		}
	}, {
		key: 'start',
		value: function start() {
			this.game.state.start('chapters-manager', true, false, -1);
		}
	}, {
		key: 'options',
		value: function options() {
			// for now nothing happens
		}
	}]);

	return _default;
})(Phaser.State);

exports['default'] = _default;
module.exports = exports['default'];

},{"../utils/button":8,"../utils/shake":11}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = (function (_Phaser$State) {
	_inherits(_default, _Phaser$State);

	function _default() {
		_classCallCheck(this, _default);

		_get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(_default, [{
		key: 'createBackground',
		value: function createBackground() {
			var background = this.add.sprite(0, 0, 'options-background');
		}
	}, {
		key: 'create',
		value: function create() {
			this.createBackground();
		}
	}]);

	return _default;
})(Phaser.State);

exports['default'] = _default;
module.exports = exports['default'];

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (_self, options) {
  var group = _self.add.group();

  group.x = options.x;
  group.y = options.y;

  var button = _self.add.button(0, 0, options.sprite, options.callback);

  var label = _self.add.text(0, 0, options.label.toUpperCase(), {
    fill: '#fff',
    font: 'Arial',
    fontSize: options.height / 3,
    boundsAlignH: 'center',
    boundsAlignV: 'middle'
  });

  label.setTextBounds(0, 0, options.width, options.height + 10);

  group.add(button);
  group.add(label);

  return group;
};

module.exports = exports['default'];

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (array, value) {
  var found = 0;

  array.forEach(function (element) {
    if (element === value) {
      found++;
    }
  });

  return found;
};

module.exports = exports["default"];

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (array, amount) {
  var newArray = [];

  while (amount > 0) {
    amount--;

    newArray.push(array[Math.floor(Math.random() * array.length)]);
  }

  return newArray;
};

module.exports = exports["default"];

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (_self, object) {
  var direction = arguments.length <= 2 || arguments[2] === undefined ? -1 : arguments[2];

  var shake = _self.add.tween(object);

  shake.to({ rotation: direction * 20 * Math.PI / 180 }, 50);
  shake.to({ rotation: 0 * Math.PI / 180 }, 50);
  shake.start();
};

module.exports = exports["default"];

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (array) {
  var counter = array.length;

  while (counter > 0) {
    var index = Math.floor(Math.random() * counter);

    counter--;

    var temp = array[counter];

    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
};

module.exports = exports["default"];

},{}]},{},[1])


//# sourceMappingURL=app.js.map
