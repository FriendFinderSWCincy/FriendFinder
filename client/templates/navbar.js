Template.navbar.helpers({
	hasNewMatch: function(){
		console.log(Meteor.user().profile.hasNewMatch);
		return Meteor.user().profile.hasNewMatch;
	}
});

Template.navbar.events({
	'click #chatbutton': function() {
		Meteor.users.update({}, {$set: {"profile.hasNewMatch": false}}, {multi: true});
	}
});