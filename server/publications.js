import { Meteor } from 'meteor/meteor';
import Places from '/imports/collections/Places.js';


Meteor.publish('placesNearby', function(coords){
	check(coords, {lat: Number, lng: Number})
	return Places.find();
});