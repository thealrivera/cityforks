import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const LeafletMap = ({loc, places, mapChanged}) => (
	<Map center={[loc.lat, loc.lng]} zoom={16} style={{ height: "100%"}} onMoveend={mapChanged}>
    <TileLayer
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    {places.map(function(place){
    	return (
    		<Marker key={place._id} position={[place.geometry.location.lat, place.geometry.location.lng]}>
		      <Popup>
		        <span className="badge badge-primary">{place.name}<br/>{place.rating}</span>
		      </Popup>
		    </Marker>
    	)
    })}
  	</Map>
)

export default LeafletMap;