import React, { Component } from 'react';

export class Lista extends Component {

	constructor(props) {
		super(props);
		this.state = {
			lista: [],
			nombre: ''
		};
	}

	agregar = () =>
	{
		const lista = this.state.lista;
		const nombre = this.state.nombre;
		if (!nombre) return;
		lista.push(nombre);
		this.setState({
			lista,
			nombre: ''
		});
	};

	borrar = () =>
	{
		this.setState({
			lista: []
		});
	};

	handleChange = event =>
	{
		this.setState({
			nombre: event.target.value
		});
	};

	despegarLista = () =>
	{
		return this.state.lista.map((nombre, key) => (
			<li key={key}>
				{nombre}
			</li>
		));
	};

	render() {
		return (
			<div style={{margin: '100px'}}>
				<input value={this.state.nombre} onChange={this.handleChange} />
				<button onClick={this.agregar}>
					Agregar
				</button>
				<button onClick={this.borrar}>
					Borrar todos
				</button>
				<ul>
					{ this.despegarLista() }
				</ul>
			</div>
		);
	}
}

export default Lista;
