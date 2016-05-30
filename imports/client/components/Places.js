import React from 'react';

const Places = ({loc, places}) => (
	<ul className="table-view">
		{places.map( function( place ){
			return (
				<li className="table-view-cell media">
					<a className="navigate-right">
						<img className="media-object pull-left" src={place.icon} />
						<span className="badge">{place.rating}</span>
						{place.name}
					</a>
				</li>
			)
		})}
	</ul>
)

export default Places