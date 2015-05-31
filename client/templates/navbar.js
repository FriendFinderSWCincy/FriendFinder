Template.navbar.helpers({
	hasNewMatch: function(){
		return Meteor.user().profile.hasNewMatch;
	}
});

Template.navbar.events({
	'click #chatbutton': function() {
		Meteor.user.profile.hasNewMatch = false;
		Meteor.users.update(Meteor.userId(), {$set: {"profile.hasNewMatch": false}});
	}
});