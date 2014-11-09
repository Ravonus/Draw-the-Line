RemotePlayer = function (index, game, player, startX, startY) {

	var y = lastPosition;
	var x = 188;


    this.game = game;
    this.health = 3;
    this.player = player;
    this.alive = true;
	
    this.player = game.add.sprite(x, y, 'Opponent');

    this.player.anchor.setTo(0.5, 0.5);

    this.player.name = index.toString();

	lastPosition = y + 112;
};

RemotePlayer.prototype.update = function() {
  
};

var game = new Phaser.Game(1280, 1024, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
function preload () {
    game.load.image('background', 'assets/lobbybr.png');
    game.load.image('faceplate', 'assets/lobbypl.png');
    game.load.image('Opponent', 'assets/lobbypl.png');
	
	
}


var socket;         // Socket connection
var lastPosition = 170;
var background;

var player;

var enemies;

var currentSpeed = 0;
var cursors;


function create () {

    socket = io.connect("192.168.0.8", {port: 8000, transports: ["websocket"]});

    //  Resize our game world to be a 2000 x 2000 square

    //  Our tiled scrolling background
    background = game.add.sprite(0, 0, 'background');

    //  The base of our player
    var startX = Math.round(Math.random()*(1000)-500),
        startY = Math.round(Math.random()*(1000)-500);
    player = game.add.sprite(188, 58, 'faceplate');
    player.anchor.setTo(0.5, 0.5);
    //  This will force it to decelerate and limit its speed
    //player.body.drag.setTo(200, 200);

    //  Create some baddies to waste :)
    enemies = [];

    player.bringToTop();
	
    cursors = game.input.keyboard.createCursorKeys();

    // Start listening for events
    setEventHandlers();
}

var setEventHandlers = function() {
    // Socket connection successful
    socket.on("connect", onSocketConnected);

    // Socket disconnection
    socket.on("disconnect", onSocketDisconnect);

    // New player message received
    socket.on("new player", onNewPlayer);

    // Player move message received
    socket.on("move player", onMovePlayer);

    // Player removed message received
    socket.on("remove player", onRemovePlayer);
};

// Socket connected
function onSocketConnected() {
    console.log("Connected to socket server");

    // Send local player data to the game server
    socket.emit("new player", {x: player.x, y:player.y});
};

// Socket disconnected
function onSocketDisconnect() {
    console.log("Disconnected from socket server");
};

// New player
function onNewPlayer(data) {
    console.log("New player connected: "+data.id);

    // Add new player to the remote players array
    enemies.push(new RemotePlayer(data.id, game, player, data.x, data.y));
};

// Move player
function onMovePlayer(data) {
    
 
    
};

// Remove player
function onRemovePlayer(data) {

    var removePlayer = playerById(data.id);

    // Player not found
    if (!removePlayer) {
        console.log("Player not found: "+data.id);
        return;
    };
 
    removePlayer.player.kill();

    // Remove player from array
    enemies.splice(enemies.indexOf(removePlayer), 1);

};

function update () {


}

function render () {

}

// Find player by ID
function playerById(id) {
    var i;
    for (i = 0; i < enemies.length; i++) {
        if (enemies[i].player.name == id)
            return enemies[i];
    };
    
    return false;
};