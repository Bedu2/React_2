import React, { Component } from 'react';
import Boton from './Boton';

export class Incrementador extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cont: 0
		};
	}

	incrementar = () =>
	{
		this.setState({
			cont: this.state.cont + 1
		});
	};

	render() {
		return (
			<div style={{margin:'100px'}}>
				<button onClick={ this.incrementar }>
					{ this.state.cont }
				</button>
				<br />
				<br />
				<Boton handleClick={this.incrementar} cont={this.state.cont} />
			</div>
		);
	}
}

export default Incrementador;
