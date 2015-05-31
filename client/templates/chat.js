Template.chat.helpers({
	you: function(){


	},
	messages: function() {
		return Conversations.find({});
	}
});


Template.chat.events({
	'click #sendMessage': function(){
		var message = $('#newMessage').val();
		console.log(message);
		alert($('#newMessage').val());
		Conversations.insert({user_id: Meteor.userId(), message: message});
		$('#newMessage').html('');
	}
})
