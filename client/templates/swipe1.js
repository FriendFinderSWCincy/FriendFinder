Template.swipe1.events({
	'click #match': function() {
		Meteor.users.update({}, {$set: {"profile.hasNewMatch": true}}, { multi: true });
	}
});