import React from 'react';

const Boton = (props) =>
(
	<button onClick={ props.handleClick }>
		{ props.cont }
	</button>
);

export default Boton;