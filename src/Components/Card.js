import React from 'react'

const Card = ({name , email }) => {
	return(
		<div className = 'tc bg-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
		<img alt ='photo' src = {'https://robohash.org/type_anything_to_change_the_picture'} />
		<div>
		<h2>{name}</h2>
		<p>{email}</p>
		</div>
		</div>
		);
}

export default Card;