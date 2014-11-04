
MissileCommand.Game = function (game) {


};

MissileCommand.Game.prototype = {

	create: function () {
	


        this.add.image(0, 0, 'sky');
		head = this.game.add.sprite(250, 250, 'pen');
		this.physics.enable(head, Phaser.Physics.ARCADE);
		head.body.velocity.x=150;
		
		//this.input.onDown.add(this.addjs, this);
      //  this.input.onUp.add(this.jump2, this);
	  
	  
	  

	},

	update: function () {

    if (this.input.mousePointer.isDown)
    {
        //  400 is the speed it will move towards the mouse
        this.physics.arcade.moveToPointer(head, 400);

        //  if it's overlapping the mouse, don't move any more
    }
    else
    {
        head.body.velocity.x=150;
    }	
	    
		
	},
	
	
	    addjs: function() {
        //this.bird.body.velocity.y = -350;
        //this.bird.animations.play('fly', 8, true);

		

    },
	
	


	quitGame: function () {

		this.state.start('MainMenu');

	}

};
