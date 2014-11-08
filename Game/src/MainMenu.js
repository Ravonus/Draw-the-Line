
dtl.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;

};

dtl.MainMenu.prototype = {

	create: function () {
	if (!ready) return;

		// this.music = this.add.audio('titleMusic');
		// this.music.play();

		this.add.sprite(0, 51, 'titlepage');

		// this.playButton = this.add.button(400, 600, 'playButton', this.startGame, this, 'buttonOver', 'buttonOut', 'buttonOver');

        this.input.onDown.addOnce(this.startGame, this);

	},

	update: function () {
	if (!ready) return;

	},

	startGame: function (pointer) {
	

		// this.music.stop();

		//	And start the actual game
		this.state.start('Game');

	}

};
