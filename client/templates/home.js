Template.home.helpers({
	hasFilledOutDescription: function(){
		return Meteor.user().profile.hasFilledOutDescription;
	},
	hasFilledOutActivities: function(){
		return Meteor.user().profile.hasFilledOutActivities;
	}
});