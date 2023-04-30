import React from 'react';
import Card from './Card.js';
import './Cardlist.css';

const Cardlist = ({robots}) => {

	const cardComponent = robots.map((user,i)=>{
		return <Card id={user.id} name={user.name} email={user.email} key={i}/>
	})

	return(
		<div>
			{cardComponent}
		</div>
	)
}

export default Cardlist;