
    dtl.Game = function (game) {
        "use strict";
    var myId=0;
    var head
    var lineLength = 5;
    var food = {};
    var velocity = 100;
    var t1
    var player
    var input = this.input;
	var land;
	var shadow;
	var line;
	var lineList;
	var logo;
	var cursors;
	var bullets;
    };

var eurecaClientSetup = function() {
    //create an instance of eureca.io client
    var eurecaClient = new Eureca.Client();
    
    eurecaClient.ready(function (proxy) {        
        eurecaServer = proxy;
    });
    
    
    //methods defined under "exports" namespace become available in the server side
    
    eurecaClient.exports.setId = function(id) 
    {
        //create() is moved here to make sure nothing is created before uniq id assignation
        myId = id;
        eurecaServer.handshake();
        ready = true;
    }    
    
    eurecaClient.exports.kill = function(id)
    {    
        if (dtlList[id]) {
            dtlList[id].kill();
            console.log('killing ', id, dtlList[id]);
        }
    }    
    
    eurecaClient.exports.spawnEnemy = function(i, x, y)
    {
        
        if (i == myId) return; //this is me
        
        console.log('SPAWN');
        var lne = new Head(i, game, this.head);
        dtlList[i] = lne;
    }
    
}

    dtl.Game.prototype = {

        create: function () {


            mline = this.add.group();
            fuline = this.add.group();
            taline = this.add.group();

            this.stage.backgroundColor = '#ffffff';
            this.world.setBounds(0, 0, 1680, 4280);
            this.add.image(0, 0, 'sky');
            this.physics.startSystem(Phaser.Physics.P2JS);
            this.head = this.add.sprite(this.world.centerX, this.world.centerY, 'pen');
            
            this.head.anchor.x = 0.0;
            this.head.anchor.y = 0.0;
            //var t1 = this.add.sprite(this.head.position.x, this.head.position.y, 'pen');
            //mline.add(head);
            //fuline.add(head);
            this.physics.p2.enable(this.head);
            this.camera.follow(this.head);
            //head.body.velocity.x=150;

            //this.input.onDown.add(this.addjs, this);
          //  this.input.onUp.add(this.jump2, this);


                 Line = function (index, game, player) {

        this.cursor = {
            move: false,
            shield: false,
            fire: false
        }

        this.input = {
            move: false,
            shield: false,
            fire: false
        }
                   this.player = player;
        player.input.up2 = game.input.isDown;
        player.input.up = game.input.pointer1.isDown;
        player.input.fire = game.input.activePointer.isDown;
        player.input.tx = game.input.x+ game.camera.x;
        player.input.ty = game.input.y+ game.camera.y

           };   

        },

        update: function () {
            if (!ready) return;
            
            this.game.input.onDown.add(doSomething, this);

    function doSomething() {
      // will only ever be called once, when the the input is down
        this.physics.arcade.moveToPointer(this.head, 200);

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
