import React from 'react';

const Scroll = (props) => {
	console.log(props.children)
	return(
		<div 
			style={{
				overflowY: 'scroll', 
				border: '1px solid',
				height: '500px'
			}}>
			{props.children}
		</div>
	)
}

export default Scroll;