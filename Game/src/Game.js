


dtl.Game = function (game) {
var head
var lineLength = 5;
var food = {};
var velocity = 100;
var t1
var player = player;
var input = input;

};

dtl.Game.prototype = {

	create: function () {
		
		mline = this.add.group();
		fuline = this.add.group();
		taline = this.add.group();
	
		this.stage.backgroundColor = '#ffffff';
		this.world.setBounds(0, 0, 1680, 4280);
        this.add.image(0, 0, 'sky');
		this.physics.startSystem(Phaser.Physics.P2JS);
		head = this.add.sprite(this.world.centerX, this.world.centerY, 'pen');
		head.anchor.x = 0.0;
        head.anchor.y = 0.0;
		t1 = this.add.sprite(head.position.x, head.position.y, 'pen');
		//mline.add(head);
		//fuline.add(head);
		this.physics.p2.enable(head);
		this.camera.follow(head);
		//head.body.velocity.x=150;
		
		//this.input.onDown.add(this.addjs, this);
      //  this.input.onUp.add(this.jump2, this);
	  
	  
	  
	  
	  

	},

	update: function () {
	
		 Line = function (index, game, player) {
		 
    this.cursor = {
        move:false,
        shield:false,
        fire:false        
    }
 
    this.input = {
        move:false,
        shield:false,
        fire:false   
    }
	
			 	player = this.player;
			    input = this.input;
    player.input.up = game.input.isDown;
	player.input.up2 = game.input.pointer1.isDown;
    player.input.fire = game.input.activePointer.isDown;
    player.input.tx = game.input.x+ game.camera.x;
    player.input.ty = game.input.y+ game.camera.y
	



	   }; 
	
		    if (this.input.pointer1.isDown)
    {
        //  400 is the speed it will move towards the mouse
        this.physics.arcade.moveToPointer(head, 200);
	

        //  if it's overlapping the mouse, don't move any more
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
