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

//Menu state.
var menu = new function()
{
	var state = new States({});
	var options = ['Start', 'Config', 'Quit'];
	var menu_spacing = 50;
	var menu_index = 0;
	
	state.start = function(game) {
		//Set the font style of the menu options.
		game.ctx.font = 'bold 30px arial';
		game.ctx.textAlign = 'center';
	};
	
	state.controller = function(game, event) {
		switch (event.keyCode) {
			//Key up.
			case 38:
				menu_index = (menu_index <= 0) ? (options.length - 1) : (menu_index - 1);
				break;
			
			//Key down.
			case 40:
				menu_index = (menu_index == options.length - 1) ? 0 : (menu_index + 1); 
				break;
		}
	};
	
	//Render.
	state.render = function(game) {
		//Draw the menu options.
		for (var option = 0; option < options.length; option++) {
			game.ctx.fillStyle = (menu_index == options.indexOf(options[option])) ? '#f00' : '#444';
			game.ctx.fillText(options[option], game.canvas.width / 2, 100 + option * menu_spacing);
		}
	};
	
	//Retrieves an instance of this state.
	this.instance = function(){
		return state;
	};
}