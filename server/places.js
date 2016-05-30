import { Meteor } from 'meteor/meteor';
import Places from '/imports/collections/Places.js';

Meteor.methods({
	'places/fetch': function (coords) {

		console.log(coords);

		results = HTTP.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coords.lat},${coords.lng}&radius=2000&types=restaurant|bar&key=AIzaSyBztjfy76BHNZF57WYhWKIuiF9O4Z3dUDg`);

		console.log(results);

		_(results.data.results).each(function(loc){
			_.extend(loc, {type: "Point", coordinates:[loc.geometry.location.lng, loc.geometry.location.lat] })
			Places.upsert( {id: loc.id}, {$set: loc} )
		});
	}
});