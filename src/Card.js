import React from 'react';
import './Card.css';

const Card = ({id,name,email}) => {
	return(
		<div className={`bg-light-green dib brr3 pa3 m2 grow bw2 shadow-5 tc`}>
			<img src={`https://robohash.org/${id}?200x200`} alt={`robots`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;