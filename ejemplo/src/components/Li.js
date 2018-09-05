import React from 'react';

const Li = (props) =>
(
	<li key={ props.key }>
		{ props.nombre }
	</li>
);

export default Li;