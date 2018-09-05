import React, { Component } from 'react';
import Li from './Li';

export class Lista extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lista: [],
			nombre: ''
		};
	}

	addToList = () =>
	{
		const nombre = this.state.nombre;
		if (!nombre.trim()) return;
		const lista = this.state.lista;
		lista.push(nombre);
		this.setState({
			lista,
			nombre: ''
		});
	};

	llenarNombre = (event) =>
	{
		this.setState({
			nombre: event.target.value
		});
	};

	desplegarLista = () =>
	(
		this.state.lista.map((nombre, index) => (
			<Li key={index} nombre={nombre} />
		))
	);

	borrar = () =>
	{
		this.setState({
			lista: []
		});
	};

	render() {
		return (
			<div style={{margin:'100px'}}>
				<input value={ this.state.nombre } onChange={ this.llenarNombre } />
				<button onClick={ this.addToList }>
					Agregar
				</button>
				<button onClick={ this.borrar }>
					Borrar
				</button>
				<ul>
					{ this.desplegarLista() }
				</ul>
			</div>
		);
	}
}

export default Lista;