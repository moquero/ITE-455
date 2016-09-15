var menuState = {

	create: function(){
		game.add.image(0,0, 'background');

		var nameLabel = game.add.text(game.width/2, -50, 'Super Coin Box', {font: '50px Arial', fill: '#ffffff'});
		nameLabel.anchor.setTo(0.5, 0.5);

		/*var tween = game.add.tween(nameLabel);
		tween.to({y: 80}, 1000);
		tween.start();*/

		game.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();

		/*var tween = game.add.tween(startLabel);
		tween.to({angle: -2}, 500);
		tween.to({angle: 2}, 1000);
		tween.to({anglel: 0}, 500);
		tween.loop();
		tween.start();*/

		/*game.add.tween(startLabel).to({angle: -2}, 500).to({angle: 2}, 1000).to({angle: 0}, 500).loop().start();*/

		var scoreLabel = game.add.text(game.width/2, game.height/2, 'score: ' + game.global.score, {
			font: '25px Arial', fill: '#ffffff'});
		scoreLabel.anchor.setTo(0.5,0.5);

		var startLabel = game.add.text(game.width/2, game.height-80, 'press the up arrow key to start', {font: '25px Arial', fill: '#ffffff'});
		startLabel.anchor.setTo(0.5, 0.5);

		game.add.tween(startLabel).to({angle: -2}, 500).to({angle: 2}, 1000).to({angle: 0}, 500).loop().start();


		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.add(this.start, this);
	},

	start: function(){
		game.state.start('play');
	}
};