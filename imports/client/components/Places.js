import React from 'react';

// Google Photo URL
//https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY


const Places = ({loc, places}) => (
	<ul className="table-view">
		{places.map( function( place ){
			return (
				<li key={place._id} className="table-view-cell media">
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

export default Places;