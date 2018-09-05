import React, { Component } from 'react';

export class Gusta extends Component {

	constructor(props) {
		super(props);
		this.state = { like: 0 };
	}

	btnLike = () =>
	{
		this.setState({
			like: this.state.like + 1
		});
	};

	btnDislike = () =>
	{
		this.setState({
			like: this.state.like - 1
		});
	}

	render() {
		return (
			<div style={{margin:'100px'}}>
				<button onClick={this.btnLike}>
					Like
				</button>
				{ this.state.like }
				<button onClick={this.btnDislike}>
					Dislike
				</button>
			</div>
		);
	}
}

export default Gusta;
