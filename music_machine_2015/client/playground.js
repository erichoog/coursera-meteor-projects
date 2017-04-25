//playground.js

maxim1 = new Maxim();
maxim2 = new Maxim();
maxim3 = new Maxim();
maxim4 = new Maxim();
maxim5 = new Maxim();
maxim6 = new Maxim();
maxim7 = new Maxim();
maxim8 = new Maxim();

player1 = maxim1.loadFile("drums1.wav");
player1.setLooping(true);
player2 = maxim2.loadFile("bassdrum1.wav");
player2.setLooping(true);
player3 = maxim3.loadFile("snaredrum1.wav");
player3.setLooping(true);
player4 = maxim4.loadFile("hihat2.wav");
player4.setLooping(true);
player5 = maxim5.loadFile("cymbal1.wav");
player5.setLooping(true);
player6 = maxim6.loadFile("bassline.wav");
player6.setLooping(true);
player7 = maxim7.loadFile("doublebass.wav");
player7.setLooping(true);
player8 = maxim8.loadFile("arp.wav");
player8.setLooping(true);

playTrack1 = function(){
	player1.volume(1);
    //player1.play();
}

stopTrack1 = function(){
	player1.volume(0);
    //player1.stop();
}

playTrack2 = function(){
	player2.volume(1);
}

stopTrack2 = function(){
	player2.volume(0);
}

playTrack3 = function(){
	player3.volume(1);
}

stopTrack3 = function(){
	player3.volume(0);
}

playTrack4 = function(){
	player4.volume(1);
}

stopTrack4 = function(){
	player4.volume(0);
}

playTrack5 = function(){
	player5.volume(1);
}

stopTrack5 = function(){
	player5.volume(0);
}

playTrack6 = function(){
	player6.volume(1);
}

stopTrack6 = function(){
	player6.volume(0);
}

playTrack7 = function(){
	player7.volume(1);
}

stopTrack7 = function(){
	player7.volume(0);
}

playTrack8 = function(){
	player8.volume(1);
}

stopTrack8 = function(){
	player8.volume(0);
}

playAll = function() {

	player1.play();
	player2.play();
	player3.play();
    player4.play();
	player5.play();
	player6.play();
    player7.play();
	player8.play();
}

stopAll = function() {

    player1.stop();
	player2.stop();
	player3.stop();
    player4.stop();
	player5.stop();
	player6.stop();
    player7.stop();
	player8.stop();
}

playTrack = function(player){
    player.play();
}

stopTrack = function(player){
    player.stop();
}

// setSpeed = function(speed) {
// 
// 	player1.speed(speed);
// 	player2.speed(speed);
// 	player3.speed(speed);
// 	player4.speed(speed);
//  player5.speed(speed);
// 	player6.speed(speed);
// 	player7.speed(speed);
// 	player8.speed(speed);
// }

setSpeed = function(player, speed) {
	player.speed(speed);
}

setVolume = function(player, volume) {
    player.volume(volume);
}

// either create functions here for each

// or try to create on function where we can pass in player
