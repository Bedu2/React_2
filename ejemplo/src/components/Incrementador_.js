import React, { Component } from 'react';
import Boton from './Boton';

export class Incrementador extends Component {

	constructor(props) {
		super(props);
		this.state = { cont: 0 };
	}

	handleClick = () =>
	{
		const cont = this.state.cont;
		this.setState({
			cont: cont + 1
		});
	};

	render() {
		return (
			<div style={{margin: '100px'}}>
				<button onClick={this.handleClick}>
					{ this.state.cont }
				</button>
				<br />
				<br />
				<Boton handleClick={this.handleClick} cont={this.state.cont} />
			</div>
		);
	}
}

export default Incrementador;
