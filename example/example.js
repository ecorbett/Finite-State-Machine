/*
	@description
		-Finite state machine.
	@copyright
		-2014 shipping Soon
	@example
		-https://www.shippingsoon.com/
	@version
		-Path v0.01
	@license
		-GPLv3
*/

(function() {
	//Frames per second.
	var FPS = 30;

	//Our canvas element.
	var canvas = document.getElementsByTagName('canvas')[0];

	//Set the width and height of the canvas.
	canvas.width = canvas.parentNode.clientWidth;
	canvas.height = 400;

	//Initiate our state machine.
	var game = new FSM({canvas: canvas});

	//Transition into the intro state.
	game.transition(intro.instance());

	//Main function.
	function main() {
		//Handle events of the current state.
		game.controller();
		
		//Handle logic of the current state.
		game.update();
		
		//Render the current state.
		game.render();
	}
	
	//Call our main function every n frames per second.
	var interval = setInterval(main, (1000 / FPS));
}());

