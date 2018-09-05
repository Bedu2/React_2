import React from 'react';

const Boton = (props) =>
(
	<div>
		<button onClick={props.handleClick}>
			{ props.cont }
		</button>
	</div>
);

export default Boton;