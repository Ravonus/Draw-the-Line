
MissileCommand.Game = function (game) {


};

MissileCommand.Game.prototype = {

	create: function () {


        this.add.image(0, 0, 'sky');
		var head = this.add.sprite(250, 250, 'pen');
		this.physics.enable(head, Phaser.Physics.ARCADE);
		head.body.velocity.x=150;
	},

	update: function () {
		
	},

	quitGame: function () {

		this.state.start('MainMenu');

	}

};
