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


//Handles states.
function FSM(options)
{
	//An array of states.
	var states = [];
	
	//Canvas.
	this.canvas = options.canvas || null;
	this.ctx = this.canvas.getContext('2d');
	
	//Handle events in the current state.
	this.controller = function(event) {
		if (event)
			states[states.length - 1].controller(this, event);
	}
	
	//Handle logic in the current state.
	this.update = function() {
		states[states.length - 1].update(this);
	}
	
	//Render the current state.
	this.render = function() {
		//Clear the canvas.
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		
		//Render the state.
		states[states.length - 1].render(this);
	}
	
	//Pushes a new state on to the stack.
	this.forward = function(state) {
		//Pause the current state.
		if (states.length !== 0)
			states[states.length - 1].pause(this);
		
		//Push a new state and invoke its constructor.
		states.push(state);
		states[states.length - 1].start(this);
	}
	
	//Pops a state from the stack.
	this.rewind = function(pause) {
		if (states.length !== 0) {
			//Determine if we will pause the current state.
			if (pause)
				states[states.length - 1].stop(this);
			
			//Pop the current state.
			states.pop();
			
			//Resume the previous state.
			states[states.length - 1].play(this);
		}
	}
	
	//Transitions from one state to the next.
	this.transition = function(state) {
		if (states.length !== 0) {
			//Stop the current state.
			states[states.length - 1].stop(this);
			states.pop();
		}
		
		//Transition into a new state by pushing a new state onto the stack.
		states.push(state);
		states[states.length - 1].start(this);
	}
	
	window.addEventListener("keyup", this.controller, false);
}

//State constructor.
function States(options)
{
	//The state's constructor.
	this.start = options.start || new Function;
	
	//The state's deconstructor.
	this.stop = options.stop || new Function;
	
	//Resume the state.
	this.play = options.play || new Function;
	
	//Pause the state.
	this.pause = options.pause || new Function;
	
	//Handle the events of this state.
	this.controller = options.controller || new Function;
	
	//Handle events and logic of this state.
	this.update = options.update || new Function;
	
	//Handle the rendering routines of this state.
	this.render = options.render || new Function;	
}
