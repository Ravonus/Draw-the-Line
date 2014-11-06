	var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
 
	function preload() {
 
		game.load.image('logo', 'bin/logo.png');
 
	}
 
	var logo;
 
	function create() {
 
		logo = game.add.sprite(0, 0, 'logo');
 
	}
 
	function update() {
	}
