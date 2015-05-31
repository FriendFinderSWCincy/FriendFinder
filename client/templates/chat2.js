Template.messages.helpers({
	you: function(){


	},
	messages: function() {
		return Conversations.find({});
	},
	img: function(){
		//console.log('user',Meteor.users.findOne(Meteor.userId()));
		///return Meteor.users.findOne(Meteor.userId()).profile.img;
		alert(Meteor.users.findOne(Meteor.userId()));
		return "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p200x200/1509072_781877145161415_1093566777_n.jpg?oh=952bfd860c3b4a7a8fb28bc17eceb3c8&oe=55F82817&__gda__=1443269825_8d10f8a0b173d66e4601d3c7ebfcd122";
	}
});

Template.chat2.events({
	'click #sendMessage': function(){
		var message = $('#newMessage').val();
		console.log(message);
		Conversations.insert({user_id: Meteor.userId(), message: message, img: Meteor.users.findOne(Meteor.userId()).profile.img });
		$('#newMessage').val('');
	}
})
