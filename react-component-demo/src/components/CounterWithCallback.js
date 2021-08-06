import React, { Component } from 'react';

class CounterWithCallback extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}
	render() {
		return (
			<div>
				<h2>New Counter - {this.state.count}</h2>
				<button onClick={() => this.incrementFiveTimes()}>
					Increment
				</button>
			</div>
		);
	}
	increment() {
		console.log('Before increment -- ' + this.state.count);
		// Below commented code snippet will not increment the counter by 5. We need to use previous state to increment the value.
		/*   this.setState({
            count :  this.state.count + 1
        })*/
		// Solution to above problem we will always used prevState, pass function as arguments instead of regular object. Function maintained previous state.
		this.setState(
			prevState => ({
				count: prevState.count + 1,
			}),
			() => {
				console.log('Callback --- ' + this.state.count);
			}
		);
		//console.log('Latest count -- ' + this.state.count);
	}
	incrementFiveTimes() {
		for (var i = 0; i < 5; i++) {
			this.increment();
		}
	}
}

export default CounterWithCallback;
