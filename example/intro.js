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

//Intro state.
var intro = new function()
{
	var state = new States({});
	var shade = 0;
	
	//Update.
	state.update = function(game) {
		//Once the fade out is complete transition to the menu state.
		if ((shade += 3) >= 255)
			game.transition(menu.instance());
	}
	
	//Render.
	state.render = function(game) {
		//Create a fade out effect by incrementing the shade.
		game.ctx.fillStyle = "rgb("+shade+"," +shade+ "," +shade+ ")";
		game.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);
	}

	//Retrieves an instance of this state.
	this.instance = function() {
		return state;
	}
}