import React, { Component } from 'react';
import Gusta from './Gusta';
import Cuadros from './Cuadros';

export class App extends Component {
	render() {
		return (
			<div>
				<Gusta />
				<Cuadros />
			</div>
		);
	}
}

export default App;
