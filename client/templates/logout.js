Template.logout.events({
	'click #logout': function(event){
		//alert('click');


		Meteor.logout(function(){
			console.log("Goodbye User!");
		});
	
		return false;
	}
});

Template.logout.helpers({
	name: function() {
		return
	}
})