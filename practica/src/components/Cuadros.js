import React, { Component } from 'react';
import CuadroSolo from './CuadroSolo';

export class Cuadros extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cuadros: []
		};
	}

	agregar = () =>
	{
		let cuadros = this.state.cuadros;
		cuadros.push({
			width: '50px',
			height: '50px',
			bgcolor: 'pink'
		});
		this.setState({
			cuadros
		});
	};

	quitar = () =>
	{
		let cuadros = this.state.cuadros;
		cuadros.pop();
		this.setState({
			cuadros
		});
	};

	changeWidth = (event, key) =>
	{
		let cuadros = this.state.cuadros;
		cuadros[key].width = event.target.value;
		this.setState({
			cuadros
		})
	};

	changeHeight = (event, key) =>
	{
		let cuadros = this.state.cuadros;
		cuadros[key].height = event.target.value;
		this.setState({
			cuadros
		})
	};

	changeBG = (event, key) =>
	{
		let cuadros = this.state.cuadros;
		cuadros[key].bgcolor = event.target.value;
		this.setState({
			cuadros
		})
	};

	desplegarCuadros = () =>
	(
		this.state.cuadros.map((cuadro, key) => (
			<div>
				W:<input onChange={(event) => this.changeWidth(event, key)} />
				H:<input onChange={(event) => this.changeHeight(event, key)} />
				BG:<input onChange={(event) => this.changeBG(event, key)} />
				<CuadroSolo width={cuadro.width} height={cuadro.height} bgcolor={cuadro.bgcolor} />
			</div>
		))
	);

	render() {
		return (
			<div style={{margin:'100px'}}>
				<button onClick={this.agregar}>
					Agregar
				</button>
				<button onClick={this.quitar}>
					Quitar
				</button>
				{ this.desplegarCuadros() }
			</div>
		);
	}
}

export default Cuadros;
